const sumAll = function(l, r) {
    let sum = 0;
    
    if ((l < 0 || r < 0) || (typeof(l) !== 'number' || typeof(r) !== 'number')) return 'ERROR';
    
    if (l > r) {
        let t = l;
        l = r;
        r = t;
    }
    
    for (let i = l; i <= r; ++i) sum += i;
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
