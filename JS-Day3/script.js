//normal or named 

function foo(){
//    console.log("hi")
    return ("hello world")
}
// console.log(foo());
foo();

//actual syntax:
// function foo(){
   
//     return ("hello world")
  
// }
// foo();

//normal with parameters:

function add(a,b){
    console.log(a+b)
    //return a-b;
}
add(30,40);
// console.log(add(30,40));

//anonymous function:

var mul = function (x,y){

    return x*y;
}
console.log(mul(50,40));
//IIFE 
(function(){
    console.log("hello world")
})();

(function(p,q){
    console.log(p-q)
})(60,30);

//arrow function:

//multiline

var res= (i,j) => {
    var result=20;
    var total = result+i+j
    return total;
}
console.log(res(50,10))

//single line

var compute= (u,v) => u+v
console.log(compute(3,2)); 




