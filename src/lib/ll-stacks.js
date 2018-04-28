'use strict';

const LinkedList = require('./linked-list');
const Node = require('./node');

module.exports = class Stacks {
  constructor() {
    this.storage = new LinkedList();
  }
  
  push(value) {
    if (!this.storage.head){
      this.storage.head = new Node(value);
    } else {
      let currNode = this.storage.head;
      while(currNode.next) {
        currNode = currNode.next;
      }
      currNode.next = new Node(value);
      return this.storage;
    }
  };
  pop() {
    if (!this.storage.head) {
      throw new Error('There are no Nodes on the Stack');
    }
    let currNode = this.storage.head;
    while (currNode.next.next) {
      currNode = currNode.next;
    }
    const temp = currNode.next;
    currNode.next = null;     
    return temp.value;
  };
  peek() {
    if(!this.storage.head) {
      throw new Error('There are no Nodes on the Stack');
    }
    let currNode = this.storage.head;
    while (currNode.next) {
      currNode = currNode.next
    }
    return currNode;
  };
  isEmpty() {
    if (!this.storage.head) return true;
    return false;
  };
};
