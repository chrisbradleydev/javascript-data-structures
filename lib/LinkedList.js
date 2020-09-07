export default class LinkedList {
    constructor() {
        this.head = null; // first element of the list
        this.tail = null; // last element of the list
    }

    append(value) {
        const newNode = { value, next: null };

        // update previous tail if tail exists
        if (this.tail) {
            this.tail.next = newNode;
        }
        this.tail = newNode;

        // set head if head does not exist
        if (!this.head) {
            this.head = newNode;
        }
    }

    delete(value) {
        if (!this.head) {
            return null;
        }

        while (this.head && this.head.value === value) {
            this.head = this.head.next;
        }

        let currentNode = this.head;
        while (currentNode && currentNode.next) {
            if (currentNode.next.value === value) {
                // update next node to the following node
                currentNode.next = currentNode.next.next;
            } else {
                // move to next node
                currentNode = currentNode.next;
            }
        }

        if (this.tail.value === value) {
            this.tail = currentNode;
        }
    }

    find(value) {
        if (!this.head) {
            return null;
        }

        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            }
            // move to next node
            currentNode = currentNode.next;
        }

        return null;
    }

    getHead() {
        return this.head;
    }

    getTail() {
        return this.tail;
    }

    insertAfter(value, afterValue) {
        const existingNode = this.find(afterValue);
        if (existingNode) {
            const newNode = { value, next: existingNode.next };
            existingNode.next = newNode;
        }
    }

    prepend(value) {
        const newNode = { value, next: this.head };
        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }
    }

    toArray() {
        const elements = [];
        let currentNode = this.head;
        while (currentNode) {
            elements.push(currentNode);
            currentNode = currentNode.next;
        }
        return elements;
    }
}
