const MAX_LETTER_VALUE = 1000;

function letterValue(letter){
  var value_of_letter = {
    "I": 1,
    "V": 5,
    "X": 10
  };
  return value_of_letter[letter];
}

function RomanNumerals(romanNumber) {
  var value = 0;
  var past_value=MAX_LETTER_VALUE;
  for (letter of romanNumber) {
    var current_value = letterValue(letter)

    if (past_value < current_value){
      value += current_value - (past_value*2);
    }else{
      value += current_value;
    }

    past_value = current_value;
  }
  return value;
}

module.exports = RomanNumerals;
