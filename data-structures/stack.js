// Working from https://slides.com/bgando/intro-to-ds-1#/2/2

/** Class representing a Stack. */
class Stack {

    constructor() {
      this._storage = {};
      this._head = null
    }
    /*
    * Adds a new value at the end of the stack
    * @param {*} value the value to push
    */
    push(value) {
      let tmpHead = {
        value,
        next: this._head
      }
  
      this._storage = {
        head: tmpHead
      }
  
      this._head = this._storage.head
    }
  
    /*
    * Removes the value at the end of the stack and returns it
    * @return {*} the last and newest value in the stack
    */
    pop() {
      const currentValue = this._head.value
  
      this._head = this._head.next
  
      this._storage = {
        head: this._head
      }
  
      return currentValue
    }
    /*
    * Returns the value at the end of the stack without removing it
    * @return {*} the last and newest value in the stack
    */
    peek() {
      return 'peek: ' + this._storage.head.value
    }
  }
  
  const myStack = new Stack();
  
  console.log('myStack', myStack)
  myStack.push('val1')
  console.log(myStack.peek())
  myStack.push('val2')
  console.log('myStack', myStack)
  console.log(myStack.pop())
  console.log(myStack.pop())
  
  // Bianca's impl
  
  /** Class representing a Stack. */
  class Stack {
  
    constructor() {
      this._storage = {};
      this._length = 0
    }
    /*
    * Adds a new value at the end of the stack
    * @param {*} value the value to push
    */
    push(value) {
      this._storage[this._length] = value
      this._length++
    }
  
    /*
    * Removes the value at the end of the stack and returns it
    * @return {*} the last and newest value in the stack
    */
    pop() {
      const lastVal = this._storage[this._length-1];
      delete this._storage[this._length-1]
      this._length--
      return lastVal
    } 
    /*
    * Returns the value at the end of the stack without removing it
    * @return {*} the last and newest value in the stack
    */
    peek() {
      return this._storage[this._length-1]
    }
  }
  
  const myStack = new Stack()
  
  console.log('myStack', myStack)
  myStack.push('val1')
  console.log(myStack.peek())
  myStack.push('val2')
  console.log('myStack', myStack)
  console.log(myStack.pop())
  console.log(myStack.pop())
  console.log('myStack', myStack)