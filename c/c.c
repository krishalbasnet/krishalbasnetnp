#include<stdio.h>
void oddeven(int arr,int *x,int *y){
    if(arr%2==0){
        (*x)++;
    }
    else{
        (*y)++;
    }
}
void main(){
    int n, arr[50],i,even=0,odd=0;
    printf("Enter the number of terms: ");
    scanf("%d",&n);
    printf("Enter the terms: ");
    for(i=0;i<n;i++){
        scanf("%d",&arr[i]);
    }
    for(i=0;i<n;i++){
        oddeven(arr[i],&even,&odd);
    }
    printf("No of even terms: %d, no of odd terms: %d",even,odd);
}