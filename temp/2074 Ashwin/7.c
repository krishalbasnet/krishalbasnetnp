// Write a program that uses the structure to read two complex numbers and display a
// third complex number which is the multiplication ofthe entered complex number
#include<stdio.h>
struct complex{
    int real;
    int img;
}num1,num2;
void main(){
    printf("Enter the first complex number: ");
    scanf("%d%d",&num1.real,&num1.img);
    printf("Enter the second complex number: ");
    scanf("%d%d",&num2.real,&num2.img);
    printf("The product is %d + %di",num1.real*num2.real-num1.img*num2.img,num1.real*num2.img+num1.img*num2.real);
}