class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

const a = new Node(5)
const b = new Node(7)
const c = new Node(9)
const d = new Node(11)

a.next = b
b.next = c
c.next = d

const findvalue = (head, target) => {
    let curr = head
    while(curr !== null) {
        if (curr.val == target) {
            return true
        } 
        curr = curr.next  
    }
    return false
}

const recursive = (head, target) => {
    if (head === null) return false
    if (head.val === target) return true
    return recursive(head.next, target)
}

const f = findvalue(a, 8)
console.log(f)

