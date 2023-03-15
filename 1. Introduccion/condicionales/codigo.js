const heladoAgua = 0.6;
const heladoCrema= 1;
const heladoHeladix = 1.6;
const heladoHeladovich = 1.7;
const heladoHelardo = 1.8;
const heladoConfites = 2.9;
const poteHelado = 2.9;

let vuelta = 0;

let nombre = prompt("Di tu nombre");
alert("Bienvenido " + nombre + " Con cuanto dinero dispone?")
let dinero = prompt("Dinero en USD");
dinero = parseInt(dinero);

if(dinero >= poteHelado)
{
   vuelta = dinero-poteHelado;
   alert("Puedes comprar 1/4KG de pote o confites y tu vuelta es de " + vuelta); 
}
else if(heladoHelardo <= dinero && dinero < poteHelado)
{
    vuelta = dinero-heladoHelardo;
    alert("Ey" + nombre + "Puedes comprar helado Helardo y tu vuelta es de " + vuelta);
}
else if (heladoHeladovich <= dinero && dinero < heladoHelardo)
{
    vuelta = dinero-heladoHeladovich;
    alert("Ey" + nombre + "Puedes comprar helado Heladovich y tu vuelta es de " + vuelta);
}
else if (heladoHeladix <= dinero && dinero < heladoHeladovich)
{
    vuelta = dinero-heladoHeladix;
    alert("Ey" + nombre + "Puedes comprar helado Heladix y tu vuelta es de " + vuelta);
}
else if (heladoCrema <= dinero && dinero < heladoHeladix)
{
    vuelta = dinero-heladoCrema;
    alert("Ey" + nombre + "Puedes comprar helado de crema y tu vuelta es de " + vuelta);
}
else if ( heladoAgua <= dinero && dinero < heladoCrema)
{
    vuelta = dinero-heladoAgua;
    alert("Ey" + nombre + "Puedes comprar helado de agua y tu vuelta es de " + vuelta);
}
else if (dinero < agua)
{
    alert("No puedes comprar nada")
}