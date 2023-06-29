//Declaración de la clase
class nombreClase{
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
        //console.log('Nuevo usuario')
    }
    //metodos
    hablar(){
        return 'Hello';
    }
    saludar(){
        return `${this.hablar()} ${this.nombre}`
    }
    get nEdad(){
        return this.edad;
    }
    set nEdad(n){
        this.edad = n;
    }
}
//Instanciación de la clase
const usuario = new nombreClase('Javi',23);

console.log(usuario.nEdad)
console.log(usuario.nEdad=18)

// let b = javi.saludo();
// console.log(b);
// let a = usuario.saludo();
// console.log(a);
