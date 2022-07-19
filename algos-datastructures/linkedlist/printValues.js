class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const linkedList = (head) => {
    const values = []
    let current = head;
    while(current !== null) {
        values.push(current.val)
        current = current.next
    }
    return values
}

const valuess = []
const recursion = (head, valuess) => {
    if (head === null) return 
    valuess.push(head.val)
    recursion(head.next, valuess)
}