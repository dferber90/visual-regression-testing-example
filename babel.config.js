"use strict";

module.exports = {
  presets: [["@babel/preset-env", { modules: false }], "@babel/preset-react"],
  plugins: ["@babel/plugin-proposal-class-properties", "styled-components"],
  env: {
    test: {
      // If you've turned off transpilation of ES6 modules with the option { "modules": false }, you have to make sure to turn this on in your test environment.
      presets: [["@babel/preset-env"], "@babel/preset-react"],
      plugins: ["@babel/plugin-proposal-class-properties", "styled-components"]
    }
  }
};
