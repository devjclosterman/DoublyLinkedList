class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    insertAtEnd(data) {
        let newNode = new Node(data);

        if(!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    // Display the list forward
    displayForward() {
        let current = this.head;
        while(current) {
            console.log("Forward", current.data);
            current = current.next;
        }
    }

    // Display the list backwards
    displayBackward() {
        let current = this.tail;
        while(current) {
            console.log(current.data);
            current = current.prev;
        }
    }
}

let dll = new DoublyLinkedList();

// Insert some elements
dll.insertAtEnd(10);
dll.insertAtEnd(20);
dll.insertAtEnd(30);

// Display the list forward
console.log('Forward Traversal:');
dll.displayForward(); 

// Display the list backward
console.log('Backward Traversal:');
dll.displayBackward();