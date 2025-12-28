#include <iostream>
using namespace std;

void merge(int arr[], int Lfirst, int Llast, int Rfirst, int Rlast) {
    int size = (Rlast - Lfirst) + 1;
    int *temp = new int[size];
    int i = Lfirst;
    int j = Rfirst;
    int k = 0;
    while (i <= Llast && j <= Rlast) {
        if (arr[i] <= arr[j]) {
            temp[k++] = arr[i++];
        } else {
            temp[k++] = arr[j++];
        }
    }
    while (i <= Llast) {
        temp[k++] = arr[i++];
    }
    while (j <= Rlast) {
        temp[k++] = arr[j++];
    }
    for (k = 0; k < size; k++) {
        arr[Lfirst + k] = temp[k];
    }

    delete[] temp;
}
void mergeSort(int arr[], int first, int last) {
    if (first >= last)
        return;
    int mid = (first + last) / 2;

    mergeSort(arr, first, mid);
    mergeSort(arr, mid + 1, last);

    merge(arr, first, mid, mid + 1, last);
}

void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++)
        cout << arr[i] << " ";
    cout << endl;
}

int main() {
    int arr[] = {38, 27, 43, 3, 9, 82, 10};
    int size = sizeof(arr) / sizeof(arr[0]);

    cout << "Original:";
    printArray(arr, size);

    mergeSort(arr, 0, size - 1);

    cout << "Sorted:";
    printArray(arr, size);

    return 0;
}
