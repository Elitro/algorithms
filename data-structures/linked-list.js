/** Class representing a Linked List */

class LinkedList {

  constructor(value) {
    this._head = {value, next: null}
    this._tail = this._head
  }
  /*
  * Inserts a new value to the end of the linked list
  * @param {*} value - the value to insert
  */
  insert(value) {
    const newNode = {
      value,
      next: null
    }

    this._tail.next = newNode
    this._tail = newNode
  }
  /*
  * Deletes a node
  * @param {*} node - the node to remove
  * @return {*} value - the deleted node's value
  */
  remove(value) {
    let tmpPrev = this._head
    let tmpCurr = this._head.next

    if (value === this._head.value) {
      this._head = this._head.next
      return value
    }

    while (tmpCurr !== null) {
      if (tmpCurr.value === value){
        tmpPrev.next = tmpCurr.next
        return value
      }
      tmpPrev = tmpPrev.next
      tmpCurr = tmpCurr.next
    }
    console.log('not found')
  }
  /*
  * Removes the value at the end of the linked list
  * @return {*} - the removed value
  */
  removeTail() {
    let returnValue = null

    if (this._head === this._tail) {
      this.returnValue = this._head.value
      this._head = null
    } else {
      let iter = this._head
      while (iter.next !== this._tail) {
        iter = iter.next
      }
      tmpValue = iter.next.value
      this._tail = iter
      this._tail.next = null
      return tmpValue
    }
  }
  /*
  * Searches the linked list and returns true if it contains the value passed
  * @param {*} value - the value to search for
  * @return {boolean} - true if value is found, otherwise false
  */
  contains(value) {
    let iter = this._head
    if (this._head && this._head.value) {
      while (iter.value !== value && iter.next) {
        iter = iter.next
      }
      return iter.value === value
    }
  }  
  /*
  * Checks if a node is the head of the linked list 
  * @param {{prev:Object|null, next:Object|null}} node - the node to check
  * @return {boolean} - true if node is the head, otherwise false
  */
  isHead(node) {
    return node === this._head
  }
  /*
  * Checks if a node is the tail of the linked list 
  * @param {{prev:Object|null, next:Object|null}} node - the node to check
  * @return {boolean} - true if node is the tail, otherwise false
  */
  isTail(node) {
    return node === this._tail
  }
}

const myList = new LinkedList(1); //initiate?
myList.insert('zero')
myList.insert('one')
myList.insert('two')
console.log(myList)
myList.contains('one')
myList.remove('one')
myList.contains('one')
