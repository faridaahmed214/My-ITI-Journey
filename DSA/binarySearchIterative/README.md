# Binary Search (Iterative)

Description: Iterative binary search implementation in C++.

Main files: `main.cpp`.

Concepts: binary search, loops, O(log n) complexity.

# Binary Search Iterative

## Description

This project implements the **Binary Search algorithm** using an iterative approach. Binary Search is an efficient algorithm for finding a target value in a **sorted array** by repeatedly dividing the search interval in half.

## Key Concepts

- **Algorithm Type**: Divide and Conquer (Iterative)
- **Time Complexity**: O(log n) - logarithmic
- **Space Complexity**: O(1) - constant
- **Use Case**: Searching in sorted arrays

## How It Works

1. Initialize left and right pointers to array boundaries
2. Calculate middle index
3. Compare target with middle element
4. If match found, return the index
5. If target is smaller, search left half; if larger, search right half
6. Repeat until target is found or search space is exhausted

## Advantages

- Much faster than linear search for large datasets
- Iterative approach uses minimal memory
- Easy to understand and implement

## Disadvantages

- Requires array to be sorted beforehand
- Cannot be used on unsorted data directly

## Technologies Used

- **Language**: C++
- **Algorithm Approach**: Iterative (using loops)
- **Data Structure**: Arrays

## Compilation and Execution

```bash
g++ -o binarySearchIterative main.cpp
./binarySearchIterative
```

## Example Input/Output

- Input: Sorted array and target value
- Output: Index of target (or -1 if not found)

## Time Complexity Analysis

- Best Case: O(1) - element found at middle on first try
- Average Case: O(log n) - typical searches
- Worst Case: O(log n) - when element is at end or not present
