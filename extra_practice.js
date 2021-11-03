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
//   var i;
//   for (i = 1; i <= number; i++) {
//     result *= i;
//   }
//   return result;
// }
// console.log(factorial(5));

// function descending(numbers) {
//   var result = [];
//   var index = numbers.length - 1;
//   var i;
//   for (i = 0; i < numbers.length; i++) {
//     result.push(numbers[index]);
//     index -= 1;
//   }
//   return result;
// }
// console.log(descending([1, 3, 5, 7]));

// function sumCombinations(numbers1, numbers2) {
//   var result = [];
//   numbers1.forEach(function (number1) {
//     numbers2.forEach(function (number2) {
//       result.push(number1 + number2);
//     });
//   });
//   return result;
// }
// console.log(sumCombinations([1, 5, 10], [100, 500, 1000]));

// function sum(a) {
//   var sum = 0;
//   a.forEach(function (n) {
//     sum += n;
//   });
//   return sum;
// }
// console.log(sum([1, 3, 2, 5, 4]));

// function smallestString(a) {
//   var small = a[0];
//   a.forEach(function (str) {
//     if (str.length < small.length) {
//       small = str;
//     }
//   });
//   return small;
// }
// console.log(smallestString(["hotdog", "sandwich", "dog", "sand"]));

// function reverse(a) {
//   var rev = [];
//   var index = a.length - 1;
//   var i;
//   for (i = 0; i < a.length; i++) {
//     rev.push(a[index]);
//     index -= 1;
//   }
//   return rev;
// }
// console.log(reverse([3, 1, 5, 0, 3, 4]));

// function letterA(a) {
//   var count = 0;
//   a.forEach(function (n) {
//     if (n[0].toLowerCase() === "a") {
//       count += 1;
//     }
//   });
//   return count;
// }
// console.log(letterA(["hot", "apple", "alligator", "dog"]));
