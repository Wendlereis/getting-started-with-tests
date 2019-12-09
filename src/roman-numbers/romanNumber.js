const symbolsCollection = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
}

function convertToArabic(romanNumber) {
  let value = 0
  let lastChar = 0

  for (let char = romanNumber.length - 1; char >= 0; char--) {
    const symbol = romanNumber[char].toUpperCase()
    let currentChar = symbolsCollection[symbol]

    const multiplier = currentChar < lastChar ? -1 : 1
    value += symbolsCollection[symbol] * multiplier
    
    lastChar = currentChar
  }

  return value
}

module.exports = {
  convertToArabic
}
