#include "Queue.h"

void Queue::enqueue(Employee data) {
    addNode(data);
}

Node Queue::dequeue() {
    if (pStart == nullptr) {
        return Node({-1, "", 0.0});
    }

    Node tempNode = *pStart;
    Node* delPtr = pStart;

    if (pStart == pLast) {
        pStart = nullptr;
        pLast = nullptr;
    }
    else {
        pStart = pStart->pNext;
        pStart->pPrev = nullptr;
    }

    delete delPtr;
    size--;

    return tempNode;
}

Node Queue::peek() {
    if (pStart == nullptr) {
        return Node({-1, "", 0.0});
    }
    return *pStart;
}
