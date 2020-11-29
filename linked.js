let head;
class List {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

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
    let tempNode = head;
    while (tempNode.data !== value) {
        tempNode = tempNode.next;
    }
    let delNode = tempNode.next;
    let nextNode = delNode.next;
    tempNode.next = nextNode;
}
function changeValue(head, value) {
    let tempNode = head;
    let count = 0;
    while (tempNode.value != value) {
        tempNode = tempNode.next;
        count++;
        if (tempNode == null) {
            console.log("no data");
        }
    }
    let nextNode = tempNode.next;
    let newNode = new List(value);
    newNode = nextNode.next;
    tempNode.next = newNode;
}
// 오름차순으로 정렬을 유지하면서 넣어준다
function push(head, value) {
    let tempNode = head;
    if (tempNode == null) {
        const newNode = new List(value);
        tempNode.next = newNode;
    }
    while (tempNode.next) {
        if (tempNode.data < value) {
            const newNode = new List(value);
            tempNode.next = newNode;
        } else {
            const newNode = new List(value, tempNode);
            tempNode = newNode;
        }
    }

}

// 프린트
function print(head) {
    let tempNode = head;
    while (tempNode !== null) {
        console.log(tempNode.value);
        tempNode = tempNode.next;
    }
}

const headNode = new List(1, null);
push(headNode, 2)
push(2, 3)
push(3, 4)
print(headNode)