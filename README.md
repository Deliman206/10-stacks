### Problem Domain
  * implement a Stack Class  using,internally, a Linked List class
  * implement `push(value)` and `pop()` methods on the Stack class
	* implement `peek()` and `isEmpty()` methods on the Stack class  

### Design
  * This program has 3 Modules: Linked List, Node, Stack
  * The Linked List Module is a Class and with a single property of  `this.head = null`
  * The Node Module is a Class with two properties of `this.value = value` and `this.next = null`
  * The Stacks Module is a Class of a Linked List and has 4 methods attached to it
    * `push(value)` method where a value is assigned to a Node and pushed tot he end of the Linked List
    * `pop()` method where the last node of the Linked List (i.e. the only Node with `this.next = null`) is removed from the Linked List
    * `peek()` method where the last node of the Linked List is returned
    * Lastly the `isEmpty()` method where a Boolean is return is the Linked List has any Nodes

### Implementation
  * This program has no need for any outside dependencies other than those used in testing and in transpiling
  * In order to use this program one would simply need to run `npm i` from their terminal and then require the module `Stacks`
  * When using this module once a `new Stack` has been instantiated all methods are available through not or bracket notation
  * `npm run test` to iniate the test suites

#### Rubric:
  * Tests: 2pts
  * Passes linter: 1pts
  * Completed Data Structure: 5pts
  * Big-O notation: 2pt
