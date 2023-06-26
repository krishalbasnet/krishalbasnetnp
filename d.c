 #include<stdio.h>
    void main(){
      int n,i, num[100], sum=0;
      float ave;
      printf("Enter the number of terms: ");
      scanf("%d",&n);
      printf("Enter numbers:");
      for(i=0;i<n;i++){
        scanf("%d",&num[i]);
        sum = sum + num[i];
      }
      ave = sum / (float)n;
      printf("The sum is %d and average is %f",sum,ave);
    }
        