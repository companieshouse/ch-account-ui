import React from "react";
import { render } from "@testing-library/react";
import Index from "./index";
import {setupWindowMock} from "../mocks/jest/setupWindowMock"

setupWindowMock()

describe("Index component", () => {
  it("should render correctly", () => {
    const lang = "en";
    const { asFragment } = render(<Index lang={lang} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
