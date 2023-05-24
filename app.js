var inp1 = document.getElementById("firstName")
var inp2 = document.getElementById("lastName")
var inp3 = document.getElementById("MobileNo")
var inp4 = document.getElementById("password")



function register(){
    var radio = document.querySelector("input[type= radio]:checked")
var valu = radio.value;
console.log(valu);
console.log(inp1);
console.log(inp2);
console.log(inp3);
console.log(inp4);
var form =document.querySelector("form[type= form]:checked")
var valu = form;
console.log(valu);
}