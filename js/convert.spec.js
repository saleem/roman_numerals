const toHinduArabic = require('./convert');

describe('Individual Roman letters', function () {
  it('should convert to corresponding numbers in Hindu-Arabic system', function () {
    expect(toHinduArabic('I')).toBe(1);
    expect(toHinduArabic('V')).toBe(5);
    expect(toHinduArabic('X')).toBe(10);
    expect(toHinduArabic('L')).toBe(50);
    expect(toHinduArabic('C')).toBe(100);
    expect(toHinduArabic('D')).toBe(500);
    expect(toHinduArabic('M')).toBe(1000);
  });
});