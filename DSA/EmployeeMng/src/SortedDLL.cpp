#include "SortedDLL.h"
#include <iomanip>

SortedDLL::SortedDLL() {
    pStart = nullptr;
    pLast = nullptr;
    size = 0;
}

SortedDLL::~SortedDLL() {
    while (pStart != nullptr) {
        Node* temp = pStart;
        pStart = pStart->pNext;
        delete temp;
    }
    pLast = nullptr;
    size = 0;
}

SortedDLL::SortedDLL(const SortedDLL& other) {
    pStart = nullptr;
    pLast = nullptr;
    size = 0;

    if (other.pStart == nullptr) return;

    Node* current = other.pStart;
    while (current != nullptr) {
        insertNode(current->data);
        current = current->pNext;
    }
}

void SortedDLL::insertNode(Employee data) {
    Node* newNode = new Node(data);

    if (pStart == nullptr) {
        pStart = newNode;
        pLast = newNode;
        size++;
        return;
    }

    if (data.id <= pStart->data.id) {
        newNode->pNext = pStart;
        pStart->pPrev = newNode;
        pStart = newNode;
        size++;
        return;
    }

    if (data.id >= pLast->data.id) {
        pLast->pNext = newNode;
        newNode->pPrev = pLast;
        pLast = newNode;
        size++;
        return;
    }

    int distFromStart = data.id - pStart->data.id;
    int distFromEnd = pLast->data.id - data.id;

    Node* current;

    if (distFromStart <= distFromEnd) {
        current = pStart;
        while (current != nullptr && current->data.id < data.id) {
            current = current->pNext;
        }
    }
    else {
        current = pLast;
        while (current->data.id > data.id) {
            current = current->pPrev;
        }
        current = current->pNext;
    }

    newNode->pNext = current;
    newNode->pPrev = current->pPrev;
    current->pPrev->pNext = newNode;
    current->pPrev = newNode;

    size++;
}

bool SortedDLL::deleteNode(int id) {
    if (pStart == nullptr) return false;

    Node* current = pStart;
    while (current != nullptr && current->data.id < id) {
        current = current->pNext;
    }

    if (current == nullptr || current->data.id != id) {
        return false;
    }

    if (current == pStart && current == pLast) {
        pStart = nullptr;
        pLast = nullptr;
    }
    else if (current == pStart) {
        pStart = pStart->pNext;
        pStart->pPrev = nullptr;
    }
    else if (current == pLast) {
        pLast = pLast->pPrev;
        pLast->pNext = nullptr;
    }
    else {
        current->pPrev->pNext = current->pNext;
        current->pNext->pPrev = current->pPrev;
    }

    delete current;
    size--;
    return true;
}

Node* SortedDLL::searchList(int id) {
    Node* current = pStart;
    while (current != nullptr) {
        if (current->data.id == id) {
            return current;
        }
        if (current->data.id > id) {
            break;
        }
        current = current->pNext;
    }
    return nullptr;
}

bool SortedDLL::displayNode(int id) {
    Node* result = searchList(id);
    if (result == nullptr) return false;

    cout << "======================================\n";
    cout << " ID      : " << result->data.id << "\n";
    cout << " Name    : " << result->data.name << "\n";
    cout << " Salary  : " << result->data.salary << " EGP\n";
    cout << "======================================\n\n";
    return true;
}

void SortedDLL::displayAll() {
    if (pStart == nullptr) {
        cout << "List is empty.\n";
        return;
    }

    cout << left << setw(10) << "ID"
         << setw(20) << "Name"
         << setw(10) << "Salary" << endl;
    cout << "----------------------------------------" << endl;

    Node* current = pStart;
    while (current != nullptr) {
        cout << left
             << setw(10) << current->data.id
             << setw(20) << current->data.name
             << setw(10) << current->data.salary
             << endl;
        current = current->pNext;
    }
    cout << "----------------------------------------" << endl;
}

int SortedDLL::nodeNumber() {
    return size;
}

Node& SortedDLL::operator[](int index) {
    if (index < 0 || index >= size) return *pStart;

    Node* current = pStart;
    for (int i = 0; i < index; i++) {
        current = current->pNext;
    }
    return *current;
}

SortedDLL& SortedDLL::operator=(const SortedDLL& other) {
    if (this == &other) return *this;

    while (pStart != nullptr) {
        Node* temp = pStart;
        pStart = pStart->pNext;
        delete temp;
    }
    pLast = nullptr;
    size = 0;

    Node* current = other.pStart;
    while (current != nullptr) {
        insertNode(current->data);
        current = current->pNext;
    }
    return *this;
}
