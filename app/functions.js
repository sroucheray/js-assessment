exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    return function(str2) {
      return str + ', ' + str2;
    }
  },

  makeClosures : function(arr, fn) {
    return arr.map(val => function() {
      return fn(val);
    });
  },

  partial : function(fn, str1, str2) {
    return function (punct) {
      return fn.call(null, str1, str2, punct);
    }
  },

  useArguments : function() {
    return Array.prototype.slice.call(arguments).reduce((prev, val) => prev + val, 0);
  },

  callIt : function(fn) {
    fn.apply(null, Array.prototype.splice.call(arguments, 1));
  },

  partialUsingArguments : function(fn) {
    var args1 = Array.prototype.splice.call(arguments, 1);

    return function () {
      var args2 = Array.prototype.splice.call(arguments, 0);
      return fn.apply(null, args1.concat(args2));
    }
  },

  curryIt : function(fn) {
    var args1 = Array.prototype.splice.call(arguments, 1);

    return function curry(a) {
      var args2 = Array.prototype.splice.call(arguments, 0);
      args1 = args1.concat(args2);

      if(args1.length >= 3) {
        return fn.apply(null, args1);
      }

      return curry;
    }
  }
};
