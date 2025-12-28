#include <iostream>
#include "DLL.h"
#include "StackDLL.h"
#include "Queue.h"
#include "SortedDLL.h"

using namespace std;

void printHeader(string title) {
    cout << "\n========================================\n";
    cout << "   " << title << "\n";
    cout << "========================================\n";
}

int main() {
    printHeader("Testing Standard DLL");
    DLL list;

    list.addNode({101, "Ahmed", 5000});
    list.addNode({102, "Mona", 6000});
    list.addNode({103, "Ali", 7000});

    cout << "Initial List:\n";
    list.displayAll();

    cout << "\nTesting operator[1] (Should be Mona): " << list[1].data.name << endl;

    cout << "\nTesting Search for ID 103:\n";
    if(list.searchList(103)) cout << "Found Ali!\n";
    else cout << "Not Found!\n";

    cout << "\nTesting Delete ID 102 (Middle):\n";
    list.deleteNode(102);
    list.displayAll();

    cout << "\nTesting Copy Constructor (list2 from list):\n";
    DLL list2 = list;
    list2.addNode({999, "Clone", 9999});

    cout << "Original List (Should NOT have Clone):\n";
    list.displayAll();
    cout << "Copied List (Should have Clone):\n";
    list2.displayAll();


    printHeader("Testing Stack (LIFO)");
    StackDLL myStack;

    myStack.push({1, "First", 100});
    myStack.push({2, "Second", 200});
    myStack.push({3, "Third", 300});

    cout << "Peek Top (Should be Third): " << myStack.peek().data.name << endl;

    cout << "\nPopping all elements:\n";
    cout << "Popped: " << myStack.pop().data.name << endl;
    cout << "Popped: " << myStack.pop().data.name << endl;
    cout << "Popped: " << myStack.pop().data.name << endl;

    Node empty = myStack.pop();
    if (empty.data.id == -1) cout << "Stack is empty now (Correct).\n";


    printHeader("Testing Queue (FIFO)");
    Queue myQueue;

    myQueue.enqueue({10, "Client A", 100});
    myQueue.enqueue({20, "Client B", 200});
    myQueue.enqueue({30, "Client C", 300});

    cout << "Peek Front (Should be Client A): " << myQueue.peek().data.name << endl;

    cout << "\nDequeuing all elements:\n";
    cout << "Dequeued: " << myQueue.dequeue().data.name << endl;
    cout << "Dequeued: " << myQueue.dequeue().data.name << endl;
    cout << "Dequeued: " << myQueue.dequeue().data.name << endl;


    printHeader("Testing SortedDLL");
    SortedDLL sortedList;

    cout << "Inserting IDs: 50, 10, 90, 30...\n";
    sortedList.insertNode({50, "Fifty", 5000});
    sortedList.insertNode({10, "Ten", 1000});
    sortedList.insertNode({90, "Ninety", 9000});
    sortedList.insertNode({30, "Thirty", 3000});

    cout << "\nSorted List Result (Should be 10 -> 30 -> 50 -> 90):\n";
    sortedList.displayAll();

    cout << "\nTesting Delete ID 30:\n";
    sortedList.deleteNode(30);
    sortedList.displayAll();

    cout << "\nTesting Search for non-existing ID (Using Optimization):\n";
    if (!sortedList.searchList(30)) cout << "ID 30 correctly not found.\n";

    printHeader("All Tests Passed Successfully!");

    return 0;
}
