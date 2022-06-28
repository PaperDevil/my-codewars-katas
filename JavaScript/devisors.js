// Create a function named divisors/Divisors that takes an 
// integer n > 1 and returns an array with all of the integer's 
// divisors(except for 1 and the number itself), from smallest to largest. 
// If the number is prime return the string '(integer) is prime' 
// (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

function divisors(integer) {
    let result = []
    const numbers = [...Array(integer - 1).keys()]
    numbers.forEach(el => {
        if (el <= 1) return;
        if (integer % el == 0) {
            result.push(el);
        }
    });
    if (result.length == 0) return `${integer} is prime`;
    else return result;
};
