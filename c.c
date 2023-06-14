#include<stdio.h>
void main(){
  int i,j,r=5;
  for(i=r;i>0;i--){
    printf("\n");
    for (j = 1; j <= (r - i)*2; j++) {
    printf(" ");
    }
    for (j = 1; j <= i; j++) {
    printf("%d ",j);
    }
    for (j = i-1; j >= 1; j--) {
    printf("%d ",j);
    }
}}