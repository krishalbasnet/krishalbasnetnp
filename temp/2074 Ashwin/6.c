// Write a program in C to find, second largest elements from an array containing N elements using concept of pointer
#include<stdio.h>
void main(){
    int n,i,arr[50];
    int (*ptrArr)[100];
    ptrArr = &arr;
    printf("Enter the number of terms in the array: ");
    scanf("%d",&n);
    printf("Enter the numbers: ");
    for(i=0;i<n;i++){
        scanf("%d",&arr[i]);
    }
    int second;
    int first = second = arr[0];
    for (i = 0; i < n; i++)
	{
		if((*ptrArr)[i] > first)
		{
			second = first;
			first = (*ptrArr)[i];
		}
		else if((*ptrArr)[i] > second && (*ptrArr)[i] < first)
		{
			second = (*ptrArr)[i];
		}	
	}
    printf("The second largest is %d",second);
}