'use strict';

const LinkedList = require('./linked-list');
const Node = require('./node');

module.exports = class Stacks {
  constructor() {
    this.storage = new LinkedList();
  }
  
  push(value) {
    if (!this.storage.head) {
      this.storage.head = new Node(value);
    } else {
      // Time: O(n) where n is # of nodes in the Stack this method is called on
      let currNode = this.storage.head;
      while (currNode.next) {
        currNode = currNode.next;
      }
      // Space O(1) because only a single new Node is created by pushing it into the Stack
      currNode.next = new Node(value);
      return this.storage;
    }
    return undefined;
  }
  pop() {
    if (!this.storage.head) {
      throw new Error('There are no Nodes on the Stack');
    }
    // Time: O(n) where n is # of nodes in the Stack this method is called on
    // Space O(1) because no new space is being taken up
    let currNode = this.storage.head;
    while (currNode.next.next) {
      currNode = currNode.next;
    }
    const temp = currNode.next;
    currNode.next = null;     
    return temp.value;
  }
  peek() {
    if (!this.storage.head) {
      throw new Error('There are no Nodes on the Stack');
    }
    // Time: O(n) where n is # of nodes in the Stack this method is called on
    // Space O(1) because nothing is ever created
    let currNode = this.storage.head;
    while (currNode.next) {
      currNode = currNode.next;
    }
    return currNode;
  }
  isEmpty() {
    // Time O(1) because it only checks the head of the Stack
    // Space O(1) because nothing is ever created
    if (!this.storage.head) return true;
    return false;
  }
};
