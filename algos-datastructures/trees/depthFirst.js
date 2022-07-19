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

const depthFirstPrint = (root) => {
    if (root === null) return []
    const stack = [ root ]
    while (stack.length > 0) {
        const curr = stack.pop()
        console.log(curr.val)
        // add curr's children to the top of the stack 
        if (curr.right !== null) {
            stack.push(curr.right)
        } 

        if (curr.left !== null) {
            stack.push(curr.left)
        }        
    }
}

//recursion 

const depthFirstPrint = (root) => {
    //the tree is empty 
    if (root === null) return;

    console.log(root.val)
    depthFirstPrint(root.left)
    depthFirstPrint(root.right)
}

depthFirstPrint(a)

// pre-order traversal 
// print parent before the children (same as above)

// post order
// left, right, self 

// root.left, root.right, root.val

// in roder 
// left, self, right 