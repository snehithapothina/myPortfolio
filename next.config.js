const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src", "styles")],
  },
};


// const path = require("path");

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   sassOptions: {
//     includePaths: [path.join(__dirname, "src", "styles")],
//   },
//   output: "export", // Enable static HTML export
// };

// module.exports = nextConfig;

// const path = require("path");

// const nextConfig = {
//   sassOptions: {
//     includePaths: [path.join(__dirname, "src", "styles")],
//   },

//   // Don't use static export if middleware is needed
//   // output: "export",  // Remove this line

//   // GitHub Pages settings (if deploying to GitHub Pages)
//   basePath: "/myPortfolio",  // Replace 'myPortfolio' with your repo name
//   assetPrefix: "/myPortfolio", // Ensures assets are correctly served from the subpath

//   // Image optimization for static export (remove if not needed)
//   images: {
//     loader: "default",
//     path: "/myPortfolio/",
//   },

//   reactStrictMode: true,
// };

// module.exports = nextConfig;
