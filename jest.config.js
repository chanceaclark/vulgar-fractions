module.exports = {
  clearMocks: true,
  moduleFileExtensions: ['js', 'ts'],
  collectCoverageFrom: ['src/**'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  resetMocks: true,
  resetModules: true,
};
