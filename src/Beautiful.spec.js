import React from "react";
import Beautiful from "./Beautiful";
import { generateImage } from "jsdom-screenshot";
import { render, fireEvent } from "react-testing-library";

// These tests are meant to demo this approaches' different capabilites, they
// are not intended as best practice of writing visual regression tests.

it("should have no visual regressions", async () => {
  const { getByTestId } = render(<Beautiful />);
  fireEvent.click(getByTestId("beautiful-button"));
  expect(await generateImage()).toMatchImageSnapshot();
});
