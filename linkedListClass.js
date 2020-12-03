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

    tailDelete() { //1개 이상 노드가 있다고 가정
        let currentNode = this.head;
        while (currentNode.next.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = null;
    };

    searchValueToDelete(value) {//중복시 처음 것 만 제거
        let currentNode = this.head;
        while (currentNode.next !== null) {
            if (currentNode.next.value === value) {
                let delNode = currentNode.next;
                if (delNode.next != null) {
                    //중간 노드 삭제시
                    currentNode.next = delNode.next;
                } else {
                    //마지막 노드 삭제시
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
        let newNode = new LinkedList();
        while (currentNode) {
            while (currentNode.next !== null) {
                if (currentNode.next.value > currentNode.value) {
                    currentNode.changeToNextNode();
                }
                currentNode = currentNode.next
            }
            newNode.tailPush(currentNode.value)
            this.tailDelete()
            currentNode = this.head.next
        }
        newNode.print()
    };

    print() {
        let currentNode = this.head.next;
        while (currentNode !== null) {
            console.log(`${currentNode.value} -> `);
            currentNode = currentNode.next;
        }
        console.log("End")
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
