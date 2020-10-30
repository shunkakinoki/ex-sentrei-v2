module.exports = {
  ignoreBuildErrors: false,
  reactStrictMode: true,
  trailingSlash: false,
  env: {
    SENTREI_VERSION: require("./package.json").version,
    VERCEL_GITHUB_COMMIT_REF: process.env.VERCEL_GITHUB_COMMIT_REF,
  },
};
