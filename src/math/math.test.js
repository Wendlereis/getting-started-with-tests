const { sum } = require('./math')

describe('Math functions', () => {
  it('Should return sum of two numbers', () => {
    expect(sum(1, 2)).toBe(3)
  })
})