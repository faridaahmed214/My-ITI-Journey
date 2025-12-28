# Sequential Search

Description: Implementation of linear (sequential) search in C++.

Main files: `main.cpp`.

Concepts: search algorithms, time complexity O(n).

# Sequential Search

## Description

This project implements the **Sequential Search algorithm** (also called Linear Search), the simplest searching algorithm that examines each element in the array sequentially until the target element is found or the array is exhausted.

## Key Concepts

- **Algorithm Type**: Linear/Sequential Searching
- **Time Complexity**: O(n) - linear
- **Space Complexity**: O(1) - constant
- **Use Case**: Unsorted arrays, small datasets, first occurrence

## How It Works

1. Start from the first element
2. Compare each element with the target value
3. If match found, return the index
4. If no match and end of array reached, return -1 (not found)

## Characteristics

- **Simplest searching algorithm**
- **Works on unsorted data** - no preprocessing needed
- **Finds first occurrence** - useful for duplicates
- **Linear time** - checks each element once

## Advantages

- Works on **any array** (sorted or unsorted)
- **Easy to implement** - minimal code
- **No preprocessing** required
- Finds **first occurrence** naturally

## Disadvantages

- **Very slow** for large datasets - O(n)
- Inefficient compared to binary search on sorted data
- **Checks every element** in worst case

## Comparison with Binary Search

| Aspect            | Sequential    | Binary           |
| ----------------- | ------------- | ---------------- |
| Works on unsorted | Yes           | No               |
| Time Complexity   | O(n)          | O(log n)         |
| Preprocessing     | None          | Sorting required |
| Best for          | Unsorted data | Sorted data      |
| Implementation    | Very simple   | More complex     |

## Technologies Used

- **Language**: C++
- **Algorithm Type**: Linear search
- **Data Structure**: Arrays
- **Approach**: Iterative

## Compilation and Execution

```bash
g++ -o SequentialSearch main.cpp
./SequentialSearch
```

## When to Use Sequential Search

- Searching in **unsorted arrays**
- Small datasets where simplicity matters
- When **finding first occurrence** is important
- Arrays with infrequent searches
- When preprocessing cost exceeds search cost

## Time Complexity Analysis

- **Best Case**: O(1) - element found at first position
- **Average Case**: O(n/2) ≈ O(n) - element at middle
- **Worst Case**: O(n) - element not found or at end
