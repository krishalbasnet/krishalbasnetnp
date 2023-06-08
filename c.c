#include<stdio.h>
#include<math.h>
void main(){
    int a,b=0,c,n;
    printf("Enter a number: ");
    scanf("%d",&a);
    c=a;
    for(n=0;a!=0;n++){
        a/=10;
    }
    a=c;
    for(a=a;a!=0;a/=10){
        b = b + pow(a%10,n) ;
    }
    if(c==b){
        printf("It is a armstrong number.");
    }
    else{
        printf("It is not an armstrong number.");
    }
}