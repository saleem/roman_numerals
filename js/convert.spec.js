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

describe('Descending denominations should add', function () {
  it('two I\'s should convert to 2', function () {
    expect(toHinduArabic('II')).toBe(2);
  });
  it('three I\'s should convert to 3', function () {
    expect(toHinduArabic('III')).toBe(3);
  });
  it('MDCLXVI should convert to 1666', function () {
    expect(toHinduArabic('MDCLXVI')).toBe(1666);
  });
  it('MMXX should convert to 2020', function () {
    expect(toHinduArabic('MMXX')).toBe(2020);
  });
});

describe('Ascending denominations should subtract', function () {
  it('IV should convert to 4', function () {
    expect(toHinduArabic('IV')).toBe(4);
  });
  it('MCMLXIV should convert to 1964', function () {
    expect(toHinduArabic('MCMLXIV')).toBe(1964);
  });
  it('MMXIX should convert to 2019', function () {
    expect(toHinduArabic('MMXIX')).toBe(2019);
  });
});