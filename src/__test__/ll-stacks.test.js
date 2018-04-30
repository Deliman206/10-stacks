'use strict';

const Stack = require('../lib/ll-stacks');

describe('Testing Stack class with Linked List class', () => {
  describe('Test push method of Stack class.', () => {
    test('Should push VALUE in empty Stack', () => {
      const stack = new Stack();
      stack.push(8);
      expect(stack.storage.head.value).toEqual(8);
    });
    test('Should push VALUE in Stack with Nodes and Check that next Node is NULL', () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(8);
      expect(stack.storage.head.next.next).toBeNull();
    });
    test('Should push multiple VALUEs and check Last VALUE of Stack to be 3', () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.storage.head.next.next.value).toEqual(3);
    });
  });
  describe('Test pop method of Stack class.', () => {
    test('Should throw an ERROR when there is nothing on the Stack', () => {
      const stack = new Stack();
      expect(() => {
        stack.pop();
      }).toThrow();
    });
    test('Should remove the VALUE of the last Node on the Stack to be 4', () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      stack.push(4);
      expect(stack.pop()).toEqual(4);
    });
  });
  describe('Test peek method of Stack class', () => {
    test('Should Return the VALUE of the Node at the top of the Stack to be 2', () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      stack.pop();
      expect(stack.peek().value).toEqual(2);
    });
    test('Should throw an ERROR when there is nothing on the Stack', () => {
      const stack = new Stack();
      expect(() => {
        stack.peek();
      }).toThrow();
    });
  });
  describe('Test isEmpty method of Stack class', () => {
    test('Should Return TRUE is the Stack is Empty', () => {
      const stack = new Stack();
      expect(stack.isEmpty()).toBeTruthy();
    });
    test('Should Return FALSE is the Stack is NOT Empty', () => {
      const stack = new Stack();
      stack.push(1);
      expect(stack.isEmpty()).toBeFalsy();
    });
  });
});
