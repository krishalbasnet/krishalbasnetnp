// 10. WAP to input a number from user. If user enters a number less than or equal to zero
// then program should just display the number. If user enters 1 the program should
// display output as neither prime nor composite, if user enters 2 the program should
// display output as smallest and only even prime number. If user enters any number
// greater than 2 the program should check whether the number is prime or not, also if
// the number is not prime the program should display whether it is even or odd.
#include <stdio.h>
void main(){
    int a,i,b=1;
    printf("Enter a number: ");
    scanf("%d", &a);
    if (a == 1){
        printf("Neither Prime nor Composite.");
    }else if (a == 2){
        printf("Smallest and only evem prime number.");
    }else{
        for(i=2;i<a;i++){
            if(a%i==0){
               b = 0;
                break;
        }}
        if (b) {
        printf("%d is a prime number.\n", a);
    } else {
        printf("%d is not a prime number.\n", a);
}}}