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
var a = () => parseInt(document.getElementById('input-a').value);
var b = () => parseInt(document.getElementById('input-b').value);


var sum = (a,b) => a() + b();
var subtration = (a,b) => a() - b();
var multiplication = (a,b) => a() * b();
var division = (a,b) => a() / b();


document.getElementById("sum").addEventListener("click", function () {
    var result = sum(a,b);
    if (isNaN(result)) {
        console.log("1")
        document.getElementById("result").innerHTML = "Error"
    } else {
        document.getElementById("result").innerText = result;
        console.log("2")
    }
})
document.getElementById("subtration").addEventListener("click", function () {
    var result = subtration(a,b);
    if (isNaN(result)) {
        console.log("1")
        document.getElementById("result").innerHTML = "Error"
    } else {
        document.getElementById("result").innerText = result;
        console.log("2")
    }
})

document.getElementById("multiplication").addEventListener("click", function () {
    var result = multiplication(a,b);
    if (isNaN(result)) {
        console.log("1")
        document.getElementById("result").innerHTML = "Error"
    } else {
        document.getElementById("result").innerText = result;
        console.log("2")
    }
})

document.getElementById("division").addEventListener("click", function () {
    var result = division(a,b);
    if (isNaN(result)) {
        console.log("1")
        document.getElementById("result").innerHTML = "Error"
    } else {
        document.getElementById("result").innerText = result;
        console.log("2")
    }
})