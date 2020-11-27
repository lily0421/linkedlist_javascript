class Linked {
  constructor(data) {
    this.head = {
      data: data,
      next: null,
    }
    this.tail = this.head
    this.length = 1
  }
  append(data) {
    const newNode = {
      data: data,
      next: null,
    }
    this.tail.next = newNode
    this.tail = newNode
    return this
  }
  print() {
    var currNode = this.head
    while (!(currNode.next == null)) {
      console.log(currNode.next)
      currNode = currNode.next
    }
  }
}

let list = new Linked(10)
list.append(2)
list.append(3)
list.append(4)
list.print()
