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
  // Sass options configuration (if you're using Sass)
  sassOptions: {
    includePaths: [path.join(__dirname, "src", "styles")],
  },
  
  // Output as a static site for GitHub Pages
  output: "export", // Enables static HTML export for the app
  
  // Set basePath to match the repository name on GitHub Pages
  basePath: "/myPortfolio",  // Replace 'myPortfolio' with your actual repo name
  
  // Set assetPrefix to ensure all static assets are loaded with the base path
  assetPrefix: "/myPortfolio", // Ensures assets are correctly served from the subpath

  // Optional: Configure images (in case you're using Image Optimization)
  images: {
    loader: "default",
    path: "/myPortfolio/", // Correctly handles image paths in a subpath
  },
  
  // Enabling React Strict Mode (optional)
  reactStrictMode: true,
};

module.exports = nextConfig;
