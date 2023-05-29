// ARRAY WAY
// 0(1) to enqueue & 0(n) to dequeue
const queue = [];
queue.push(1);
queue.shift();

// LINKED LIST WAY
// O(1) to enqueue and dequeue

class QueueNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }
  enqueue(val) {
    const newNode = new QueueNode(val);
    if (this.size === 0) {
      this.front = newNode;
      this.back = newNode;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }
    this.size++;
  }
  dequeue() {
    if (this.size === 0) return null;

    const removedNode = this.front;

    if (this.size === 1) {
      this.back = null;
    }

    this.front = this.front.next;
    this.size--;
    return removedNode.val;
  }
  print() {
    let curr = this.front;
    let str = '';
    while (curr) {
      str += `${curr.val} -> `;
      curr = curr.next;
    }
    return str;
  }
  getSize() {
    return this.size;
  }
}

const newQueue = new Queue();
newQueue.enqueue('a');
newQueue.enqueue('b');
newQueue.enqueue('c');
console.log(newQueue.print(), newQueue.getSize());
const firstVal = newQueue.dequeue();
console.log(firstVal);
console.log(newQueue.print(), newQueue.getSize());
