var LinkedList = function () {
  var list = {
    head: null,
    next: null,
  }

  list.TailPush = function (value) {
    let node = new Node(value) //값에 따른 노드 생성
    if (!this.head) {
      //노드 개수 0
      this.head = node
      this.next = node //노드 하나
    } else {
      console.log("1", list)
      this.next.next = node
      console.log("2", this.next)
      console.log("3", this.next.next)
      this.next = node
      console.log("4", this.next)
    }
  }

  list.SortPush = function (value) {
    let node = new Node(value) //노드 생성

    if (!this.head) {
      //노드 개수 0
      this.head = node
      this.next = node //노드 하나
    }
  }

  list.print = function () {
    let tempNode = this.head
    while (tempNode !== null) {
      console.log(tempNode.value)
      tempNode = tempNode.next
    }
  }
  return list
}

var Node = function (value) {
  var node = {
    value: value,
    next: null,
  }
  return node
}

var newLists = new LinkedList()
newLists.TailPush(1)
newLists.TailPush(2)
newLists.TailPush(3)
newLists.print()
