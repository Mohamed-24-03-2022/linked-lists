class Node {
  constructor(data = null, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(newNode) {
    let node = this.head;
    if (node === null) {
      // empty list
      this.head = newNode;
      this.size++;
    } else {
      while (node.next !== null) {
        node = node.next;
      }

      node.next = newNode;
      this.size++;
    }
  }

  prepend(newNode) {
    let node = this.head;
    this.head = newNode;
    newNode.next = node;
    this.size++;
  }

  sizeFun() {
    return this.size;
  }

  headFun() {
    return this.head;
  }

  tail() {
    let node = Object.assign({}, this.head);
    while (node.next !== null) {
      node = node.next;
    }

    return node;
  }

  pop() {
    let node = this.head;
    let previous;
    while (node.next !== null) {
      previous = node;
      node = node.next;
    }

    previous.next = null;
    this.size--;
    return node;
  }

  at(index) {
    let node = this.head;
    let count = 0;
    if (index === 0) {
      return this.head;
    }

    while (node !== null) {
      if (count === index) {
        return node;
      }

      count++;
      node = node.next;
    }
  }

  contains(value) {
    let node = this.head;
    while (node !== null) {
      if (node.data === value) {
        return true;
      }

      node = node.next;
    }

    return false;
  }

  find(value) {
    let node = this.head;
    let count = 0;
    while (node !== null) {
      if (node.data === value) {
        return count;
      }

      node = node.next;
      count++;
    }

    return null;
  }

  toString() {
    let node = this.head;
    const list = []
    while (node !== null) {
      list.push(node.data)
      node = node.next;
    }

    list.push(null)
    return list.join(' -> ') + null;
  }

  insertAt(value, index) {
    let node = this.head;
    let count = 0;

    if (index === 0) {
      this.head = value;
      value.next = node;
      return;
    }

    while (node !== null) {
      if (count === index) {
        console.log(node);
        value.next = Object.assign({}, node);
        node.data = value.data;
        node.next = value.next;
        this.size++;
        return;
      }

      count++;
      node = node.next;
    }
    return 'Index Out of Bound';
  }

  removeAt(index) {
    let node = this.head;
    let count = 0;
    let previous;

    while (node !== null) {
      if (count === index) {
        if (node.next === null) {
          previous.next = null;
        } else {
          node.data = node.next.data;
          node.next = node.next.next;
        }

        this.size--;
        return;
      }

      count++;
      previous = node;
      node = node.next;
    }
    return 'Index Out of Bound';
  }
}

const myLinkedList = new LinkedList();

myLinkedList.prepend(new Node(2));
myLinkedList.append(new Node(5));
myLinkedList.append(new Node(9));
myLinkedList.append(new Node(3));
myLinkedList.append(new Node(1));



console.log(myLinkedList.find(9));
console.log(myLinkedList);

// console.log(myLinkedList);
