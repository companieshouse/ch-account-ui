import React from "react";
import { render } from "@testing-library/react";
import Generic404 from "./404";

describe("404 error page", () => {
  it("should render correctly", () => {
    const { asFragment } = render(<Generic404 lang="en" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
