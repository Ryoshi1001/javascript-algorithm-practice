
// ============================================
// JAVASCRIPT ALGORITHM PRACTICE:
// ============================================
// RECURSION — Basic Patterns
// ============================================
// NOTE: Solutions are commented out to prevent conflicts
// To test solutions:
// 1. Run the file to see the output: In VsCode add extension: Code Runner and click "play button"
// ============================================



// ============================================
// Algorithm Question 1: Factorial
// PROBLEM: Given a number n, return its factorial.
// Factorial means: n * (n-1) * (n-2) * ... * 1
// ============================================

// ============================================
// SOLUTION: Factorial
// ============================================
// Example:
// Input: 5
// Output: 120
//
// Explanation:
// 5 * 4 * 3 * 2 * 1 = 120
// factorial(0) = 1  ← base case

// 🚫 Rules
// Must use recursion — no loops allowed
// Must have a base case or it runs forever
// Return the result, not console.log it

// ============================================
// Uncomment everything under (this line) down to the console.log to run code

// const factorial = (n) => {
//  if(n === 0 || n === 1){
//   return 1; 
//  } else{
//   const result = n * factorial(n - 1)
//   console.log('result in console.log: ', result)
//   return result
//  }

// }

// console.log(factorial(5))



// ============================================
// Algorithm Question 2: Fibonacci
// PROBLEM: Given a number n, return the nth Fibonacci number.
// ============================================

// ============================================
// SOLUTION: Fibonacci
// ============================================
// Example:
// Input: 6
// Output: 8
//
// Explanation:
// Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13...
// Position:           0  1  2  3  4  5  6   7
// fib(0) = 0
// fib(1) = 1
// fib(6) = 8

// 🚫 Rules
// Must use recursion — no loops allowed
// Must have a base case
// Each number = sum of the two before it

// ============================================
// Uncomment everything under (this line) down to the console.log to run code

// const fib = (n) => {
//   console.log('calling fib(', n, ')')  

//   if(n === 0){
//     console.log('returning 0: fib(', n, ')')
//     return 0; 
//   } else if(n === 1){
//     console.log('returning 1: fib(', n, ')')
//     return 1; 
//   } else{
//     const result = fib(n - 1) + fib(n - 2)
//     console.log('result console.log: ', result)
//     return result
//   }

// }

// console.log(fib(6))


// ============================================
// Algorithm Question 3: Power(x, n)
// PROBLEM: Implement pow(x, n), which calculates x raised to the power n (x^n).
// ============================================
// SOLUTION: Power(x, n)
// ============================================
// Example:
// Input: x = 2, n = 10
// Output: 1024
// Explanation: 2^10 = 1024
//
// Input: x = 2, n = -2
// Output: 0.25
// Explanation: 2^-2 = 1/(2^2) = 1/4 = 0.25
//
// 🚫 Rules
// Must use recursion — no loops allowed
// Must have a base case
// Must handle negative exponents
// 🎯 Bonus challenge: try to make it O(log n) instead of O(n)
// ============================================
// Uncomment everything under (this line) down to the console.log to run code

// const toThePower = (x, n) => {
//   console.log('x: ', x, "n: ", n)
//   if(n < 0){
//     console.log('turning n to positive using division')
//     return 1 / toThePower(x, -n)
//   } else if(n === 0){
//     console.log('returning 1 n ==== 0')
//     return 1
//   } else{
//   let result = x * toThePower(x, n - 1)
//   console.log("result => ", result)
//   return result  
//   }

// }

// console.log(toThePower(2, 10))   // 1024
// console.log(toThePower(2, -2))   // 0.25
