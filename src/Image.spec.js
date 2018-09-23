import React from "react";
import Image from "./Image";
import { generateImage } from "jsdom-screenshot";
import { render } from "react-testing-library";

// These tests are meant to demo this approaches' different capabilites, they
// are not intended as best practice of writing visual regression tests.

it("should have no visual regressions", async () => {
  const { getByTestId } = render(<Image />);
  expect(
    await generateImage({ waitUntilNetworkIdle: true, serve: ["public"] })
  ).toMatchImageSnapshot();
});
