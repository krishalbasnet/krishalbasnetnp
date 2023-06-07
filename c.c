#include <stdio.h>
void main()
{
    int a, c;
    printf("Enter the value: ");
    scanf("%d", &a);
    c=a%2;
    (c==0)?(printf("Even")): (printf("Odd."));
}