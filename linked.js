// call by value 가 되버림
var head;
class List {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

function pushToLast(head, value) {
    let tempNode = head;
    while (tempNode.next !== null) {
        tempNode = tempNode.next;
    }
    // console.log("중간", tempNode)
    let newNode = new List(value);
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
    console.log("처음", tempNode)
    while (tempNode.value !== value) {
        tempNode = tempNode.next;
    }
    let delNode = tempNode;
    console.log(delNode)
    let nextNode = delNode.next;
    console.log(nextNode)
    tempNode.next = nextNode;
    console.log("지우고", tempNode)
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
function push(value) {
    console.log(head)
    console.log(value)
    // if (tempNode == null) {
    //     const newNode = new List(value);
    //     tempNode = newNode;
    // }
    // if (tempNode.value < value) { //넣고자 하는 value가 크면 
    //     const newNode = new List(value); //value값을 가진 노드 생성해주고
    //     tempNode.next = newNode;
    //     return console.log("1", tempNode)
    // } else {
    //     const newNode = new List(value, tempNode);
    //     newNode.next = tempNode;
    //     return console.log("2", tempNode)
    // }

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
push(2)
push(3)
// deleteValue(headNode, 2)
print(headNode)