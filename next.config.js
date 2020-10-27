module.exports = {
  ignoreBuildErrors: false,
  reactStrictMode: true,
  trailingSlash: false,
  publicRuntimeConfig: {
    NEXT_PUBLIC_SENTREI_VERSION: require("./package.json").version,
  },
};
