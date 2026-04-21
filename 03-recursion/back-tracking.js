// ============================================
// JAVASCRIPT ALGORITHM PRACTICE:
// ============================================
// BACKTRACKING — Basic Patterns
// ============================================
// NOTE: Solutions are commented out to prevent conflicts
// To test solutions:
// 1. Run the file to see the output: In VsCode add extension: Code Runner and click "play button"
// ============================================

// ============================================
// 🧠 WHAT IS BACKTRACKING?
// ============================================
// Backtracking = Recursion + "Try, Undo, Try Again" 🔄
//
// It's like exploring a maze 🗺️:
// 1. Try a path ➡️
// 2. If it doesn't work → back up ⬅️
// 3. Try a different path 🔀
// 4. Repeat until you find all solutions ✅
//
// Pattern:
//   1. Make a choice 🎯
//   2. Recurse (explore that choice) 🔍
//   3. Undo the choice (backtrack) ↩️
//   4. Try next choice 🔁
// ============================================


// ============================================
// Algorithm Question 1: Generate All Subsets
// PROBLEM: Given an array of unique integers, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets.
// ============================================

// ============================================
// SOLUTION: Generate All Subsets
// ============================================
// Example:
// Input: [1, 2, 3]
// Output: [[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]
//
// Explanation:
// Every element has 2 choices: include it OR skip it
// [1,2,3] → 2 * 2 * 2 = 8 possible subsets
//
// Visual decision tree:
//                    []
//                  /    \
//               [1]      []
//              /   \    /   \
//           [1,2] [1] [2]   []
//            / \   /\  /\   /\
//        [1,2,3].........  [] ...
//
// Each level = one element's choice (include or skip)

// 🚫 Rules
// Must use recursion/backtracking — no loops allowed for generating subsets
// Must include the empty subset []
// Order of subsets doesn't matter
// Elements within a subset should keep their original order

// ============================================
// Uncomment everything under (this line) down to the console.log to run code

const backTrackingSubSets = (nums) => {
  let result = []; 
  let currentPath = []; 
  console.log('nums length: ', nums.length)

  //recursion
  const backTrack = (index) => {
    console.log('index at recursion start: ', index, nums[index])
    // base case: if index is as long as nums array
    if(index === nums.length){
      result.push([...currentPath])
      return 
    }
     //skip
    backTrack(index + 1)

    // or add 
    currentPath.push(nums[index])
    backTrack(index + 1)
    currentPath.pop()
  }

  backTrack(0)
  return result; 
}

console.log(backTrackingSubSets([1, 2, 3]))
// Expected: [[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]
