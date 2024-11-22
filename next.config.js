// const path = require("path");

// module.exports = {
//   sassOptions: {
//     includePaths: [path.join(__dirname, "src", "styles")],
//   },
// };


// const path = require("path");

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   sassOptions: {
//     includePaths: [path.join(__dirname, "src", "styles")],
//   },
//   output: "export", // Enable static HTML export
// };

// module.exports = nextConfig;

const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src", "styles")],
  },
  output: "export", // Enable static HTML export for GitHub Pages
  basePath: "/myPortfolio", // Replace 'myPortfolio' with your actual GitHub repository name
  assetPrefix: "/myPortfolio", // Ensure assets (images, CSS, JS) are served correctly
  images: {
    unoptimized: true, // Disable Next.js Image Optimization for static exports
  },
};

module.exports = nextConfig;
