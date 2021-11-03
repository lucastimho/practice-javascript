// function selectEvenItems(strings) {
//   var result = [];
//   var i = 0;
//   strings.forEach(function (string) {
//     if (i % 2 === 0) {
//       result << string;
//     }
//     i += 1;
//   });
//   return result;
// }
// console.log(selectEvenItems(["a", "b", "c", "d", "e"]));

// function max(numbers) {
//   var currentMax = 0;
//   numbers.forEach(function (number) {
//     if (number > currentMax) {
//       currentMax = number;
//     }
//   });
//   return currentMax;
// }
// console.log(max([5, 4, 8, 1, 2]));

// function factorial(number) {
//   var result = 1;
//   var currentNumber = number;
//   var i = 0;
//   for (i = 0; i < 5; i++) {
//     result *= currentNumber;
//     currentNumber -= currentNumber;
//   }
//   return result;
// }
// console.log(factorial(5));

// function descending(numbers) {
//   var result = [];
//   var index = numbers.length - 1;
//   var i;
//   for (i = 0; i < numbers.length; i++) {
//     result << numbers[index];
//     index -= 1;
//   }
//   return result;
// }
// console.log(descending([1, 3, 5, 7]));

function sumCombinations(numbers1, numbers2) {
  var result = [];
  numbers1.forEach(number1) {
    numbers2.forEach(number2) {
      result << number1 + number2
    }
  }
  return result;
}
console.log(sumCombinations([1, 5, 10], [100, 500, 1000]));
