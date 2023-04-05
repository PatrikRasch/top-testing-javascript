const path = require("path");

module.exports = {
  moduleNameMapper: {
    // Map any module imports to their respective paths
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  moduleFileExtensions: ["js", "jsx", "json"],
  transform: {
    // Use the babel-jest transformer for .js and .jsx files
    "^.+\\.(js|jsx)?$": "babel-jest",
  },
  // Specify the webpack configuration
  webpack: {
    resolve: {
      // Allow importing modules from these directories
      modules: ["node_modules", "src"],
      // Allow importing these file types without specifying an extension
      extensions: [".js"],
      alias: {
        // Add any aliases needed
        "@": path.resolve(__dirname, "src"),
      },
    },
  },
};
