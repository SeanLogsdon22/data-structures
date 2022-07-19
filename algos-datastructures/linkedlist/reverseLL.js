class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

const a = new Node(1)
const b = new Node(2)
const c = new Node(3)
const d = new Node(4)

a.next = b
b.next = c
c.next = d

const reverse = (head) => {
    let prev = null
    let curr = head
    while(curr !== null) {
        const next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
}

const z = reverse(a)
console.log(z)

/*

iterate through the linked list
add a prev variable = null
add a next variable referring to what the current LL node is pointing to next
have the new LL point to prev
prev = next
next = current

*/