const materiasHTML = document.querySelector(".materias");
const materias = [
    {Nombre: "Fisica",nota: 7},
    {Nombre: "Calculo",nota: 8},
    {Nombre: "Datos",nota: 7},
    {Nombre: "POB",nota: 9},
    {Nombre: "Control",nota: 10}
];

const obtMateria = (id)=>{
    return new Promise((resolve,reject)=>{
      let  materia = materias[id];
      if(materia== undefined) reject("No existe la materia");
      else setTimeout(()=>{resolve(materia)},Math.random()*400)
    })
}

const devolverMateria = async()=>{
    let materia = [];
    for(i=0;i<materias.length;i++){
        materia[i]= await obtMateria(i);
        let newHtmlCode = `<div class="materia">
        <div class="nombre">${materia[i].Nombre}</div>
        <div class="nota">${materia[i].nota}</div>
    </div>`;
    materiasHTML.innerHTML += newHtmlCode;
    }
}

devolverMateria();