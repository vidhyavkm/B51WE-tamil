// console.log("first");
// console.log("second");
// console.log("third");

// console.log("fourth");
// setTimeout(()=>{
//     console.log("fifth")
// },5000);
// console.log("sixth");

// setTimeout(function timer() {
//     console.log('You clicked the button!');    
// }, 2000);

// console.log("Hi!");

// setTimeout(function timeout() {
// console.log("Click the button!");
// }, 5000);

// console.log("Welcome to loupe.");

// function f1(){
//     f2();
//     console.log("hello f1");
// }
// function f2(){
//     console.log("hello f2");
// }
// f1();

//callback hell

function f3(){
    console.log("hello f3")
    // f4();
    function f4(){
    console.log("hello f4");
}
}
function f5(){
   function f6(){

   }
}
f5();