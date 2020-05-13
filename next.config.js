/* eslint-disable */
const withLess = require("@zeit/next-less");
const withCSS = require("@zeit/next-css");
const lessToJS = require("less-vars-to-js");
const withPlugins = require("next-compose-plugins");
const fs = require("fs");
const path = require("path");

const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, "./styles/antOverrides.less"), "utf8")
);

const cssConfig = {
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
};

const lessConfig = {
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: themeVariables,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      const antStyles = /antd\/.*?\/style.*?/;
      const origExternals = [...config.externals];
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback();
          if (typeof origExternals[0] === "function") {
            origExternals[0](context, request, callback);
          } else {
            callback();
          }
        },
        ...(typeof origExternals[0] === "function" ? [] : origExternals),
      ];

      config.module.rules.unshift({
        test: antStyles,
        use: "null-loader",
      });
    }
    return config;
  },
};

module.exports = withPlugins([
  [withLess, lessConfig],
  [withCSS, cssConfig],
]);
