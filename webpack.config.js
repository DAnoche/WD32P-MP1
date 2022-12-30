const path = require("path");

module.exports = {
  entry: "./app/assets/scripts/app.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "app"),
  },
  devServer: {
    static: path.resolve(__dirname, "app"),
    port: 3000,
    host: "0.0.0.0",
    hot: true,
  },
};
