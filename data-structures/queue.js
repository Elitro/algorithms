// From https://slides.com/bgando/intro-to-ds-1#/2/3
/** Class representing a Queue. 
 * @constructor
*/

class Queue {

    constructor() {
      this._storage = {};
      this._index = 0
      this._length = 0
    } 
    /*
    * Enqueues a new value at the end of the queue
    * @param {*} value the value to enqueue
    */
    enqueue(value) {
      this._storage[this._index + this._length] = value
      this._length++
    }
  
    /*
    * Dequeues the value from the beginning of the queue and returns it
    * @return {*} the first and oldest value in the queue
    */
    dequeue() {
        if (this._length) {
          const returnVal = this._storage[this._index]
          delete this._storage[this._index]
          this._index++
          this._length--
          return returnVal
        }
    }
    /*
    * Returns the value at the beginning of the queue without removing it from the queue
    * @return {*} the first and oldest value in the queue
    */
    peek() {
      return this._storage[this._index]
    }
  }

const myQueue = new Queue()

console.log(myQueue)
myQueue.enqueue('zero')
myQueue.enqueue('one')
console.log('dequeue', myQueue.dequeue())
console.log(myQueue)