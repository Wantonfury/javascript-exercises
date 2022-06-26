const removeFromArray = function() {
    let arr = [];
    
    if (arguments.length == 1) return arguments[0];
    
    for (let i = 0; i < arguments[0].length; ++i) {
        let add = 1;
        
        for (let j = 1; j < arguments.length; ++j) {
            if (arguments[0][i] === arguments[j]) add = 0;
        }
        
        if (add) arr.push(arguments[0][i]);
    }
    
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
