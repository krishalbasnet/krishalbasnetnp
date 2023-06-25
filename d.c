 #include <stdio.h>
    int isPrime(int y);
    void main(){
      int a,i;  
      printf("Enter a number: ");
      scanf("%d", &a);
      if(isPrime(a)==0){
        printf("PRIME");
      }
      else{
        printf("NOT PRIME");
      }
    }
    int isPrime(int y){
      int i,b=1;
      if (y == 1){
        return 1;
      }else if (y == 2){
        printf("Smallest and only even prime number.\n");
        b=0;
      }else{
        for(i=2;i<y;i++){
          if(y%i==0){
            b = 0;
            break;
          }}
          if (b) {
            return 0;
          }else {
            return 1;
    }}}