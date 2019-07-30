// Needs to sort the array

function binarySearch (sortedArray, value) {
    return binarySearchRecursive(sortedArray, value, 0, sortedArray.length - 1)
}

function binarySearchRecursive(array, value, left, right) {
    if (left > right) return false

    const mid = Math.floor((left + right) / 2)

    if (array[mid] === value) {
        return true
    } else {
        return array[mid] > value 
            ? binarySearchRecursive(array, value, left, mid - 1)
            : binarySearchRecursive(array, value, mid + 1, right)
    }
}

// Example exercise:

// Unique pairs:

// Given an Array A [2, 5, 8, 22, …] and a K (2) how many unique pairs can you have 
// where if you subtract 2 elements you will have a difference of K

// For example:

// A [7, 9, 11, 8] K = 2

// 7-9 = 2
// 11 - 9 = 2

// So the final result is 2

const totalArray = [2, 5, 8, 22, 1, 44]

function uniquePairs (array, k) {
    array.sort(function(a, b) { return a - b })

    return array.reduce((acc, currentValue) => {
        const valid = binarySearch(array, currentValue - k)
        if (valid) {
            return acc + 1
        } else {
            return acc
        }
    }, 0)
}

console.log('Result:', uniquePairs(totalArray, 3))
