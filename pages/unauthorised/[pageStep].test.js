import React from "react";
import { render, act } from "@testing-library/react";
import { Unauthorised } from "./[pageStep]";
import { useRouter } from "next/router";

// Mock the useRouter hook
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

// Helper function to set up the mock router query
const setRouterQuery = (query) => {
  useRouter.mockImplementation(() => ({
    query,
  }));
};

describe("Unauthorised component", () => {
  it("renders correctly when router query is not set", () => {
    setRouterQuery({}); // Set empty router query
    const lang = "en";
    const { asFragment } = render(<Unauthorised lang={lang} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correctly when router query is set", () => {
    setRouterQuery({ pageStep: "CHANGE_EMAIL" }); // Set router query with pageStep
    const lang = "en";
    const { asFragment } = render(<Unauthorised lang={lang} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correctly when router query changes", () => {
    setRouterQuery({}); // Set empty router query initially
    const lang = "en";
    const { asFragment, rerender } = render(<Unauthorised lang={lang} />);

    // Rerender the component with a new router query
    setRouterQuery({ pageStep: "CHANGE_EMAIL" });
    act(() => {
      rerender(<Unauthorised lang={lang} />);
    });

    expect(asFragment()).toMatchSnapshot();
  });
});
