class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    
    add(value) {
        const newNode = new Node(value);
        if (this.head === null) {
          this.head = newNode;
        } else {
          let current = this.head;
          while (current.next !== null) {
            current = current.next;
          }
          current.next = newNode;
        }
    }

    remove(value) {
        if (this.head.data === value) {
            this.head = this.head.next;
            return true;
        } else
            for (let node = this.head; node.next; node = node.next)
                if (node.next.data === value) {
                    node.next = node.next.next;
                    return true;
                }
        return false;
    }

    contains(value) {
        let node = this.head;
        while (node) {
            if(node.data === value) return true;
            node = node.next;
        }
        return false;
    }

    [Symbol.iterator] = function() {
        let current = this.head;
        return {
            next() {
                if (current) {
                    let value = current.data;
                    current = current.next;
                    return {value: value, done: false};
                }
                return {done: true};
            }
        };
    };

    clear() {
        this.head = null;
    }

    count() {
        let count = 0; 
        let node = this.head;
        while (node) {
            count++;
            node = node.next
        }
        return count;
    }

    log() {
        let node = this.head;
        let output = '';
        while(node){
            output += node.data;
            if (node.next) {
                output += ', ';
            }
            node = node.next
        }
        console.log(output);
    }
}

function createLinkedList(arr) {
    const linkedList = new LinkedList();
    arr.forEach(value => linkedList.add(value));
    return linkedList;
}

/*
const ll = createLinkedList([100, 1, 2, 3, 100, 4, 5, 100]);

ll.log();
// "100, 1, 2, 3, 100, 4, 5, 100"
while(ll.remove(100)){}
ll.log();
// "1, 2, 3, 4, 5"
ll.add(10)
ll.log();
// "1, 2, 3, 4, 5, 10"
console.log(ll.contains(10));
// "true"
let sum = 0;
for(const n of ll) {
    sum += n;
}
console.log(sum);
// "25"
ll.clear();
ll.log();
// "" 
*/