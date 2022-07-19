class MinStack {
    constructor() {
        this.mainStack = [];
        this.minStack = []
    }

    push(val) {
        this.mainStack.push(val)
        if (!this.minStack.length || val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val)
        }
    }

    pop() {
        const val = this.mainStack.pop()
        if (val === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop()
        }
    }

    top() {
        return this.mainStack[this.mainStack.length - 1]
    }

    getMin() {
        return this.minStack[this.minStack.length - 1]
    }
}