import React from "react";
import Counter from "./Counter";
import { generateImage } from "jsdom-screenshot";
import { render, fireEvent } from "react-testing-library";

// These tests are meant to demo this approaches' different capabilites, they
// are not intended as best practice of writing visual regression tests.

describe("when custom viewport is used", () => {
  it("should have no visual regressions", async () => {
    const { getByTestId } = render(<Counter />);
    fireEvent.click(getByTestId("increment-button"));
    expect(
      await generateImage({
        launchOptions: {
          defaultViewport: { width: 100, height: 80 }
        }
      })
    ).toMatchImageSnapshot();
  });
});

describe("when remote global styles are used", () => {
  beforeEach(() => {
    // Shows how to add remote global styles to JSDOM
    const normalizeLink = document.createElement("link");
    normalizeLink.rel = "stylesheet";
    normalizeLink.href =
      "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.css";
    document.head.appendChild(normalizeLink);
  });

  it("should have no visual regressions", async () => {
    const { getByTestId } = render(<Counter />);
    fireEvent.click(getByTestId("increment-button"));
    expect(await generateImage()).toMatchImageSnapshot();
  });
});

describe("when requestInterception is used", () => {
  beforeEach(() => {
    // This is only so that we can show how requestInterception works.
    // If would not want to make this request, you would simply not add this tag.
    // Let's assume that this tag gets added by a script over which we have
    // no control for the sake of simplicity of this example.
    //
    // Another useful use-case for request interception is to avoid making requests
    // during tests. We could download the file locally once and intercept requests
    // for it. However, we could also inline the file as shown above with "style".
    // Then we would not need any interception at all.
    const animateLink = document.createElement("link");
    animateLink.rel = "stylesheet";
    animateLink.href =
      "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.css";
    document.head.appendChild(animateLink);
  });

  it("should have no visual regressions", async () => {
    const { getByTestId } = render(<Counter />);
    fireEvent.click(getByTestId("increment-button"));
    expect(
      await generateImage({
        requestInterception: request => {
          if (
            request.url() ===
            "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.css"
          ) {
            request.respond({
              status: 200,
              contentType: "text/css",
              body: "p { text-transform: uppercase; }"
            });
          } else {
            request.continue();
          }
        }
      })
    ).toMatchImageSnapshot();
  });
});
