// ARRAY WAY
const stack = [];
stack.push(1);
stack.pop();

// LINKED LIST WAY
// O(1) time & O(1) space
class StackNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }
  push(val) {
    this.top = new StackNode(val, this.top);
    this.size++;
  }
  pop() {
    const poppedNode = this.top;
    this.top = this.top.next;
    this.size--;
    return poppedNode;
  }
  getSize() {
    console.log(this.size);
  }
}

const llStack = new Stack();
llStack.push(1);
llStack.push(2);
llStack.push(3);
llStack.pop();
llStack.pop();
llStack.pop();
// llStack.getSize();
