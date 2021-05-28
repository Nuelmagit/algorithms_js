function BinarySearchTree() {
    this.root = null;
}

function Node(value) {
    this.left = null;
    this.right = null;
    this.value = value;
}

BinarySearchTree.prototype.insert = function (value, prevNode = null) {
    if (!this.root) {
        this.root = new Node(value);
        return;
    }

    if (!prevNode) prevNode = this.root;

    const nextNode = value > prevNode.value ? prevNode.right : prevNode.left;

    if (nextNode) {
        this.insert(value, nextNode);
        return
    }

    const newNode = new Node(value);
    value > prevNode.value ? prevNode.right = newNode : prevNode.left = newNode;

}

BinarySearchTree.prototype.contains = function (value, currentNode = null) {
    if (!this.root) return false;

    if (!currentNode) currentNode = this.root;

    if (currentNode.value !== value) {

        const nextNode = value > currentNode.value ? currentNode.right : currentNode.left;
        if (!nextNode) return false;
        return this.contains(value, nextNode);

    }

    return true;
}

BinarySearchTree.prototype.inOrder = function (currentNode, storage) {
    if (!currentNode) return;

    this.inOrder(currentNode.left, storage);

    storage.push(currentNode.value);

    this.inOrder(currentNode.right, storage);

}

BinarySearchTree.prototype.preOrder = function (currentNode, storage) {
    if (!currentNode) return;

    storage.push(currentNode.value);

    this.preOrder(currentNode.left, storage);

    this.preOrder(currentNode.right, storage);

}

BinarySearchTree.prototype.postOrder = function (currentNode, storage) {
    if (!currentNode) return;

    this.postOrder(currentNode.left, storage);

    this.postOrder(currentNode.right, storage);

    storage.push(currentNode.value);

}

BinarySearchTree.prototype.depthFirstForEach = function (method) {
    const storage = [];
    if (!this.root) return storage;
    switch (method) {
        case 'pre-order':
            this.preOrder(this.root, storage);
            break;
        case 'post-order':
            this.postOrder(this.root, storage);
            break;
        case 'in-order':
        default:
            this.inOrder(this.root, storage);

    }

    return storage;

}

BinarySearchTree.prototype.heightHelper = function (node) {
    if (!node) return 0;
    leftHeight = this.heightHelper(node.left);
    rightHeight = this.heightHelper(node.right);
    return leftHeight > rightHeight ? leftHeight + 1 : rightHeight + 1;
}

BinarySearchTree.prototype.height = function () {
    return this.heightHelper(this.root);
}

BinarySearchTree.prototype.BreathFirstSearch = function () {
    if (!this.root) return;

    const printLeaf = (node) => {
        if (node.left) console.log(node.left.value);
        if (node.right) console.log(node.right.value);
    }

    while (currentNode) {


    }
}


const bst = new BinarySearchTree();

bst.insert(10);

bst.insert(20);

bst.insert(5);

bst.insert(30);

bst.insert(15);

bst.insert(6);

bst.insert(3);

//         10
//     5          20
// 3     6     15    30

console.log(bst.height());



// console.log({
//     pre: bst.depthFirstForEach("pre-order")
// });

// console.log({
//     post: bst.depthFirstForEach("post-order")
// });

// console.log({
//     post: bst.depthFirstForEach("in-order")
// });