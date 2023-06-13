#include <stdio.h>
    #include <math.h>
    void main(){
      int n=30, fact = 1, i, j,sign=1;
      float sum,x;
      printf("Enter the degree: ");
      scanf("%f", &x);
      x=x*3.1415/180;
      sum = 0.00;
      for (i = 0; i <= n; i+=2){
        fact = 1.00;
        for (j = i; j > 0; j--){
          fact = fact * j;
        }
        sum = sum + sign*(pow(x,i) / (float)fact);
        sign = sign * -1;
      }
      printf("The sum is: %f", sum);
    }