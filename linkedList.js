var List = function () {
  var list = {}
  list.head = null
  list.tail = null

  list.TailAdd = function (data) {
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

  list.TailRemove = function () {
    //0개
    if (!this.head) {
      return
    }
    //1개
    if (!this.head.next) {
      this.head = null
      return
    }

    //2개이상
    var preNode = this.head
    var tempNode = this.head.next
    while (tempNode.next != null) {
      preNode = preNode.next
    }
    preNode.next = null
    return this.head
  }

  list.SearchChange = function (index, data) {
    if (index == null) {
      console.log("Not Found")
    }
    var index = 0
    var tempNode = this.head
    while (tempNode.index != index) {
      index++
      tempNode = tempNode.next
      if (tempNode == null) {
        return console.log("Not Found")
      }
    }
    tempNode.data = data

    // var tempNode = this.head
    // while (tempNode.head != data) {
    //   tempNode = tempNode.next
    // }
  }

  list.SearchRemove = function (index, data) {
    
  //search 하기
  
  }

  list.AscendingSort = function () {}

  list.print = function () {
    var currNode = this.head
    while (!(currNode.next == null)) {
      console.log(currNode.next.data)
      currNode = currNode.next
    }
  }

  list.TailAdd(2)
  list.print()
}
