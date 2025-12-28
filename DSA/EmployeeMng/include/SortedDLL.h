#ifndef SORTEDDLL_H
#define SORTEDDLL_H

#include "Node.h"
#include <iostream>
using namespace std;

class SortedDLL {
private:
    Node* pStart;
    Node* pLast;
    int size;

public:
    SortedDLL();
    ~SortedDLL();
    SortedDLL(const SortedDLL& other);

    void insertNode(Employee data);
    bool deleteNode(int id);
    Node* searchList(int id);

    bool displayNode(int id);
    void displayAll();
    int nodeNumber();

    Node& operator[](int index);
    SortedDLL& operator=(const SortedDLL& other);
};

#endif
