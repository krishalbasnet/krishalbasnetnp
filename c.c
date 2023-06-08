#include<stdio.h> 
    void main(){
      int a=15, c=35;
      float b=20.43;
      printf("A=%15d|%-15d|%15d|%-15d|%15d|%-15d|%15d|%-15d|%15d|%-15d|\n",a,a,a,a,a,a,a,a,a,a);
      printf("B=%15.2f|%-15.2f|%15.2f|%-15.2f|%15.2f|%-15.2f|%15.2f|%-15.2f|%15.2f|%-15.2f|\n",b,b,b,b,b,b,b,b,b,b);
      printf("C=%15d|%-15d|%15d|%-15d|%15d|%-15d|%15d|%-15d|%15d|%-15d|",c,c,c,c,c,c,c,c,c,c);
    }