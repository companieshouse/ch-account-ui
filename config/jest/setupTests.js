import '@testing-library/jest-dom/extend-expect'
import 'jest-axe/extend-expect'
import 'whatwg-fetch'
import { server } from '../../mocks/msw/server'

beforeAll(() => {
  // Enable the mocking in tests.
  server.listen()
})

afterEach(() => {
  // Reset any runtime handlers tests may use.
  server.resetHandlers()
})

afterAll(() => {
  // Clean up once the tests are done.
  server.close()
})
