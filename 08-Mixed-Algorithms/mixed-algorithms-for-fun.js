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