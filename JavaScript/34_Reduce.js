// reduce() = reduce the elements of an array to
//             a single value
//     (accumulator, element, index, array)

// numbers.reduce(sum, 0);
//That 0 is the initial value of accumulator.
// we always  pass the initial   value of accumulator

//whatever returns that becomes accumulater for next iteration

function sum(previous, current) {
  return previous + current;
}

const prices = [5, 30, 20, 15, 10];
const output1 = prices.reduce(sum, 0);
console.log(output1);





//Example 2 :

function maximum(previous, current) {
  return Math.max(previous, current);
}

function minimum(previous, current) {
  return Math.min(previous, current);
}

const grades = [5, 30, 20, 15, 10];
const output2 = grades.reduce(minimum, Infinity);
console.log(output2);
