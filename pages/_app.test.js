import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MyApp from "./_app";

jest.mock("../components/general-ui/interaction/CookieBanners", () => () => (
  <div>Mocked CookieBanners</div>
));
jest.mock("next/script", () => ({ children }) => <div>{children}</div>);
jest.mock("@datapunt/matomo-tracker-react", () => ({
  MatomoProvider: ({ children }) => <div>{children}</div>,
  createInstance: jest.fn(),
}));

describe("MyApp", () => {
  it("renders without crashing", () => {
    render(
      <MyApp Component={() => <div>Mocked Component</div>} pageProps={{}} />
    );
  });
});
