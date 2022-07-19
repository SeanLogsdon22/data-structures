/* 
whats a tree?
A collection of node and edges where: 
there is one root 
there is only one unique path between any two nodes

whats a binary tree?
tree where each node has at most two children
*/

// binary tree construction

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

// breadth-first traversal algo
// access every node following a paticular order
// stop from the root, exploe that whole level, move down one, repeat
// create a que, add things to the back, remove things from the front  
// go to each node, add its chidlren, print that node, ove on to the next

const breadthFirstPrint = (root) => {
    const queue = [ root ] 
    while (queue.length > 0) {
        // remove the first element
        const curr = queue.shift()
        console.log(curr.val)
        if (curr.left !== null) {
            queue.push(curr.left)
        }
        if (curr.right !== null) {
            queue.push(curr.right)
        }
    }
}

breadthFirstPrint(a)

