import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";

const { toMatchImageSnapshot } = require("jest-image-snapshot");
expect.extend({ toMatchImageSnapshot });
