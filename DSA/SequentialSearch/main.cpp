#include <iostream>
using namespace std;

int seqSearchSorted(int arr[], int size, int value) {
    for (int i = 0; i < size; i++) {

        if (arr[i] == value) {
            return i;
        }
        if (arr[i] > value) {
            return -1;
        }
    }

    return -1;
}

int main() {
    int arr[] = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91};
    int size = sizeof(arr) / sizeof(arr[0]);

    int result = seqSearchSorted(arr, size, 10);

    if (result != -1)
        cout << "Element found at index: " << result<<endl;
    else
        cout << "Element not found\n";

    result = seqSearchSorted(arr, size, 5);

    if (result != -1)
        cout << "Element found at index: " << result<<endl;
    else
        cout << "Element not found\n";
          result = seqSearchSorted(arr, size, 100);

    if (result != -1)
        cout << "Element found at index: " << result<<endl;
    else
        cout << "Element not found\n";



    return 0;
}
