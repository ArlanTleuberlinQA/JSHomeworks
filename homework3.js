function drawTriangleWhile(height, symbol) {
    let i = 1;
    while (i <= height) {
      let line = '';
      let j = 0;
      while (j < i) {
        line += symbol;
        j++;
      }
      console.log(line);
      i++;
    }
  }
  drawTriangleWhile(5,'*')

function drawTriangleFor(height, symbol) {
    for (let i = 1; i <= height; i++){
        let line = '';
        for (j=0;j<i;j++){
            line+=symbol
        }
        console.log(line)
    }
}
drawTriangleFor(5,'*')