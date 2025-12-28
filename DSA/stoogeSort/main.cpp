#include <iostream>
using namespace std;

void Swap(int &a, int &b) {
    int temp = a;
    a = b;
    b = temp;
}

void stoogeSort(int arr[], int low, int high) {

    if (low >= high)
        return;


    if (arr[low] > arr[high]) {
        Swap(arr[low], arr[high]);
    }


    int n = high - low + 1;

    if (n > 2) {

        int t = n / 3;


        stoogeSort(arr, low, high - t);

        stoogeSort(arr, low + t, high);

        stoogeSort(arr, low, high - t);
    }
}

void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++)
        cout << arr[i] << " ";
    cout << endl;
}

int main() {
    int arr[] = {2, 4, 5, 3, 1, 90, 40};
    int n = sizeof(arr) / sizeof(arr[0]);

    cout << "Original: ";
    printArray(arr, n);

    stoogeSort(arr, 0, n - 1);

    cout << "Sorted: ";
    printArray(arr, n);

    return 0;
}
