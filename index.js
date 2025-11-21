// LCM
// Given two integers, return the least common multiple (LCM) of the two numbers.

// The LCM of two numbers is the smallest positive integer that is a multiple of both numbers. For example, given 4 and 6, return 12 because:

// Multiples of 4 are 4, 8, 12 and so on.
// Multiples of 6 are 6, 12, 18 and so on.
// 12 is the smallest number that is a multiple of both.

function lcm(a, b) {
  // counter for a
  let counterA = a;
  // counter for b
  let counterB = b;
  // counterA = a + a;
  counterA = a + a;
  // counterB = b + b;
  counterB = b + b;
  // if (counterA = counterB) {
  if (counterA === counterB) {
    // return counterA;}
    return counterA;
  }
  // else call the process again
  else {
    lcm(counterA, counterB);
  }
  // do i want to make this into a function inside the lcm function?
}

// problem being is 12 from counterA and 12 from counterB do not happen on the same iteration....
