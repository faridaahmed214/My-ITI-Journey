# BubbleSort

Description: Bubble sort demonstration in C++.

Main files: `main.cpp`.

Concepts: simple sorting, time complexity O(n^2), educational.

# Bubble Sort

## Description

This project implements the **Bubble Sort algorithm**, one of the simplest and most intuitive sorting algorithms. Bubble Sort works by repeatedly stepping through the list, comparing adjacent elements, and swapping them if they are in the wrong order.

## Key Concepts

- **Algorithm Type**: Comparison-based Sorting
- **Time Complexity**: O(n²) - quadratic
- **Space Complexity**: O(1) - in-place sorting
- **Stable Sort**: Yes - maintains relative order of equal elements
- **Use Case**: Educational purposes, small datasets, nearly sorted arrays

## How It Works

1. Compare adjacent elements in the array
2. If the first element is greater than the second, swap them
3. Move to the next pair and repeat
4. After each pass, the largest unsorted element "bubbles up" to its correct position
5. Continue for n passes until the array is sorted

## Characteristics

- **Simple to understand and implement**
- **In-place sorting** - no extra space needed
- **Stable sorting** - maintains order of equal elements
- **Very inefficient** for large datasets
- **Adaptive** - better performance on nearly sorted arrays

## Optimization Techniques

1. **Early termination** - stop if no swaps occur in a pass
2. **Reduced range** - don't check already-sorted portions
3. **Cocktail Shaker Sort** - sort from both ends alternatively

## Technologies Used

- **Language**: C++
- **Algorithm Type**: Comparison-based sorting
- **Sorting Method**: In-place
- **Data Structure**: Arrays

## Compilation and Execution

```bash
g++ -o BubbleSort main.cpp
./BubbleSort
```

## Time Complexity Analysis

- **Best Case**: O(n) - already sorted array with early termination
- **Average Case**: O(n²) - random order
- **Worst Case**: O(n²) - reverse sorted array

## When to Use Bubble Sort

- Learning sorting concepts
- Educational demonstrations
- Small datasets (< 100 elements)
- Nearly sorted arrays with optimization
