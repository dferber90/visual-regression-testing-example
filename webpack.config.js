const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {}
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        // css-modules css is loaded with "modules: true"
        test: /\.mod\.css$/,
        // There are multiple possible webpack configurations which allow using
        // css-modules
        //
        // The first one does not use postcss at all, it only loads
        // css with "modules: true"
        // There is no postcss.config.js, as there is no postcss at all.
        // use: [
        //   "style-loader",
        //   {
        //     loader: "css-loader",
        //     options: {
        //       modules: true,
        //       localIdentName: "[path][name]__[local]--[hash:base64:5]"
        //     }
        //   }
        // ]
        //
        // The second one uses css-loader to preprocess, and then uses
        // css-loader to handle the modules. The related postcss.config.js:
        //   module.exports = { plugins: [/* some postcss plugins */] };
        use: [
          "style-loader",
          {
            loader: "css-loader",
            // The query parameter importLoaders allows to configure how many
            // loaders before css-loader should be applied to
            // @imported resources.
            options: { modules: true, importLoaders: 1 }
          },
          "postcss-loader"
        ]
        //
        // The third option is to use postcss-loader without css-loader
        //
        //   When postcss-loader is used standalone (without css-loader) don't
        //   use @import in your CSS, since this can lead to quite bloated
        //   bundles.
        //
        // This is not supported by this plugin yet.
        // use: ["style-loader", "postcss-loader"]
      },
      {
        // regular, global css is loaded with "modules: false"
        test: filename =>
          filename.endsWith(".css") && !filename.endsWith(".mod.css"),
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new CopyWebpackPlugin([{ from: "public" }])
  ]
};
