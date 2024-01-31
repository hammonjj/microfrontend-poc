const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "crafted-solutions",
    projectName: "login-single-spa",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    externals: ["rxjs"],
    entry: {
      "login-single-spa": "./src/crafted-solutions-login-single-spa.tsx",
    },
    output: {
      filename: "crafted-solutions-[name].js",
    },
  });
};
