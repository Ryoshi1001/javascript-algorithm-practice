// ============================================
// JAVASCRIPT ALGORITHM PRACTICE:
// ============================================
// HASH MAPS – Core Patterns
// ============================================
// NOTE: Solutions are commented out to prevent conflicts
// To test solutions:
// 1. Run the file to see the output: In VsCode add extension: Code Runner and click "play button"
// ============================================



// ============================================
// Algorithm Question 1: Group Anagrams
// PROBLEM: Given an array of strings, group the strings that are anagrams of each other.
// Return a list of groups. Order does not matter.
// ============================================

// ============================================
// SOLUTION: Group Anagrams
// ============================================
// Example:
// Input: ["eat","tea","tan","ate","nat","bat"]
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
//
// Explanation:
// "eat", "tea", "ate" are all anagrams of each other
// "tan", "nat" are anagrams of each other
// "bat" has no anagram partner

// 🚫 Rules
// Must be O(n * k) where k is the length of each word
// You WILL need a Map here
// Sorting each word is allowed
// Return array of arrays

// ============================================
// Uncomment everything under (this line) down to the console.log to run code

// const words = ["eat","tea","tan","ate","nat","bat"]

// const groupAnagrams = (words) => {
//   const map = new Map()

//   for(let i = 0; i < words.length; i++){
//     let sortedWord = words[i].split("").sort().join("")
//     console.log(sortedWord)

//     if(!map.has(sortedWord)){
//       map.set(sortedWord, [words[i]])
//     } else{
//       console.log('map.getSortedWord', map.get(sortedWord))
//       map.get(sortedWord).push(words[i])
//     }
//   }

//   return Array.from(map.values())
// }

// console.log(groupAnagrams(words))



// ============================================
// Algorithm Question 2: Group by Remainder
// PROBLEM: Given an array of integers, group them by their remainder when divided by 3.
// Return a list of groups. Order does not matter.
// ============================================

// ============================================
// My SOLUTION: Group by Remainder
// ============================================
// Example:
// Input: [3, 1, 4, 7, 9, 2, 6]
// Output: [[3,9,6],[1,4,7],[2]]
//
// Explanation:
// remainder 0: [3, 9, 6]
// remainder 1: [1, 4, 7]
// remainder 2: [2]

// 🚫 Rules
// Must be O(n)
// You WILL need a Map here
// No sorting needed — just math for the key
// Return array of arrays

// ============================================
// Uncomment everything under (this line) down to the console.log to run code

// const nums = [3, 1, 4, 7, 9, 2, 6]

// const groupByRemainder = (nums) => {
//   const map = new Map()

//   for(let i = 0; i < nums.length; i++){
//     console.log('index', i)
//     console.log('nums[i]', nums[i])

//     let remainder = nums[i] % 3; 
//     console.log('remainder', remainder)
//     if(!map.has(remainder)){
//       map.set(remainder, [nums[i]])
//     } else{
//       map.get(remainder).push(nums[i])
//     }
//   }

//   return Array.from(map.values())


// }

// console.log(groupByRemainder(nums))


// ============================================
// Algorithm Question 3: Longest Consecutive Sequence
// PROBLEM: Given an unsorted array of integers, return the length of the
// longest sequence of consecutive numbers.
// ============================================

// ============================================
// My SOLUTION: Longest Consecutive Sequence
// ============================================
// Example:
// Input: [100, 4, 200, 1, 3, 2]
// Output: 4
//
// Explanation:
// The longest consecutive sequence is [1, 2, 3, 4]
// Length = 4

// 🚫 Rules
// Must be O(n) — no sorting allowed
// You WILL need a Set here (not a Map this time!)
// Consecutive means numbers that follow each other: 1,2,3,4
// Return the length, not the sequence itself

// ============================================
// Uncomment everything under (this line) down to the console.log to run code

// const nums = [100, 4, 200, 1, 3, 2]

// const longestConsecutive = (nums) => {
//   const set = new Set(nums)
//   let longest = 0
//   console.log("nums", nums)
//   console.log('set at start', set)

//   for(let num of nums){
//     console.log(num - 1)
//     if(!set.has(num - 1)){
//       let count = 1

//       while(set.has(num + count)){
//         count++
//       }

//       longest = Math.max(longest, count)
//     }
//   }

// console.log('longest', longest)
// return longest

// }

// console.log(longestConsecutive(nums))


// ============================================
// Algorithm Question 4: Subarray Sum Equals K
// PROBLEM: Given an array of integers nums and an integer k,
// return the total number of subarrays whose sum equals k.
// ============================================

// ============================================
// SOLUTION: Subarray Sum Equals K
// ============================================
// Example:
// Input: nums = [1, 1, 1], k = 2
// Output: 2
//
// Explanation:
// [1,1] at index 0-1 sums to 2
// [1,1] at index 1-2 sums to 2
// Total = 2

// 🚫 Rules
// Must be O(n)
// You WILL need a Map here
// Nums can contain negative numbers
// Return the COUNT of subarrays, not the subarrays themselves

// ============================================
// Uncomment everything under (this line) down to the console.log to run code


// const nums = [1, 1, 1]
// const k = 2

// const subArraySum = (nums, k) => {
//   const map = new Map()
//   let runningSum = 0; 
//   let count = 0; 

//   map.set(0, 1)
//   console.log(map)

//   for(let num of nums){
//     //running sum
//     runningSum += num; 
//     console.log('runningSum: ', runningSum)

//     console.log('runningsum - k: ', (runningSum - k))

//     // check if map.has(runningSum - k) → update count ← check FIRST
//     if(map.has(runningSum - k)){
//       count += map.get(runningSum - k)
//       console.log('count in If: ', count)
//     }

//     // add runningSum to map  ← add AFTER
//     map.set(runningSum, (map.get(runningSum) || 0) + 1)
//     console.log('map after adding runningSum: ', map)
//   }

//   return count
// }

// console.log(subArraySum(nums, k))