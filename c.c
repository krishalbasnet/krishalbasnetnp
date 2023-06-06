#include<stdio.h>
#define pi 3.1415
void main(){
    float rad, area;
    printf("Enter the radius: ");
    scanf("%f",&rad);
    area = pi * rad * rad;
    printf("The area is %f",area);
}