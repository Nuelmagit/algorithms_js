function LinkedList() {
    this.head = null;
    this.tail = null;
    this.size = 0;
}

LinkedList.prototype.initList = function (newNode) {
    this.head = newNode;
    this.tail = newNode;
    this.size++;
}

LinkedList.prototype.add = function (value) {
    const newNode = new Node(value);

    if (!this.head) {
        this.initList(newNode);
        return;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.size++;
}

LinkedList.prototype.removeNode = function () {
    if (!this.tail) return null;

    const currentTail = this.tail;
    this.tail = null;

    if (currentTail.prev) {
        this.tail = currentTail.prev;
        this.tail.next = null;
    }

    this.size--;
    return currentTail.value;
}

LinkedList.prototype.search = function (value) {
    let currentNode = this.head;
    while (currentNode) {
        if (typeof value === 'function') {
            if (value(currentNode.value)) return value;
        } else {
            if (currentNode.value === value) return value;
        }
        currentNode = currentNode.next;
    }
    return false;
}





function Node(value) {

    this.value = value;

    this.next = null;

    this.prev = null;

}

const list = new LinkedList();
for (let i = 0; i < 10; i++) {
    list.add(i);

}

// console.log({tail: list.tail})
// list.removeNode();
// console.log({tail: list.tail})


let nodo = list.head;

while (nodo.next) {

    // console.log(nodo);

    nodo = nodo.next;

}



table = {
}


for(let i = 0 ; i < 35; i++){
    table[i]= {"nombre": `Andrea-${i}`};
}

console.log(table);