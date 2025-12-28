# Binary Search (Recursive)

Description: Recursive binary search implementation in C++.

Main files: `main.cpp`.

Concepts: binary search, recursion, divide and conquer.

# Binary Search Recursive

## Description

This project implements the **Binary Search algorithm** using a **recursive approach**. It demonstrates how divide-and-conquer problems can be elegantly solved through recursion, finding a target value in a sorted array by recursively splitting the search space.

## Key Concepts

- **Algorithm Type**: Divide and Conquer (Recursive)
- **Time Complexity**: O(log n) - logarithmic
- **Space Complexity**: O(log n) - due to recursion call stack
- **Use Case**: Searching in sorted arrays with recursive implementation

## How It Works

1. Create a recursive function with left and right boundaries
2. Calculate middle index
3. Compare target with middle element
4. If match found, return the index (base case)
5. If target is smaller, recursively search left half
6. If target is larger, recursively search right half
7. If search space is exhausted, return -1 (base case)

## Advantages

- Clean and elegant code
- Naturally represents divide-and-conquer strategy
- Easy to understand the algorithm logic

## Disadvantages

- Uses additional memory for recursion stack
- Slightly more overhead than iterative approach
- Risk of stack overflow for extremely large arrays

## Technologies Used

- **Language**: C++
- **Algorithm Approach**: Recursive (using function calls)
- **Data Structure**: Arrays
- **Programming Paradigm**: Functional recursion

## Compilation and Execution

```bash
g++ -o binarySearchRecursive main.cpp
./binarySearchRecursive
```

## Comparison with Iterative Approach

| Aspect           | Iterative | Recursive |
| ---------------- | --------- | --------- |
| Time Complexity  | O(log n)  | O(log n)  |
| Space Complexity | O(1)      | O(log n)  |
| Code Clarity     | Good      | Excellent |
| Memory Usage     | Minimal   | Higher    |
