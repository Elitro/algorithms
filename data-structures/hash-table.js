/** Class representing a Hash Table */

class HashTable {
  constructor(size) {
    this._storage = Array(10);
    this._tableSize = size
  }
  /*
  * Inserts a new key-value pair
  * @param {string} key - the key associated with the value
  * @param {*} value - the value to insert
  */
  insert(key, value) {
    const index = this._hash(key, this._tableSize)
    
    if (!this._storage[index]) this._storage[index] = []
    else {
      const element = this._storage[index]
      // If the element is a duplicate we replace
      for (let i=0; i<element.length; i++) {
        if (element[i][0] === key) {
          element[i] = [key, value]
          return
        }
      }
    }
    this._storage[index].push([key, value])
  }
  /*
  * Deletes a key-value pair
  * @param {string} key - the key associated with the value
  * @return {*} value - the deleted value
  */
  remove(key) {
    const index = this._hash(key, this._tableSize)
    const element = this._storage[index]

    if (element) {
      for (let i=0; i<element.length; i++) {
        if (element[i][0] === key ) {
          let value = element[i][1]
          console.log('found it', value)
          delete element[i]
          return value
        }
      }
    }
    
  }
  /*
  * Returns the value associated with a key
  * @param {string} key - the key to search for
  * @return {*} - the value associated with the key
  */
  retrieve(key) {
    const index = this._hash(key, this._tableSize)
    const element = this._storage[index]
    

    for (let i=0; i<element.length; i++) {
      if (element[i][0] === key ) return element[i][1]
    }
  }  
  /*
  * Hashes string value into an integer that can be mapped to an array index
  * @param {string} str - the string to be hashed
  * @param {number} n - the size of the storage array
  * @return {number} - an integer between 0 and n
  */
  _hash(str, n) {
    let sum = 0;
    for (let i = 0; i < str.length; i++)
        sum += str.charCodeAt(i) * 3

    return sum % n;
  }
}

const myHashtable = new HashTable(25)
myHashtable.insert('0', 'zero')
myHashtable.insert('1', 'one')
myHashtable.insert('2', 'two')
myHashtable.insert('2', 'twotwo')
console.log(myHashtable)
console.log('retrieve', myHashtable.retrieve('2'))
myHashtable.remove('2')
console.log(myHashtable)
