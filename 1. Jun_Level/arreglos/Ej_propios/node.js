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

const imprimir = (alumnosTotales, dias) => {
  let resultado = "";
  for (let i = 0; i < alumnosTotales.length; i++) {
    let alumno = alumnosTotales[i];
    resultado += alumno[0] + ":<br></br>"
      + "________Asistencias:" + alumno[1] + "<br></br>"
      + "________Inasistencias:" + (dias - alumno[1]);
    if ((dias - alumno[1]) >= 2) {
      resultado += " Reprobado por inasistencia";
    }
    resultado += "<br><br>";
  }
  return resultado;
}

document.write(imprimir(alumnosTotales, dias));