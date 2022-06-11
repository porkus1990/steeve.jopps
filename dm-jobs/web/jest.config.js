// More info at https://redwoodjs.com/docs/project-configuration-dev-test-build

const config = {
  rootDir: '.',
  preset: '@redwoodjs/testing/config/jest/web',
  moduleNameMapper: {
    '\\.(scss|less)$': '<rootDir>/src/pages/HomePage/style.mock.js',
  },
};

module.exports = config;
