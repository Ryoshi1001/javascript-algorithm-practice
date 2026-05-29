// ============================================
// JAVASCRIPT ALGORITHM PRACTICE:
// Environment: VS Code (Node)
// ============================================
// MIXED FUNDAMENTALS — Arrays, Strings, Loops, HashMaps
// ============================================
// NOTE: Solutions are commented out to prevent conflicts
// To test solutions:
// 1. Run the file to see the output: In VsCode add extension: Code Runner and click "play button"
// ============================================

// ============================================
// These are the building-block patterns every algorithm builds on 🧱
//
// Core patterns covered here:
// 1. Array traversal (single + nested loops) 🔁
// 2. String manipulation 📝
// 3. HashMap / Set lookups for O(1) checks 🗺️
// 4. Array method chaining (filter / map / sort) ⛓️
// 5. Conditional control flow 🚦
//
// Pattern to remember:
//   1. Read the input shape 👀
//   2. Pick the right tool (loop, map, set, chain) 🛠️
//   3. Watch edge cases (empty, negatives, duplicates) ⚠️
// ============================================


// ============================================
// Algorithm Question 1: Flatten Nested Array (One Level)
// PROBLEM: Given an array that may contain nested arrays, flatten it one level deep.
// ============================================

// ============================================
// SOLUTION: Flatten Nested Array
// ============================================
// Example:
// Input:  [1, [2, 3], [4, [5, 6]], 7]
// Output: [1, 2, 3, 4, [5, 6], 7]
//
// Explanation:
// Loop through the outer array. If an item is itself an array,
// loop through it and push its items. Otherwise push the item directly.
// Nested arrays deeper than one level stay as arrays.
//
// 🚫 Rules
// Only flattens one level deep
// Use Array.isArray() to detect nested arrays
// Time: O(n) where n = total items across all levels

// ============================================
// Uncomment everything under (this line) down to the console.log to run code

// const flatten = (arr) => {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       for (let j = 0; j < arr[i].length; j++) {
//         result.push(arr[i][j]);
//       }
//     } else {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// };

// console.log(flatten([1, [2, 3], [4, [5, 6]], 7]));
// Expected: [1, 2, 3, 4, [5, 6], 7]



// ============================================
// Algorithm Question 2: Reverse a String
// PROBLEM: Given a string, return the string reversed.
// ============================================

// ============================================
// SOLUTION: Reverse a String
// ============================================
// Example:
// Input:  "hello"
// Output: "olleh"
//
// Explanation:
// Loop from the end of the string backwards and build a new string.
// One-liner alternative: str.split('').reverse().join('')
//
// 🚫 Rules
// No built-in reverse (for the loop version)
// Time: O(n), Space: O(n)

// ============================================
// Uncomment everything under (this line) down to the console.log to run code

// const reverseString = (str) => {
//   let newString = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     newString += str[i];
//   }
//   return newString;
// };

// console.log(reverseString("hello"));
// Expected: "olleh"



// ============================================
// Algorithm Question 3: Count Vowels
// PROBLEM: Count the number of vowels in a string (case-insensitive).
// ============================================

// ============================================
// SOLUTION: Count Vowels
// ============================================
// Example:
// Input:  "hello world"
// Output: 3
//
// Explanation:
// Lowercase the string, then walk through each character.
// Use "aeiou".includes(char) — cleaner than chaining || checks.
//
// 🚫 Rules
// Case-insensitive
// Only counts a, e, i, o, u (not y)
// Time: O(n), Space: O(1)

// ============================================
// Uncomment everything under (this line) down to the console.log to run code

// const countVowels = (str) => {
//   const lower = str.toLowerCase();
//   let count = 0;
//   for (let i = 0; i < lower.length; i++) {
//     if ("aeiou".includes(lower[i])) {
//       count++;
//     }
//   }
//   return count;
// };

// console.log(countVowels("hello world"));
// Expected: 3



// ============================================
// Algorithm Question 4: Find Max in Array
// PROBLEM: Return the largest number in an array. Must handle all-negative arrays.
// ============================================

// ============================================
// SOLUTION: Find Max
// ============================================
// Example:
// Input:  [-3, -7, -2, -9, -4, -1]
// Output: -1
//
// Explanation:
// Initialize max with -Infinity (NOT 0 — that breaks on all-negative arrays).
// Walk the array, update max whenever a larger number is found.
// Built-in alternative: Math.max(...arr)
//
// 🚫 Rules
// Must handle negative numbers correctly
// Time: O(n), Space: O(1)

// ============================================
// Uncomment everything under (this line) down to the console.log to run code

// const findMax = (arr) => {
//   let max = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// };

// console.log(findMax([-3, -7, -2, -9, -4, -1]));
// Expected: -1



// ============================================
// Algorithm Question 5: Palindrome Check
// PROBLEM: Determine if a string is a palindrome, ignoring spaces and case.
// ============================================

// ============================================
// SOLUTION: Palindrome Check
// ============================================
// Example:
// Input:  "A man a plan a canal Panama"
// Output: true
//
// Explanation:
// 1. Strip whitespace and lowercase the string
// 2. Reverse it
// 3. Compare cleaned vs reversed
//
// 🚫 Rules
// Ignore spaces and casing
// Time: O(n), Space: O(n)

// ============================================
// Uncomment everything under (this line) down to the console.log to run code

// const isPalindrome = (str) => {
//   const cleaned = str.replace(/\s/g, '').toLowerCase();
//   const reversed = cleaned.split("").reverse().join("");
//   return cleaned === reversed;
// };

// console.log(isPalindrome("A man a plan a canal Panama"));
// Expected: true



// ============================================
// Algorithm Question 6: Remove Duplicates from Array
// PROBLEM: Given an array, return a new array with duplicates removed (preserve order).
// ============================================

// ============================================
// SOLUTION: Remove Duplicates
// ============================================
// Example:
// Input:  [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]
//
// Explanation:
// Walk the array. Push to result only if it's not already there.
// One-liner alternative: [...new Set(arr)]
//
// 🚫 Rules
// Must preserve original order
// Time: O(n²) with .includes() — fine for small arrays
// Time: O(n) with a Set — better for large arrays

// ============================================
// Uncomment everything under (this line) down to the console.log to run code

// const removeDuplicates = (arr) => {
//   const newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!newArray.includes(arr[i])) {
//       newArray.push(arr[i]);
//     }
//   }
//   return newArray;
// };

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
// Expected: [1, 2, 3, 4, 5]



// ============================================
// Algorithm Question 7: Filter, Transform, Sort Users
// PROBLEM: Given a list of users, return only active users,
// transform them into { fullName, email }, and sort alphabetically by fullName.
// ============================================

// ============================================
// SOLUTION: Filter, Transform, Sort (Method Chaining)
// ============================================
// Example:
// Input:
//   [
//     { firstName: "Carlos", lastName: "Mendes", email: "carlos@email.com", active: true },
//     { firstName: "Anna",   lastName: "Smith",  email: "anna@email.com",   active: false },
//     { firstName: "Zoe",    lastName: "Park",   email: "zoe@email.com",    active: true  },
//     { firstName: "Brian",  lastName: "Lee",    email: "brian@email.com",  active: true  },
//   ]
// Output:
//   [
//     { fullName: "Brian Lee",     email: "brian@email.com" },
//     { fullName: "Carlos Mendes", email: "carlos@email.com" },
//     { fullName: "Zoe Park",      email: "zoe@email.com" },
//   ]
//
// Explanation:
// Pipeline pattern:
//   .filter() → keep only active users
//   .map()    → reshape each user into { fullName, email }
//   .sort()   → sort by fullName using localeCompare
//
// 🚫 Rules
// Use array methods (no manual loops needed)
// Use localeCompare for proper string sorting
// Time: O(n log n) due to sort

// ============================================
// Uncomment everything under (this line) down to the console.log to run code

// const filterAndTransform = (users) => {
//   return users
//     .filter((user) => user.active)
//     .map((user) => ({
//       fullName: user.firstName + " " + user.lastName,
//       email: user.email,
//     }))
//     .sort((a, b) => a.fullName.localeCompare(b.fullName));
// };

// const users = [
//   { firstName: "Carlos", lastName: "Mendes", email: "carlos@email.com", active: true },
//   { firstName: "Anna",   lastName: "Smith",  email: "anna@email.com",   active: false },
//   { firstName: "Zoe",    lastName: "Park",   email: "zoe@email.com",    active: true },
//   { firstName: "Brian",  lastName: "Lee",    email: "brian@email.com",  active: true },
//   { firstName: "Anna",   lastName: "Young",  email: "ayoung@email.com", active: false },
// ];

// console.log(filterAndTransform(users));
// Expected: Brian Lee, Carlos Mendes, Zoe Park (in that order)



// ============================================
// Algorithm Question 8: Find First Duplicate (HashMap Pattern)
// PROBLEM: Return the first duplicate value in an array. If no duplicates exist, return -1.
// ============================================

// ============================================
// SOLUTION: First Duplicate
// ============================================
// Example:
// Input:  [3, 1, 4, 2, 1, 5]
// Output: 1
//
// Input:  [1, 2, 3]
// Output: -1
//
// Explanation:
// Walk the array and track seen values in a Map (or Set).
// If we hit a value we've already seen → return it.
// Otherwise mark it as seen.
// If the loop finishes with no duplicates → return -1.
//
// 🚫 Rules
// Return the FIRST duplicate found (not the most common)
// Time: O(n), Space: O(n)

// ============================================
// Uncomment everything under (this line) down to the console.log to run code

// const findDuplicate = (arr) => {
//   const map = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     if (!map.has(arr[i])) {
//       map.set(arr[i], true);
//     } else {
//       return arr[i];
//     }
//   }
//   return -1;
// };

// console.log(findDuplicate([3, 1, 4, 2, 1, 5]));
// Expected: 1

// console.log(findDuplicate([1, 2, 3]));
// Expected: -1



// ============================================
// Algorithm Question 9: Reverse Words in a Sentence
// PROBLEM: Reverse the order of words in a sentence (not the characters).
// ============================================

// ============================================
// SOLUTION: Reverse Words
// ============================================
// Example:
// Input:  "hello world foo"
// Output: "foo world hello"
//
// Input:  "one"
// Output: "one"
//
// Explanation:
// Split on spaces → reverse the array of words → join back with spaces.
// Single-word input handles itself (split returns ["one"]).
//
// 🚫 Rules
// Reverse word order, not characters within each word
// Time: O(n), Space: O(n)

// ============================================
// Uncomment everything under (this line) down to the console.log to run code

// const reverseWords = (words) => {
//   return words.split(" ").reverse().join(" ");
// };

// console.log(reverseWords("hello world foo"));
// Expected: "foo world hello"

// console.log(reverseWords("one"));
// Expected: "one"



// ============================================
// Algorithm Question 10: FizzBuzz
// PROBLEM: For numbers 1..n, print:
//   - "FizzBuzz" if divisible by 3 AND 5
//   - "Fizz"     if divisible by 3
//   - "Buzz"     if divisible by 5
//   - the number otherwise
// ============================================

// ============================================
// SOLUTION: FizzBuzz
// ============================================
// Example:
// Input:  15
// Output: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz
//
// Explanation:
// Classic divisibility check using the modulo (%) operator.
// IMPORTANT: Check `% 15` (or `% 3 && % 5`) FIRST.
// If you check `% 3` first, you'll never reach the FizzBuzz branch.
//
// 🚫 Rules
// Order of conditions matters
// Time: O(n), Space: O(n) for the output string

// ============================================
// Uncomment everything under (this line) down to the console.log to run code

// const fizzBuzz = (n) => {
//   let answer = "";
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       answer += "FizzBuzz, ";
//     } else if (i % 3 === 0) {
//       answer += "Fizz, ";
//     } else if (i % 5 === 0) {
//       answer += "Buzz, ";
//     } else {
//       answer += i + ", ";
//     }
//   }
//   return answer;
// };

// console.log(fizzBuzz(15));
// Expected: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz



// ============================================
// 🚧 IN PROGRESS / TO REVISIT
// ============================================
// Group employees by department (groupByDepartment) — pattern is a reduce()
// that builds an object keyed by department, value = array of employees.
// Stub from earlier session; needs implementation.
// ============================================



// ============================================
// Question 11: Two Sum
// ============================================
// PROBLEM: Given an array of integers and a target number,
// return the indices of the two numbers that add up to the target.
//
// You may assume there is exactly one valid solution,
// and you cannot use the same element twice.
//
// Example:
// Input:  nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// (because nums[0] + nums[1] === 2 + 7 === 9)
//
// Input:  nums = [3, 2, 4], target = 6
// Output: [1, 2]
//
// 🚫 Rules
// - Return the indices, not the values
// - Each input has exactly one solution
// - You cannot use the same element twice (i.e. not the same index)
//
// Think about: can you do better than checking every pair?

// ============================================
// Uncomment everything under (this line) down to the console.log to run code

// const twoSum = (nums, target) => {
//   let map = new Map()
//   for(let i = 0; i < nums.length; i++){
//     let compliment = target - nums[i]
//     if(map.has(compliment)){
//       return [map.get(compliment), i]
//     }
//     map.set(nums[i], i)
//   }
// }

// console.log(twoSum([2, 7, 11, 15], 9));
// Expected: [0, 1]
// console.log(twoSum([3, 2, 4], 6));
// Expected: [1, 2]



// ============================================
// Question 12: Move Zeros to End
// ============================================
// PROBLEM: Given an array of numbers, move all the zeros to the END
// of the array while keeping the relative order of the non-zero numbers.
//
// Example:
// Input:  [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]
//
// Input:  [0, 0, 1]
// Output: [1, 0, 0]
//
// Input:  [4, 2, 5]
// Output: [4, 2, 5]   (no zeros — unchanged)
//
// Input:  [0, 0, 0]
// Output: [0, 0, 0]
//
// 🚫 Rules
// - Non-zero numbers must keep their original relative order
// - Zeros all go to the end
// - Returning a new array is fine (no in-place requirement)
//
// Think about: what's the simplest way to separate two groups
// of things while preserving order?

// ============================================
// Uncomment everything under (this line) down to the console.log to run code

// const moveZeros = (nums) => {
//   const nonzeros = []
//   const zeros = []
//   for(let i = 0; i < nums.length; i++){
//     if(nums[i] === 0){
//       zeros.push(nums[i])
//     } else{
//       nonzeros.push(nums[i])
//     }
//   }
//   return [...nonzeros, ...zeros]
// };

// console.log(moveZeros([0, 1, 0, 3, 12]));
// Expected: [1, 3, 12, 0, 0]
// console.log(moveZeros([0, 0, 1]));
// Expected: [1, 0, 0]
// console.log(moveZeros([4, 2, 5]));
// Expected: [4, 2, 5]


// ============================================
// Question 13: Most Frequent Element
// ============================================
// PROBLEM: Given an array, return the element that appears the most times.
// If there's a tie, return the one that reached its highest count FIRST
// while scanning left to right.
//
// Example:
// Input:  [1, 3, 1, 3, 2, 1]
// Output: 1   (appears 3 times)
//
// Input:  ["a", "b", "a", "c", "b"]
// Output: "a"   (a and b both appear twice — "a" hit count 2 first)
//
// Input:  [7]
// Output: 7
//
// 🚫 Rules
// - Works for numbers OR strings
// - On a tie, the element that REACHED the top count earliest wins
// - Assume the array always has at least one element
//
// Think about: you need two things — a count of each element,
// and a way to track the current winner as you go.

// ============================================
// Uncomment everything under (this line) down to the console.log to run code

// const mostFrequent = (arr) => {
//   const map = new Map()
//   let winner = ''
//   let bestCount = 0

//   for(let i = 0; i < arr.length; i++){
//     if(map.has(arr[i])){
//       const value = map.get(arr[i])
//       map.set(arr[i], value + 1)
//       console.log('map value has', arr[i], 'added to map', map)
//     } else{
//       map.set(arr[i], 1)
//     }

//     if(map.get(arr[i]) > bestCount){
//       winner = arr[i]
//       bestCount = map.get(arr[i])
//     }
//   }
//   return winner

// };

// console.log(mostFrequent([1, 3, 1, 3, 2, 1]));
// Expected: 1
// console.log(mostFrequent(["a", "b", "a", "c", "b"]));
// Expected: "a"
// console.log(mostFrequent([7]));
// Expected: 7


// ============================================
// Question 14: Group Numbers by Even / Odd
// ============================================
// PROBLEM: Given an array of numbers, return an object with two keys:
// "even" and "odd". Each key holds an array of the numbers that
// belong to that group, in their original order.
//
// Example:
// Input:  [1, 2, 3, 4, 5, 6]
// Output: { even: [2, 4, 6], odd: [1, 3, 5] }
//
// Input:  [7, 7, 8]
// Output: { even: [8], odd: [7, 7] }
//
// Input:  []
// Output: { even: [], odd: [] }
//
// 🚫 Rules
// - Both "even" and "odd" keys must always exist, even if empty
// - Preserve the original order within each group
// - Assume all inputs are whole numbers (no decimals)
//
// Think about: the result object should already have both
// empty arrays ready BEFORE the loop starts.

// ============================================
// Uncomment everything under (this line) down to the console.log to run code

// const groupEvenOdd = (nums) => {
//   const obj = {even: [], odd: []}
//   for(let i = 0; i < nums.length; i++){
//     if(nums[i] % 2 === 0){
//       obj.even.push(nums[i])
//     } else{
//       obj.odd.push(nums[i])
//     }
//   }
//   return obj
// };

// console.log(groupEvenOdd([1, 2, 3, 4, 5, 6]));
// Expected: { even: [2, 4, 6], odd: [1, 3, 5] }
// console.log(groupEvenOdd([7, 7, 8]));
// Expected: { even: [8], odd: [7, 7] }
// console.log(groupEvenOdd([]));
// Expected: { even: [], odd: [] }


// ============================================
// Question 15: Running Sum of an Array
// ============================================
// PROBLEM: Given an array of integers, return a new array where each
// element is the running sum of all elements up to and including
// that index.
//
// The element at index 0 is just nums[0]. The element at index 1 is
// nums[0] + nums[1]. The element at index i is the sum of every
// number from index 0 through i.
//
// Example:
// Input:  [1, 2, 3, 4]
// Output: [1, 3, 6, 10]
//
// Input:  [5, -2, 3]
// Output: [5, 3, 6]
//
// Input:  []
// Output: []
//
// 🚫 Rules
// - Return a NEW array; do not mutate the input
// - Negative numbers are valid input
// - An empty input array returns an empty array
//
// Think about: you only need to track one number as you go —
// the sum so far — rather than re-adding earlier elements each time.

// ============================================
// Uncomment everything under (this line) down to the console.log to run code

// const runningSum = (nums) => {
//   let runningSum = 0
//   const newArray = []
//   for(let i = 0; i < nums.length; i++){
//     runningSum = runningSum + nums[i]
//     newArray.push(runningSum)
//   }
//   return newArray
// };

// console.log(runningSum([1, 2, 3, 4]));
// Expected: [1, 3, 6, 10]
// console.log(runningSum([5, -2, 3]));
// Expected: [5, 3, 6]
// console.log(runningSum([]));
// Expected: []


// ============================================
// Question 16: Sum of Even Numbers
// ============================================
// PROBLEM: Given an array of integers, return the sum of only the
// even numbers in the array.
//
// If there are no even numbers, return 0.
//
// Example:
// Input:  [1, 2, 3, 4, 5, 6]
// Output: 12        (2 + 4 + 6)
//
// Input:  [1, 3, 5]
// Output: 0         (no even numbers)
//
// Input:  [-4, -3, 2]
// Output: -2        (-4 + 2)
//
// Input:  []
// Output: 0
//
// 🚫 Rules
// - Return a single number, not an array
// - Negative even numbers count as even (e.g. -4 is even)
// - An empty array returns 0
//
// Think about: this is an accumulator problem like the last one,
// but with a condition deciding whether each element gets added.

// ============================================
// Uncomment everything under (this line) down to the console.log to run code

// const sumEvens = (nums) => {
//   let result = 0

//   for(let i = 0; i < nums.length; i++){
//     if(nums[i] % 2 === 0){
//       result = result + nums[i]
//     }
//   }

//   return result 
// };

// console.log(sumEvens([1, 2, 3, 4, 5, 6]));
// Expected: 12
// console.log(sumEvens([1, 3, 5]));
// Expected: 0
// console.log(sumEvens([-4, -3, 2]));
// Expected: -2
// console.log(sumEvens([]));
// Expected: 0


// ============================================
// Question 17: Count Words in a Sentence
// ============================================
// PROBLEM: Given a string containing words separated by single
// spaces, return the number of words in it.
//
// A word is any sequence of characters between spaces.
//
// Example:
// Input:  "the quick brown fox"
// Output: 4
//
// Input:  "hello"
// Output: 1
//
// Input:  ""
// Output: 0
//
// 🚫 Rules
// - Assume words are separated by exactly one space
// - An empty string has 0 words
// - Return a number
//
// Think about: there is a string method that turns a string into
// an array by cutting it at a chosen character. What does that
// give you for the empty-string case? Test it — the empty case
// may surprise you.

// ============================================
// Uncomment everything under (this line) down to the console.log to run code

// const countWords = (str) => {
//  if(str === ''){
//   return 0
//  }
//  return str.split(" ").length
// };

// console.log(countWords("the quick brown fox"));
// Expected: 4
// console.log(countWords("hello"));
// Expected: 1
// console.log(countWords(""));
// Expected: 0


// ============================================
// Question 18: Find the Index of a Target
// ============================================
// PROBLEM: Given an array of numbers and a target number, return
// the index of the first time the target appears in the array.
// If the target is not in the array at all, return -1.
//
// Example:
// Input:  [4, 8, 15, 16, 23], target 15
// Output: 2
//
// Input:  [1, 2, 3], target 9
// Output: -1
//
// Input:  [5, 5, 5], target 5
// Output: 0
//
// Input:  [], target 1
// Output: -1
//
// 🚫 Rules
// - Return the FIRST matching index if the target appears more than once
// - Return -1 if the target is not found
// - Do not use the built-in indexOf method — write the search yourself
// - An empty array returns -1
//
// Think about: what should happen the moment you find a match,
// and what should happen if the loop finishes without ever
// finding one.

// ============================================
// Uncomment everything under (this line) down to the console.log to run code

// const findIndex = (arr, target) => {
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] === target){
//       return i
//     }
//   }

//   return -1
// };

// console.log(findIndex([4, 8, 15, 16, 23], 15));
// Expected: 2
// console.log(findIndex([1, 2, 3], 9));
// Expected: -1
// console.log(findIndex([5, 5, 5], 5));
// Expected: 0
// console.log(findIndex([], 1));
// Expected: -1



// ============================================
// Question 19: Second Largest Number
// ============================================
// PROBLEM: Given an array of numbers, return the second largest
// number in it.
//
// Example:
// Input:  [3, 1, 4, 1, 5, 9, 2, 6]
// Output: 6
//
// Input:  [10, 20]
// Output: 10
//
// Input:  [7, 7, 7, 5]
// Output: 5
//
// 🚫 Rules
// - "Second largest" means the second-highest distinct value.
//   In [7, 7, 7, 5], the largest is 7 and the second largest is 5.
// - You may assume the array has at least two distinct values.
// - Do not sort the array — find it with a single pass if you can.
//
// Think about: you are tracking TWO things as you move through
// the array, and they have a relationship to each other that
// has to stay true on every step.

// ============================================
// Uncomment everything under (this line) down to the console.log to run code

// const secondLargest = (nums) => {
//   let largest = -Infinity; 
//   let secondLargest = -Infinity;
//   for(let i = 0; i < nums.length; i++){
//     console.log('largest: ', largest)
//     console.log('secondLargest: ', secondLargest)
//     if(nums[i] > largest){
//       secondLargest = largest
//       largest = nums[i]
//     } else if(nums[i] < largest && nums[i] > secondLargest){
//       secondLargest = nums[i]
//     } 
//   }

//   return secondLargest
// };

// console.log(secondLargest([-5, -2, -8]))
// Expected: -5
// console.log(secondLargest([3, 1, 4, 1, 5, 9, 2, 6]));
// Expected: 6
// console.log(secondLargest([10, 20]));
// Expected: 10
// console.log(secondLargest([7, 7, 7, 5]));
// Expected: 5


// ============================================
// Question 20: Are Two Strings Anagrams?
// ============================================
// PROBLEM: Given two strings, return true if they are anagrams of
// each other, and false if they are not.
//
// Two strings are anagrams if they contain exactly the same
// characters in the same quantities, just possibly in a
// different order.
//
// Example:
// Input:  "listen", "silent"
// Output: true
//
// Input:  "hello", "world"
// Output: false
//
// Input:  "aabb", "ab"
// Output: false
//
// Input:  "", ""
// Output: true
//
// 🚫 Rules
// - Same characters AND same counts. "aabb" and "ab" are NOT
//   anagrams — count matters, not just which letters appear.
// - Assume lowercase letters only, no spaces or punctuation.
// - Two empty strings are anagrams of each other.
//
// Think about: before you compare anything in detail, there is
// one quick check that can rule out a huge number of pairs
// instantly. And think about what "same characters in same
// quantities" really means — what structure lets you count
// things?

// ============================================
// Uncomment everything under (this line) down to the console.log to run code

// const isAnagram = (a, b) => {
//   if(a.length !== b.length){
//     return false
//   }

//   return a.split("").sort().join("") === b.split("").sort().join("")

// };

// console.log(isAnagram("listen", "silent"));
// Expected: true
// console.log(isAnagram("hello", "world"));
// Expected: false
// console.log(isAnagram("aabb", "ab"));
// Expected: false
// console.log(isAnagram("", ""));
// Expected: true


// ============================================
// Question 21: First Non-Repeating Character
// ============================================
// PROBLEM: Given a string, return the first character that appears
// exactly once in it. If every character repeats, return null.
//
// Example:
// Input:  "leetcode"
// Output: "l"
//
// Input:  "aabbcc"
// Output: null        (every character repeats)
//
// Input:  "aabbc"
// Output: "c"
//
// Input:  "z"
// Output: "z"
//
// 🚫 Rules
// - "First" means earliest by position in the original string.
// - If no character appears exactly once, return null.
// - Assume lowercase letters only.
// - A single-character string returns that character.
//
// Think about: you need to know how many times EACH character
// appears before you can decide which is first-and-unique. That
// usually means two passes over the data — one to gather
// information, one to make the decision.

// ============================================
// Uncomment everything under (this line) down to the console.log to run code

// const firstUnique = (str) => {
//   const map = new Map()

//   for(let i = 0; i < str.length; i++){
//     if(!map.has(str[i])){
//       map.set(str[i], 1)
//     } else{
//       const value = map.get(str[i])
//       map.set(str[i], value + 1)
//     }
//   }

//   for(let i = 0; i < str.length; i++){
//     if(map.get(str[i]) === 1){
//       return str[i]
//     }
//   }

//   return null
// };

// console.log(firstUnique("leetcode"));
// Expected: "l"
// console.log(firstUnique("aabbcc"));
// Expected: null
// console.log(firstUnique("aabbc"));
// Expected: "c"
// console.log(firstUnique("z"));
// Expected: "z"


// ============================================
// Interview Question 22: Valid Parentheses (Simple Version)
// ============================================
// PROBLEM: Given a string containing only the characters '(' and ')',
// determine if the parentheses are balanced.
//
// A string is balanced when:
//   - Every '(' has a matching ')' that comes after it
//   - Every ')' has a matching '(' that came before it
//
// Example:
// Input:  "(())"
// Output: true
//
// Input:  "(()"
// Output: false      (one '(' never gets closed)
//
// Input:  ")("
// Output: false      (')' appears before any '(' opens)
//
// Input:  ""
// Output: true       (empty string is technically balanced)
//
// Input:  "()()()"
// Output: true
//
// 🚫 Rules
// - Input only contains '(' and ')' — no other characters
// - Return a boolean (true or false)
// - An empty string is considered balanced
//
// Think about: you need to track how many "open" parens are
// currently unclosed as you walk the string. What number can
// never be valid mid-string?

// ============================================
// Uncomment everything under (this line) down to the console.log to run code

// WRITE YOUR SOLUTION HERE
// const isBalanced = (str) => {
//   const stack = []

//   for(let i = 0; i < str.length; i++){
//     if(str[i] === "("){
//       stack.push(str[i])
//     } else{
//       if(stack.length === 0) return false
//       stack.pop()
//     }
//   }

//   return stack.length === 0 
// }

// console.log(isBalanced("(())"));
// Expected: true
// console.log(isBalanced("(()"));
// Expected: false
// console.log(isBalanced(")("));
// Expected: false
// console.log(isBalanced(""));
// Expected: true
// console.log(isBalanced(")"));
// Expected: false
// console.log(isBalanced("()()()"));
// Expected: true



// ============================================
// Interview Question 23: Merge Two Sorted Arrays
// ============================================
// PROBLEM: Given two arrays that are each already sorted in
// ascending order, return a single new array containing all the
// elements from both, also sorted in ascending order.
//
// Example:
// Input:  [1, 3, 5], [2, 4, 6]
// Output: [1, 2, 3, 4, 5, 6]
//
// Input:  [1, 2, 3], [4, 5, 6]
// Output: [1, 2, 3, 4, 5, 6]
//
// Input:  [], [1, 2, 3]
// Output: [1, 2, 3]
//
// Input:  [1, 1, 2], [1, 3]
// Output: [1, 1, 1, 2, 3]
//
// Input:  [], []
// Output: []
//
// 🚫 Rules
// - Both inputs are guaranteed to already be sorted ascending
// - Duplicates are allowed and should all appear in the output
// - Do NOT just concat and call .sort() — that throws away the
//   fact that the inputs are already sorted. Solve it in a way
//   that takes advantage of the sorted order.
// - Return a NEW array; do not mutate either input
//
// Think about: if you stand at the front of both arrays at the
// same time, which one do you take from on each step? What
// happens when one of the two runs out before the other?

// ============================================
// Uncomment everything under (this line) down to the console.log to run code

// WRITE YOUR SOLUTION HERE
// const mergeSorted = (arr1, arr2) => {
//   let pointer1 = 0
//   let pointer2 = 0
//   const result = []

//   while (pointer1 < arr1.length && pointer2 < arr2.length){
//     if(arr1[pointer1] <= arr2[pointer2]){
//       result.push(arr1[pointer1])
//       pointer1++
//     } else{
//       result.push(arr2[pointer2])
//       pointer2++
//     }
//   }

//   // clean up arrays with while loops
//   while (pointer1 < arr1.length){
//     result.push(arr1[pointer1])
//     pointer1++
//   }

//   while (pointer2 < arr2.length){
//     result.push(arr2[pointer2])
//     pointer2++
//   }

//   return result
// }

// console.log(mergeSorted([1, 3, 5], [2, 4, 6]));
// Expected: [1, 2, 3, 4, 5, 6]
// console.log(mergeSorted([1, 2, 3], [4, 5, 6]));
// Expected: [1, 2, 3, 4, 5, 6]
// console.log(mergeSorted([], [1, 2, 3]));
// Expected: [1, 2, 3]
// console.log(mergeSorted([1, 1, 2], [1, 3]));
// Expected: [1, 1, 1, 2, 3]
// console.log(mergeSorted([], []));
// Expected: []



// ============================================
// Interview Question 24: Character Frequency Map
// ============================================
// PROBLEM: Given a string, return an object where each key is a
// character from the string and each value is the number of times
// that character appears.
//
// Spaces should be counted just like any other character. The
// comparison is case-sensitive: "A" and "a" are different keys.
//
// Example:
// Input:  "hello"
// Output: { h: 1, e: 1, l: 2, o: 1 }
//
// Input:  "aA"
// Output: { a: 1, A: 1 }
//
// Input:  "a b a"
// Output: { a: 2, " ": 2, b: 1 }
//
// Input:  ""
// Output: {}
//
// 🚫 Rules
// - Case-sensitive (do NOT lowercase the input)
// - Count every character including spaces
// - Return a plain object, not a Map
// - An empty string returns an empty object
//
// Think about: this is the classic "count things" pattern. You
// have seen it before in your notes (firstUnique, mostFrequent).
// The only twist is the return shape — plain object instead of
// a Map.

// ============================================
// Uncomment everything under (this line) down to the console.log to run code

// WRITE YOUR SOLUTION HERE
// const charFrequency = (str) => {
//   const plainObject = {}
//   for(let i = 0; i < str.length; i++){
//     console.log('str length', str.length)
//     if(!(str[i] in plainObject)){
//       plainObject[str[i]] = 1
//     } else{
//       plainObject[str[i]] = plainObject[str[i]] + 1
//     }
//     console.log('plain object key value', plainObject[str[i]])
//   }
//   return plainObject
  
// }

// console.log(charFrequency("hello"));
// Expected: { h: 1, e: 1, l: 2, o: 1 }
// console.log(charFrequency("aA"));
// Expected: { a: 1, A: 1 }
// console.log(charFrequency("a b a"));
// Expected: { a: 2, " ": 2, b: 1 }
// console.log(charFrequency(""));
// Expected: {}


// ============================================
// Interview Question 25: Longest Substring Without Repeating Characters
// 🧠 Pattern: sliding window + Set + while-shrink
// ============================================
// PROBLEM: Given a string, return the LENGTH of the longest
// substring that contains no repeating characters.
//
// A substring is a contiguous slice of the string — you cannot
// skip characters to build it.
//
// Example:
// Input:  "abcabcbb"
// Output: 3
// (the longest unique substring is "abc")
//
// Input:  "bbbbb"
// Output: 1
// (the longest unique substring is "b")
//
// Input:  "pwwkew"
// Output: 3
// (the longest unique substring is "wke" — note: "pwke" is NOT a
//  substring because it skips a character)
//
// Input:  ""
// Output: 0
//
// Input:  "abcdef"
// Output: 6
// (the whole string has no repeats)
//
// Input:  "dvdf"
// Output: 3
// (the longest unique substring is "vdf")
//
// 🚫 Rules
// - Return a NUMBER (the length), not the substring itself
// - Substrings must be contiguous (no gaps)
// - Case-sensitive ("A" and "a" are different characters)
// - Spaces count as characters
// - An empty string returns 0
//
// Think about: you are walking through the string with a "window"
// of characters that is currently valid (no repeats). When you
// hit a character that breaks the rule, what does the window do?
// Does it reset entirely, or does it shrink from one side until
// it is valid again?
//
// Also think: you need a fast way to know whether a character is
// already inside the current window. What data structure gives
// you that in O(1)?

// ============================================
// Uncomment everything under (this line) down to the console.log to run code

// WRITE YOUR SOLUTION HERE
// const longestUniqueSubstring = (str) => {
//   const window = new Set()
//   let left = 0; 
//   let maxLength = 0; 

//   console.log('window set: ', window)

//   for(let right = 0; right < str.length; right++){
//     console.log(right)
//     console.log(str[right])

//     console.log('window', window)

//     console.log("string left: ", str[left])

//     while(window.has(str[right])){
//       window.delete(str[left])
//       left++
//     }

//     window.add(str[right])


//     let currentWindow = right - left + 1

//     if(currentWindow > maxLength){
//       maxLength = currentWindow
//     }
//   }

//   return maxLength

// }

// console.log(longestUniqueSubstring("abcabcbb"));
// Expected: 3
// console.log(longestUniqueSubstring("bbbbb"));
// Expected: 1
// console.log(longestUniqueSubstring("pwwkew"));
// Expected: 3
// console.log(longestUniqueSubstring(""));
// Expected: 0
// console.log(longestUniqueSubstring("abcdef"));
// Expected: 6
// console.log(longestUniqueSubstring("dvdf"));
// Expected: 3


// ============================================
// Interview Question 26: Group Anagrams
// 🧠 Pattern: Map + sorted-string signature
// ============================================
// PROBLEM: Given an array of strings, group together the strings
// that are anagrams of each other. Return an array of arrays,
// where each inner array contains strings that are anagrams of
// one another.
//
// The order of the groups in the outer array does not matter.
// The order of strings within a group does not matter.
//
// Two strings are anagrams if they contain the exact same
// characters in the same quantities (just possibly rearranged).
//
// Example:
// Input:  ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output: [
//   ["eat", "tea", "ate"],
//   ["tan", "nat"],
//   ["bat"]
// ]
//
// Input:  ["abc", "cba", "xyz"]
// Output: [
//   ["abc", "cba"],
//   ["xyz"]
// ]
//
// Input:  [""]
// Output: [[""]]
//
// Input:  ["a"]
// Output: [["a"]]
//
// Input:  []
// Output: []
//
// 🚫 Rules
// - Group order does not matter
// - Order within a group does not matter
// - Assume lowercase letters only
// - A string with no anagram buddies still forms a group of one
// - An empty input array returns an empty array
// - An array with one empty string returns [[""]]
//
// Think about: two strings are anagrams if they share something
// in common when you look at them a certain way. What "signature"
// could you compute for each string so that anagrams share the
// SAME signature, and non-anagrams have DIFFERENT signatures?
//
// Once you have that signature, what data structure lets you
// quickly say "I've seen this signature before — put this string
// in the existing group" vs "this is a new signature — start a
// new group"?

// ============================================
// Uncomment everything under (this line) down to the console.log to run code

// WRITE YOUR SOLUTION HERE
// const groupAnagrams = (strs) => {
//   const map = new Map()

//   for(let i = 0; i < strs.length; i++){
//    const signature = strs[i].split("").sort().join("")
//    if(map.has(signature)){
//     const get = map.get(signature)
//     get.push(strs[i])
//    } else{
//     map.set(signature, [strs[i]])
//    }
//   }

//   return Array.from(map.values())
// }

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Expected: [["eat","tea","ate"],["tan","nat"],["bat"]]
// console.log(groupAnagrams(["abc", "cba", "xyz"]));
// Expected: [["abc","cba"],["xyz"]]
// console.log(groupAnagrams([""]));
// Expected: [[""]]
// console.log(groupAnagrams(["a"]));
// Expected: [["a"]]
// console.log(groupAnagrams([]));
// Expected: []


// ============================================
// Interview Question 27: Top K Frequent 
// 🧠 Pattern: count Map → sort → slice → map
// ============================================
// PROBLEM: Given an array of numbers and a number k, return an
// array containing the k most frequent elements in the input.
//
// The order of the result does not matter — just make sure the
// k most frequent elements are in there.
//
// Example:
// Input:  nums = [1, 1, 1, 2, 2, 3], k = 2
// Output: [1, 2]
// (1 appears 3 times, 2 appears 2 times, 3 appears once.
//  The top 2 most frequent are 1 and 2.)
//
// Input:  nums = [1], k = 1
// Output: [1]
//
// Input:  nums = [4, 4, 4, 5, 5, 6], k = 2
// Output: [4, 5]
//
// Input:  nums = [7, 7, 8, 8, 9, 9], k = 3
// Output: [7, 8, 9]
// (all three tied at count 2 — any order works)
//
// Input:  nums = [1, 2, 3, 4], k = 4
// Output: [1, 2, 3, 4]
// (every element shows up once — return all of them)
//
// 🚫 Rules
// - Return an array of length k
// - Order of the returned elements does not matter
// - k will always be valid (between 1 and the number of unique
//   elements in nums)
// - Assume the input array always has at least one element
// - Ties can be broken in any order
//
// Think about: this problem has two phases.
//
// Phase 1: figure out how many times each number appears.
//          (You've done this exact step in your notes before.)
//
// Phase 2: from those counts, pick the k numbers with the
//          highest counts.
//
// For Phase 2, ask yourself: what's the most natural way to find
// "the top k of something"? Is there a built-in operation that
// arranges things from most to least?

// ============================================
// Uncomment everything under (this line) down to the console.log to run code

// WRITE YOUR SOLUTION HERE
// const topKFrequent = (nums, k) => {
//   const map = new Map()

//   for(let i = 0; i < nums.length; i++){
//     if(map.has(nums[i])){
//       const value = map.get(nums[i])
//       map.set(nums[i], value + 1)
//     } else{
//       map.set(nums[i], 1)
//     }
//   }
//   const arrayFromMap = Array.from(map.entries())
//   const sorted = arrayFromMap.sort((a, b) => b[1] - a[1])

//   const firstKPairs = sorted.slice(0, k)

//   return firstKPairs.map((pair) => pair[0])

// }

// console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
// Expected: [1, 2]
// console.log(topKFrequent([1], 1));
// Expected: [1]
// console.log(topKFrequent([4, 4, 4, 5, 5, 6], 2));
// Expected: [4, 5]
// console.log(topKFrequent([7, 7, 8, 8, 9, 9], 3));
// Expected: [7, 8, 9]
// console.log(topKFrequent([1, 2, 3, 4], 4));
// Expected: [1, 2, 3, 4]


// ============================================
// Interview Question 28: Maximum Subarray Sum
// 🧠 Pattern: running tally with a reset condition
//  Kadane's Algorithm 
// ============================================
// PROBLEM: Given an array of integers (positive, negative, or both),
// return the largest possible sum you can get from any contiguous
// subarray within it.
//
// A contiguous subarray means a slice of the array where the
// elements are next to each other — you cannot skip elements.
// The subarray must contain at least one number.
//
// Example:
// Input:  [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6
// (the subarray [4, -1, 2, 1] gives the largest sum: 6)
//
// Input:  [1]
// Output: 1
//
// Input:  [5, 4, -1, 7, 8]
// Output: 23
// (the entire array sums to 23)
//
// Input:  [-3, -1, -2]
// Output: -1
// (all negatives — the best you can do is the single largest one)
//
// Input:  [-1, -2, -3, -4]
// Output: -1
//
// Input:  [3, -2, 5, -1]
// Output: 6
// (the subarray [3, -2, 5] gives 6)
//
// 🚫 Rules
// - Return a NUMBER (the sum), not the subarray itself
// - The subarray must be contiguous (no gaps)
// - The subarray must contain at least one element
// - Handle all-negative arrays correctly — the answer should be
//   the single largest (least negative) number, NOT 0
// - Do NOT start your running total at 0 if that breaks the
//   all-negatives case — think carefully about your initial values
// - Assume the input array always has at least one element
//
// Think about: as you walk through the array tracking a running
// sum, what happens when that running sum goes negative? Is it
// ever worth carrying a negative running sum forward into the
// next element, or are you better off starting fresh from the
// current element?
//
// You are also tracking TWO things at once here — the current
// running sum AND the best sum you've seen so far. They are not
// the same thing, and they update on different conditions.

// ============================================
// Uncomment everything under (this line) down to the console.log to run code

// WRITE YOUR SOLUTION HERE
// const maxSubarraySum = (arr) => {
//   let runningSum = 0
//   let addOrResetSum = -Infinity

//   for(let i = 0; i < arr.length; i++){
//     console.log("i:", i, "arr[i]:", arr[i], "runningSum:", runningSum)
//     addOrResetSum = Math.max(arr[i] , arr[i] + runningSum)

//     if(addOrResetSum > maxSum){
//       maxSum = runningSum
//     }
//   }

//   return maxSum

// }

// console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// Expected: 6
// console.log(maxSubarraySum([1]));
// Expected: 1
// console.log(maxSubarraySum([5, 4, -1, 7, 8]));
// Expected: 23
// console.log(maxSubarraySum([-3, -1, -2]));
// Expected: -1
// console.log(maxSubarraySum([-1, -2, -3, -4]));
// Expected: -1
// console.log(maxSubarraySum([3, -2, 5, -1]));
// Expected: 6


// ============================================
// Interview Question 29: Best Time to Buy and Sell Stock
// 🧠 Pattern: track a minimum + best result so far
// ============================================
// PROBLEM: You are given an array of numbers where each element
// represents the price of a stock on that day. You want to find
// the maximum profit you could have made by buying on one day
// and selling on a LATER day.
//
// You can only complete ONE transaction (buy once, sell once).
// You must buy BEFORE you sell — you cannot sell on a day that
// comes before the day you bought.
//
// If no profit is possible, return 0.
//
// Example:
// Input:  [7, 1, 5, 3, 6, 4]
// Output: 5
// (Buy on day 1 at price 1, sell on day 4 at price 6 → profit 5)
//
// Input:  [7, 6, 4, 3, 1]
// Output: 0
// (Prices only go down — no profitable trade possible)
//
// Input:  [1, 2, 3, 4, 5]
// Output: 4
// (Buy at 1, sell at 5)
//
// Input:  [2, 4, 1]
// Output: 2
// (Buy at 2, sell at 4. You CANNOT buy at 1 because it comes
//  after — there's nothing to sell to later.)
//
// Input:  [5]
// Output: 0
// (Only one day — can't both buy and sell)
//
// Input:  [3, 3, 3]
// Output: 0
// (No price movement — no profit)
//
// 🚫 Rules
// - You must buy BEFORE you sell (sell day > buy day, strictly)
// - Only ONE transaction allowed (no multiple buy/sell cycles)
// - Return the maximum profit as a number
// - If no profit possible, return 0 (NOT a negative number)
// - Assume all prices are non-negative numbers
// - A single-element array returns 0
//
// Think about: the naive approach is to check every possible
// buy day against every possible sell day after it. That works,
// but it's O(n²) — two nested loops. Can you do better?
//
// As you walk through the array left to right, ask yourself:
// "If I'm thinking about selling TODAY, what's the BEST day I
// could have bought on so far?" The answer is the cheapest
// price I've seen up to (but not including) today.
//
// So you only need to track ONE thing as you go to know your
// best possible buy price. And on each day, you can calculate
// today's potential profit against that. Compare to the best
// profit you've seen so far.
//
// Two variables, one pass. Sound familiar? 😄

// ============================================
// Uncomment everything under (this line) down to the console.log to run code

// WRITE YOUR SOLUTION HERE
// const maxProfit = (arr) => {
//   let lowestPrice = Infinity
//   let bestProfit = 0

//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] < lowestPrice){
//       lowestPrice = arr[i]
//     }
//     console.log("lowestprice", lowestPrice)

//     console.log('arr[i]', arr[i])
//     bestProfit = Math.max(arr[i] - lowestPrice, bestProfit )
//     console.log('bestProfit', bestProfit)
//   }

//   return bestProfit

// }

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// Expected: 5
// console.log(maxProfit([7, 6, 4, 3, 1]));
// Expected: 0
// console.log(maxProfit([1, 2, 3, 4, 5]));
// Expected: 4
// console.log(maxProfit([2, 4, 1]));
// Expected: 2
// console.log(maxProfit([5]));
// Expected: 0
// console.log(maxProfit([3, 3, 3]));
// Expected: 0


// ============================================
// Interview Question 30: Contains Duplicate Within K Distance
// 🧠 Pattern: sliding window + Set
// ============================================
// PROBLEM: Given an array of integers and a number k, return true
// if there exist two DIFFERENT indices i and j in the array such
// that nums[i] === nums[j] AND the absolute difference between
// i and j is at most k.
//
// In plain English: return true if the array contains any
// duplicate values that are within k positions of each other.
// Otherwise return false.
//
// Example:
// Input:  nums = [1, 2, 3, 1], k = 3
// Output: true
// (the two 1's are at indices 0 and 3 — distance is 3, which is
//  ≤ k, so it counts)
//
// Input:  nums = [1, 0, 1, 1], k = 1
// Output: true
// (the 1's at indices 2 and 3 are distance 1 apart — counts)
//
// Input:  nums = [1, 2, 3, 1, 2, 3], k = 2
// Output: false
// (the two 1's are 3 positions apart, the two 2's are 3 apart,
//  the two 3's are 3 apart — all bigger than k=2, so no match)
//
// Input:  nums = [1, 2, 3, 4, 5], k = 3
// Output: false
// (no duplicates at all)
//
// Input:  nums = [99, 99], k = 2
// Output: true
// (distance is 1, which is ≤ 2)
//
// Input:  nums = [1], k = 1
// Output: false
// (only one element — no pair possible)
//
// Input:  nums = [], k = 0
// Output: false
//
// 🚫 Rules
// - Return a BOOLEAN (true or false)
// - The two indices must be DIFFERENT (i ≠ j)
// - The absolute distance must be ≤ k (not strictly less than)
// - k is always a non-negative integer
// - Single-element and empty arrays return false
//
// Think about: the naive approach is two nested loops — check
// every pair, see if values match AND positions are within k.
// That's O(n × k) or O(n²) in the worst case. Works, but slow.
//
// Can you do it in ONE pass?
//
// Here's the question to ask yourself: as you walk through the
// array left to right, what would you need to "remember" to know
// instantly whether the current element has appeared in the last
// k positions?
//
// You don't need to remember EVERY element you've ever seen — 
// just the ones close enough to matter. Anything farther back
// than k positions can't form a valid pair with you anymore, so
// it can be forgotten.
//
// What data structure lets you:
//   1. Check "have I seen this value recently?" in O(1)
//   2. Add new values in O(1)
//   3. Remove old values in O(1)
//
// You used it in Question 25 (longest unique substring). 😄
//
// The "window" here is the last k elements. As you walk forward,
// the window slides forward too — newest element comes in, oldest
// element (if window is too big) goes out.
// ============================================
// Uncomment everything under (this line) down to the console.log to run code

// WRITE YOUR SOLUTION HERE
// const containsNearbyDuplicate = (arr, k) => {
//   const set = new Set()

//   for(let i = 0; i < arr.length; i++){
   
//     if(set.has(arr[i])){
//       return true
//     } else{
//       set.add(arr[i])
//     }

//     if(set.size > k){
//       set.delete(arr[i - k])
//     }
//   }

//   return false
// }


// console.log(containsNearbyDuplicate([1, 1, 3, 1], 3));
// Expected: true
// console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
// Expected: true
// console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
// Expected: false
// console.log(containsNearbyDuplicate([1, 2, 3, 4, 5], 3));
// Expected: false
// console.log(containsNearbyDuplicate([99, 99], 2));
// Expected: true
// console.log(containsNearbyDuplicate([1], 1));
// Expected: false
// console.log(containsNearbyDuplicate([], 0));
// Expected: false


// ============================================
// Interview Question 31: Find the Pivot Index
// 🧠 Pattern: one pass with a running total (you've got this)
// ============================================
// PROBLEM: Given an array of integers, return the leftmost "pivot
// index." The pivot index is the index where the sum of all the
// numbers strictly to its LEFT equals the sum of all the numbers
// strictly to its RIGHT.
//
// The element AT the pivot index is not counted on either side.
//
// If no such index exists, return -1.
// If there are multiple, return the LEFTMOST one.
//
// Example:
// Input:  [1, 7, 3, 6, 5, 6]
// Output: 3
// (At index 3, left sum = 1+7+3 = 11, right sum = 5+6 = 11. Equal!)
//
// Input:  [1, 2, 3]
// Output: -1
// (No index works: index 0 has left sum 0, right sum 5. Etc.)
//
// Input:  [2, 1, -1]
// Output: 0
// (At index 0, left sum = 0 (nothing to the left), right sum = 1+(-1) = 0. Equal!)
//
// Input:  [0, 0, 0, 0]
// Output: 0
// (Index 0: left = 0, right = 0+0+0 = 0. Equal — and it's leftmost.)
//
// Input:  [-1, -1, -1, 0, 1, 1]
// Output: 0
//
// Input:  [5]
// Output: 0
// (Single element: left sum = 0, right sum = 0. Equal.)
//
// 🚫 Rules
// - Left sum of index 0 is 0 (nothing to its left)
// - Right sum of the last index is 0 (nothing to its right)
// - Return the LEFTMOST valid pivot if multiple exist
// - Return -1 if none exists
// - Negative numbers are valid input
// - A single-element array returns 0
//
// (You have everything you need from earlier problems. One pass
//  is possible. Think about what you can compute up front, and
//  what you can track as you walk.)

// ============================================
// Uncomment everything under (this line) down to the console.log to run code

// WRITE YOUR SOLUTION HERE
// const pivotIndex = (arr) => {
//   let totalSum =  arr.reduce((totalSoFar, currentIndexValue) => totalSoFar + currentIndexValue, 0);
//   let leftSum = 0; 

//   for(let i = 0; i < arr.length; i++){
//     let rightSum = totalSum - arr[i] - leftSum

//     if(leftSum === rightSum){
//       return i
//     }

//     leftSum+= arr[i]
//   }

//   return -1
// }

// console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// Expected: 3
// console.log(pivotIndex([1, 2, 3]));
// Expected: -1
// console.log(pivotIndex([2, 1, -1]));
// Expected: 0
// console.log(pivotIndex([0, 0, 0, 0]));
// Expected: 0
// console.log(pivotIndex([-1, -1, -1, 0, 1, 1]));
// Expected: 0
// console.log(pivotIndex([5]));
// Expected: 0


// ============================================
// Interview Question 32: Single Number
// 🧠 Pattern: count with Map, then .find pair where count === 1
// // ============================================
// PROBLEM: Given an array of integers where every element appears
// EXACTLY TWICE except for one element which appears EXACTLY ONCE,
// find and return that single one.
//
// Example:
// Input:  [2, 2, 1]
// Output: 1
//
// Input:  [4, 1, 2, 1, 2]
// Output: 4
//
// Input:  [1]
// Output: 1
//
// Input:  [7, 3, 5, 3, 7]
// Output: 5
//
// Input:  [-1, -1, -2]
// Output: -2
//
// 🚫 Rules
// - Every element except ONE appears exactly twice
// - The single element appears exactly once
// - The array is NOT sorted
// - Return the single number itself, not its index
// - Negative numbers are valid input
// - There is always exactly one single number (guaranteed)
// - A single-element array returns that element

// ============================================
// Uncomment everything under (this line) down to the console.log to run code

// WRITE YOUR SOLUTION HERE
// const singleNumber  = (arr) => {
//   const map = new Map()
//   for(let i = 0; i < arr.length; i++){
//     if(map.has(arr[i])){
//       map.set(arr[i], map.get(arr[i]) + 1)
//     } else{
//       map.set(arr[i], 1)
//     }
//   }
//   return Array.from(map.entries()).find((item) => item[1] === 1)[0]
// }

// console.log(singleNumber([2, 2, 1]));
// Expected: 1
// console.log(singleNumber([4, 1, 2, 1, 2]));
// Expected: 4
// console.log(singleNumber([1]));
// Expected: 1
// console.log(singleNumber([7, 3, 5, 3, 7]));
// Expected: 5
// console.log(singleNumber([-1, -1, -2]));
// Expected: -2


// ============================================
// Interview Question 33: Missing Number
// 🧠 Pattern: Set lookup over expected range (0..n)
// // ============================================
// PROBLEM: Given an array of unique numbers, find the ONE number
// missing from the range 0 up to the array's length.
//
// In plain English:
// If the array has length n, the range is 0 to n (inclusive).
// Because the range INCLUDES 0, there are actually n + 1 possible
// numbers in that range: 0, 1, 2, ..., n.
// But the array only holds n of them — so exactly one is missing.
// Find and return it.
//
// Example:
// Length 8 array → range is 0..8 → that's 9 possible numbers
// → only 8 fit in the array → 1 is always missing 🧩
//
// Example:
// Input:  [3, 0, 1]
// Output: 2
// (Length is 3, so range is 0..3 = [0,1,2,3]. Missing: 2)
//
// Input:  [0, 1]
// Output: 2
// (Length is 2, so range is 0..2 = [0,1,2]. Missing: 2)
//
// Input:  [9, 6, 4, 2, 3, 5, 7, 0, 1]
// Output: 8
// (Length is 9, so range is 0..9. Missing: 8)
//
// Input:  [0]
// Output: 1
// (Length is 1, so range is 0..1 = [0,1]. Missing: 1)
//
// Input:  [1]
// Output: 0
// (Length is 1, so range is 0..1 = [0,1]. Missing: 0)
//
// 🚫 Rules
// - Array contains DISTINCT numbers (no duplicates)
// - Numbers come from the range 0..n where n is the array length
// - EXACTLY ONE number from that range is missing
// - The array is NOT sorted
// - Return the missing number itself (not its would-be index)
// - Negative numbers will not appear

// ============================================
// Uncomment everything under (this line) down to the console.log to run code

// WRITE YOUR SOLUTION HERE
// const missingNumber = (arr) => {
//   const set = new Set(arr)

//   for(let i = 0; i <= arr.length; i++){
//     if(!set.has(i)){
//       return i
//     }
//   }
// }

// console.log(missingNumber([3, 0, 1]));
// Expected: 2
// console.log(missingNumber([0, 1]));
// Expected: 2
// console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
// Expected: 8
// console.log(missingNumber([0]));
// Expected: 1
// console.log(missingNumber([1]));
// Expected: 0


// ============================================
// Interview Question 34: Intersection of Two Arrays
// 🧠 Pattern:  Set lookup + Set collector
// ============================================
// PROBLEM: Given two arrays, return an array of their UNIQUE
// common elements (the intersection). Each element in the result
// should appear only ONCE, and the order does not matter.
// The plain version is just "what's in both?"
//
// Example:
// Input:  [1, 2, 2, 1], [2, 2]
// Output: [2]
//
// Input:  [4, 9, 5], [9, 4, 9, 8, 4]
// Output: [9, 4]   (or [4, 9] — order doesn't matter)
//
// Input:  [1, 2, 3], [4, 5, 6]
// Output: []
//
// Input:  [1, 1, 1], [1, 1]
// Output: [1]
//
// Input:  [], [1, 2, 3]
// Output: []
//
// 🚫 Rules
// - Each element in the result appears only ONCE (no duplicates)
// - Order of the result does NOT matter
// - Return an empty array if there are no common elements
// - Both inputs may contain duplicates, but the result must not
// - Either array may be empty

// ============================================
// Uncomment everything under (this line) down to the console.log to run code

// WRITE YOUR SOLUTION HERE
// const intersection = (arr1, arr2) => {
//   const arr1Set = new Set()
//   const intersectionSet = new Set()

//   for(let i = 0; i < arr1.length; i++){
//     arr1Set.add(arr1[i])
//   }

//   for(let i = 0; i < arr2.length; i++){
//     if(arr1Set.has(arr2[i])){
//       intersectionSet.add(arr2[i])
//     }
//   }

//   return Array.from(intersectionSet)

// }

// console.log(intersection([1, 2, 2, 1], [2, 2]));
// Expected: [2]
// console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
// Expected: [9, 4] or [4, 9]
// console.log(intersection([1, 2, 3], [4, 5, 6]));
// Expected: []
// console.log(intersection([1, 1, 1], [1, 1]));
// Expected: [1]
// console.log(intersection([], [1, 2, 3]));
// Expected: []


