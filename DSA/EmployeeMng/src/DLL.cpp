#include "DLL.h"
#include <iomanip>

DLL::DLL() {
    pStart = nullptr;
    pLast = nullptr;
    size = 0;
}

DLL::~DLL() {
    while (pStart != nullptr) {
        Node* temp = pStart;
        pStart = pStart->pNext;
        delete temp;
    }
    pLast = nullptr;
    size = 0;
}

DLL::DLL(const DLL& other) {
    pStart = nullptr;
    pLast = nullptr;
    size = 0;

    if (other.pStart == nullptr) {
        return;
    }

    Node* current = other.pStart;
    while (current != nullptr) {
        addNode(current->data);
        current = current->pNext;
    }
}

void DLL::addNode(Employee data) {
    Node* newNode = new Node(data);

    if (pStart == nullptr) {
        pStart = newNode;
        pLast = newNode;
    }
    else {
        pLast->pNext = newNode;
        newNode->pPrev = pLast;
        pLast = newNode;
    }
    size++;
}

bool DLL::deleteNode(int id) {
    if (pStart == nullptr) {
        return false;
    }

    Node* current = pStart;
    while (current != nullptr && current->data.id != id) {
        current = current->pNext;
    }

    if (current == nullptr) {
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
    if (size > 0) size--;
    return true;
}

Node* DLL::searchList(int id) {
    Node* current = pStart;
    while (current != nullptr) {
        if (current->data.id == id) {
            return current;
        }
        current = current->pNext;
    }
    return nullptr;
}

bool DLL::displayNode(int id) {
    Node* result = searchList(id);
    if (result == nullptr) {
        return false;
    }

    cout << "======================================\n";
    cout << " ID      : " << result->data.id << "\n";
    cout << " Name    : " << result->data.name << "\n";
    cout << " Salary  : " << result->data.salary << " EGP\n";
    cout << "======================================\n\n";
    return true;
}

void DLL::displayAll() {
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

int DLL::nodeNumber() {
    return size;
}

Node& DLL::operator[](int index) {
    if (index < 0 || index >= size) {
        return *pStart;
    }

    Node* current = pStart;
    for (int i = 0; i < index; i++) {
        current = current->pNext;
    }
    return *current;
}

DLL& DLL::operator=(const DLL& other) {
    if (this == &other) {
        return *this;
    }

    while (pStart != nullptr) {
        Node* temp = pStart;
        pStart = pStart->pNext;
        delete temp;
    }
    pLast = nullptr;
    size = 0;

    if (other.pStart == nullptr) {
        return *this;
    }

    Node* current = other.pStart;
    while (current != nullptr) {
        addNode(current->data);
        current = current->pNext;
    }

    return *this;
}
