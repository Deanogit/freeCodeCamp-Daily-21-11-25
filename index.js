// // LCM
// // Given two integers, return the least common multiple (LCM) of the two numbers.

// // The LCM of two numbers is the smallest positive integer that is a multiple of both numbers. For example, given 4 and 6, return 12 because:

// // Multiples of 4 are 4, 8, 12 and so on.
// // Multiples of 6 are 6, 12, 18 and so on.
// // 12 is the smallest number that is a multiple of both.

// // function lcm(a, b) {
// //   // counter for a
// //   let counterA = a;
// //   // counter for b
// //   let counterB = b;
// //   // counterA = a + a;
// //   counterA = a + a;
// //   // counterB = b + b;
// //   counterB = b + b;
// //   // if (counterA = counterB) {
// //   if (counterA === counterB) {
// //     // return counterA;}
// //     return counterA;
// //   }
// //   // else call the process again
// //   //else {
// //   //  lcm(counterA, counterB);
// //   //}
// //   // do i want to make this into a function inside the lcm function?
// // }

// // problem being is 12 from counterA and 12 from counterB do not happen on the same iteration....
// // i think it needs to check if counterA < counterB, then counterA + a or vice-versa

// function lcm(a, b) {
//   let counterA = a;
//   console.log(counterA);
//   let counterB = b;
//   console.log(counterB);
//   ///
//   while (!checkIsEqual(counterA, counterB)) {
//     if (checkAIsHigher(counterA, counterB)) {
//       counterB = counterB + b;
//       console.log(counterB);
//       console.log(counterA);
//       checkIsEqual(counterA, counterB);
//     } else if (checkBIsHigher(counterA, counterB)) {
//       counterA = counterA + a;
//       checkIsEqual(counterA, counterB);
//       console.log(counterA, counterB);
//     }
//   }
//   return counterA;
// }

// // counterA = a + a;
// // counterB = b + b;
// // counterB = b + b;
// // if (counterA = counterB) {
// // if (checkIsEqual()) {
// // return counterA;}
// //   return counterA;
// //}
// // else if (counterA < counterB)
// // else if (counterA < counterB) {
// //   counterA = counterA + a;
// //}

// // maybe build a check function, which compares if they are equal, which can be called each time a counter changes...?
// function checkIsEqual(a, b) {
//   return a === b;
// }

// // check A is higher
// function checkAIsHigher(a, b) {
//   return a > b;
// }

// // check B is higher
// function checkBIsHigher(a, b) {
//   return a < b;
// }

function lcm(a, b) {
  let counterA = a;
  let counterB = b;
  // which is less?
  while (!checkEquals(counterA, counterB)) {
    if (counterA > counterB) {
      counterB = counterB + b;
      console.log(counterA, counterB);
    } else if (counterA < counterB) {
      counterA = counterA + a;
      console.log(counterA, counterB);
    }
  }
  return counterA;
}

function checkEquals(a, b) {
  return a === b;
}
