// ============================================
// JAVASCRIPT ALGORITHM PRACTICE
// 17+ Problems Solved
// ============================================
// NOTE: Solutions are commented out to prevent conflicts
// Uncomment individual solutions to test them
// All code is fully functional
// ============================================


// ============================================
// Question 1 — Array + Hash Map Logic

// You are given an array of integers nums and an integer target.

// Write a JavaScript function that returns the indices of the two numbers such that they add up to target.

// Rules:

// Exactly one valid solution exists

// You may not use the same element twice

// Time complexity should be better than O(n²)

// Example behavior (not code):

// Input: [2, 7, 11, 15], target 9

// Output: [0, 1]



// My Solution

const nums = [2, 7, 11, 15]

const indices = (nums) => {
  let target = 18;
  let map = new Map()

  for(let i = 0; i < nums.length; i++){
    const difference = target - nums[i];
   if(map.has(difference)){
    return [map.get(difference), i]
   } else{
    map.set(nums[i], i)
   }
  }
}

console.log(indices(nums))





// ============================================
// Question 2 — Palindrome Check (JS): Two-pointer / palindrome problem

// Task: Write a function that checks whether a string is a valid palindrome.

// Rules:

// Ignore non-alphanumeric characters

// Ignore case

// Must run in O(n) time

// Do not reverse the string

// No console logs — just return true or false

// Example behavior (not code):

// "A man, a plan, a canal: Panama" → true

// "race a car" → false

// Write just the function in JavaScript.




// My SOLUTION

// const str = "A man, a plan, a canal: Panama"

// const isPalindrome = (str) => {
//   const newString = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
//   let start = 0
//   let end = newString.length -1;

//   while (start < end){
//     if(newString[start] === newString[end]){
//       start ++
//       end --
//     } else{
//       return false
//     }
//   }
//   return true
// }

// console.log(isPalindrome(str))




// ============================================
// Question 3 — Merge Two Sorted Arrays

// Problem:
// Write a function in JavaScript that merges two sorted arrays into a single sorted array.

// Rules:

// Do not use sort()

// Arrays are sorted in ascending order

// You should return a new array with all elements sorted

// Aim for O(n + m) time (n = length of first array, m = length of second)

// Example:

// mergeSorted([1,3,5], [2,4,6]) → [1,2,3,4,5,6]
// mergeSorted([0,2,2], [1,3,4]) → [0,1,2,2,3,4]

// Write the function in JavaScript, clean and working.




// Me Solution:

// const mergeSorted = (arr1, arr2) => {
//   const mergedArrays = [...arr1, ...arr2].sort((a, b) => a - b)
//   return mergedArrays
// }

// console.log(mergeSorted([1,3,5], [2,4,6]))





// ============================================
// Question #4: Maps / counting problem
// Problem: Find First Non-Repeating Character

// Write a function that returns the first character in a string that does not repeat.
// If none exists, return null.

// Example
// firstUniqueChar("leetcode")     // "l"
// firstUniqueChar("aabbcc")       // null
// firstUniqueChar("lovemecode") // "v"

// Rules

// Case-sensitive ("A" ≠ "a")

// Time complexity matters

// Think like a frontend dev handling user input

// ✍️ Your turn
// Write your JavaScript solution.
// Notes to remember:

// Map preserves insertion order → important for “first non-repeating”

// Two passes → first to count, second to find

// .get() / .set() → ensures each character keeps its own count

// Return inside loop → stops at first valid character

// Return null at end → handles case when all characters repeat




// My Solution:
// 👉 Needs: A Map / object (frequency counter) is the correct tool

// const noReaptingCharacter = (str) => {
//   // Create a Map to store each character and its count
//   let map = new Map();

//   // First pass: count occurrences of each character
//   for (let i = 0; i < str.length; i++) {
//     if(!map.has(str[i])){
//       // If character is not in Map yet, set count = 1
//       map.set(str[i], 1)
//     } else if (map.has(str[i])){
//       const value = map.get(str[i]);
//       // If character already in Map, increment its count
//       map.set(str[i], value + 1)
//     }
//   }

//     // Second pass: find the first character with count = 1
//     for (const [key, value] of map){
//       console.log('key for const', key) // Debug: shows each key in insertion order
//       if(value === 1){
//         return key // Return first non-repeating character
//       }
//     }

//     // If no non-repeating character exists, return null
//     return null
// };

// console.log(noReaptingCharacter("leetcode"));






// ============================================
// Question #5: Merge intervals
// Merge Intervals

// You are given an array of intervals where each interval is [start, end]. Merge all overlapping intervals and return an array of the merged intervals.

// Example:

// mergeIntervals([[1,3],[2,6],[8,10],[15,18]])
// // Output: [[1,6],[8,10],[15,18]]

// Rules:

// Intervals can be unsorted

// Intervals overlap if start2 <= end1

// Return intervals sorted by start

// Focus:

// Think about sorting first

// Then merge overlapping intervals efficiently

// Takeaways / what you learned here:
// Use a pointer (current) + loop for merging

// Only push current interval when finished (no overlap)

// Always push the last interval after the loop

// Use Math.max to get the correct merged end

// You’ve basically implemented the standard merge intervals algorithm correctly




// My Solution:
// const mergeIntervals = (arr) => {
//   // sort inner arrays by start: lowest number in first index of each
//   current = arr[0];
//   let result = []

//   for(let i = 0; i < arr.length -1; i++){
//     next = arr[i + 1];
//     if(current[1] >= next[0]){
//       mergedEnd = Math.max(current[1], next[1])
//       current = [current[0], mergedEnd]
//     } else {
//       result.push(current)
//       current = next
//     }
//   }
//   result.push(current)
//   return result
// }

// console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]]))




// ============================================
// Question 6:
// Problem: first double click : firstDoubleClick
// You have an array of numbers representing clicks on buttons in the order they were clicked.
// Return the first number that is clicked exactly twice.

// Example:

// clicks = [3, 5, 2, 3, 4, 5, 2]

// 3 → appears twice first → return 3

// If no number appears twice → return null

// Constraints:

// Try using a Map or object to keep track of counts

// Should work in O(n) time

// Your task:

// Write a function firstDoubleClick(arr)

// Don’t look up the full solution

// Use loops + Map like you practiced before

// Return the first number that appears twice




// My Solution:
// const firstDoubleClick = (arr) => {
//   let map = new Map()

//   for(let i = 0; i < arr.length; i++){
//     if(!map.has(arr[i])){
//       map.set(arr[i], 1)
//     } else if(map.has(arr[i])){
//       const value = map.get(arr[i]);
//       map.set(arr[i], value + 1)
//       if(map.get(arr[i]) === 2){
//         return arr[i]
//       }
//     }
//   }

//   return null;
// }

// console.log(firstDoubleClick([3, 5, 2, 3, 4, 5, 2]))

// chatgpt cleaned version:
// const firstDoubleClick = (arr) => {
//   let map = new Map();

//   for (let num of arr) {
//     let count = map.get(num) || 0;
//     map.set(num, count + 1);
//     if (count + 1 === 2) return num;
//   }

//   return null;
// };




// ============================================
// Question 7:
// Problem: Problem: Find the Missing Number
// Problem: Find the Missing Number

// You are given an array containing n distinct numbers taken from the range 0 to n.

// One number is missing.

// Example:
// nums = [3, 0, 1]

// Output:
// 2

// Rules:

// Only one number is missing

// The array is unsorted

// Use JavaScript

// Try to solve in O(n) time

// You may use:

// loops

// variables

// math

// OR a Map (optional)




// My Solution
// const nums = [3, 0, 1]

// // Function that finds the missing number in an array from 0 to n
// const missingNumber = (nums) => {
//   // Sort the array numerically in ascending order
//   const sortedNums = nums.sort((a, b) => a - b)
//   // Debug: print the sorted array
//   console.log(sortedNums)

//   // If the first number is not 0, then 0 is the missing number
//   if(sortedNums[0] !== 0){
//     return 0
//   }

//   // If the last number is not one greater than the second-to-last,
//   // then the missing number is at the end of the range
//   if(sortedNums[sortedNums.length -1] !== (sortedNums[sortedNums.length - 2] + 1)){
//     return sortedNums[sortedNums.length - 1] + 1
//   }

//   // Loop through the sorted array to find a gap between numbers
//   for(let i = 0; i < sortedNums.length; i++){
//     // Store the current number
//     let current = sortedNums[i];
//     // Store the next number
//     let next = sortedNums[i + 1]
//     console.log('current', current)
//     console.log('next', next)

//     // If there is a gap, the missing number is current + 1
//     if(next !== current + 1){
//       // Calculate the missing number
//       const missing = current + 1
//       console.log('missing', missing)
//       // Return the missing number immediately
//       return missing
//     }
//   }
//   // Fallback return (should not happen if input is valid) BUT in interviews and real code, keeping return null is good defensive programming.
//   return null
// }

// console.log(missingNumber(nums))





// ============================================
// Question 8:
// Problem: Problem: Valid Parentheses

// You are given a string containing only:

// '(', ')', '{', '}', '[' , ']'

// Return true if the string is valid, otherwise return false.

// Rules:

// Open brackets must be closed by the same type

// Open brackets must be closed in the correct order

// Every closing bracket must have a matching open bracket

// Examples:
// "()"        → true
// "()[]{}"    → true
// "(]"        → false
// "([)]"      → false
// "{[]}"      → true

// Function signature:
// const isValid = (str) => {
//   // your code
// }

// Hints (conceptual only):

// This problem typically uses a stack

// You’ll loop through the string one character at a time

// You’ll push opening brackets and match them with closing ones

// 👉 Write your solution in JavaScript.
// When you’re done, paste it here.





// My Solution:
// const str = "()"

// // Function to check if parentheses/brackets are valid
// const validParenthesis = (str) => {
//   // Map of opening brackets to their corresponding closing brackets
//   let bracketObject = {
//     "(": ")",
//     "{": "}",
//     "[": "]"
//   }

//   console.log('bracketObject', bracketObject)

//   // Stack to keep track of expected closing brackets
//   let arr = []

//   // Loop through each character in the input string
//   for(let i = 0; i < str.length; i++){

//     // If current character is an opening bracket
//     if(str[i] === "{" || str[i] === "(" || str[i] === "["){
//       // Push the **expected closing bracket** onto the stack
//       arr.push(bracketObject[str[i]])
//     }

//     // If current character is a closing bracket
//     if(str[i] === "}" || str[i] === ")" || str[i] === "]"){
//       // Check if it matches the top of the stack (expected closing bracket)
//       if(arr[arr.length -1] === str[i]){
//         // Match found → pop it from the stack
//         arr.pop()
//       } else {
//         // Mismatch → immediately return false
//         return false
//       }
//     }
//   }

//   // After looping, if stack is empty → all brackets matched
//   if(arr.length === 0){
//     return true
//   } else{
//     // Stack not empty → some openings never closed
//     return false
//   }

// }

// console.log(validParenthesis(str))





// ============================================
// Question: 9:
// Problem: First Unique Character Index

// You are given a single string made up of lowercase English letters.

// Your task is to return the index (position) of the first character that appears only once in the string.

// Indexing starts at 0

// If no character is unique, return -1

// Requirements

// Time complexity should be efficient (assume the string can be large)

// Do not sort the string

// Do not use regex to “cheat” the problem

// Assume valid input (always a string)

// Example (described, not coded)

// Input: a string where the first letter repeats later, the second letter does not repeat
// → Return the index of that second letter

// Input: a string where every character repeats
// → Return -1

// What I’m evaluating

// Your ability to reason about data structures

// Correct handling of edge cases

// Clean, readable JavaScript logic

// Whether your approach would scale

// Your turn

// Reply with only your JavaScript solution and brief explanation (no React yet).




// My Solution:
// Input string to find the first unique character
// const str = "asasasas";

// // Function to find the index of the first unique character in a string
// const firstUniqueChar = (str) => {
//   // Create a Map to store character counts
//   let map = new Map();

//   // First pass: Loop through each character in the string
//   for(let i = 0; i < str.length; i++){
//     // If the character is not yet in the map, add it with count 1
//     if(!map.has(str[i])){
//       map.set(str[i], 1)
//     } 
//     // If the character is already in the map, increment its count    
//     else if(map.has(str[i])){
//       const value = map.get(str[i]); 
//       map.set(str[i], value + 1)
//     }
//   }

//   // Second pass: Loop through the string to find the first unique character
//   for(let i = 0; i < str.length; i++){
//     // If the current character's count in the map is 1, return its index
//     if(map.get(str[i]) === 1){
//       return i
//     }
//   }

//   // If no unique character is found, return -1
//   return -1
// };

// // Call the function and log the result
// console.log(firstUniqueChar(str));






// ============================================
// Question: 10:
// Problem: Array Pair Sum
// ✅ New Entry-Level Algorithm Question (JavaScript)
// Problem: Array Pair Sum

// You are given:

// An array of integers nums

// An integer target

// Task:

// Return true if any two numbers in the array sum to the target

// Return false otherwise

// Constraints:

// Only one pass through the array (O(n)) preferred

// Do not use nested loops

// Assume the input array can be large

// Example:

// Input: [1, 3, 5, 7], target 8 → returns true (3 + 5 = 8)

// Input: [2, 4, 6], target 11 → returns false

// Evaluation:

// Use proper JavaScript syntax

// Efficient use of data structures (hint: sets or maps)

// Clean and readable

// Reply with your solution in JavaScript — no explanations, no notes, just code.





// My Solution:
// //Create an array of numbers we will search through.
// const nums = [1, 3, 4]
// //Define the target value that two numbers should add up to.
// const target = 8

// //Define a function that accepts an array of numbers.
// const arrayPairSum = (nums) => {
//   //Create an empty Map to store numbers we have already seen.
//   //This allows fast lookups (O(1)).
//   const map = new Map()

//   //Loop through the array one number at a time.
//   for(let i = 0; i < nums.length; i++){
//    //Calculate the number needed to reach the target: needed = target - current number
//    //Check if that needed number already exists in the Map.
//    if(map.has(target - nums[i])){
//     //If the needed number exists:A valid pair has been found. Stop immediately and return true.
//     return true
//     //If the needed number is NOT found yet…
//    }else{
//     //Store the current number in the Map.This makes it available for future comparisons.
//     map.set(nums[i], true)
//    }
//   }
//   //If no valid pair was found after checking all numbers: Return false.
//   return false
// }

// console.log(arrayPairSum(nums))




// ============================================
// Question: 11:
// Problem:Reverse a String
// You are given a string.

// Task:
// Return the string reversed.

// Example:

// Input:  "hello"
// Output: "olleh"


// Constraints:

// You may not use built-in reverse helpers

// Assume the input is always a string

// 👉 Start by explaining how you would approach it, then write the code.




// My Solution: 
// const str = "hello"

// const reverseString = (str) => {
//   let reversedString = ""
//   console.log('string length', str.length -1)
//   //set boundries for for loop: string length - 1 to include starting point of index 0 and iterating while index is less then 0
//   for(let i = str.length - 1; i > -1; i--){
//     console.log(str[i])
//     //concatenating each letter starting from end of the string to the reversedString
//     reversedString += str[i]
//     console.log('newstring adding str[i] each iteration: ', reversedString)
//   }
//   // returning the reversed string after for loop iterates the entire string from the end
//   return reversedString
// }

// console.log(reverseString(str))



// ============================================
// Question: 12:
// Problem: Find largest number in a Array
// You are given an array of numbers.

// Task:
// Return the largest number in the array.

// Example:

// Input:  [3, 7, 2, 9, 4]
// Output: 9


// Constraints:

// Do NOT use Math.max

// Assume the array has at least one number

// 👉 Explain your approach first, then write the code.



// My Solution: 
// const arr = [-10, -3, -20, 3]
// //1 Start function largestNumberInArray with input arr.
// const largestNumberInArray = (arr) => {
//   // Step 2: initialize largestNumber with first element
//   let largestNumber = arr[0] 
//   // Step 3: loop through array
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] > largestNumber){
//       // Step 3a: update largestNumber if current element is bigger
//       largestNumber = arr[i]
//     } 
//   }
//   // Step 4: return the largest number found
//   return largestNumber
// }

// console.log(largestNumberInArray(arr))




// ============================================
// Question: 13:
// Problem: new array with even numbers, ascending order



// My Solution: 
// const arr = [5, 2, 9, 1, 6, 4]

// const newArray = (arr) => {
//   const evenNumbers = []

//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 === 0){
//       evenNumbers.push(arr[i])
//     }
//   }

//   evenNumbers.sort((a, b) => a - b)

//   return evenNumbers
// }

// console.log(newArray(arr))



// ============================================
// Question: 14:
// Problem: palindrome: takes a string and returns true if it is a palindrome (reads the same forwards and backwards), and false otherwise.


// My Solution: 

// const str = "hello"

// const isPalindrome = (str) => {
//   const cleanedString = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
//   const reversedString = cleanedString.split("").reverse().join("")
  
//   return cleanedString === reversedString
// }

// console.log(isPalindrome(str))







// ============================================
// Question: 15:
// Problem: Two Sum


//My Solution: 

// const nums = [7, 11, 2, 15]

// using a Map
// const twoSums = (nums) => {
//   const target = 9; 
//   let map = new Map()

//   for(let i = 0; i < nums.length; i++){
//     const compliment = target - nums[i]
//     if(map.has(compliment)){
//       return [map.get(compliment), i]
//     } else if(!map.has(compliment)){
//       map.set(nums[i], i)
//     }
//     console.log('map', map)
//   }
//   return null
// }

// console.log(twoSums(nums))


//using a nested loop version of twoSum: 
// const twoSumsNested = (nums) => {
//   const target = 9; 

//   for(let i = 0; i < nums.length; i++){
//     for(let j = i + 1; j < nums.length; j++){
//       if(nums[i] + nums[j] === target){
//         return [i, j]
//       }
//     }
//   }

//   return nums
// }

// console.log(twoSumsNested(nums))





// ============================================
// Question: 16:
// Problem: Valid Parentheses



//My Solution: 

// const s = "([)]"

// let bracketObject = {
//   "(": ")",
//   "{": "}",
//   "[": "]",
// }

// const isValid = (s) => {
//   const stack = []

//   for(let i = 0; i < s.length; i++){
//     if(s[i] === "(" || s[i] === "{" || s[i] === "["){
//       stack.push(bracketObject[s[i]])
//     } else{
//       if(stack.length === 0){
//         return false
//       }

//       let popped = stack.pop()

//       if(popped !== s[i]){
//         return false
//       }
//     }
//   }

// if(stack.length === 0){
//   return true
// }


//   return false
// }

// console.log(isValid(s))





// ============================================
// Question: 17:
// Problem: Algorithm Reverse a String



//My Solution: 

// const str = 'JavaScript'

// //✅ Manual approach - You didn't rely on built-in methods, showing you understand the fundamentals
// const reverseString = (str) => {
//   let stringReversed = ''

//   // ✅ Correct loop boundaries - i = str.length - 1 and i > -1 are spot-on
//   for(let i = str.length - 1; i > -1; i--){
//     //✅ String concatenation - Using += to build the result
//     stringReversed+= str[i]
//   }

//   return stringReversed
// }

// console.log(reverseString(str))





// ============================================
// Question: 18:
// Problem: Algorithm  Find the Largest Number in an Array
// By starting with arr[0], you correctly handle:

// ✅ All negative arrays (like [-5, -2, -10])
// ✅ Single element arrays
// ✅ Mixed positive/negative

// If you had started with let largestNumber = 0, it would fail on all-negative arrays!



//My Solution: 

// const arr = [3, 7, 2, 9, 34, 1, -10]

// const largestNumberInArray = (arr) => {
//   let largestNumber = arr[0]

//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] > largestNumber){
//       largestNumber = arr[i]
//     }
//   }

//   return largestNumber
// }

// console.log(largestNumberInArray(arr))