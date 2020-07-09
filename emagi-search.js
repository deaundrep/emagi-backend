const symbols = require('./emagi-symbols.js');
const words = require('./emagi-words.js');

const emagiSearch = function(arr){
let newArr = [];
for (const item of words){
    if (item.includes(arr)){
        indexWord = words.indexOf(item);
        newArr.push(symbols[indexWord])
    }
}
return newArr
}


module.exports = emagiSearch;