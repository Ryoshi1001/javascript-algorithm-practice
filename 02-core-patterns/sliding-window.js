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


// const arr = [2, 1, 5, 1, 3, 2]
// const k = 3; 

// const maxSumSubarray = (arr, k) => {
//   let maxSum = 0; 

//   for(let i = 0; i < arr.length - k; i++){
//     let windowSum = 0; 
 
//     for(let j = 0; j < k; j++){
//       windowSum = windowSum + arr[i + j]
//     }

//     if(windowSum > maxSum){
//       maxSum = windowSum
//     }
//   }

//   return maxSum
// }

// console.log(maxSumSubarray(arr, k))



// ============================================
// Algorithm Question 2: Longest Substring Without Repeating Characters
// PROBLEM: Given a string s, find the length of the longest substring without repeating characters.


// ============================================
// SOLUTION: Longest Substring Without Repeating Characters
// ============================================
// Instruction for solution:
// The function finds the longest substring without repeating characters
// Example: 
// Input: s = "pwwkew"
// Output: 3

// Explanation:
// The longest substring is "wke" or "kew"
// Length = 3
// **Constraints:**
// - String contains English letters, digits, symbols, and spaces
// - Return the LENGTH of the longest substring (not the substring itself)
// - Should run in O(n) time with sliding window + Set/Map
// ============================================

// Uncomment everything under (this line) down to the console.log to run code

// const str = 'abcabcbb'

// const lengthOfLongestSubString = (str) => {
//   let map = new Map()
//   let maxLength = 0; 
//   let left = 0; 
  
//   for(let i = 0; i < str.length; i++){
//    //index i is the RIGHT pointer:  no need for : let right = 0
//    //adding str[i] to window?

//    //chheck if already exists in map: 
//    while(map.has(str[i])){
//     //means duplicate found: 
//     ///shrink window from left until duplicate is gone: 
//     map.delete(str[left])
//     left++
//    }

//    //store current char and index in map
//    map.set(str[i], i)

//    //calculate window size and update max
//    let currentLength = i - left + 1; 
   
//    if(currentLength > maxLength){
//     maxLength = currentLength;
//    }
//   }
//   return maxLength; 
// }

// console.log(lengthOfLongestSubString(str))



// ============================================
// Algorithm Question 3: Maximum Sum Subarray of Size K
// PROBLEM: Given an array of positive integers nums and a positive integer target,
//  return the minimum length of a contiguous subarray whose sum is ≥ target.
// If there is no such subarray, return 0.


// ============================================
// My SOLUTION: Minimum Size Subarray Sum
// ============================================
// Instruction for solution:
// Example:
// Input: nums = [2,3,1,2,4,3], target = 7
// Output: 2
// Explanation: [4,3] is the smallest subarray

// Constraints / Expectations
// Must be O(n) → sliding window
// All numbers are positive (this is important 👀)
// You are NOT returning the subarray, just the length

// Visual (super simple)
// nums = [2, 3, 1, 2, 4, 3]

// Case:
// left = 0
// i = 0

// Window:
// [2]

// Length:
// 0 - 0 + 1 = 1 ✅
// ============================================
// Uncomment everything under (this line) down to the console.log to run code

// const nums = [2, 3, 1, 2, 4, 3]
// const target = 7


// const minSizeSubarraySum = (nums, target) => {
//   let left = 0; 
//   // let right = 0 // dont need this right becuase the index i is the right?
//   let windowSum = 0; 
//   let minLength = Infinity; 

//   for(let i = 0; i < nums.length; i++){
//     windowSum += nums[i]

//     while(windowSum >= target){
//       let length = i - left + 1; 
//       minLength = Math.min(minLength, length)
//       windowSum -= nums[left]
//       left++
//     }
//   }

//   if(minLength === Infinity) return 0; 
//   return minLength

// }

// console.log(minSizeSubarraySum(nums, target))



// #3 with console.logs to show flow
// const nums = [2, 3, 1, 2, 4, 3]
// const target = 7

// const minSubSum = (nums, target) => {
// let left = 0; 
// let windowSum = 0; 
// let minLength = Infinity; 

// for(let i = 0; i < nums.length; i++){
//   windowSum += nums[i]
//   console.log('windowsum', windowSum)
//   console.log('numsI outside while', nums[i])
//   console.log('left outside while', left)

// while(windowSum >= target){
//   let length = i - left + 1; 
//   console.log('length inside while', length)
//   minLength = Math.min(minLength, length)
//   console.log('minlength inside while', minLength)
//   windowSum -= nums[left]
//   console.log('windowsum in While', windowSum)
//   left++
//   console.log('left in while', left)
// }
// }

// if(minLength === Infinity){
//   return 0
// }

// return minLength

// } 

// console.log(minSubSum(nums, target))




// ============================================
// Algorithm Question 4: Longest Substring with At Most K Distinct Characters
// PROBLEM: Given a string s and a number k, return the length of the 
// longest substring that contains at most k distinct characters.


// ============================================
// My SOLUTION: Longest Substring with At Most K Distinct Characters
// ============================================
// Example:
// Input: s = "eceba", k = 2  
// Output: 3  
// Explanation: "ece"

// 🚫 Rules
// Must be O(n)
// Use sliding window
// You WILL need a Map here (unlike last problem)
// ============================================
// Uncomment everything under (this line) down to the console.log to run code

// const s = "eceba"
// const k = 2 

// const lengthOfLongestSubstringKDistinct = (s, k) => {
//   let map = new Map()
//   let left = 0; 
//   let maxWindowLength = 0; 

//   for(let i = 0; i < s.length; i++){
//     //add right char to map
//     if(!map.has(s[i])){
//       map.set(s[i], 1)
//     } else{
//       let value = map.get(s[i])
//       map.set(s[i], value + 1)
//     }
//     console.log('map in for loop adding right', map)
  
//     while(map.size > k){
//     console.log('rule:window invalid(map.size > k) starting while loop to shrink window')

//     console.log('s[left] in while', s[left])
//     let value = map.get(s[left])
//     console.log('value s[left] in while', value)
//     map.set(s[left], value -1)
//     console.log('sleft in while after decrement in while', map.get(s[left]))

//     if(map.get(s[left]) === 0){
//       map.delete(s[left])
//       //me sliding window here left ++?
//       console.log('sleft in while after LEFT++ SLIDING WINDOW', s[left])
//       console.log('map in while IF after delete', map)
//       console.log('map size after delete in while', map.size)
//     }  
//     left++  
//     }

//     maxWindowLength = Math.max(maxWindowLength, i - left + 1); 
//     console.log('maxWindowLength after while loop', maxWindowLength)

//   } 
//   return maxWindowLength
// }

// console.log(lengthOfLongestSubstringKDistinct(s, k))


// // production version #4
// Uncomment everything under (this line) down to the console.log to run code production code
// const longestSubDistinctChars = (s, k) => {
//   let map = new Map();
//   let left = 0;
//   let maxWindowLength = 0;

//   for (let i = 0; i < s.length; i++) {
//     // add right character
//     map.set(s[i], (map.get(s[i]) || 0) + 1);

//     // shrink window until valid
//     while (map.size > k) {
//       let leftChar = s[left];

//       // decrement frequency
//       map.set(leftChar, map.get(leftChar) - 1);

//       // remove if frequency becomes 0
//       if (map.get(leftChar) === 0) {
//         map.delete(leftChar);
//       }

//       // move left pointer
//       left++;
//     }

//     // update max AFTER window is valid
//     maxWindowLength = Math.max(maxWindowLength, i - left + 1);
//   }

//   return maxWindowLength;
// };

// const s = "eceba";
// const k = 2;

// console.log(longestSubDistinctChars(s, k));