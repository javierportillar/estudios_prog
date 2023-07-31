const contenedor = document.querySelector(".base");
const boton = document.querySelector(".enviar");
let valorAntiguo = boton.value;
boton.value = valorAntiguo.toUpperCase();


function crearLlave(nombre,modelo,precio){
    img="<img src='llave.png'>";
    nombre=`<h2>${nombre}</h2>`;
    modelo=`<h3>${modelo}</h3>`; // id= '${modelo}'>
    precio=`<p>Precio: <b>$${precio}</b></p>`;
    return[img,nombre,modelo,precio];
}

const changeHidden = (number) =>{
    document.querySelector(".key-data").value = number;
}
let documentFragment = document.createDocumentFragment();


for(i=0;i<10;i++){  
    let modeloRandom = Math.round(Math.random()*10000);
    let precioRandom = Math.round(Math.random()*10+30);
    let llave = crearLlave(`Llave ${i+1}`,`modelo ${modeloRandom}`,precioRandom);
    let div = document.createElement("DIV");
    div.addEventListener("click",()=>{changeHidden(modeloRandom)})
    div.classList.add(`item-${i}`,'flex-item');
    div.innerHTML = llave[0]+llave[1]+llave[2]+llave[3];
    documentFragment.appendChild(div);
    }    

    contenedor.appendChild(documentFragment);