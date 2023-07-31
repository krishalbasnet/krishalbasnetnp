#include<stdio.h>
void main(){
    char str1[11] = "Nepal";
    for(int i=0;i<=5;i++){
        for(int j=2*(4-i);j>=0;j--){
            printf(" ");
        }
        for(int j=0;j<i;j++){
            printf("%c ",str1[i]);
        }
        for(int j=0;j<=i;j++){
            printf("%c ",str1[i]);
        }
        printf("\n");
    }
}