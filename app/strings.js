exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    const regex = new RegExp(`(.)\\1{${amount},}`, 'g');

    return str.replace(regex, (...args) => args[1].repeat(amount));
  },
  wordWrap: function(str, cols) {
    let isSpace = /\s/;
    let char;
    let output = '';
    let lastSpaceIndex;
    let needReturn;

    function insertReturnAt(str, index) {
      return str.slice(0, index) + '\n' + str.slice(index + 1);
    }


    for (let charIndex = 0, colCount = 0; charIndex < str.length; charIndex++) {

        colCount++;
        char = str[charIndex];
        let charIsSpace = char.match(isSpace);
        let isOnCol = !(colCount % (cols + 1));

        if (charIsSpace) {
            lastSpaceIndex = charIndex;
        }

        if (isOnCol) {
            needReturn = true;
        }

        if (!needReturn) {
            output += char;
            continue;
        }

        if (charIsSpace) {
            output += '\n';
            colCount = 0;
            needReturn = false;
            lastSpaceIndex = null;
            continue;
        }

        if (lastSpaceIndex) {
            output = insertReturnAt(output, lastSpaceIndex);
            colCount = charIndex - lastSpaceIndex;
            needReturn = false;
            lastSpaceIndex = null;
        }

        output += char;
    }

    return output;
 },
  reverseString: function(str) {
    let output = '';
    for (var i = str.length - 1; i >= 0; i--) {
        output += str[i];
    }

    return output;
  }
};
