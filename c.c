//transpose of matrix
#include<stdio.h>
void main(){
    int matrix[30][30], i, j, m, n;
    printf("Enter the no of rows and columns: ");
    scanf("%d%d",&m,&n);
    printf("Enter the data of the matrix: \n");
    for(i=0;i<m;i++){   
        for(j=0;j<n;j++){
            scanf("%d",&matrix[i][j]);
        }
    }
    printf("The transpose is:\n");
    for(i=0;i<m;i++){   
        for(j=0;j<n;j++){
            printf("%d\t",matrix[j][i]);
        }
        printf("\n");
    }
}