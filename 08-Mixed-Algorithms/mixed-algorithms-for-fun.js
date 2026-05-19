// ============================================
// JAVASCRIPT ALGORITHM PRACTICE:
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