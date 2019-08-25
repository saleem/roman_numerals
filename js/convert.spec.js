const toHinduArabic = require('./convert');

test('converts I to 1', () => {
  expect(toHinduArabic('I')).toBe(1);
});