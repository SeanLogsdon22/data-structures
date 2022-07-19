// recap 
// looking for a set of elements in an array or linked list
// alterate solution to double for loops 
// two poointers, one starting at beginning, other at the end, until they both meet 

// given an array of unsorted numbers find all unique triplets that add up to zero 

// solution
// sort the array
// set the negative of the first element and put that as the target
// have two pointers add to that target

function triplets(arr) {
    arr.sort((a, b) => a - b)

    const triplets = []

    for (let i = 0; i < arr.length; i++) {
        let targetSum = -arr[i]
    }

    return triplets
}

function searchPair(arr, targetSum, leftPointer, triplets) {
     
}