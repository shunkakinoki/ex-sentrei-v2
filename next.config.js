var withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  ignoreBuildErrors: false,
  reactStrictMode: true,
  trailingSlash: false,
  env: {
    SENTREI_VERSION: require("./package.json").version,
    VERCEL_GITHUB_COMMIT_REF: process.env.VERCEL_GITHUB_COMMIT_REF,
  },
  images: {
    domains: ["placeimg.com", "s3.amazonaws.com"],
  },
});
