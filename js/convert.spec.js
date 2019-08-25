const toHinduArabic = require('./convert');

describe('Individual Roman letters', function () {
  it('I converts to 1', function () {
    expect(toHinduArabic('I')).toBe(1);
  });
  it('V converts to 5', function () {
    expect(toHinduArabic('V')).toBe(5);
  });
  it('X converts to 10', function () {
    expect(toHinduArabic('X')).toBe(10);
  });
});