exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var timeout;
    var current = start;

    function counter() {
        console.log(current);
        current++;
        if (current <= end) {
            timeout = setTimeout(counter, 100);
        }
    }

    counter();

    return {
        cancel: function() {
            clearTimeout(timeout);
        }
    };
  }
};
