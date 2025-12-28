# MergeSort

Description: Implementation of Merge Sort algorithm in C++.

Main files: `main.cpp`.

Concepts: divide and conquer, stable sort, O(n log n) time.

# Merge Sort

## Description

This project implements the **Merge Sort algorithm**, a highly efficient divide-and-conquer sorting algorithm that divides the array into halves, recursively sorts them, and then merges the sorted halves back together.

## Key Concepts

- **Algorithm Type**: Divide and Conquer
- **Time Complexity**: O(n log n) - linearithmic (guaranteed)
- **Space Complexity**: O(n) - requires additional space for merging
- **Stable Sort**: Yes - preserves relative order of equal elements
- **Use Case**: Large datasets, external sorting, guaranteed performance

## How It Works

1. **Divide Phase**:

   - Divide the array into two halves
   - Recursively divide until single elements remain

2. **Conquer Phase**:

   - Recursively sort each half

3. **Merge Phase**:
   - Merge two sorted halves into one sorted array
   - Compare elements from both halves and place smaller one first

## Characteristics

- **Stable sort** - maintains relative order of equal elements
- **Not in-place** - requires O(n) extra space
- **Consistent performance** - O(n log n) guaranteed
- **Predictable behavior** - no worst-case scenarios

## Merge Algorithm

1. Create pointers for both subarrays and result array
2. Compare elements from both arrays
3. Copy smaller element to result and advance pointer
4. Copy remaining elements when one subarray is exhausted

## Technologies Used

- **Language**: C++
- **Algorithm Type**: Divide and Conquer
- **Approach**: Recursive sorting with merging
- **Data Structure**: Arrays

## Compilation and Execution

```bash
g++ -o MergeSort main.cpp
./MergeSort
```

## Time Complexity Analysis

- **Best Case**: O(n log n)
- **Average Case**: O(n log n)
- **Worst Case**: O(n log n)

## Space Complexity

- **Auxiliary Space**: O(n) for temporary arrays during merge

## Advantages over Other Algorithms

- **Guaranteed O(n log n)** performance
- **Stable sorting** - preserves order of equal elements
- **Parallelizable** - can be optimized for parallel processing
- Ideal for **external sorting** (sorting files larger than RAM)

## Disadvantages

- **Requires O(n) extra space** for merging
- **Not in-place** - higher memory consumption
- **Overhead** - slower than Quick Sort on average for small datasets
