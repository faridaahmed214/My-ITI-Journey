#include "StackDLL.h"

void StackDLL::push(Employee data) {
    addNode(data);
}

Node StackDLL::pop() {
    if (pLast == nullptr) {
        return Node({-1, "", 0.0});
    }

    Node tempNode = *pLast;
    Node* delPtr = pLast;

    if (pStart == pLast) {
        pStart = nullptr;
        pLast = nullptr;
    }
    else {
        pLast = pLast->pPrev;
        pLast->pNext = nullptr;
    }

    delete delPtr;
    size--;

    return tempNode;
}

Node StackDLL::peek() {
    if (pLast == nullptr) {
        return Node({-1, "", 0.0});
    }
    return *pLast;
}
