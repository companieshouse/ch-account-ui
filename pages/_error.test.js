import React from "react";
import { render } from "@testing-library/react";
import Error from "./_error";

describe("Error component", () => {
  it("should render correctly on server error", () => {
    const statusCode = 500;
    const { getByText } = render(<Error statusCode={statusCode} />);
    const errorMessage = getByText(`An error ${statusCode} occurred on server`);
    expect(errorMessage).toBeInTheDocument();
  });

  it("should render correctly on client error", () => {
    const { getByText } = render(<Error />);
    const errorMessage = getByText("An error occurred on client");
    expect(errorMessage).toBeInTheDocument();
  });

  it("should render correctly on custom error", () => {
    const statusCode = 403;
    const { getByText } = render(<Error statusCode={statusCode} />);
    const errorMessage = getByText(`An error ${statusCode} occurred on server`);
    expect(errorMessage).toBeInTheDocument();
  });
});
