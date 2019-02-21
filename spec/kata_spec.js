const RomanNumerals = require('../kata.js');

describe('Roman Numerals: ', function() {
  it('I in Roman should be  1', function () {
      var romanNumber = "I";
      var result = RomanNumerals(romanNumber);
      expect(result).toBe(1);
  });

  it('V in Roman should be 5', function () {
      var romanNumber = "V";
      var result = RomanNumerals(romanNumber);
      expect(result).toBe(5);
  });

  it('X in Roman should be 10', function () {
      var romanNumber = "X";
      var result = RomanNumerals(romanNumber);
      expect(result).toBe(10);
  });

  it('II in Roman should be 2', function () {
      var romanNumber = "II";
      var result = RomanNumerals(romanNumber);
      expect(result).toBe(2);
  });

  it('III in Roman should be 3', function () {
      var romanNumber = "III";
      var result = RomanNumerals(romanNumber);
      expect(result).toBe(3);
  });

  it('IX in Roman should be 9', function () {
      var romanNumber = "IX";
      var result = RomanNumerals(romanNumber);
      expect(result).toBe(9);
  });

});
