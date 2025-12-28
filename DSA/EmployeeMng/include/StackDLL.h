#ifndef STACKDLL_H
#define STACKDLL_H

#include "DLL.h"

class StackDLL : public DLL {
public:
    void push(Employee data);
    Node pop();
    Node peek();
};

#endif
