/*
logic for summing of all the child nodes and checking whether it is equal to root or not;

example:
26

/    \

10     3

/  \     \

4   6      3


*/


/*
considering the left and right nodes and summing the nodes individually and comparing
example logic in normal javascript:

*/
// input

let root=26;
let left_1=10;
let left_left_1=4;
let left_left_2=6;
let right_1=3;
let right_right_1=3;


let left_node = left_1+left_left_1+left_left_2;
let right_node = right_1+right_right_1;

let result=left_node+right_node;

if (result===root){
    console.log(1)
}else{
    console.log(0)
}



