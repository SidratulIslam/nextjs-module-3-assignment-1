function isPrime(number) {
    // Check if number is less than 2
    if (number < 2) {
      return false;
    }
  
    // Check if number is divisible by any integer from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
}

const number = 23;
const result = isPrime(number);
console.log(result); // Output: false
