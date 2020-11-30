
// wasi-app.c
#include <stdio.h>
#define BUF_SIZE 1024

int main(int argc, char **argv) {
  size_t counter = 0;
  char buf[BUF_SIZE];
  int c;
  while ((c = getchar()) != '\n') {
    buf[counter++] = c;
  }
  if (counter > 0) {
    printf("The input content is: %s\n", buf);
    // write content to local file.
    FILE* fd;
    if ((fd = fopen("wasi-static.txt", "w"))) {
      fwrite(buf, sizeof(char), counter, fd);
    } else {
      perror("Open static file failed!");      
    }
  }
  return 0;
}