const symbols = require('./emagi-symbols.js');
const words = require('./emagi-words.js');

const emagiSearch = function(arr){
let newArr = [];
for (let i = 0; i < words.length; i++){
    if (words[i].includes(arr)){
        newArr.push(symbols[i]);
    }
}
return newArr
}



module.exports = emagiSearch;