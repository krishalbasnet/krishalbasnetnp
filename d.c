// WAP to read two values from the user in main(). Write a function calculate() to calculate sum, product, difference and quotient 
// of the numbers. Print the sum, product, difference and quotient in the main function using pass by reference concept.
#include<stdio.h>
void calculate(int a, int b,int *p, int *q,int *r, float *s){
  *p = a + b;
  *q = a - b;
  *r = a * b;
  *s = (float)a / b;
}
void main(){
  int a,b,sum,sub,mul;
  float div;
  printf("Enter two numbers: ");
  scanf("%d%d",&a,&b);
  calculate(a,b,&sum,&sub,&mul,&div);
  printf("Sum:%d\tDifference:%d\tProduct:%d\tQuotient:%f",sum,sub,mul,div);
}