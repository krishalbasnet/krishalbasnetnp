// WAP to illustrate the concept of global and static variables.
#include<stdio.h>
int a = 20;
int func1(){
    static int a1=4;
    a1++;
    printf("func1() a1: %d\n",a1);
    printf("From func1() a: %d\n",a);
}
int func2(){
    a=2;
    printf("From func2() a: %d\n",a);
}
void main(){
    func1();
    func1();
    func2();
    printf("From main() a: %d\n",a);
    func2();
}