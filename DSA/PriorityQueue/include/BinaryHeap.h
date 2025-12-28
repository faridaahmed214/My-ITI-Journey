#pragma once
#include "DynamicArray.h"
#include <iostream>
#include <stdexcept>
#include <limits>

using namespace std;

template <typename T>
class BinaryHeap {
private:
    DynamicArray<T> heapArray;

    int getLeftChildIndex(int parentIndex) { return 2 * parentIndex; }
    int getRightChildIndex(int parentIndex) { return 2 * parentIndex + 1; }
    int getParentIndex(int childIndex) { return childIndex / 2; }

    void percolateUp(int index) {
        while (index > 1) {
            int parentIndex = getParentIndex(index);
            if (heapArray[index] < heapArray[parentIndex]) {
                T temp = heapArray[index];
                heapArray[index] = heapArray[parentIndex];
                heapArray[parentIndex] = temp;
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    void percolateDown(int index) {
        int size = heapArray.getSize();
        while (getLeftChildIndex(index) < size) {
            int leftChild = getLeftChildIndex(index);
            int rightChild = getRightChildIndex(index);
            int smallerChild = leftChild;

            if (rightChild < size && heapArray[rightChild] < heapArray[leftChild]) {
                smallerChild = rightChild;
            }

            if (heapArray[index] > heapArray[smallerChild]) {
                T temp = heapArray[index];
                heapArray[index] = heapArray[smallerChild];
                heapArray[smallerChild] = temp;
                index = smallerChild;
            } else {
                break;
            }
        }
    }

public:
    explicit BinaryHeap(int capacity = 100) : heapArray(capacity) {
        heapArray.add(std::numeric_limits<T>::min());
    }

    bool isEmpty() const {
        return heapArray.getSize() == 1;
    }

    int size() const {
        return heapArray.getSize() - 1;
    }

    void insert(T value) {
        heapArray.add(value);
        percolateUp(heapArray.getSize() - 1);
    }

    T extractMin() {
        if (isEmpty()) {
            throw runtime_error("Heap is empty!");
        }
        T minItem = heapArray[1];
        T lastItem = heapArray[heapArray.getSize() - 1];
        heapArray[1] = lastItem;
        heapArray.removeAt(heapArray.getSize() - 1);
        
        if (!isEmpty()) {
            percolateDown(1);
        }
        return minItem;
    }

    T peek() {
        if (isEmpty()) {
            throw runtime_error("Heap is empty!");
        }
        return heapArray[1];
    }

    void printHeap() {
        heapArray.print();
    }
};