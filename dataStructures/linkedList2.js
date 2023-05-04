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
  getArray() {
    let curr = this.head;
    const arr = [];
    while (curr) {
      arr.push(curr.val);
      curr = curr.next;
    }
    return arr;
  }
}

const list = new LinkedList();

list.insertFirst(1);
list.insertFirst(2);
list.insertFirst(3);
list.insert(4);
list.printValues();
console.log(list.getSize());
console.log(list.getArray());
