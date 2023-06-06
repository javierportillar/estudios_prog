let suma = document.querySelector('.suma')
let multi = document.querySelector('.multi')
let text = document.querySelector('.escritura')



let sumar = (n1,n2)=>{
let operación = parseInt(n1)+ parseInt(n2);
return operación;
};

let picar = (n1,n2)=>{
    let operación = parseInt(n1)* parseInt(n2);
    return operación;
    };

suma.onclick = () => {
    let n1 = document.querySelector('.no1').value;
    let n2 = document.querySelector('.no2').value;
    text.innerHTML += `El valor de la Suma es= ${sumar(n1,n2)} <br>`;
};

multi.onclick = () => {
    let n1 = document.querySelector('.no1').value;
    let n2 = document.querySelector('.no2').value;
    text.innerHTML += `El valor de la Multiplicación es= ${picar(n1,n2)} <br>`;
};

