#include <iostream>
using namespace std;


void Swap(int &a, int &b) {
    int temp = a;
    a = b;
    b = temp;
}

int partition(int arr[], int first, int last) {

    int pivot = arr[last];
    int i = (first - 1);

    for (int j = first; j < last; j++) {
        if (arr[j] < pivot) {
            i++;
            Swap(arr[i], arr[j]);
        }
    }

    Swap(arr[i + 1], arr[last]);

    return (i + 1);
}

void quickSort(int arr[], int first, int last) {
    if (first < last) {

        int pi = partition(arr, first, last);

        quickSort(arr, first, pi - 1);
        quickSort(arr, pi + 1, last);
    }
}

void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++)
        cout << arr[i] << " ";
    cout << endl;
}

int main() {
    int arr[] = {10, 80, 30, 90, 40, 50, 70};
    int n = sizeof(arr) / sizeof(arr[0]);

    cout << "Original: ";
    printArray(arr, n);

    quickSort(arr, 0, n - 1);

    cout << "Sorted: ";
    printArray(arr, n);

    return 0;
}
