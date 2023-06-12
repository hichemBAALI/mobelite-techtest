module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: [
    '<rootDir>/jest.setup.js',
    './node_modules/react-native-gesture-handler/jestSetup.js',
  ],
  transformIgnorePatterns: [
    '/node_modules/(?!(react-native|react-native)|react-clone-referenced-element|react-navigation|redux-persist|redux-logger|@notifee/react-native)/(?!victory|react-native-svg)',
  ],
}
