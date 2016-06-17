exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
        function listDir(dir) {
            let files = [];

            for (let key in dir.files) {
                if(key === 'dir') {
                    continue;
                }else if (typeof dir.files[key] === 'string') {
                    files.push(dir.files[key]);
                } else {
                    files = files.concat(listDir(dir.files[key]));
                }
            }

            return files;
        }

        if (!dirName) {
            return listDir(data);
        }

        for (let i = 0; i < data.files.length ; i++) {
            let fileOrDir = data.files[i];
            if (typeof fileOrDir === 'object' && fileOrDir.dir === dirName) {
                return listDir(fileOrDir);
            }
        }

        return [];

  },

  permute: function(arr) {
    function permuteRec(arr) {
        if (arr.length === 1) {
            return [arr];
        }

        let output = [];

        arr.forEach((value, currentIndex) => {
            let remaining = arr.filter((val, remainIndex) => currentIndex !== remainIndex);

            permuteRec(remaining).forEach(permuted => {
                output.push([value, ...permuted]);
            });

        });

        return output;
    }


    return permuteRec(arr);
  },

  fibonacci: function(n) {

    function fibo(rec = 2, a = 0, b = 1) {
        let c = a + b;
        if (rec >= n) {
            return c;
        }

        return fibo(rec + 1, b, c);
    }

    return fibo();
  },

  validParentheses: function(n) {
    function combine(iteration) {
        if (iteration <= 1) {
            return ['()'];
        }

        let combinaisons = [];

        let subCombinations = combine(iteration - 1);

        subCombinations.forEach(subCombination => {
            let before = `()${subCombination}`;
            let between = `(${subCombination})`;
            let after = `${subCombination}()`;

            if (combinaisons.indexOf(before) === -1) {
                combinaisons.push(before);
            }

            if (combinaisons.indexOf(between) === -1) {
                combinaisons.push(between);
            }

            if (combinaisons.indexOf(after) === -1) {
                combinaisons.push(after);
            }
        });

        return combinaisons;
    }


    return combine(n);
  }
};
