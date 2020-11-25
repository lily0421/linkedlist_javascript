function List() {
  this.head = null
  this.length = 0
}

List.prototype.TailAdd = function (data) {
  var node = new Node(data)

  if (!this.head) {
    this.tail.next = node
    this.tail = node
  } else {
    this.head = node
    this.tail = node
  }
  return node
}

List.prototype.print = function () {
  var currNode = this.head
  while (!(currNode.next == null)) {
    console.log(currNode.next.data)
    currNode = currNode.next
  }
}

var linked = new List()
linked.TailAdd(10)
