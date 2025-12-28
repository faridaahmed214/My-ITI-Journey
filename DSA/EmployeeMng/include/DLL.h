#ifndef DLL_H
#define DLL_H

#include "Node.h"
#include <iostream>
using namespace std;

class DLL {
protected:
    Node* pStart;
    Node* pLast;
    int size;

public:
    DLL();
    virtual ~DLL();
    DLL(const DLL& other);

    void addNode(Employee data);
    bool deleteNode(int id);
    Node* searchList(int id);

    bool displayNode(int id);
    void displayAll();
    int nodeNumber();

    Node& operator[](int index);
    DLL& operator=(const DLL& other);
};

#endif
