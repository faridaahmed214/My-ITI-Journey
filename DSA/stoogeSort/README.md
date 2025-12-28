# StoogeSort

Description: Implementation of the Stooge Sort algorithm in C++.

Main files: `main.cpp`.

Concepts: recursive sorting (educational), algorithm complexity.

# Stooge Sort

## Description

This project implements the **Stooge Sort algorithm**, an unusual and inefficient recursive sorting algorithm that divides the array into three parts and recursively sorts them. While not practical for real-world use, it's an interesting study in recursive sorting strategies.

## Key Concepts

- **Algorithm Type**: Divide and Conquer (Recursive)
- **Time Complexity**: O(n^(log 3 / log 1.5)) ≈ O(n^2.71) - very poor
- **Space Complexity**: O(log n) - recursion stack
- **Stable Sort**: No
- **Use Case**: Educational purposes, algorithm study, theoretical analysis

## How It Works

1. If the first element is greater than the last element, swap them
2. If the array has more than 2 elements:

   - Recursively sort the first 2/3 of the array
   - Recursively sort the last 2/3 of the array
   - Recursively sort the first 2/3 of the array again

3. Base case: arrays of size ≤ 2 are already sorted

## Algorithm Steps (Detailed)

```
stoogeSort(arr, left, right):
    if arr[left] > arr[right]:
        swap(arr[left], arr[right])

    if right - left > 1:
        mid = (right - left) // 3
        stoogeSort(arr, left, right - mid)          // Sort first 2/3
        stoogeSort(arr, left + mid, right)          // Sort last 2/3
        stoogeSort(arr, left, right - mid)          // Sort first 2/3 again
```

## Characteristics

- **Inefficient** - much worse than common sorting algorithms
- **Recursive** - elegant divide-and-conquer structure
- **Predictable** - no worst-case vs average-case variation
- **Interesting** - demonstrates non-obvious sorting strategies

## Why Study Stooge Sort?

- **Algorithm Design** - shows divide-and-conquer from different angle
- **Complexity Analysis** - fractional exponent in time complexity
- **Educational Value** - interesting recursive patterns
- **Computer History** - named after "Three Stooges" comedy group

## Advantages

- Unusual and interesting from algorithmic perspective
- Clear recursive structure
- Demonstrates three-way divide-and-conquer

## Disadvantages

- **Extremely inefficient** - O(n^2.71) is worse than bubble sort O(n²)
- **Not practical** for any real-world application
- **High recursion depth** wastes memory
- Slower than even naive algorithms for sorting

## Technologies Used

- **Language**: C++
- **Algorithm Type**: Divide and Conquer
- **Approach**: Recursive sorting
- **Data Structure**: Arrays

## Compilation and Execution

```bash
g++ -o stoogeSort main.cpp
./stoogeSort
```

## Time Complexity Analysis

- **All Cases**: O(n^2.71)
- Better than: Nothing practical
- Worse than: Bubble Sort, Selection Sort, Insertion Sort

## Comparison with Other Sorts

| Algorithm   | Time Complexity    |
| ----------- | ------------------ |
| Stooge Sort | O(n^2.71)          |
| Bubble Sort | O(n²)              |
| Quick Sort  | O(n log n) average |
| Merge Sort  | O(n log n)         |

## Fun Fact

Named after the classic comedy group "The Three Stooges" because it divides the array into three parts!
