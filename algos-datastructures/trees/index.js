/* 

what is a tree -

contains many nodes(circles)
that points to other nodes

the lines between them are edges

could store values within nodes 

familiar relationships 

    A root: no parent
  /   \ 
  B    C: parent 
        \
          D: Leaf, no outgoing children

binary tree -
every node has at most two children

three children is a tree but not binarary tree

can still have 1 or 0 children but still binary tree

Only on root, exactly 1 path between root and any node 

empty tree with 0 nodes considered a tree?

node.right, node.left 
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
const f = new Node('f')

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f



