module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  setupFiles: ['<rootDir>/__tests__/setup.ts'],
  testPathIgnorePatterns: [
    '<rootDir>/__tests__/setup.ts',
    '<rootDir>/__tests__/__mocks__/',
  ],
  coverageReporters: ['lcov', 'text'],
  collectCoverageFrom: ['<rootDir>/src/*.ts', '!<rootDir>/src/**/types.ts'],
  coverageThreshold: {
    global: {
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0,
    },
  },
}
