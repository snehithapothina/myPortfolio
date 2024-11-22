// const path = require("path");

// module.exports = {
//   sassOptions: {
//     includePaths: [path.join(__dirname, "src", "styles")],
//   },
// };


const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src", "styles")],
  },
  output: "export", // Enable static HTML export
};

module.exports = nextConfig;
