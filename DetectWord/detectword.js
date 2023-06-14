/*
A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:

- The wanted word is in lowercase.
- The crowd of letters is all in uppercase.
- Note that the word will be spread out amongst the random letters, but their letters remain in the same order.

Examples:
detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"
detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"
detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement"
*/

const detectWord = (aString) => {
    let result = '';
	// WRITE YOUR CODE HERE
    for (let i = 0; i < aString.length; i++) {
        if (aString[i] == aString[i].toLowerCase()) {
            result += aString[i];
        }
    }
    return result;
};

console.log(
	'detectWord("UcUNFYGaFYFYGtNUH") ➞',
	detectWord('UcUNFYGaFYFYGtNUH')
);
console.log(
	'detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞',
	detectWord('bEEFGBuFBRrHgUHlNFYaYr')
);
console.log(
	'detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞',
	detectWord('YFemHUFBbezFBYzFBYLleGBYEFGBMENTment')
);