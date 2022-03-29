import COMPANY_ASSOCIATION_1 from "../COMPANY_ASSOCIATION_1";
import COMPANY_ASSOCIATION_2 from "../COMPANY_ASSOCIATION_2";
import COMPANY_ASSOCIATION_3 from "../COMPANY_ASSOCIATION_3";
import COMPANY_ASSOCIATION_4 from "../COMPANY_ASSOCIATION_4";

const tokens = jest.fn()

describe('COMPANY_ASSOCIATION_1', () => {
  test('Should have a value', () => {
    expect(COMPANY_ASSOCIATION_1('en', tokens)).toBeTruthy()
  })
})

describe('COMPANY_ASSOCIATION_2', () => {
  test('Should have a value', () => {
    expect(COMPANY_ASSOCIATION_2('en', tokens)).toBeTruthy()
  })
})

describe('COMPANY_ASSOCIATION_3', () => {
  test('Should have a value', () => {
    expect(COMPANY_ASSOCIATION_3('en', tokens)).toBeTruthy()
  })
})

describe('COMPANY_ASSOCIATION_4', () => {
  test('Should have a value', () => {
    expect(COMPANY_ASSOCIATION_4('en', tokens)).toBeTruthy()
  })
})