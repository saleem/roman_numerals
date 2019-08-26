const ROMANS = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000,
};

function reduceHinduArabic(currentTotal, _, i, initialRoman) {
    const currentValueDigits = ROMANS[initialRoman[i]];
    const previousValueDigits = ROMANS[initialRoman[i-1]];
    const nextValueDigits = ROMANS[initialRoman[i+1]];

    if (currentValueDigits < nextValueDigits) {
      return currentTotal;
    }
    else if (currentValueDigits > previousValueDigits) {
      return currentTotal + (currentValueDigits - previousValueDigits);
    }
    else {
      return currentTotal + currentValueDigits;
    }
}

function toHinduArabic(roman) {
  const initialValue = 0;
  return roman.split("").reduce(reduceHinduArabic, initialValue);
}
module.exports = toHinduArabic;

