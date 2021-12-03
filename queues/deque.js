class Deque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }

  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      // for educational purposes
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i-1];
      }
      this.count++;
      this.lowestCount = 0;
      this.items[this.lowestCount] = element;

      // OR
      // this.lowestCount--;
      // this.items[this.lowestCount] = element;
    }
  }

  removeFront(){
    if (this.isEmpty()) {
      return undefined;
    }
    let result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }
  
  removeBack(){
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    let result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  size() {
    return this.count - this.lowestCount;
  }

  isEmpty() {
    return this.size() === 0
  }

  peekFront() {
    if (this.isEmpty()) return undefined;
    return this.items[this.lowestCount];
  }

  peekBack() {
    if (this.isEmpty()) return undefined;
    return this.items[this.count - 1];
  }

  clear() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  toString() {
    if (this.isEmpty()) {
      return undefined;
    }
    let qlist = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count ; i++) {
      qlist = `${qlist}, ${this.items[i]}`;
    }
    return qlist;
  }
}

module.exports = Deque;

const list = new Deque();
// use