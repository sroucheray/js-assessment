exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    return new Promise(function(resolve){
            resolve(value);
    });
  },

  manipulateRemoteData : function(url) {
    return fetch(url)
        .then(response => response.text())
        //.then(text => console.log(text))
        .then(text => JSON.parse(text))
        .then(data => data.people.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            }

            if (a.name > b.name) {
                return 1;
            }

            return 0;
        }).map(people => people.name));
  }
};
