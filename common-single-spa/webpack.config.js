const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "crafted-solutions",
    projectName: "common-single-spa",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    externals: ["rxjs"],
    entry: {
      auth: "./src/auth.ts",
    },
    output: {
      filename: "crafted-solutions-[name].js",
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          {
            from: "./src/global.css",
            to: "",
          },
        ],
      }),
    ],
  });
};
