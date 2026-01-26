// ============================================
// JAVASCRIPT ALGORITHM PRACTICE: Core Patterns Level 
// 3+ Problems Solved
// ============================================
// NOTE: Solutions are commented out to prevent conflicts
// Uncomment individual solutions to test them
// All code is fully functional
// ============================================



// ============================================
// Algorithm Question 1: Remove Duplicates from Sorted Array
// PROBLEM: Given a sorted array, remove duplicates in-place so that each element appears only once. Return the new length.
// You must modify the original array and use O(1) extra space (no new arrays!).
// Example:
// Input: [1, 1, 2, 2, 3]
// Output: 3
// The array becomes: [1, 2, 3, _, _]
// (The underscores don't matter - we only care about the first 3 elements)

// Input: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
// Output: 5
// Array becomes: [0, 1, 2, 3, 4, _, _, _, _, _]
// Constraints:

// Array is already sorted
// Modify the array in-place
// Return the count of unique elements
// Don't use extra arrays

// Hint: This is a two-pointer problem. You'll need:

// One pointer to read through the array
// One pointer to track where to place unique elements



// My SOLUTION: 

const arr = [1, 1, 2, 2, 3]

const removeDuplicates = (arr) => {
  //handle edge case if array is empty: 
  if(arr.length === 0){
    return 0; 
  }

  //initialize writePointer, i (index in for loop is the readPointer)
  let writePointer = 0; 
  
  for(let i = 0; i < arr.length; i++){
    //if current number does not match previous number: means it is a unique new number
    if(arr[i] !== arr[i - 1]){
      arr[writePointer] = arr[i]
      writePointer++
    }

  }

  //returning count not array here
  return writePointer
}

console.log(removeDuplicates(arr))





// ============================================
// Algorithm Question 2: Container With Most Water
// PROBLEM: You are given an array of integers height where each element represents the height of a vertical line. Find two lines that together with the x-axis form a container that holds the most water.


//My Solution: 

// const heightArray = [1, 8, 6, 2, 5, 4, 8, 3, 7]

// const maxArea = (heightArray) => {
//   //initialise two pointer with start being first index and end being last index not values height[0]/height[height.length - 1]
//   let start = 0; 
//   let end = heightArray.length - 1; 
//   let maxArea = 0; 

//   while(start < end){
//     // check width, height, get area for each and move pointers inward
//     console.log('heigharray end value', end)
//     console.log('heigharray START value', start)
//     let width = end - start
//     console.log('width', width)
//     console.log('heightstart', heightArray[start])
//     let height = Math.min(heightArray[start], heightArray[end]); 
//     console.log('height', height)
//     let Area = width * height; 
//     console.log("Area", Area)

//     //check if new area is larger then maxWater if so replace maxWater with Area
//     if (Area > maxArea){
//       maxArea = Area
//     }

//     //move pointer inward for the shorter height on each iteration
//     if(heightArray[start] < heightArray[end]){
//       start++
//     } else {
//       end--
//     }
//   }

//   return maxArea
// }

// console.log(maxArea(heightArray))



