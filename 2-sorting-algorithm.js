/*
At the start of the course, you worked in teams to sort your team members, labelled by
numbers, in ascending or descending order.

Today, you will be applying the sorting algorithm you used in that exercise in code! 

Create a function called sortAges which:
- takes an array of mixed data types as input
- removes any non-number data types without using the built-in javascript filter method
- returns an array of sorted ages in ascending order 
  - HARD MODE - without using the built-in javascript sort method 😎

You don't have to worry about making this algorithm work fast! The idea is to get you to
"think" like a computer and practice your knowledge of basic JavaScript.
*/

function sortAges(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      newArr.unshift(arr[i]);
    }
  }
  let temp = 0;
  for (let j = 0; j < newArr.length - 1; j++) {
    for (let k = 0; k < newArr.length - 1; k++) {
      if (newArr[k] > newArr[k + 1]) {
        temp = newArr[k + 1];
        newArr[k + 1] = newArr[k];
        newArr[k] = temp;
      }
    }
  }
  return newArr;
}

/* ======= TESTS - DO NOT MODIFY ===== */

const agesCase1 = [
  "🎹",
  100,
  "💩",
  55,
  "🥵",
  "🙈",
  45,
  "🍕",
  "Sanyia",
  66,
  "James",
  23,
  "🎖",
  "Ismeal",
];
const agesCase2 = ["28", 100, 60, 55, "75", "🍕", "Elamin"];

test("sortAges function works - case 1", () => {
  expect(sortAges(agesCase1)).toEqual([23, 45, 55, 66, 100]);
});

test("sortAges function works - case 2", () => {
  expect(sortAges(agesCase2)).toEqual([55, 60, 100]);
});

function aa(cardNumber) {
  if (typeof cardNumber === "number" && cardNumber.toString().length == 16) {
    let sum = 0;
    for (let i = 0; i < cardNumber.toString().length; i++) {
      if (typeof parseInt(cardNumber.toString()[i]) === "number") {
        if(Number(cardNumber.toString()[cardNumber.toString().length - 1]) % 2 === 0){
          if(sum > 16){
            return true;
          }
        }
      }
      sum += Number(cardNumber.toString());
    }
  }
  return false;
}
