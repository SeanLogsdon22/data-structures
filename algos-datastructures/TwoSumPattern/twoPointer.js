function findPair(arr, targetSum) {
    let leftPointer = 0
        let rightPointer = arr.length - 1
        pair = null

    // get the element at each pointer, and add to get a pairSum
    // is pairSum === targetSum, is yes, return it
    // is pairSum < targetSum, is yes, increment leftpointer
    // is pairSum > targetSum, if yes, decrement rightpointer

    while (leftPointer != rightPointer) {
        pairSum = arr[leftPointer] + arr[rightPointer]
        if (pairSum === targetSum) {
            pair = [arr[leftPointer], arr[rightPointer]]
            break
        } else if (pairSum < targetSum) {
            leftPointer++
        } else if (pairSum > targetSum) {
            rightPointer--
        }
    }

    return pair 
}

console.log(findPair([1, 2, 3, 4, 5], 7))
console.log(findPair([1, 6, 8, 9, 10], 14))

