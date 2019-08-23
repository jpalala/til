/*unshift lesson */

//var array1 = [1, 2, 3];


//console.log(array1.unshift(4, 5));

//# expected output: 5

//console.log(array1);

//# expected output: Array [4, 5, 1, 2, 3]
/* move snake forward: */
forward() {
	 const head = {x: snake[0].x + dx, y: snake[0].y};
  snake.unshift(head);
  snake.pop();}
}
