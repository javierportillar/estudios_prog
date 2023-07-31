
/*
Cofla ya sabe que materias va a inscribir y lo hará en 3 días.
1. Crear funcion para pregntarle en que materia se quiere inscribir
2. Si hay 20 alumnos o más se debe negar la inscripción
3. Si hay menos de 20 añadir a cofla a la lista. 


const numEstudiantes=(clase,numEst)=>{

    if(clase=="fisica"){
        let  fisica= ["Javi","Carlos","Dani","Santi","Pipe"];
        maxFisica = fisica.length;
        if(maxFisica<numEst){
            alert("Hey, en la clase de "+clase+" Hay "+maxFisica+" Si puedes matricular.")
        let nombre=[prompt("Diga su nombre")];
        fisica.push(nombre);
            document.write("Listo "+nombre+" Se matriculó a esta Clase"+
            "<br>"+"Los alumnos inscritos son "+fisica);
        }
        else{
            alert("Lo siento, la clase está llena")
        }
    }
    else if(clase=="quimica"){
        let  quimica= ["Javi","Francisco","Estefo"];
        let maxQuimica = quimica.length;
        if(maxFisica<numEst){
            alert("Hey, en la clase de "+clase+" Hay "+maxQuimica+" Si puedes matricular.")
        let nombre=[prompt("Diga su nombre")];
        fisica.push(nombre);
            document.write("Listo "+nombre+"Se matriculó a esta Clase");
        }
        else{
            alert("Lo siento, la clase está llena")
        }
    }
    

}

let clase = [prompt("Que clase desea matricular?"),prompt("Cuantos estudiantes pueden estar en esa mat, fisica(7), quimica(3)")];

numEstudiantes(clase[0],clase[1]);

*/
/*
Cofla se va a meter a varias clases pero quiere conocer el prorfesor asignado y los alumnos
1. Crear función que al pasarle de parametro la materia devuelva (Nombre de profe asignado y nombre de los alumnos)
2. Crear funcion que diga en cuantas clases está cierto estudiante.
3. Nombrar las clases en las que está y los profresores de cada una


const obtenerInformacion = (materia) =>{
    materias= {
        fisica:["PEREZ","Santi","Carlos","Nico","Javi"],
        programacion: ["RODRIGUEZ","Santi","Javi"],
        quimica: ["BOTINA","Nico","Javi"],
        castellano: ["PORTILLA","Santi","Carlos"],
    }
if(materias[materia] !== undefined){
    return([materias[materia],materia,materias]);
}   else{
    return materias;
}
    
}
const mostrarInformacion = (materia)=>{
    let materias = obtenerInformacion(materia);
    let profesor = obtenerInformacion(materia)[0][0];
    let estudiantes = obtenerInformacion(materia)[0];
    estudiantes.shift();
    document.write("La materia a inscribir es "+ materias[1]+" y los alumnos que tiene son "+estudiantes+" El profesor asignado es "+ profesor +"<br><br>");
}
 
mostrarInformacion("fisica");
mostrarInformacion("quimica");
mostrarInformacion("programacion");
mostrarInformacion("castellano");

const numClasesJavi = (nombre)=>{
    let cantidad =0;
    let materias = obtenerInformacion();
    let clasesPresentes=[];
    for(info in materias){
        if(materias[info].includes(nombre)){
            clasesPresentes.push(" "+info);
            cantidad++;
        }
    }
    return(nombre + " Está en "+cantidad+" Clases <br>"+"Esta cursando "+clasesPresentes+"<br><br>")
}

document.write(numClasesJavi("Javi"));
document.write(numClasesJavi("Santi"));
*/
/* 
Cofla está terminando debe hacer suma, resta, multiplicación y división
más potencias, raices cyadradas y cubicas

class Calculadora {
    constructor(){

    }
     suma = (num1, num2)=>{
        let operacion = num1 + num2;
        return operacion;
    }
    
     resta = (num1, num2)=>{
        let operacion = num1 - num2;
        return operacion;
    }
    
     multi = (num1, num2)=>{
        let operacion = num1 * num2;
        return operacion;
    }
    
     divi = (num1, num2)=>{
        let operacion = num1 / num2;
        return operacion;
    }
    
     potencia = (num1,num2)=>{
        let operacion = num1**num2;
        return operacion;
    }
    raiz2 = (num1,num2)=>{
        let operacion = Math.sqrt(num1);
        return operacion;
 
    }
    raiz3 = (num1,num2)=>{
        let operacion = Math.cbrt(num1);
        return operacion;
 
    }
}

const calculadora = new Calculadora();

let operacion = prompt("Escriba S para suma, R para resta, M para multiplicacion, D para division Num 1/Num 2, P para hacer num1 potencia de num2, R2 para raiz cuadrada y R3 para raiz cúbica");
alert("Recuerde que la operacion siempre se hace en orden consecutivo, por lo que a Num 1 se opera con Num 2 ")

let numeros = [parseInt(prompt("Escriba Num 1")), parseInt(prompt("Escriba Num 2"))];


if (operacion == "S" || operacion == "s") {
    resultado = calculadora.suma(numeros[0], numeros[1]);
    document.write("Su resultado es: " + resultado);
}
else if (operacion == "M" || operacion == "m") {
    resultado = calculadora.multi(numeros[0], numeros[1]);
    document.write("Su resultado es: " + resultado);
}

else if (operacion == "R" || operacion == "r") {
    resultado = calculadora.resta(numeros[0], numeros[1]);
    document.write("Su resultado es: " + resultado);
}

else if (operacion == "D" || operacion == "d") {
    resultado = calculadora.divi(numeros[0], numeros[1]);
    document.write("Su resultado es: " + resultado);
}

else if (operacion == "P" || operacion == "p") {
    resultado = calculadora.potencia(numeros[0], numeros[1]);
    document.write("Su resultado es: " + resultado);
}

else if (operacion == "R2" || operacion == "r2") {
    resultado = calculadora.raiz2(numeros[0], numeros[1]);
    document.write("Su resultado es: " + resultado);
}

else if (operacion == "R3" || operacion == "r3") {
    resultado = calculadora.raiz3(numeros[0], numeros[1]);
    document.write("Su resultado es: " + resultado);
}

else {
    document.write("No ha ingresado ninguna operacion valida");
}
*/