#include <stdio.h>
void transpose(int mat[50][50], int x, int y)
{
    int i, j;
    for (i = 0; i < x; i++)
    {
        for (j = 0; j < y; j++)
        {
            printf("%d\t", mat[j][i]);
        }
        printf("\n");
    }
}
void main()
{
    int matrix[50][30], m, n, i, j;
    printf("Enter the number of rows and columns: ");
    scanf("%d%d", &m, &n);
    printf("Enter the data of the matrix: ");
    for (i = 0; i < m; i++)
    {
        for (j = 0; j < n; j++)
        {
            scanf("%d", &matrix[i][j]);
        }
    }
    transpose(&matrix, m, n);
}