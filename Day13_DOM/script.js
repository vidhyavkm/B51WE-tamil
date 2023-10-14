// var result = document.getElementById('button');
// console.log(result);


// var result1 = document.getElementsByClassName('heading');
// console.log(result1);


var result2 = document.getElementsByClassName('container');
console.log(result2);


// var result3 = document.getElementsByTagName('div');
// console.log(result3);


let button = document.createElement("button");//step 1
button.innerText = "Submit";//step 2
button.setAttribute('id','button');
button.style.backgroundColor="pink"
document.body.appendChild(button);//step 3 


//queryselector

var result = document.querySelector('#button');
console.log(result);


var result1 = document.querySelectorAll('#button');
console.log(result1);


var result3 = document.querySelector('.container');
console.log(result3);


// var result3 = document.getElementsByTagName('div');
// console.log(result3);