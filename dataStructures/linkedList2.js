class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // insert first
  insertFirst(val) {
    this.head = new Node(val, this.head);
    this.size++;
  }

  // insert last
  insert(val) {
    let curr = this.head;
    if (!curr) {
      this.head = new Node(val);
      this.size++;
      return;
    }
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = new Node(val);
    this.size++;
  }

  // insert at index
  insertAt(val, index) {
    if (index < 0 || index > this.size) {
      console.log('index out of range');
      return;
    }
    if (index === 0) {
      this.insertFirst(val);
      counter++;
      return;
    }
    let curr = this.head;
    let prev = null;
    let counter = 0;
    while (counter < index) {
      prev = curr;
      curr = curr.next;
      counter++;
    }
    prev.next = new Node(val, curr);
    this.size++;
  }

  // clear list
  clearAll() {
    this.head = null;
    this.size = 0;
  }
  // delete at index
  deleteAt(index) {
    if (index < 0 || index > this.size) return;
    if (index === 0) {
      this.head = this.head.next;
      this.size--;
      return;
    }
    let curr = this.head;
    let prev = null;
    let counter = 0;
    while (counter < index) {
      prev = curr;
      curr = curr.next;
      counter++;
    }
    prev.next = curr.next;
    this.size--;
  }

  // print
  printValues() {
    let curr = this.head;
    let str = '';
    while (curr) {
      str += `${curr.val} -> `;
      curr = curr.next;
    }
    console.log(str);
  }

  // get size
  getSize() {
    return this.size;
  }
  getValues() {
    let curr = this.head;
    const arr = [];
    while (curr) {
      arr.push(curr.val);
      curr = curr.next;
    }
    return arr;
  }
  getAt(index) {
    let curr = this.head;
    let counter = 0;
    while (counter < index) {
      curr = curr.next;
      counter++;
    }
    return curr.val;
  }
  contains(target) {
    let curr = this.head;
    while (curr) {
      if (curr.val === target) return true;
      curr = curr.next;
    }
    return false;
  }

  reverse() {
    let curr = this.head;
    let prev = null;
    while (curr) {
      const tempNext = curr.next;
      curr.next = prev;
      prev = curr;
      curr = tempNext;
    }
    this.head = prev;
    return this.head;
  }
}

const list = new LinkedList();

list.insertFirst(1);
list.insertFirst(2);
list.insertFirst(3);
list.printValues();
const reversedHead = list.reverse();
console.log(reversedHead);
list.printValues();
// list.insert(4);
// list.insertAt('head', 0);
// list.insertAt('tercero', 2);
// list.printValues();
// list.deleteAt(2);
// list.printValues();
// console.log(list.getSize());
// console.log(list.getValues());
// console.log(list.getAt(2));
