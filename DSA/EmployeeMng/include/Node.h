#ifndef NODE_H
#define NODE_H

#include "Employee.h"

class Node {
public:
    Employee data;
    Node* pNext;
    Node* pPrev;

    Node(Employee e);
    ~Node();
};

#endif
