const heladoAgua = 0.6;
const heladoCrema = 1;
const heladoHeladix = 1.6;
const heladoHeladovich = 1.7;
const heladoHelardo = 1.8;
const heladoConfites = 2.9;
const poteHelado = 2.9;
let nombre = [];
let dinero = [];
let muestraVuelta = [];
let vuelta = [];

const diferenciarNombre = (nombre, p) => {
    let acceso;
    if (nombre == "cofla") {
        acceso = " y tu vuelta es de: " + p;
    }
    else{
        acceso = "";
    }
    return acceso;
}

for (i = 0; i <= 2; i++) {
    nombre[i] = [prompt("Di tu nombre")];
    dinero[i] = [parseInt(prompt("cuanto dinero tienes en USD"))];
    
    if (dinero[i] >= poteHelado) {
        vuelta[i] = dinero[i] - poteHelado;

        muestraVuelta[i] = diferenciarNombre(nombre[i], vuelta[i]);

        document.write("Ey " + nombre[i] + " tienes " + dinero[i] + " Puedes comprar 1/4KG de pote o confites " + muestraVuelta[i] + "<br>");
    }
    else if (heladoHelardo <= dinero[i] && dinero[i] < poteHelado) {
        vuelta[i] = dinero[i] - heladoHelardo;
        muestraVuelta[i] = diferenciarNombre(nombre[i], vuelta[i]);
        document.write("Ey " + nombre[i] + " tienes " + dinero[i] +" Puedes comprar helado Helardo " + muestraVuelta[i]+ "<br>");
    }
    else if (heladoHeladovich <= dinero[i] && dinero[i] < heladoHelardo) {
        vuelta[i] = dinero[i] - heladoHeladovich;
        muestraVuelta[i] = diferenciarNombre(nombre[i], vuelta[i]);
        document.write("Ey " + nombre[i] + " tienes " + dinero[i] + " Puedes comprar helado Heladovich " + muestraVuelta[i]+ "<br>");
    }
    else if (heladoHeladix <= dinero[i] && dinero[i] < heladoHeladovich) {
        vuelta[i] = dinero[i] - heladoHeladix;
        muestraVuelta[i] = diferenciarNombre(nombre[i], vuelta[i]);
        document.write("Ey " + nombre[i] + " tienes " + dinero[i] + " Puedes comprar helado Heladix " + muestraVuelta[i]+ "<br>");
    }
    else if (heladoCrema <= dinero[i] && dinero[i] < heladoHeladix) {
        vuelta[i] = dinero[i] - heladoCrema;
        muestraVuelta[i] = diferenciarNombre(nombre[i], vuelta[i]);
        document.write("Ey " + nombre[i] + " tienes " + dinero[i] + " Puedes comprar helado de crema " + muestraVuelta[i]+ "<br>");
    }
    else if (heladoAgua <= dinero[i] && dinero[i] < heladoCrema) {
        vuelta[i] = dinero[i] - heladoAgua;
        muestraVuelta[i] = diferenciarNombre(nombre[i], vuelta[i]);
        document.write("Ey " + nombre[i] + " tienes " + dinero[i] + " Puedes comprar helado de agua " + muestraVuelta[i]+ "<br>");
    }
    else if (dinero[i] < heladoAgua) {
        document.write("Ey " + nombre[i]+" No puedes comprar nada"+ "<br>");
    }
}

