class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

const a = new Node('A')
const b = new Node('B')
const c = new Node('C')
const d = new Node('D')

a.next = b
b.next = c 
c.next = d

// traverse ll

const printLinkedList = (head) => {
    let curr = head 
    while (curr !== null) {
        console.log(curr.val)
        curr = curr.next
    }
}

printLinkedList(a)

// recursive 
// each head is a linked list within a smaller subset

const printLinkedList2 = (head) => {
    if (head == null) return 
    console.log(head.val)
    printLinkedList2(head.next)
}

printLinkedList2(a)