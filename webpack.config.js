const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.jsx",
  devtool: "inline-source-map",
  devServer: {
    host: "0.0.0.0",
    port: 3000,
    static: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".jsx", ".js", "json"],
  },
  plugins: [
    new HtmlWebpackPlugin({
			title: "Decryptid"
    }),
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
