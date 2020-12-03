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
        //1개 이상 노드가 있다고 가정
        let currentNode = this.head;
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
        if (currentNode.value === value) {
            currentNode.value = changeValue
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
newList.randomNumbers()
newList.print();
newList.ascendingSort();
