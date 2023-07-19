module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['./config/jest/setupTests.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['<rootDir>/node_modules/babel-jest', { configFile: './config/jest/babel.config.js' }],
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy'
  }
}
