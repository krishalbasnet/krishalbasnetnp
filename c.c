// find fibonacchi using recursion
#include<stdio.h>
void main(){
    int n;
    printf("Enter the number: ");
    scanf("%d",&n);
    int fib=0 ;
    if(x>0){
        fib = x + fibonacci(x-1);
    }else{
        return fib;
    }
    printf("The fibonacci of %d is %d.",n,fibonacci(n));
}