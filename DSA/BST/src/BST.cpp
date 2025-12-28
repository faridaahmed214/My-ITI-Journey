#include "BST.h"

BST::BST() {
    root = nullptr;
}

BST::BST(const BST& other) {
    if (other.root == nullptr) {
        root = nullptr;
    } else {
        root = copyTreeHelper(other.root);
    }
}

Node* BST::copyTreeHelper(Node* ptr) {
    if (ptr == nullptr) return nullptr;
    
    Node* newNode = new Node(ptr->data);
    newNode->pLeft = copyTreeHelper(ptr->pLeft);
    newNode->pRight = copyTreeHelper(ptr->pRight);
    
    return newNode;
}

BST::~BST() {
    clearTree(root);
}

void BST::clearTree(Node* ptr) {
    if (ptr != nullptr) {
        clearTree(ptr->pLeft);
        clearTree(ptr->pRight);
        delete ptr;
    }
}

// elinsertion b balancing

void BST::insertByRef(Employee data) {
    insertRefHelper(root, data);

    if (!isBalanced()) {
        rebalance();
    }
}

void BST::insertRefHelper(Node*& ptr, Employee data) {
    if (ptr == nullptr) {
        ptr = new Node(data);
        return;
    }

    if (data.id < ptr->data.id) {
        insertRefHelper(ptr->pLeft, data);
    }
    else if (data.id > ptr->data.id) {
        insertRefHelper(ptr->pRight, data);
    }
}

void BST::insertTwoPointers(Employee data) {
    Node* newNode = new Node(data);

    if (root == nullptr) {
        root = newNode;
        return;
    }

    Node* current = root;
    Node* parent = nullptr;

    while (current != nullptr) {
        parent = current;
        if (data.id < current->data.id) {
            current = current->pLeft;
        }
        else if (data.id > current->data.id) {
            current = current->pRight;
        }
        else {
            delete newNode; 
            return; 
        }
    }

    if (data.id < parent->data.id) {
        parent->pLeft = newNode;
    }
    else {
        parent->pRight = newNode;
    }

    if (!isBalanced()) {
        rebalance();
    }
}

// eldeletion b balancing


void BST::deleteNode(int id) {
    searchAndDestroy(root, id);

    if (!isBalanced()) {
        rebalance();
    }
}

void BST::searchAndDestroy(Node*& ptr, int id) {
    if (ptr == nullptr) return;

    if (id < ptr->data.id) {
        searchAndDestroy(ptr->pLeft, id);
    }
    else if (id > ptr->data.id) {
        searchAndDestroy(ptr->pRight, id);
    }
    else {
        processDelete(ptr);
    }
}

void BST::processDelete(Node*& ptr) {
    Node* current = ptr;

    if (ptr->pRight == nullptr) {
        ptr = ptr->pLeft;
        delete current;
    }
    else if (ptr->pLeft == nullptr) {
        ptr = ptr->pRight;
        delete current;
    }
    else {
        Node* minNode = getMin(ptr->pRight);
        swapData(ptr, minNode);
        searchAndDestroy(ptr->pRight, minNode->data.id);
    }
}

Node* BST::getMin(Node* ptr) {
    while (ptr->pLeft != nullptr) {
        ptr = ptr->pLeft;
    }
    return ptr;
}

void BST::swapData(Node* a, Node* b) {
    Employee temp = a->data;
    a->data = b->data;
    b->data = temp;
}


// Search & Display


Node* BST::searchBST(int id) {
    Node* current = root;
    while (current != nullptr) {
        if (id == current->data.id) return current;
        else if (id < current->data.id) current = current->pLeft;
        else current = current->pRight;
    }
    return nullptr; 
}

void BST::traverse() {
    inOrderHelper(root);
    cout << endl;
}

void BST::inOrderHelper(Node* ptr) {
    if (ptr != nullptr) {
        inOrderHelper(ptr->pLeft);
        cout << "ID: " << ptr->data.id << ", Name: " << ptr->data.name << ", Salary: " << ptr->data.salary << endl;
        inOrderHelper(ptr->pRight);
    }
}



// Balance Logic

bool BST::isBalanced() {
    return isBalancedHelper(root);
}

bool BST::isBalancedHelper(Node* ptr) {
    if (ptr == nullptr) return true;

    int lh = getHeightHelper(ptr->pLeft);
    int rh = getHeightHelper(ptr->pRight);

    if (abs(lh - rh) <= 1 && isBalancedHelper(ptr->pLeft) && isBalancedHelper(ptr->pRight)) {
        return true;
    }
    return false;
}

int BST::getHeightHelper(Node* ptr) {
    if (ptr == nullptr) return 0;
    return 1 + max(getHeightHelper(ptr->pLeft), getHeightHelper(ptr->pRight));
}

void BST::rebalance() {
    vector<Node*> nodes;
    storeBSTNodes(root, nodes);
    
    int n = nodes.size();
    root = buildBalancedTree(nodes, 0, n - 1);
}

void BST::storeBSTNodes(Node* ptr, vector<Node*>& nodes) {
    if (ptr == nullptr) return;
    storeBSTNodes(ptr->pLeft, nodes);
    nodes.push_back(ptr);
    storeBSTNodes(ptr->pRight, nodes);
}

Node* BST::buildBalancedTree(vector<Node*>& nodes, int start, int end) {
    if (start > end) return nullptr;

    int mid = (start + end) / 2;
    Node* node = nodes[mid];

    node->pLeft = buildBalancedTree(nodes, start, mid - 1);
    node->pRight = buildBalancedTree(nodes, mid + 1, end);

    return node;
}