#include <iostream>
using namespace std;

int binarySearchRecursive(int arr[], int left, int right, int target) {
    if (left > right) {
        return -1;
    }

    int mid = (left + right) / 2;

    if (arr[mid] == target) {
        return mid;
    }

    if (arr[mid] < target) {
        return binarySearchRecursive(arr, mid + 1, right, target);
    }
    else {
        return binarySearchRecursive(arr, left, mid - 1, target);
    }
}

int main() {
    int arr[] = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91};
    int size = sizeof(arr) / sizeof(arr[0]);

    int result = binarySearchRecursive(arr, 0,size-1 , 23);

    if (result != -1)
        cout << "Iterative: Element found at index " << result << endl;
    else
        cout << "Iterative: Element not found" << endl;

        result = binarySearchRecursive(arr, 0, size-1, 10);

    if (result != -1)
        cout << "Iterative: Element found at index " << result << endl;
    else
        cout << "Iterative: Element not found" << endl;

    return 0;
}
