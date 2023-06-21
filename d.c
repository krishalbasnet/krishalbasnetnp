#include<stdio.h>
void main(){
    int r1,c1,r2,c2,i,mat1[50][50],mat2[50][50],mul[50][50],j,k;
    printf("Enter the no of rows and columns of 1st matrix: ");
    scanf("%d%d",&r1,&c1);
    printf("Enter the no of rows and columns of 2nd matrix: ");
    scanf("%d%d",&r2,&c2);
    printf("Enter the elements of the 1st matrix:");
    for(i=0;i<r1;i++){
        for(j=0;j<c1;j++){
            scanf("%d",&mat1[i][j]);
        }
    }
    printf("Enter the elements of the 2nd matrix:");
    for(i=0;i<r2;i++){
        for(j=0;j<c2;j++){
            scanf("%d",&mat2[i][j]);
        }
    }
    if(c1==r2){
        for(i=0;i<r1;i++){    
            for(j=0;j<c2;j++){    
                mul[i][j]=0;    
                for(k=0;k<c2;k++){    
                    mul[i][j]+=mat1[i][k]*mat2[k][j];    
                }    
            }    
        }    
    }
    for(i=0;i<r2;i++){
        for(j=0;j<c2;j++){
            printf("%5d",mul[i][j]);
        }
        printf("\n");
    }
}