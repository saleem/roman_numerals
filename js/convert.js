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
    if (roman.length === 1) {
      return ROMANS[roman];
    }
    var result = 0;
    var splitArray = roman.split();
    roman.split("").forEach(c => {
      result += ROMANS[c];
    });
    return result;
}
module.exports = toHinduArabic;