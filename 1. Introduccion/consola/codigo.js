/*
Cofla en dos semanas debe distribuir su trabajo, para ello sabe que en dos semanas debe dedicar 8 horas a cosasd e la casa, 56 horas de trabajo, 24 horas 
estudiando y haciendo trabajos  
*/

let cosasCasa = "35 minutos haciendo cosas de la casa";
let trabajo = "240 minutos trabajando";
let estudios = "105 minutos estudiando";
let descanso = "10 minutos descansando";
let trabajos = "105 minutos haciendo trabajos";



let total= ("Debes dedicarte <br>"+cosasCasa+" minutos en Cosas de la casa <br>"+estudios+" minutos estudiando <br>"+trabajos+" minutos haciendo trabajos"+trabajo+" minutos trabajando<br>"+"y "+descanso+" minutos descansando");


for(i=0;i<14;i++){
    if(i==0){
        console.groupCollapsed("Semana 1")
    }
    console.group("Día"+(i+1))
    console.log(cosasCasa);
    console.log(trabajo);
    console.log(estudios);
    console.log(descanso);
    console.log(trabajos);
    console.groupEnd();
if(i==6){
    console.groupEnd();
    console.groupCollapsed("Semana 2")
}
}
console.groupEnd();
console.groupEnd();
/*
Hacer un comprobante de que si se cunple con asistencias, nota y num de proyectos entregados apruebe la materia y la repruebe si no los obtiene



const materias = {
    fisica: [90, 7, 4, "fisica"],
    calculo: [95, 7, 3, "calculo"],
    programacion: [89, 10, 4, "programacion"],
};

const aprobo = () => {
    for (materia in materias) {
        let asistenciaP = materias[materia][0];
        let notaP = materias[materia][1];
        let numProy = materias[materia][2];

        if (asistenciaP < 90 || notaP < 7 || numProy < 3) {
            console.log("%cUsted reprobó En la materia de " + materias[materia][3],"color:red");
            if (asistenciaP < 90) {
                console.log(
                    "%cPorque obtuvo una asistencia de " +
                    asistenciaP +
                    " y requería tener 90","color:red"
                );
            }
            if (notaP < 7) {
                console.log(
                    "Porque obtuvo una nota de " + notaP + " y requería tener 7","color:red"
                );
            }
            if (numProy < 3) {
                console.log(
                    "Porque entrego " + numProy + " proyectos y requería entregar 3","color:red"
                );
            }
        } else {
            console.log("%cAprobado En la materia de " + materias[materia][3],"color:green");
        }
    }
};

aprobo();

*/
