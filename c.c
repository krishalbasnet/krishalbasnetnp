#include<stdio.h> 
void main(){
    int i,a,sum=0;
    printf("Enter 10 numbers: ");
    for(i=0;i<10;i++){
        scanf("%d",&a);
        sum=sum+a;
    }  
    printf("The sum is %d",sum);
}