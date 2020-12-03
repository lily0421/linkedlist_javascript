//예외처리
//sort다시

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
        if (currentNode.next == null) {
            console.log("No search value delete")
            return;
        }
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
    };

    searchValueToChange = (value, changeValue) => {
        //중복시 처음 것 만 바꾸기
        let currentNode = this.head
        if (currentNode.value == null) {
            console.log("No search value change")
            return;
        }
        while (currentNode.value !== value) {
            currentNode = currentNode.next
        }
        currentNode.value = changeValue
    }

    ascendingSort() {
        let currentNode = this.head.next;
        let newLinkedList = new LinkedList();

        while (currentNode) {
            while (currentNode.next !== null) {
                if (currentNode.next.value > currentNode.value) {
                    currentNode.changeToNextNode();
                }
                currentNode = currentNode.next
            }
            newLinkedList.tailPush(currentNode.value)
            this.tailDelete()
            currentNode = this.head.next
        }
        newLinkedList.print()
    };

    print() {
        let currentNode = this.head.next;
        while (currentNode !== null) {
            console.log(`${currentNode.value} -> `);
            currentNode = currentNode.next;
        }
        console.log("LinkedList End")
    };

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

    changeToNextNode() {
        const targetValue = this.value
        this.value = this.next.value;
        this.next.value = targetValue;
    }
}

const newList = new LinkedList();
newList.tailPush(1);
newList.tailPush(3);
newList.tailPush(4);
newList.tailPush(5);
newList.print();
newList.searchValueToChange(2, 4);
// newList.randomNumbers()
newList.print();
// newList.ascendingSort();
