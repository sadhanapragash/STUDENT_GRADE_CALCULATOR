#include<stdio.h>
int main(){
    char name[50];
    int FRENCH,ENGLISH,MATHS,SCIENCE,SOCIAL;
    int total;
    float percentage;   
    printf("Enter your name: ");
    scanf("%s",name);
    printf("Enter marks in FRENCH: ");
    scanf("%d",&FRENCH);                  
    printf("Enter marks in ENGLISH: ");
    scanf("%d",&ENGLISH);
    printf("Enter marks in MATHS: ");
    scanf("%d",&MATHS);
    printf("Enter marks in SCIENCE: ");
    scanf("%d",&SCIENCE);
    printf("Enter marks in SOCIAL: ");
    scanf("%d",&SOCIAL);
    total = FRENCH + ENGLISH + MATHS + SCIENCE + SOCIAL;
    percentage = (float)total / 5;
    printf("======================================================================\n");
    printf("Student Report Card\n");
    printf("======================================================================\n");
    printf("\n");
    printf("Student Name: %s\n", name);
    printf("\n");
    printf("\n");
    printf("Marks in FRENCH: %d\n", FRENCH);
    printf("Marks in ENGLISH: %d\n", ENGLISH);
    printf("Marks in MATHS: %d\n", MATHS);
    printf("Marks in SCIENCE: %d\n", SCIENCE);
    printf("Marks in SOCIAL: %d\n", SOCIAL);
    printf("\n");
    printf("\n");
    printf("Total Marks: %d\n", total);
    printf("Percentage: %.2f\n", percentage);
    if(percentage >= 90){
        printf("Grade: A\n");
    } else if(percentage >= 80){
        printf("Grade: B\n");
    } else if(percentage >= 70){
        printf("Grade: C\n");
    } else if(percentage >= 60){
        printf("Grade: D\n");
    } else {
        printf("Grade: F\n");
    }
    if(FRENCH < 35 || ENGLISH < 35 || MATHS < 35 || SCIENCE < 35 || SOCIAL < 35){
        printf("Result: FAIL\n");
    } else {
        printf("Result: PASS\n");
    }
    printf("======================================================================\n");
    return 0;
}