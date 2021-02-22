// //Crear 4 funciones: suma, resta, multiplicación y división. 2 operandos entrada, devolver operacion
// var number1 = 4;
// var number2 = 5;

// function sum(number1,number2){
//     return number1 + number2;
// }
// function rest(number1,number2){
//     return number1 - number2;
// }
// function multiplication(number1,number2){
//     return number1 * number2;
// }
// function division(number1,number2){
//     return number1 / number2;
// }


// //Prueba con la consola

// console.log("La suma de " + number1 +" y "+ number2 + " es " + sum(number1,number2));
// console.log("La resta de " + number1 +" y "+ number2 + " es " + rest(number1,number2));
// console.log("La multiplicación de " + number1 +" y "+ number2 + " es " + multiplication(number1,number2));
// console.log("La division de " + number1 +" y "+ number2 + " es " + division(number1,number2));

//Crea 2 inputs numericos(A y B)

var sum = (a,b) => a + b;
var subtration = (a,b) => a - b;
var  multiplication= (a,b) => a * b;
var division = (a,b) => a / b;

var buttonSum = document.getElementById("sum").addEventListener("click", function(){
   var result = sum(a,b);
    document.getElementById("result").innerHTML = result;
})

var a = (document.getElementById('input-a').value);
var b = (document.getElementById('input-b').value);
//     document.getElementById("result").innerHTML = suma;
//     document.getElementById("sum").addEventListener("click",sum);
// }

if(a === "" && b == ""){
    document.getElementById("result").innerHTML = "Error"
}
