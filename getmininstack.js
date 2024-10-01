class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val) {
        this.stack.push(val);
        if (this.minStack.length === 0 || val <= this.getMin()) {
            this.minStack.push(val);
        }
    }

    pop() {
        const popped = this.stack.pop();
        if (popped === this.getMin()) {
            this.minStack.pop();
        }
    }

    top() {
        return this.stack.length > 0 ? this.stack[this.stack.length - 1] : -1;
    }

    getMin() {
        return this.minStack.length > 0 ? this.minStack[this.minStack.length - 1] : -1;
    }
}

// Export the class as part of an object
module.exports = { soln: MinStack };
