class animal {
    constructor(especie, edad, color) {
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info2 = `Soy ${this.especie}, tengo ${this.edad} anios
        y mi color es ${this.color}`;
        this.info = "Soy " + this.especie + ", Mi edad es " + this.edad + " a;os y mi color es " + color;
    }
    showInfo = ()=>{
        document.write(this.info2 + "<br>");
    }
}