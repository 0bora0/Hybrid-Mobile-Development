class Queue {
  constructor() {
    this.queue = [];
    this.head = 0;
    this.tail = 0;
    this.maxSize = 100;
  }

  getLength() {
    return this.tail - this.head;
  }

  isEmpty() {
    return this.getLength() === 0;
  }

  isFull() {
    return this.getLength() === this.maxSize;
  }

  enqueue(element) {
    if (this.isFull()) {
      return false;
    }
    this.queue[this.tail] = element;
    this.tail++;
    return true;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.queue[this.head];
    this.head++;
    return item;
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue[this.head];
  }
}

module.exports = Queue;
