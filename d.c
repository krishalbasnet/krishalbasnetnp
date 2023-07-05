#include <stdio.h>
void main() {
    int arr[] = {1, 2, 3, 4, 5};
    int* ptrArr[5];
    int(*ptrToArr)[5];           
    for (int i = 0; i < 5; i++) {
        ptrArr[i] = &arr[i];
    }
    ptrToArr = &arr; 
    printf("Accessing elements using the array of pointers:\n");
    for (int i = 0; i < 5; i++) {
        printf("Value at index %d: %d\n", i, *ptrArr[i]);
    }
    printf("\nAccessing elements using the pointer to the array:\n");
    for (int i = 0; i < 5; i++) {
        printf("Value at index %d: %d\n", i, (*ptrToArr)[i]);
    }
}
