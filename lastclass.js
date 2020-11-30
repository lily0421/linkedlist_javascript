class LinkedList {
    constructor() {
        this.head = new Node();
    }
    tailPush(value) {
        const node = new Node(value);

        let currNode = this.head;
        while (currNode.next) {
            currNode = currNode.next;
        }
        currNode.next = node;

    }

    tailDelete() {

        let currNode = this.head;
        while (currNode.next.next) {
            currNode = currNode.next;
        }
        currNode.next = null;

    };

    deleteValue(value) {
        let currNode = this.head;
        while (currNode.next !== null) {
            if (currNode.next.value === value) {
                let delNode = currNode.next;
                if (delNode.next != null) {
                    //중간 노드 삭제시
                    currNode.next = delNode.next;
                } else {
                    //마지막 노드 삭제시
                    currNode.next = null;
                    return;
                }
            }
            currNode = currNode.next;
        }
    };

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

    ascendingSort() {
        let currNode = this.head.next;
        let prevNode = this.head;

        while (currNode.next !== null) {
            if (currNode.next.value < currNode.value) {
                prevNode.changetoNextNode();
            } else {
                prevNode = currNode;
                currNode = currNode.next;
            }
        }
    };

    print() {
        let currNode = this.head.next;
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
    changetoNextNode() {
        if (this.next != null && this.next.next != null) {
            const target = this.next;
            const final = target.next.next;
            this.next = target.next;
            this.next.next = target;
            this.next.next.next = final
        }
    }
}
const newList = new LinkedList();
newList.tailPush(5);
newList.tailPush(1);
newList.tailPush(6);
newList.tailPush(3);
newList.tailPush(8);
newList.tailPush(7);
newList.ascendingSort();
newList.print();