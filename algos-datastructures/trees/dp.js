/* 

take in a biarary tree, the root
given the root, has pointers to children which points to other nodes

add A to a collection, go to B, for depth first we go deep, so D, then E, no more deeper so C, then F

deep down then across
use a stack - only add and remove from the top of the stack

O(n) space/time
*/

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node('a');
const b = new Node('b')
const c = new Node('c');
const d = new Node('d')
const e = new Node('e');
const f = new Node('f');

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

const depthFirstValues = (root) => {
    if (root === null) return [] // empty tree edge case

    const result = []
    const stack = [ root ];

    while(stack.length > 0) {
        const current = stack.pop()
        result.push(current.val)

        if (current.right) stack.push(current.right)
        if (current.left) stack.push(current.left)

    }
    return result
}

const z = depthFirstValues(a)
console.log(z)