var withPlugins = require("next-compose-plugins");

var withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

var nextConfig = {
  ignoreBuildErrors: false,
  reactStrictMode: true,
  trailingSlash: false,
  env: {
    SENTREI_VERSION: require("./package.json").version,
    VERCEL_GITHUB_COMMIT_REF: process.env.VERCEL_GITHUB_COMMIT_REF,
  },
  serverRuntimeConfig: {
    FIREBASE_CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL,
    FIREBASE_PRIVATE_KEY: process.env.FIREBASE_PRIVATE_KEY,
  },
  images: {
    domains: ["placeimg.com", "s3.amazonaws.com"],
  },
};

module.exports = withPlugins([withBundleAnalyzer], nextConfig);
