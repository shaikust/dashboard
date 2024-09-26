module.exports = {
  preset: "jest",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!antd|@ant-design/icons)"
  ],
  setupFiles: ["<rootDir>/jest.setup.js"],
};
