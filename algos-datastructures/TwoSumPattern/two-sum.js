const twoSum = (arr, target) => {
    /*
    go through the array
    get the sum of the first two numbers
    if they === target return
    if not, increase index of second pointer
    if second pointer gets to the end of the arr without = target, 
    increase the first pointer by 1 and initialize the second pointer to be 1 above that
    repeat until target is found
    if target is never found return null
    */
   let pointer1 = 0; // initialize pointers
   let pointer2 = pointer1 + 1;
   let sum = arr[pointer1] + arr[pointer2]; // get the sum of first two
   let answer = null; // set null at first in case target is never met, otherwise change it

   
    // if the first two values don't then we increase pointer 2 till the end
    while(true){
    sum = arr[pointer1] + arr[pointer2];
    if (sum === target){ // if the new sum = target we record the indices as the answer and break from loop
        answer = [pointer1, pointer2];
        break;
    };
    pointer2++;
    if (pointer2 >= arr.length) { // if pointer 2 gets to the end without finding the answer we increment pointer 1 and reinitalize
        pointer1++;
        pointer2 = pointer1 + 1;
    };
    if (pointer1 >= arr.length) break; // if pointer 1 gets to the end of the arr that means we never found the answer so we just break from loop and return null
    };
   return answer;
};

// o(n^2) time complexity

var twoSum2 = function(nums, target) {
    let numberIndex = new Map()
    let result = []

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        let complement = target - num

        if (numberIndex.has(complement)) {
            result[0] = numberIndex.get(complement)
            result[1] = i

                return result
        }

        numberIndex.set(num, i)
    }

    return result
}

// Hashmap