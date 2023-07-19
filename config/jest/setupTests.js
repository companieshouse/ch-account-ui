import '@testing-library/jest-dom/extend-expect'
import 'jest-axe/extend-expect'
import 'whatwg-fetch'

const headerMock = jest.fn().mockReturnValue({ init: jest.fn() })
window.GOVUKFrontend = { Header: headerMock }
