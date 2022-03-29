import CH_LOGIN_1 from '../CH_LOGIN_1'
import CH_LOGIN_4 from '../CH_LOGIN_4'

const tokens = jest.fn()

describe('CH LOGIN 1', () => {
  test('Should have a value', () => {
    expect(CH_LOGIN_1('en', tokens)).toBeTruthy()
  })
})

describe('CH LOGIN 4', () => {
  test('Should have a value', () => {
    expect(CH_LOGIN_4('en', tokens)).toBeTruthy()
  })
})
