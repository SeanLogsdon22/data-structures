
 // push to add to the top of the stack
 // pop to remove first item from the stack

 //using an array 

 const myStack = []
 myStack.push(9)
 myStack.pop

 //

class StackNode {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0
    }

    push(val) {
        if (this.size === 0) {
            this.top = new StackNode(val)
        } else {
            const pushedNode = new StackNode(val)
            pushedNode.next = this.top;
            this.top = pushedNode;
        }

        this.size++
    }
}

const myStack = new Stack()