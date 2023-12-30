#include <stdio.h>

int main(){

    short int myworld[10][10] = {{0,0,0,0},
                                {0,1,0,0},
                                {1,0,1,0},
                                {0,1,0,0}};

    for(int y = 0;y < 4;y++){
        for(int x = 0;x < 4;x++){

            if(myworld[y][x]){
                printf("#");
            }else{
                printf(" ");
            }

        }
        printf("\n");
    }

    return 0;
}