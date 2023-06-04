Given an integer x, return true if x is a 
palindrome
, and false otherwise.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

................................................................................

//solution 1 (on)
function isPalindrome(x: number): boolean {
let reversed:string=x.toString().split("").reverse().join("");
return reversed===x.toString()
};

//solution 2  (log n)

var isPalindrome = function(x) {
    var reverse = 0;
    var copy = x;

    //The loop break when the copy of original number becomes zero
    //Also negative number cannot be a palindrome
    while (copy > 0) {
      const digit = copy % 10;
      reverse = reverse * 10 + digit;
      copy = ~~(copy / 10);
    }

    return reverse == x;
};
