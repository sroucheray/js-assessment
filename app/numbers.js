exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    const binStr = num.toString(2);
    return parseInt(binStr[binStr.length - bit]);
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    let str = num.toString(2);
    while(str.length < 8) {
        str = '0' + str;
    }

    return str;
  },

  multiply: function(a, b) {
    function getMultiplier(num) {
      let decimalPart = (num % 1);
      let invertedDecimal = 1 / decimalPart;
      return Math.ceil(invertedDecimal / 10) * 10;
    }

    let aMultiplier = 1;
    let bMultiplier = 1;

    if (!Number.isInteger(a)) {
      aMultiplier = getMultiplier(a);
      a = a * aMultiplier;
    }

    if (!Number.isInteger(b)) {
      bMultiplier = getMultiplier(b);
      b = b * bMultiplier;
    }

    let value = a * b;
    let combinedMultipliers = aMultiplier * bMultiplier;


    return  value / combinedMultipliers;
  }
};
