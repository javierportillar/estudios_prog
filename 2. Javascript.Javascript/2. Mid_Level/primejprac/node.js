const botEnviar = document.getElementById('enviar');

botEnviar.addEventListener('click',()=>{
    let resultado,mensaje;
    n1 = parseInt(prompt("Dime la nota 1 down"));
    n2 = parseInt(prompt("Dime la nota 2 down"));

    try{
        prevRes=parseInt(document.getElementById('nota').value);
        if(isNaN(prevRes)){
            throw "Hijo de puta";
        }
        mensaje= defMensaje(prevRes);
        resultado= verificarAprobacion(n1,n2,prevRes);
    } catch(e){
        resultado="Jmm tramposo";
        mensaje="hackero"
    }
    abrirModaal(resultado,mensaje);
})

const defMensaje = (pr)=>{
    switch(pr){
        case 1: resultado = "No jodas, 1/10?";
        break;
        case 2: resultado = "Sigue siendo malo";
        break;
        case 3: resultado = "Con eso no pasas";
        break;
        case 4: resultado = "Estuviste cerca, pero dale";
        break;
        case 5: resultado = "Tienes que esforzarte mas pero bien";
        break;
        case 6: resultado = "No esta mal";
        break;
        case 7: resultado = "Bien";
        break;
        case 8: resultado = "Crack";
        break;
        case 9: resultado = "Casi perfecto";
        break;
        case 10: resultado = "Ese es mi hijo";
        break;
        default: resultado = null;
    }
    return resultado;
}

const verificarAprobacion = (n1,n2,prevRes)=>{
    let promedio = (n1+n2+prevRes)/3;
    if(promedio>=7){
        return "Aprobado";
    }
    else {return "Desaprobado";}
}

const abrirModaal = (r,m)=>{
    document.querySelector(".resultado").innerHTML = r;
    document.querySelector(".mensaje").innerHTML = m;
    let modal = document.querySelector(".modalbc")
}