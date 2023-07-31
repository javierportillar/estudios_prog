let cantidad = prompt("Cuantos estudiantes son");
let dias = prompt("Cuantos dias son:");
let alumnosTotales = [];

for(i=0;i<cantidad;i++){
  alumnosTotales[i] = [prompt("Escriba su nombre "+ (i+1)),0];
}

const tomarAsistencia = (nombre,p)=>{
  let presencia = prompt(nombre);
  if(presencia == "p" || presencia == "P"){
    alumnosTotales[p][1]++;
}
}

for(i=0;i<dias;i++){
  for (alumno in alumnosTotales){
   tomarAsistencia(alumnosTotales[alumno][0],alumno);
  }
}

for(alumno in alumnosTotales){
  let resultado = `${alumnosTotales[alumno][0]}:<br>
  ________Asistencias: ${alumnosTotales[alumno][1]} <br>
  ________Inasistencias: ${dias - alumnosTotales[alumno][1]} <br>
  `;
  if(dias-alumnosTotales[alumno][1] >= 2){
    resultado += " Reprobado por inasistencia <br> <br>";
  }
  else{
    resultado += "<br><br>";
  }
  document.write(resultado);
}





/* EJEMPLO 1
 let primeraVez=true;
 function procesamiento(horaDeLlegada, jornada, edad){
  if (horaDeLlegada >= 2 && jornada == "AM" && primeraVez==true)
  {
    if(edad >= 18){
      document.write("Es admitido gratis <br>")
      primeraVez=false;
    }
  }
  else{
    document.write("Es admitido, pero pague <br>")
  }
 }
 procesamiento(1,"AM",18)
 procesamiento(2,"AM",18)
 procesamiento(3,"AM",18)
  /*
 let hora = prompt("En que hora exacta llego");
 let amOpm = prompt("Llego en AM o en PM");
 let edad = prompt("adjunte su edad");
*/

 

 /*  Funciones
 
 let int =0;
  let nombrePersonas=[];
  while(int<=2)
  {
    let nombrePersonas = [prompt("Escriba su nombre, solo 3 personas")];
    
    int++;
  }
  saludar()

  function saludar(){
    let respuesta = prompt("Como estas "+ nombrePersonas + " bien o mal")
    if(respuesta == "bien"){
    alert("Me alegra")
    }
    else{
      alert("que pena")
    }
  }

*/










/* Ciclos
let numero = 0;

while (numero<10){
   numero ++;
// document.write(numero + ",")
   if (numero == 5){
    break;
   }
}

for(let i = 8; i<=8 && i>=0; i--){
 if(i<=6 && i >=4){
  continue;
 }
 document.write(i + "<br>");
}

-
-
let persona1 = {
  nombre: "Javier",
  ciudad: "Cali",
  edad: "23",
  celular: "Iphone",
  estudios: "Ing"
};
let nombres = persona1["nombre"];
let ciudades = persona1["ciudad"];
let edades = persona1["edad"];
let celulares = persona1["celular"];
let estudios = persona1["estudios"];

let persona2 =["Santi","Medellin","24","Iphone","Ing"];
document.write(persona2 +"  --|--  "+ persona1["ciudad"]) 
frase =`el nombre del participante es <b>${nombres}</b><br>
el vive en <b>${ciudades}</b>, tiene <b>${edades}</b> annos <br>
tiene un celular <b>${celulares}</b> y es <b>${estudios}</b>`;
document.write(frase)

*/

