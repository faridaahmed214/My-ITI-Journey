# QuickSort

Description: Implementation of the QuickSort algorithm in C++.

Main files: `main.cpp`.

Concepts: divide and conquer, pivot selection, average time O(n log n).

# Quick Sort

## Description

This project implements the **Quick Sort algorithm**, a highly efficient divide-and-conquer sorting algorithm that selects a pivot element and partitions the array around it, then recursively sorts the partitions.

## Key Concepts

- **Algorithm Type**: Divide and Conquer
- **Time Complexity**: O(n log n) average, O(n²) worst case
- **Space Complexity**: O(log n) - due to recursion stack
- **Stable Sort**: No (depends on implementation)
- **Use Case**: General-purpose sorting, large datasets, practical applications

## How It Works

1. **Select a pivot** - choose an element as the partition point
2. **Partition**:

   - Rearrange array so elements smaller than pivot are on left
   - Elements greater than pivot are on right
   - Pivot is now in its final sorted position

3. **Recursively sort** left and right partitions

4. **Base case** - subarrays of size 0 or 1 are already sorted

## Pivot Selection Strategies

- **First/Last element** - simple but can cause O(n²) on sorted data
- **Middle element** - better average performance
- **Random element** - good randomization
- **Median-of-three** - balance between simplicity and performance

## Characteristics

- **Very fast in practice** - faster average case than other O(n log n) algorithms
- **Not stable** - doesn't preserve relative order of equal elements
- **In-place sorting** - only O(log n) extra space for recursion
- **Cache-friendly** - good locality of reference

## Advantages

- **Fastest average-case** sorting algorithm in practice
- **In-place sorting** - minimal extra memory
- **Efficient for large datasets**
- **Simple to implement**

## Disadvantages

- **Worst-case O(n²)** - on already sorted or reverse sorted arrays
- **Not stable** - loses relative order of equal elements
- **Sensitive to pivot choice** - poor pivot selection degrades performance

## Technologies Used

- **Language**: C++
- **Algorithm Type**: Divide and Conquer
- **Approach**: Recursive partitioning
- **Data Structure**: Arrays

## Compilation and Execution

```bash
g++ -o quickSort main.cpp
./quickSort
```

## Time Complexity Analysis

- **Best Case**: O(n log n) - good pivot selections
- **Average Case**: O(n log n) - typical random data
- **Worst Case**: O(n²) - poor pivot selections or sorted data

## Optimization Techniques

1. **Random pivot** - reduces worst-case probability
2. **Three-way partitioning** - handles duplicates efficiently
3. **Hybrid approach** - switch to insertion sort for small arrays
4. **Tail recursion optimization** - optimize space usage
