// Given an integer x, return true if x is a palindrome, and false otherwise.

// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const s = x.toString();
    const len = s.length;
    const mid = Math.floor(len / 2);
    const lenidx = len - 1;
    let isPalindrome = true; 
    for (let i = 0; i < mid; i++) {
        if (s[i] !== s[lenidx-i]) {
            isPalindrome = false;
            break
        };
    }
    return isPalindrome;    
};

/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindromeNoString = function(x) {
    if (x < 0) return false;
    places = [];
    for (let i = 1; i <= x; i=i*10) {
        m = Math.floor(x / i % 10);
        places.push(m);
    }
    console.log(places);
    const len = places.length;
    const mid = Math.floor(len / 2);
    const lenidx = len - 1;
    let isPalindrome = true; 
    for (let i = 0; i < mid; i++) {
        if (places[i] !== places[lenidx-i]) {
            isPalindrome = false;
            break
        };
    }

    return isPalindrome;
};


// console.log(isPalindrome(-121));

console.log(isPalindromeNoString(121));
console.log(isPalindromeNoString(10));



 