class LinkedList {
  constructor() {
    this.head = new Node();
  }

  tailPush(value) {
    const node = new Node(value);

    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
  }

  tailDelete() {
    let currentNode = this.head;
    if (currentNode.next == null) {
      console.log("No Node")
      return;
    }
    while (currentNode.next.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = null;
  };

  searchValueToDelete(value) {
    //중복시 처음 것 만 제거
    let currentNode = this.head;

    while (currentNode.next !== null) {
      if (currentNode.next.value === value) {
        let delNode = currentNode.next;
        if (delNode.next != null) {
          currentNode.next = delNode.next;
          return;
        } else {
          currentNode.next = null;
          return;
        }
      }
      currentNode = currentNode.next;
    }
    if (currentNode.next === null) {
      console.log("No search value delete")
    }
  };

  searchValueToChange = (value, changeValue) => {
    //중복시 처음 것 만 바꾸기
    let currentNode = this.head

    while (currentNode.value !== value) {
      currentNode = currentNode.next
      if (currentNode === null) {
        console.log("No search value change")
        return
      }
    }
    currentNode.value = changeValue
  }

  ascendingSort() {
    let countNode = this.head.next;
    let currentNode = this.head.next;
    let count = 0
    while (countNode !== null) {
      countNode = countNode.next
      count++
    }

    while (count) {
      while (currentNode.next !== null) {
        if (currentNode.next.value < currentNode.value) {
          this.changeToNextNode(currentNode.next, currentNode);
        }
        currentNode = currentNode.next
      }
      currentNode = this.head.next
      count--
    }
    this.print()
  };

  print() {
    let currentNode = this.head.next;
    while (currentNode !== null) {
      console.log(`${currentNode.value} -> `);
      currentNode = currentNode.next;
    }
    console.log("LinkedList End")
  };

  changeToNextNode(next, current) {
    var temp = next.value
    next.value = current.value
    current.value = temp
  }

  randomNumbers() {
    for (var i = 0; i < 10; i++) {
      this.tailPush(Math.floor(Math.random() * 100 + 1));
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const newList = new LinkedList();
newList.tailPush(1);
newList.tailPush(2);
newList.tailPush(10);
newList.tailPush(4);
newList.tailPush(5);
newList.searchValueToChange(5, 40)
newList.searchValueToChange(3, 10)
// newList.randomNumbers()
newList.print();
// newList.ascendingSort();
