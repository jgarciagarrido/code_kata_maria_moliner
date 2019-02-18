const RomanNumerals = require('../kata.js');
describe('true test', function() {
  it('should be true', function() {
    a = true;
    expect(a).toBe(true);
  });
  it('should be 0', function () {
      expect(RomanNumerals("I")).toBe(0);
  });
});
