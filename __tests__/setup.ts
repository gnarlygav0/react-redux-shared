jest.useFakeTimers()

jest.mock('react-native-get-random-values', () => {})

// disable logs in tests
global.console = {
  ...global.console,
  log: jest.fn(),
  error: jest.fn(),
  info: jest.fn(),
  warn: jest.fn(),
}
