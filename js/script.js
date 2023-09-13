// example-1 
a = 90
b = 50
c = a + b
function ex_1_btn(){
document.getElementById('ex_1').innerHTML ="Total price of household =" + c + "tk";
}
function ex_1_rest(){
document.getElementById('ex_1').innerHTML ="Total price of household =";
}
// example-2 
let y = "Abdur" + "Rob"
document.getElementById('ex-2').innerHTML = y;
let x = "Abdur" + " " + "Rob"
document.getElementById('ex_2').innerHTML = x;
// example-3
function showDate(){
  document.getElementById('dt_btn').innerHTML = Date();
}
function resetDate(){
  document.getElementById('dt_btn').innerHTML = "DATE";
}
// example-4 
function bulbOn(){
  document.getElementById('bulb_img').src = "img/on.gif";
}
function bulbOff(){
  document.getElementById('bulb_img').src = "img/off.gif";
}
img_btn
// example-5 
function c_img(){
  document.getElementById('img_btn').src = 'img/rainy.jpeg'
}
// example-6 
function show(){
  document.getElementById('text_hide').style.display ="block";
}
function hide(){text_hide
  document.getElementById('text_hide').style.display ="none";
}
// example-7
function addingNo(){
  let a = 100;
  let b = 500;
  let c = a + b;
  document.getElementById('add_no').innerHTML = c + " " + "it is done by keeping var inside of the function";
}
function addNore(){
  document.getElementById('add_no').innerHTML = "Adding no." ;
}
// demo
let number1  = 100;
let number2  = 100;
let data  = number1 + number1;
function varOutput(){
  document.getElementById('add_no_2').innerHTML = data + " " + "it is done by keeping var out of the function";
}
// example-8 
const para = document.getElementById("event_p");
const button = document.getElementById("event_btn");

button.addEventListener('click', function(){
  para.textContent = "nothing";
});