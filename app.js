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

var getNumber = (inputId) => parseInt(document.getElementById(inputId).value);
// var b = () => parseInt(document.getElementById('input-b').value);

var sum = () => getNumber("input-a") + getNumber("input-b"); //modificado
var subtration = (a,b) => getNumber("input-a") - getNumber("input-b");
var multiplication = (a,b) => getNumber("input-a") * getNumber("input-b");
var division = (a,b) => getNumber("input-a") / getNumber("input-b");

function setResult(result){
    document.getElementById("result").innerText = result;
}

document.getElementById("sum").addEventListener("click", function () {
    if (isNaN(getNumber("input-a")) || isNaN(getNumber("input-b"))) {
        setResult("Error") //Modificado
    } else {
        var result = sum();
       setResult(result);
    }
})
document.getElementById("subtration").addEventListener("click", function () {
    if (isNaN(getNumber("input-a")) || isNaN(getNumber("input-b"))) {
        setResult("Error") //Modificado
    } else {
        var result = subtration();
       setResult(result);
    }
})

document.getElementById("multiplication").addEventListener("click", function () {
    if (isNaN(getNumber("input-a")) || isNaN(getNumber("input-b"))) {
        setResult("Error") //Modificado
    } else {
        var result = multiplication();
       setResult(result);
    }
})

document.getElementById("division").addEventListener("click", function () {
    if (isNaN(getNumber("input-a")) || isNaN(getNumber("input-b"))) {
        setResult("Error") //Modificado
    } else {
        var result = division();
       setResult(result);
    }
})