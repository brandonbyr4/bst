// Implementing a binary search tree in JS
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Insert a new element into the BST
function insertBST(BST_tree, value) {
    const direction = value < BST_tree.value ? 'left' : 'right';

    // Reject duplicate insertions
    if(value === BST_tree.value) return;

    if(BST_tree[direction]) {
        insertBST(BST_tree[direction], value);
    } else {
        BST_tree[direction] = new BST(value);
    }
}

// Console log BST in-order traversal in ascending order of their values
function iterateBST(BST) {
    const directions = ['left', 'right']

    for (const direction in directions) {
        if (!BST[directions[direction]]) {
            console.log(BST.value);
        } else {
            iterateBST(BST[directions[direction]]);
        }
    }
}

// Create and display a BST in order
const bst = new BST(parseInt(Math.random() * 100));
for (let i = 0; i < 100; i++) {
    insertBST(bst, parseInt(Math.random() * 100));
}

iterateBST(bst);