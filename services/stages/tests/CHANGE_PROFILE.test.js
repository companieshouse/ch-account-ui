import CHANGE_EMAIL_1 from '../CHANGE_EMAIL_1'
import CHANGE_EMAIL_ERROR from '../CHANGE_EMAIL_ERROR'
import CHANGE_EMAIL_INPUT from '../CHANGE_EMAIL_INPUT'
import CHANGE_NAME_1 from '../CHANGE_NAME_1'
import CHANGE_NAME_2 from '../CHANGE_NAME_2'
import CHANGE_PASSWORD_1 from '../CHANGE_PASSWORD_1'
import CHANGE_PASSWORD_2 from '../CHANGE_PASSWORD_2'
import UPDATE_PHONE_1 from '../UPDATE_PHONE_1'
import UPDATE_PHONE_2 from '../UPDATE_PHONE_2'
import UPDATE_PHONE_3 from '../UPDATE_PHONE_3'

const tokens = jest.fn()

describe('CHANGE_EMAIL_1', () => {
  test('Should have a value', () => {
    expect(CHANGE_EMAIL_1('en', tokens)).toBeTruthy()
  })
})

describe('CHANGE_EMAIL_ERROR', () => {
  test('Should have a value', () => {
    expect(CHANGE_EMAIL_ERROR('en', tokens)).toBeTruthy()
  })
})

describe('CHANGE_EMAIL_INPUT', () => {
  test('Should have a value', () => {
    expect(CHANGE_EMAIL_INPUT('en', tokens)).toBeTruthy()
  })
})

describe('CHANGE_NAME_1', () => {
  test('Should have a value', () => {
    expect(CHANGE_NAME_1('en', tokens)).toBeTruthy()
  })
})

describe('CHANGE_NAME_2', () => {
  test('Should have a value', () => {
    expect(CHANGE_NAME_2('en', tokens)).toBeTruthy()
  })
})

describe('CHANGE_PASSWORD_1', () => {
  test('Should have a value', () => {
    expect(CHANGE_PASSWORD_1('en', tokens)).toBeTruthy()
  })
})

describe('CHANGE_PASSWORD_2', () => {
  test('Should have a value', () => {
    expect(CHANGE_PASSWORD_2('en', tokens)).toBeTruthy()
  })
})

describe('UPDATE_PHONE_1', () => {
  test('Should have a value', () => {
    expect(UPDATE_PHONE_1('en', tokens)).toBeTruthy()
  })
})

describe('UPDATE_PHONE_2', () => {
  test('Should have a value', () => {
    expect(UPDATE_PHONE_2('en', tokens)).toBeTruthy()
  })
})

describe('UPDATE_PHONE_3', () => {
  test('Should have a value', () => {
    expect(UPDATE_PHONE_3('en', tokens)).toBeTruthy()
  })
})