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
  var result = 0;
  var splitArray = roman.split("");
  for (var i = 0; i < splitArray.length; i++) {
    if (ROMANS[roman[i]] < ROMANS[roman[i+1]]) {
      continue;
    }
    else if (ROMANS[roman[i]] > ROMANS[roman[i-1]]) {
      result += (ROMANS[roman[i]] - ROMANS[roman[i-1]]);
    }
    else {
      result += ROMANS[roman[i]];
    }
  }
  return result;
}
module.exports = toHinduArabic;