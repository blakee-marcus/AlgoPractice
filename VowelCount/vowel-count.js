// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
    const strArr = str.toLowerCase().split('');
    const vowels = ['a', 'e', 'i','u', 'o'];
    let count = 0;
    for (let i = 0; i < strArr.length; i++) {
        if (vowels.includes(strArr[i])) {
            count++;
        }
        
    }
    return count;
};
