let head: List;

interface INode {
  value: number;
  next: List | null;
}

class List implements INode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
  value: number;
  next: List;
}

const headNode = new List(1, null);

function pushToLast(head, value) {
  let tempNode = head;
  while (tempNode !== null) {
    tempNode = tempNode.next;
  }
  const newNode = new List(value);
  tempNode.next = newNode;
}

function deleteToLast(head) {
  let tempNode = head;
  while (tempNode.next.next !== null) {
    tempNode = tempNode.next;
  }
  tempNode.next = null;
}

function deleteValue(head, value) {
  let tempNode = head
  while (tempNode.data !== value) {
    tempNode = tempNode.next
  }
  let delNode = tempNode.next
  let nextNode = delNode.next
  tempNode.next = nextNode
}

function changeValue(head, value) {
  let tempNode = head
  let count = 0
  while (tempNode.value != value) {
    tempNode = tempNode.next
    count++;
    if (tempNode == null) { console.log("no data") }
  }
  let nextNode = tempNode.next
  let newNode = new List(value)
  newNode = nextNode.next
  tempNode.next = newNode
}

// 오름차순으로 정렬을 유지하면서 넣어준다
function push(head, value) {
  let tempNode = head
  if (tempNode == null) {
    const newNode = new List(value)
    tempNode.next = newNode
  }
  else {
    if (tempNode < value) {
      const newNode = new List(value)
      tempNode.next = newNode
    } else {
      const newNode = new List(value, tempNode)
      tempNode = newNode
    }
  }
}

// 특정 값을 없앤다 - 처음에 보이는 거 하나만
function pop(head, value) {
  let tempNode = head

}

// 특정 값 - 처음에 보이는 거 하나만 - 을 찾아서 해당 index를 반환하다
function searchByValue(head, value) {

}

// function length(head): number  // 해당 LL의 길이를 반환한다

function print(head) {
  let tempNode = head
  while (tempNode.next !== null) {
    console.log(tempNode)
    tempNode = tempNode.next
  }
}

pushToLast(1, 2)
pushToLast(2, 3)
pushToLast(3, 4)
print(1)

