// good for insertion and deletion
// stored at different parts in memory
// composed of nodes that contain a stored value and a reference to the enxt node

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append() {
        if (this.head === null) {
            this.head = new Node(val)
            return
        }

        let curr = this.head;
        while (curr.next !== null) {
            curr = curr.next
        }
        curr.next = new Node(val)
    }

    print() {
        let str = ''
        let curr = this.head;
        while (curr !== null) {
            str += curr.val;
            curr = curr.next
        }
        console.log(str)
    }

}

const list = new LinkedList()