/* eslint-disable */
const wp = require("@cypress/webpack-preprocessor")
module.exports = (on) => {
  const options = {
    webpackOptions: {
      resolve: {
        extensions: [".ts"]
      },
      module: {
        rules: [
          {
            // all .ts files
            test: /\.ts$/,
            // ts loader for webpack 
            loader: "ts-loader",
            options: { transpileOnly: true }
          }
        ]
      }
    },
  }
  on("file:preprocessor", wp(options))
}
