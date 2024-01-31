const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "crafted-solutions",
    projectName: "superbowl-squares",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    entry: {
      "superbowl-squares": "./src/crafted-solutions-superbowl-squares.tsx", // Main application entry
      "app-analytics": "./src/parcels/appAnalyticsParcel.tsx", // Parcel entry
      "admin-app-analytics": "./src/parcels/adminAppAnalyticsParcel.tsx",
    },
    output: {
      filename: "crafted-solutions-[name].js",
    },
  });
};
