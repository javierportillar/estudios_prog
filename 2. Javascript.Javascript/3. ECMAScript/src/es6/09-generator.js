function* iterate(array){
    for (let value in array){
        yield value;
    }
}

const it=iterate(['Javi','Santi','Dani']);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);