module.exports = {
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest'],
  },
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
  clearMocks: true,
  resetMocks: true,
  resetModules: true,
};
