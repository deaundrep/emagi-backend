const symbols = require('./emagi-symbols.js');
const words = require('./emagi-words.js');

function emagify(arr) {
    let newArr = [];
    
    for (const item of arr) {
        if (words.includes(item)){
            let indexWord = words.indexOf(item)
            newArr.push(symbols[indexWord]);
        }else{
            newArr.push(item)
        }
    }
    
    return newArr;
}



module.exports = emagify;