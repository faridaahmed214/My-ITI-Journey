#ifndef QUEUE_H
#define QUEUE_H

#include "DLL.h"

class Queue : public DLL {
public:
    void enqueue(Employee data);
    Node dequeue();
    Node peek();
};

#endif
