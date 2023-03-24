// Javi llego a casa ya tiene tarea de calculo, tiene que hacer  ejercicios de mat en donde debe hacer suma, resta, division y multi. Crear calculadora

const suma = (num1,num2) => {
    let operacion = num1+ num2;
    return operacion;
    }
    
    const resta = (num1,num2) => {
        let operacion = num1-num2;
        return operacion;
    }
    
    const multi = (num1,num2) => {
        let operacion = num1*num2;
        return operacion;
    }
    
    const divi = (num1,num2) => {
        let operacion = num1/num2;
        return operacion;        
    }


let operacion = prompt("Escriba S para suma, R para resta, M para multiplicacion y D para division Num 1/Num 2");
alert("Recuerde que la operacion siempre se hace en orden consecutivo, por lo que a Num 1 se opera con Num 2 ")
let numeros=[parseInt(prompt("Escriba Num 1")) ,parseInt(prompt("Escriba Num 2"))];


if(operacion == "S" || operacion == "s"){
    resultado = suma(numeros[0],numeros[1]);
    document.write("Su resultado es: " + resultado);
}
else if(operacion == "M" || operacion == "m"){
    resultado = multi(numeros[0],numeros[1]);
    document.write("Su resultado es: " + resultado);
}

else if(operacion == "R" || operacion == "r"){
    resultado = resta(numeros[0],numeros[1]);
    document.write("Su resultado es: " + resultado);
}

else if(operacion == "D" || operacion == "d"){
    resultado = divi(numeros[0],numeros[1]);
    document.write("Su resultado es: " + resultado);
}

else{
    document.write("No ha ingresado ninguna operacion valida");
}

