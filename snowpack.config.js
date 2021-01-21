const { merge } = require("webpack-merge");
const SystemJSPublicPathWebpackPlugin = require("systemjs-webpack-interop/SystemJSPublicPathWebpackPlugin");

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
  },
  plugins: [
    [
      "@snowpack/plugin-webpack",
      {
        extendConfig(config) {
          delete config.optimization.runtimeChunk;
          delete config.optimization.splitChunks;

          return merge(config, {
            mode: "development",
            module: {
              rules: [
                {
                  parser: {
                    system: false,
                  },
                },
              ],
            },
            output: {
              libraryTarget: "system",
            },
            plugins: [
              new SystemJSPublicPathWebpackPlugin({
                systemjsModuleName: "snowpack-test",
                rootDirectoryLevel: 2,
              }),
            ],
          });
        },
      },
    ],
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {},
  buildOptions: {
    baseUrl: "http://localhost:8080/",
  },
};
