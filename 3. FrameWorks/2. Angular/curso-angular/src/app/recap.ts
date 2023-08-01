const username = 'Javi';
// El tipado permite disminuir bugs
const vari: string | number= 'Javi'

const sum=(a:number,b:number)=>{
    return a+b;
}
sum(3,2)

class Person {
    constructor(public age:number,public name:string){
        this.age=age;
        this.name= name;
    }
}

const Javi= new Person(23,'Javier')
