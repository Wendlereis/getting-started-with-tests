const { convertToArabic } = require('./romanNumber').default

describe('Roman Number Conversor', () => {
  it("Should understand the 'I' symbol", () => {
    expect(convertToArabic('I')).toBe(1)
  })

  it("Should understand the 'V' symbol", () => {
    expect(convertToArabic('V')).toBe(5)
  })

  it("Should understand two symbols like 'II'", () => {
    expect(convertToArabic('II')).toBe(2)
  })

  it("Should understand two pairs symbols like 'XXII'", () => {
    expect(convertToArabic('XXII')).toBe(22)
  })

  it("Should understand symbols like 'IX'", () => {
    expect(convertToArabic('IX')).toBe(9)
  })

  it("Should understand complex symbols like 'XXIV'", () => {
    expect(convertToArabic('XXIV')).toBe(24)
  })
})