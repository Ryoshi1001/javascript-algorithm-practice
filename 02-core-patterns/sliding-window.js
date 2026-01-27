// ============================================
// JAVASCRIPT ALGORITHM PRACTICE:
// ============================================
// SLIDEING WINDOW – Core Patterns
// ============================================
// ============================================
// NOTE: Solutions are commented out to prevent conflicts
// To test solutions:
// 1. Run the file to see the output: In VsCode add extention: Code Runner and click "play button"
// 2. The function modifies the array in-place or returns a value
// ============================================



// ============================================
// Algorithm Question 1: Maximum Sum Subarray of Size K
// PROBLEM: Given an array of integers and a number k, find the maximum sum of any contiguous subarray of size k.



// ============================================
// My SOLUTION: Maximum Sum Subarray of Size K
// ============================================
// Instruction for solution:
// 1. The function finds the maximum sum of an contiguos subarray of size k
// ============================================
// 2. Uncomment everything under (this line) down to the console.log to run code


const arr = [2, 1, 5, 1, 3, 2]
const k = 3; 

const maxSumSubarray = (arr, k) => {
  let maxSum = 0; 

  for(let i = 0; i < arr.length - k; i++){
    let windowSum = 0; 
 
    for(let j = 0; j < k; j++){
      windowSum = windowSum + arr[i + j]
    }

    if(windowSum > maxSum){
      maxSum = windowSum
    }
  }

  return maxSum
}

console.log(maxSumSubarray(arr, k))