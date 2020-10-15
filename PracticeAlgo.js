// LONGEST COLLATZ

// The following iterative sequence is defined for the set of positive integers:

// n → n/2 (n is even)
// n → 3n + 1 (n is odd)

// Using the rule above and starting with 13, we generate the following sequence:

// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

// Which starting number, under one million, produces the longest chain?

// NOTE: Once the chain starts the terms are allowed to go above one million.

// PSEUDO:

//  1 Write a function that creates a Collatz sequence with one starting number that returns the length of the sequence.
//  2 Write a loop (from 1-999,999), that calls the Collatz sequence on each number
//    and compares the length of each sequence, returning the starting number that produces the
//    longest sequence.

// CODE:

const collatz = (num) => {
  let length = 1;

  while (num !== 1) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num = num * 3 + 1;
    }
    length += 1;
  }
  return length;
};

// console.log("Collatz for individual number", collatz(13));

const longestCollatz = () => {
  // initiate variables for the number being called and the length of the sequence
  let longestCollatzNumber = 1;
  let longestLength = 1;
  // iterate over numbers 1-999999
  for (i = 1; i < 999999; i++) {
    // set variavel length and call collatz helper function on each number
    let length = collatz(i);
    // if the sequence for the current number is greater than longestLength, set longestLength to the length returned by collatz
    // also set the longestCollatz number to the value at i
    if (length > longestLength) {
      longestLength = length;
      longestCollatzNumber = i;
    }
  }
  // return just the number with the longest sequence
  return longestCollatzNumber;
};

console.log("Number with the Longest Collatz Sequence:", longestCollatz());
