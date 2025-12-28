#pragma once
#include <iostream>
#include <stdexcept>

using namespace std;

template <typename T>
class DynamicArray {
private:
    T* data;
    int size;
    int capacity;

    void resize(int newCapacity) {
        T* newArray = new T[newCapacity];

        for (int i = 0; i < size; i++) {
            newArray[i] = data[i];
        }

        delete[] data;

        data = newArray;
        capacity = newCapacity;
    }

public:
    explicit DynamicArray(int initialCapacity = 2) {
        if (initialCapacity < 1) initialCapacity = 1;
        capacity = initialCapacity;
        size = 0;
        data = new T[capacity];
    }

    DynamicArray(const DynamicArray& other) {
        size = other.size;
        capacity = other.capacity;
        data = new T[capacity];

        for (int i = 0; i < size; i++) {
            data[i] = other.data[i];
        }
    }

    DynamicArray& operator=(const DynamicArray& other) {
        if (this == &other) return *this;

        delete[] data;

        size = other.size;
        capacity = other.capacity;
        data = new T[capacity];

        for (int i = 0; i < size; i++) {
            data[i] = other.data[i];
        }

        return *this;
    }

    ~DynamicArray() {
        delete[] data;
    }

    int getSize() const { return size; }
    int getCapacity() const { return capacity; }
    bool isEmpty() const { return size == 0; }

    T& operator[](int index) {
        if (index < 0 || index >= size) {
            throw out_of_range("Index out of bounds");
        }
        return data[index];
    }
    void trim() {
     
        if (size == capacity) {
            return;
        }

        int newCapacity = (size > 0) ? size : 1;
        
        resize(newCapacity);
    }

    
    void print() const {
        cout << "[ ";
        for(int i=0; i<size; i++) {
            cout << data[i] << " ";
        }
        cout << "]" << endl;
    }

    void add(T item) {
        if (size == capacity) {
            resize(capacity * 2);
        }
        data[size] = item;
        size++;
    }

    void removeAt(int index) {
        if (index < 0 || index >= size) {
            throw out_of_range("Index out of bounds");
        }

        for (int i = index; i < size - 1; i++) {
            data[i] = data[i + 1];
        }

        size--;
    }

    void remove(T item) {
        for (int i = 0; i < size; i++) {
            if (data[i] == item) {
                removeAt(i);
                return;
            }
        }
    }
};