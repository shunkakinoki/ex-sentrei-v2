module.exports = {
  ignoreBuildErrors: false,
  reactStrictMode: true,
  trailingSlash: false,
  publicRuntimeConfig: {
    NEXT_PUBLIC_SENTREI_VERSION: require("./package.json").version,
    NEXT_PUBLIC_VERCEL_GITHUB_COMMIT_REF: process.env.VERCEL_GITHUB_COMMIT_REF,
  },
};
