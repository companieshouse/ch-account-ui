import getStage from "../stages"

describe('getStage', () => {
  test('should return the provided stage array', () => {
    expect(getStage('LOGIN', 'en')).toBeTruthy()
  })
})