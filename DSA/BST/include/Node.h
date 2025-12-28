#ifndef NODE_H
#define NODE_H

#include "Employee.h"

class Node {
public:
    Employee data;
    Node* pLeft;  
    Node* pRight; 

    Node(Employee e);  
};

#endif