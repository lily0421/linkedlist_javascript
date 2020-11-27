var LinkedList = function () {
  function LinkedList() {
    this.head = null
    this.length = 0
  }
  function Node(data) {
    this.data = data
    this.next = null
  }
  LinkedList.prototype.TailAdd = function (data) {
    var node = new Node(data)
    var current = this.head

    if (!current) {
      //현재 노드 없음
      this.head = node //헤드에 노드 넣어줌
      this.length++ //길이 증가
      return node // 노드 반환
    } else {
      //현재 노드 있으면
      while (current.next) {
        //현재의 다음이 있을때까지
        current = current.next //마지막 노드를 찾아서
      }
      current.next = node //마지막 노드에 노드 추가
      this.length++ //길이 증가
      return node //노드 반환
    }
  }

  LinkedList.prototype.TailRemove = function () {
    //0개
    if (!this.head) {
      return null
    }
    //1개
    if (!this.head.next) {
      this.head = null
      return null
    }

    //2개이상 -- 오류
    let pre = this.head
    let temp = this.head.next
    while (temp.next != null) {
      // console.log(pre)
      pre = pre.next //next가 null
    }
    pre.next = null
    this.tail = pre
    return temp
  }

  //데이터로 찾기
  LinkedList.prototype.DataSearch = function (data) {
    let temp = this.head
    let count = 0
    while (temp.data != data) {
      temp = temp.next
      count++
      if (temp == null) {
        console.log("No data")
        return
      }
    }
    console.log('count:' , count)
    return count //몇번째 인지 return
  }

  //데이터로 노드 찾기 + 노드 값 바꾸기 -- 오류
  LinkedList.prototype.DataChange = function (data, changeData) {
    var data = LinkedList.prototype.DataSearch(data)
    var pre = this.head
    while (data) {
      console.log('data===>',pre.data)
      pre = pre.next //next가 null
    }
    // var temp = pre.next
    // var node = new Node(changeData)
    // node.next = temp.next
  }

  //데이터로 노드 찾기 + 노드 삭제
  LinkedList.prototype.DataRemove = function (data) {
    var count = LinkedList.prototype.DataSearch(data)
    var pre = this.head
    
  }

  //오름차순 정렬
  LinkedList.prototype.AscendingSort = function () {
       
  }
  
  LinkedList.prototype.Print = function () {
    let currentNode = this.head
    while (!(currentNode.next == null)) {
      console.log(currentNode)
      currentNode = currentNode.next
    }
  }
  return LinkedList
}

const lists = new LinkedList()
lists.prototype.TailAdd(3)
lists.prototype.TailAdd(4)
lists.prototype.TailAdd(5)
lists.prototype.TailAdd(6)
lists.prototype.Print()
lists.prototype.DataChange(5,10)
lists.prototype.Print()
