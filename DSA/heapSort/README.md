# HeapSort

Description: Implementation of Heap Sort algorithm in C++.

Main files: `main.cpp`.

Concepts: heap data structure, in-place sorting, O(n log n) time.

# Heap Sort

## Description

This project implements the **Heap Sort algorithm**, an efficient, comparison-based sorting algorithm that uses a **heap data structure** to organize and sort elements. Heap Sort guarantees O(n log n) time complexity even in the worst case.

## Key Concepts

- **Algorithm Type**: Comparison-based Sorting
- **Time Complexity**: O(n log n) - linearithmic (guaranteed)
- **Space Complexity**: O(1) - in-place sorting
- **Stable Sort**: No - does not preserve relative order
- **Use Case**: Guaranteed performance, embedded systems, large datasets

## How It Works

1. **Build a max heap** from the input array
2. **Extract elements** one by one from the heap:
   - Swap root (maximum) with last element
   - Remove the last element from heap
   - Restore heap property (heapify down)
3. Repeat until heap is empty
4. Result is a sorted array

## Heap Properties

- **Complete Binary Tree** - all levels filled except possibly the last
- **Heap Property** - parent ≥ children (max heap)
- **Array representation** - efficient storage using indices

## Advantages

- **Guaranteed O(n log n)** in all cases (best, average, worst)
- **In-place sorting** - only O(1) extra space
- **No worst-case quadratic behavior** like Quick Sort
- Useful for **priority queues** and other applications

## Disadvantages

- **Not stable** - loses relative order of equal elements
- **Slower constants** - slower than Quick Sort on average
- **Poor cache locality** - random access pattern

## Technologies Used

- **Language**: C++
- **Data Structure**: Binary Heap
- **Algorithm Type**: Comparison-based sorting
- **Implementation**: Array-based heap

## Compilation and Execution

```bash
g++ -o heapSort main.cpp
./heapSort
```

## Heap Operations

- **Heapify (down)**: Restore heap property after extraction
- **Build Heap**: Convert array to heap structure in O(n)
- **Extract Max**: O(log n) operation

## Time Complexity Analysis

- **Building Heap**: O(n)
- **Extraction Phase**: O(n log n)
- **Total**: O(n log n) in all cases
