class LinkedList {
  constructor() {
    this.head = null;
  }
  tailPush = (value) => {
    const node = new Node(value);
    if (!this.head) {
      // 길이가 0이면
      this.head = node;
    } else {
      let currNode = this.head;
      while (currNode.next) {
        currNode = currNode.next;
      }
      currNode.next = node;
    }
  };

  tailDelete = () => {
    if (!this.head) {
      // 길이가 0이면
      return null
    } else if (!this.head.next) {
      //길이가 1이면
      this.head = null
    } else {
      let currNode = this.head;
      while (currNode.next.next) {
        currNode = currNode.next;
      }
      currNode.next = null
    }
  }

  deleteValue = (value) => {
    let currNode = this.head
    if (currNode.value === value) {
      this.head = currNode.next

    }
    while (currNode.next !== null) {
      if (currNode.next.value === value) {
        let delNode = currNode.next
        if (delNode.next != null) {
          //중간 노드 삭제시
          currNode.next = delNode.next
        } else {
          //마지막 노드 삭제시
          currNode.next = null
          return
        }
      }
      currNode = currNode.next;
    }
  }

  changeValue = (value, changeValue) => {
    //바꾸고자 하는 노드, 바꾸고 싶은 값
    let currNode = this.head
    if (currNode.value === value) {
      currNode.value = changeValue
    }
    while (currNode.value !== value) {
      currNode = currNode.next
    }
    currNode.value = changeValue
  }

  print = () => {
    let currNode = this.head;
    while (currNode !== null) {
      console.log(`${currNode.value} 이다`);
      currNode = currNode.next;
    }
  };
}
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
const newList = new LinkedList();
newList.tailPush(1);
newList.tailPush(4);
newList.tailPush(3);
newList.tailPush(2);
newList.print();