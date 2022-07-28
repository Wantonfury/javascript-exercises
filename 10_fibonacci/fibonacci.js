const fibonacci = function(f) {
    if (f < 0) return "OOPS";
    if (f <= 2) return 1;
    
    let a = 1, b = 1;
    for (let i = 3; i <= f; ++i) {
        [a, b] = [b, a + b];
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
