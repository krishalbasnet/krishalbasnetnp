#include<stdio.h>
struct employee{
  int empno,salary;
  char name[30],address[30];
}emp[50];
void Input(int x);
void Display(int y);
void Updatesal();
void main(){
  char y;
  int opt,i=0;
  do{
    printf("Choose action:\n1.Input\n2.Display\n3.Update Salary\n");
    scanf("%d",&opt);
    switch(opt){
      case 1: Input(i);
              i++;
              break;
      case 2: Display(i);
              break;
      case 3: Updatesal();
              break;
      default: printf("ERROR");
    }
    printf("\nEnter Y or y to continue or any other to exit the program:");
    scanf(" %c",&y);
  }while(y=='Y' || y=='y');
}
void Input(int x){
  emp[x].empno = x;
  printf("Enter Name : ");
  scanf("%s",&emp[x].name);
  printf("Enter Salary : ");
  scanf("%d",&emp[x].salary);
  printf("Enter Address : ");
  scanf("%s",&emp[x].address);
}
void Display(int y){
  int j;
  printf("Employee no. \t Name \t\t Salary \t Address\n");
  for(j=0;j<y;j++){
    printf("%-17d",emp[j].empno);
    printf("%-16s",emp[j].name);
    printf("%-16d",emp[j].salary);
    printf("%s",emp[j].address);
    printf("\n");
  }
}
void Updatesal(){
  int a;
  printf("Enter the employee no: ");
  scanf("%d",&a);
  printf("Enter new salary for %s: ",emp[a].name);
  scanf("%d",&emp[a].salary);
}