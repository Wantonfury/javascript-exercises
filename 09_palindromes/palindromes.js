const palindromes = function (palindrome) {
    palindrome = palindrome.replace(/[!, .]/g, "");
    palindrome = palindrome.toLowerCase();
    let half = Math.floor(palindrome.length / 2);
    
    for (let i = 0; i < half; ++i) {
        if (palindrome[i] != palindrome[palindrome.length - i - 1]) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
