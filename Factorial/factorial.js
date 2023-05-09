// Write code to create a function that returns the factorial of `num`

var factorial = function(num) {
    if (num === 0) {
        return 1;
    }
    let currentTotal = 1;
    for (let i = 1; i <= num; i++) {
        currentTotal = currentTotal * i;
    }
    return currentTotal;
};
