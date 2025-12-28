#include <iostream>
#include "DynamicArray.h"
#include "BinaryHeap.h"

using namespace std;

int main() {
    try {
        // --- Testing Dynamic Array ---
        cout << "Testing Dynamic Array logic:" << endl;

        DynamicArray<int> numbers(2); // Start with small capacity
        numbers.add(10);
        numbers.add(20);
        numbers.add(30); // This should trigger resize

        cout << "Array content after adding 10, 20, 30:" << endl;
        numbers.print();

        cout << "Current capacity: " << numbers.getCapacity() << endl;

        numbers.removeAt(1); // Remove 20
        cout << "Array after removing index 1:" << endl;
        numbers.print();

        numbers.trim();
        cout << "Capacity after trim: " << numbers.getCapacity() << endl;


        cout << endl << "------------------------" << endl << endl;


        // --- Testing Binary Heap ---
        cout << "Testing Binary Heap (Min-Heap):" << endl;

        BinaryHeap<int> pq;

        // Inserting unsorted numbers
        pq.insert(50);
        pq.insert(10);
        pq.insert(30);
        pq.insert(5);
        pq.insert(20);

        cout << "Inserted numbers: 50, 10, 30, 5, 20" << endl;
        cout << "Smallest number (Peek): " << pq.peek() << endl;

        cout << "Extracting elements in order:" << endl;
        while (!pq.isEmpty()) {
            cout << pq.extractMin() << " ";
        }
        cout << endl;

        // Trying to extract from empty heap to test error handling
        cout << "Trying to extract from empty heap..." << endl;
        pq.extractMin();

    }
    catch (const exception& e) {
        cout << "Error occurred: " << e.what() << endl;
    }

    return 0;
}
