// Arrays destructuring

let frutas = ["Banano","Mangolo"]
let [a,b] = frutas;

console.log(`Aquí vemos ${a} y despues vemos a ${b} Mediante a y b.
Ahora vemos a ${frutas[0]} y ${frutas[1]} con fruta`)

// Object destructuring

let user = {username:'Javi',edad:23}; 
let {username, edad}=user;

console.log(username,user.edad)

// Spread operator

let persona = {nombre: 'Javi',edad:23};
let pais = 'Colombia';

let datoJunto= {...persona, pais};

console.log(datoJunto);

//EJEMPLO COMO SE HACE SPREAD DE UN EMOJI
let kissEmoji = [..."👩‍❤️‍💋‍👩"]
console.log(kissEmoji)

let familyEmoji = [..."👨‍👩‍👦‍👦"]
console.log(familyEmoji)

// Rest

function suma(num,...values){
    console.log(values)
    for(i=0;i<values.length;i++){
        var a = num+values[i];
        console.log(a);    
    }
    return a;
    
}
 suma(1,1,2,3);

// Ejemplo desconstruyendo ojeto y agregando 

function solution(json1, json2) {
    let fusion = { ...json1, ...json2 };
    console.log(fusion);
    return fusion
  
  }
  
json1={
    name: "Mr. Michi",
      food: "Pescado"
}  
json2={
    age: 12,
      color: "Blanco"
}

solution(json1,json2)