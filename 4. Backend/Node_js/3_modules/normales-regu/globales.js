let i=0;
let intervalo = setInterval(()=>{
    if (i===3){
        clearInterval(intervalo);
    }
    i++;
    console.log('Hey');
},1500)

global.Nombre= 'Javier'
console.log(Nombre);