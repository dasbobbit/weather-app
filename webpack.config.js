const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
  },
  devtool: "inline-source-map",
  // devServer: {
  //   contentBase: "./dist",
  // },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title: "Weather App",
  //   }),
  // ],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    // clean: true,
  },
};
