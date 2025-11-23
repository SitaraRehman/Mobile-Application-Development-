module.exports = {
  // Not using the react-native preset here to avoid automatic inclusion of
  // flow-annotated internal mocks that cause parsing issues in this test env.
  testEnvironment: 'jsdom',
  // Not loading @testing-library/jest-native matchers automatically to avoid
  // pulling in react-native internals during transform. Add it per-test if
  // needed in future.
  setupFilesAfterEnv: [],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-navigation|@react-native-async-storage|@react-native-community|@unimodules)/)'
  ],
  moduleNameMapper: {
  '^react-native/jest/mock$': '<rootDir>/__mocks__/react-native-jest-mock.js',
  '^react-native/jest/.*$': '<rootDir>/__mocks__/react-native-jest-mock.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
};