#include "Node.h"

Node::Node(Employee e) {
    data = e;
    pNext = nullptr;
    pPrev = nullptr;
}

Node::~Node() {
}
