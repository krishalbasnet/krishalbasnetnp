// WAP to take two numbers in main(). Write a function Swap() to swap the values of the variables. Print the swapped values in main().
#include<stdio.h>
void main(){
  int a,b;
  printf("Enter two numbers: ");
  scanf("%d %d",&a,&b);
  printf("Before swapping: %d %d",a,b);
  printf("After swapping: %d %d",a,b);
}