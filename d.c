#include <stdio.h>
int fibonacci(int x);
void main(){
    int n;
    printf("Enter the number: ");
    scanf("%d", &n);
    printf("The %dth fibonacci number is %d.", n, fibonacci(n));
}
int fibonacci(int x){
    int fib = 0;
    if(x==1){
        return 0;
    }
    else if(x==2){
        return 1;
    }
    else if (x > 0){
        fib = fibonacci(x-2) + fibonacci(x - 1);
    }
    else{
        return fib;
    }
}