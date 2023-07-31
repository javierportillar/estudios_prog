//Ejemplo metodo get y set

class animal{
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = "Soy " + this.especie + ", Mi edad es " + this.edad + " a;os y mi color es " + color;
    }
    verInfo(){
        document.write(this.info + "<br>");
    }
}
class gato extends animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color)
        this.raza = raza;
    }
    maullar(){
        document.write("Gato maulla" + "<br")
    }
}

class perro extends animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color)
        this.raza = raza;
    }
    set modificarRaza(nuevaRaza){ 
        this.raza = nuevaRaza;
    }

    get obtenerRaza(){
        return this.raza
    }
}

const perrito = new perro("canino",7,"blanco","husky");
const gatito = new gato("felino",3,"negro","persa");
const pajaro = new animal("ave",4,"verde");


perrito.modificarRaza = "Border Colley";

document.write(perrito.info + "y mi raza es " + perrito.obtenerRaza);


//gatito.ladrar();
//perrito.maullar();
//gatito.maullar();

/*
// Ejemplo herencia
class animal{
    constructor(especie,edad,color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = "Soy " + this.especie + ", Mi edad es " + this.edad + " a;os y mi color es " + color;
    }
    verInfo(){
        document.write(this.info + "<br>")
    }
}

class perro extends animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color)
        this.raza = raza;
    }
    static ladrar(){ //Ejemplo metodo estatico
        document.write("Perro ladra" + "<br>")
    }
}

class gato extends animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color)
        this.raza = raza;
    }
    maullar(){
        document.write("Gato maulla" + "<br")
    }
}

let perrito = new perro("canino",7,"blanco","husky");
let gatito = new gato("felino",3,"negro","persa");
let pajaro = new animal("ave",4,"verde");

perrito.ladrar();
//gatito.ladrar();
//perrito.maullar();
gatito.maullar();

*/


// Ejemplo Polimorfismo
/*
class animal{
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
    }

    ladrar(){
        if(this.especie == "canino"){
            document.write("Perro ladra" + "<br>");
        }
        else{
            document.write("No es un perro, es un " + this.especie + "<br>");
        }
    }
}



perro.ladrar();
gato.ladrar();
pajaro.ladrar();
*/