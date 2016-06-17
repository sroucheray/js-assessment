exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    return arr.reduce(function(prev, val) {
      return prev + val;
    }, 0)
  },

  remove : function(arr, item) {
    return arr.filter(function(val){
      return val !== item;
    });
  },

  removeWithoutCopy : function(arr, item) {
    var spliced;
    while(true) {
      var index = arr.indexOf(item);
      if (index === -1) {
        break;
      }
      arr.splice(index, 1);
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.splice(arr.length - 1, 1);

    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);

    return arr;
  },

  curtail : function(arr) {
    arr.shift();

    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);

    return arr;
  },

  count : function(arr, item) {
    return arr.filter(function(val){
      return val === item;
    }).length;
  },

  duplicates : function(arr) {
    return arr.reduce(function(prevArray, val, index) {
       if(arr.indexOf(val, index + 1) > -1 && prevArray.indexOf(val) === -1) {
        prevArray.push(val);
       }

       return prevArray;
    }, []);
  },

  square : function(arr) {
    return arr.map(function(val){
      return val * val;
    });
  },

  findAllOccurrences : function(arr, item) {
    return arr.reduce(function(prevArray, val, index) {
      if (val === item) {
        prevArray.push(index);
      }

      return prevArray;
    }, []);
  }
};
