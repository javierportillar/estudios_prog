function newUser(nombre,edad,pais){
    var nombre = nombre || "Javier";
    var edad = edad || 23
    var pais = pais || "Colombia"
    console.log(nombre,edad,pais);
}

newUser();
newUser("Santi","23","Colombia");


function newAdmi(nombre= "Tefo",edad=28,pais="Colombia"){
    console.log(nombre,edad,pais);
}

newAdmi("Carlos",29,"Colombia");


