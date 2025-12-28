#include <iostream>
using namespace std;

int binarySearchIterative(int arr[], int size, int target) {
    int left = 0;
    int right = size - 1;

    while (left <= right) {
        int mid = (left + right) / 2;

        if (arr[mid] == target) {
            return mid;
        }

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

int main() {
    int arr[] = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91};
    int size = sizeof(arr) / sizeof(arr[0]);

    int result = binarySearchIterative(arr, size, 23);

    if (result != -1)
        cout << "Iterative: Element found at index " << result << endl;
    else
        cout << "Iterative: Element not found" << endl;

        result = binarySearchIterative(arr, size, 10);

    if (result != -1)
        cout << "Iterative: Element found at index " << result << endl;
    else
        cout << "Iterative: Element not found" << endl;

    return 0;
}
