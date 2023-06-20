function calSqRootOfSumOfSq(numbers) {
    let sumOfSquares = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      sumOfSquares += Math.pow(numbers[i], 2);
    }
  
    const squareRoot = Math.sqrt(sumOfSquares);
  
    return squareRoot;
  }
  
const numbers = [1, 2, 3];
const result = calSqRootOfSumOfSq(numbers);
console.log(result);