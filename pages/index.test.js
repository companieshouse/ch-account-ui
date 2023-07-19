import React from "react";
import { render } from "@testing-library/react";
import Index from "./index";

describe("Index component", () => {
  it("should render correctly", () => {
    const lang = "en";
    const { asFragment } = render(<Index lang={lang} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
