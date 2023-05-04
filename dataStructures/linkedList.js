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

  // add a new element last
  append(val) {
    // if ther is no elements
    if (this.head === null) {
      this.head = new Node(val);
      return;
    }

    // generic addition to the list
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = new Node(val);
  }

  // print elements of the list
  print() {
    let str = '';
    let curr = this.head;
    while (curr !== null) {
      str += curr.val + ' -> ';
      curr = curr.next;
    }
    console.log(str);
  }

  // check if list contains a certain value
  contains(target) {
    let curr = this.head;
    while (curr !== null) {
      if (curr.val === target) {
        return true;
      }
      curr = curr.next;
    }
    return false;
  }

  deleteValue() {
    let prev = null;
    let curr = hedd;
    while (curr !== null) {
      console.log(curr.val);
      curr = curr.next;
    }
  }
  function ()
}

const list = new LinkedList();
list.append('a');
list.append('b');
list.append('c');
list.append('d');
list.append('e');
list.print();

console.log(list.contains('a')); // true
console.log(list.contains('z')); // false
