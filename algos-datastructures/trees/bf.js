/* 

Travel across before going down
A, B, C, D, E, F

vs 
Abd

checks left to right every level

uses queue data structure vs stack in depth first

things enter the back of the queue and leave the front, a line a walmart

O(n) time and space

*/

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node("a")
const b = new Node("b")
const c = new Node("c")
const d = new Node("e")
const e = new Node("e")
const f = new Node("f")

a.left = b
a.right = c
b.left = d
b.right = e 
c.right = f

const breadthFirstValues = (root) => {
    if (root == null) return [];

    const values = []
    const queue = [ root ];

    while (queue.length > 0) {
        const current = queue.shift()
        values.push(current.val)

        if (current.left !== null) queue.push(current.left)
        if (current.right !== null) queue.push(current.right)
    }
    return values
    
}

const z = breadthFirstValues(a)
console.log(z)