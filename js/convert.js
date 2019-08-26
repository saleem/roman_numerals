const ROMANS = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000,
};
function toHinduArabic(roman) {
  const initialValue = 0;
  return roman.split("").reduce((accumulator, _, i, initialSplitArray) => {
    const currentValueDigits = ROMANS[initialSplitArray[i]];
    const previousValueDigits = ROMANS[initialSplitArray[i-1]];
    const nextValueDigits = ROMANS[initialSplitArray[i+1]];

    if (currentValueDigits < nextValueDigits) {
      return accumulator;
    }
    else if (currentValueDigits > previousValueDigits) {
      return accumulator + (currentValueDigits - previousValueDigits);
    }
    else {
      return accumulator + currentValueDigits;
    }
  }, initialValue);
}
module.exports = toHinduArabic;

