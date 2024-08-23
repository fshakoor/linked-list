const Node = require("./Node.js");

class LinkedList {
  constructor(value) {
    if (value) {
        let new_node = new Node(value);
        this.head = new_node;
        this.tail = new_node;
        this.length = 1;
    }
  }

  append(value) {
    let new_node = new Node(value);
    if (this.head == null) {
      this.head = new_node;
      this.tail = new_node;
    } else {
      this.tail.next = new_node;
      this.tail = new_node;
    }
    this.length += 1;
  }

  prepend(value) {
    let new_node = new Node(value);
    if (this.head == null) {
      this.head = new_node;
      this.tail = new_node;
    } else {
      new_node.next = this.head;
      this.head = new_node;
    }
    this.length += 1;
  }

  pop() {
    if (this.length == 0) {
      return null;
    } else {
      let temp = this.head;
      let prev = this.head;

      while (temp.next != null) {
        prev = temp;
        temp = temp.next;
      }
      this.tail = prev;
      this.tail.next = null;
      this.length -= 1;

      if (this.length == 0) {
        this.head = null;
        this.tail = null;
      }
      return temp;
    }
  }

  at(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  set(value, index) {
    let temp = this.at(index);
    temp.value = value;
  }

  insertAt(value, index) {
    if (index < 0 || index >= this.length) {
      return false;
    }

    if (index == 0) {
      return this.prepend(value);
    } else if (index == this.length) {
      return this.append(value);
    }

    let new_node = new Node(value);
    let temp = this.at(index - 1);

    new_node.next = temp.next;
    temp.next = new_node;

    this.length += 1;

    return true;
  }

  popFirst() {
    if (this.length == 0) {
      return null;
    }
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length -= 1;
    if (this.length == 0) {
      this.tail = null;
    }
    return temp;
  }

  removeAt(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    if (index == 0) {
      return this.popFirst();
    }
    if (index == this.length - 1) {
      return this.pop();
    }

    let prev = this.at(index - 1);
    let temp = prev.next;

    prev.next = temp.next;
    temp.next = null;
    this.length -= 1;
    return temp;
  }

  find(value) {
    if (value == this.head.value) {
      return 0;
    }
    let temp = this.head;
    let index = 0;
    while (temp.value != value && temp != this.tail) {
      temp = temp.next;
      index += 1;
    }
    if (temp.value == value) {
      return index;
    } else {
      return null;
    }
  }
  contains(value) {
    if (this.find(value) != null) {
      return true;
    } else {
      return false;
    }
  }

  returnHead() {
    if (this.head != null) {
      return this.head.value;
    } else {
      return null;
    }
  }
  returnTail() {
    if (this.head != null) {
      return this.tail.value;
    } else {
      return null;
    }
  }
  size() {
    if (this.head == null) {
      return 0;
    } else {
      return this.length;
    }
  }

  toString() {
    if (this.head == null) {
      return null;
    } else {
      let returnedString = "";
      let cur = this.head;
      while (cur.next != null) {
        returnedString += "( " + cur.value + " )" + " -> ";
        cur = cur.next;
      }
      returnedString += "( " + this.tail.value + " )" + " -> null";
      return returnedString;
    }
  }
}

module.exports = LinkedList;