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

// const backTrackingSubSets = (nums) => {
//   let result = []; 
//   let currentPath = []; 
//   console.log('nums length: ', nums.length)

//   //recursion
//   const backTrack = (index) => {
//     console.log('index at recursion start: ', index, nums[index])
//     // base case: if index is as long as nums array
//     if(index === nums.length){
//       result.push([...currentPath])
//       return 
//     }
//      //skip
//     backTrack(index + 1)

//     // or add 
//     currentPath.push(nums[index])
//     backTrack(index + 1)
//     currentPath.pop()
//   }

//   backTrack(0)
//   return result; 
// }

// console.log(backTrackingSubSets([1, 2, 3]))
// // Expected: [[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]



// ============================================
// Algorithm Question 2: Permutations
// PROBLEM: Given an array of unique integers, return all possible permutations.
// ============================================

// ============================================
// SOLUTION: Permutations
// ============================================
// Example:
// Input: [1, 2, 3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
//
// Explanation:
// A permutation is every possible ORDERING of the array
// [1,2,3] → 3! = 3 * 2 * 1 = 6 permutations
//
// Unlike subsets — ORDER MATTERS here!
// [1,2,3] and [3,2,1] are DIFFERENT permutations ✅
//
// Visual decision tree:
//               []
//           /   |   \
//         [1]  [2]  [3]       ← pick first number
//        / \   / \   / \
//      [1,2][1,3][2,1][2,3][3,1][3,2]  ← pick second
//       |    |    |    |    |    |
//     [1,2,3][1,3,2]...             ← pick last
//
// Each level = pick one UNUSED number

// 🚫 Rules
// Must use recursion/backtracking
// Each number can only be used ONCE per permutation
// All permutations must be unique
// Time: O(n!) — n choices, then n-1, then n-2...

// ============================================
// Uncomment everything under (this line) down to the console.log to run code

// const permutations = (nums) => {
//   let result = []; 
//   let currentPath = []; 

//   const permutate = () => {
//     if(currentPath.length === nums.length){
//       result.push([...currentPath])
//       return
//     }

//     // pick one number
//     for(let num of nums){
//       console.log(num)
//       if(currentPath.includes(num)){
//         continue
//       } else{
//         currentPath.push(num)
//         console.log('currentPath', currentPath)
//         permutate()
//         currentPath.pop()
//       }
//     }
//   }

//   permutate()
//   return result
// }

// console.log(permutations([1, 2, 3]))
// // Expected: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// console.log(permutations([1, 2]))
// Expected: [[1,2],[2,1]]

// console.log(permutations([1]))
// Expected: [[1]]



// ============================================
// Algorithm Question 3: Combination Sum
// PROBLEM: Given an array of distinct integers and a target number,
// return all combinations that add up to the target.
// You may use the same number multiple times.
// ============================================

// ============================================
// SOLUTION: Combination Sum
// ============================================
// Example:
// Input: nums = [2, 3, 6, 7], target = 7
// Output: [[2,2,3],[7]]
//
// Explanation:
// 2 + 2 + 3 = 7 ✅
// 7 = 7 ✅
// Order does NOT matter → [2,3,2] and [2,2,3] are the SAME combination
//
// Visual decision tree (starting from index 0):
//                      []  target=7
//                /          \
//           pick 2           pick 3 ...
//          /      \
//      pick 2    pick 3
//      /    \
//  pick 2  pick 3
//  (6)     (7) ✅
//
// Each level = pick a number (can reuse same number!)

// 🚫 Rules
// Must use recursion/backtracking
// Same number CAN be used multiple times
// Combinations must be unique (no duplicate sets)
// Numbers in output can be in any order
// Time: O(2^target) — branches keep splitting

// ============================================
// Uncomment everything under (this line) down to the console.log to run code

// const combinationSum = (nums, target) => {
//   let result = []; 
//   let currentPath = []; 
//   let currentSum = 0; 

//   const allCombinations = () => {
//     if(currentSum === target || currentSum > target){
//       result.push([...currentPath])
//       return
//     }
//     for(let num in nums){
//     }
//   }

//   allCombinations()
//   return result
// }

// console.log(combinationSum([2, 3, 6, 7], 7))
// Expected: [[2,2,3],[7]]

// console.log(combinationSum([2, 3, 5], 8))
// // Expected: [[2,2,2,2],[2,3,3],[3,5]]

// console.log(combinationSum([2], 1))
// // Expected: []

