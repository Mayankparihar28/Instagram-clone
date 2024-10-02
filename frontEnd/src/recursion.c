#include <stdio.h>

int main() {
    int i;
    int num = 5; // Number for which we want the multiplication table

    printf("Multiplication Table of %d:\n", num);
    
    // Loop to print the table
    for(i = 1; i <= 10; i++) {
        printf("%d x %d = %d\n", num, i, num * i);
    }

    return 0;
}