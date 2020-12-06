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
        var currentNode = this.head.next;
        var count = 0
        while (currentNode !== null) {
            currentNode = currentNode.next
            count++
        }

        var currentNode = this.head.next;

        while (count) {
            while (currentNode.next !== null) {
                if (currentNode.next.value < currentNode.value) {
                    currentNode.changeToNextNode(currentNode.next, currentNode);
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

    changeToNextNode(next, current) {
        var temp = next.value
        next.value = current.value
        current.value = temp
    }
}

const newList = new LinkedList();
newList.randomNumbers()
newList.print();
newList.ascendingSort();