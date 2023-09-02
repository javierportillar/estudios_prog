class juegos{
    constructor(numDescargas,puntuacion){
        this.numDescargas=numDescargas;
        this.puntuacion=puntuacion;
        this,instalada=false;
        this,abierta=false;
        
    }
    eleccion(){
        for(i=0;i<this.puntuacion;i++){
            
        }
    }

}


/* 
Cofla entro a tienda de celulares a ver que hay, 3 le llamaron la atencion pero los vendedores no conocen sus especificaciones
1. Creaar un sistema para mostrar las paricularidades de los 3 celulares
2. Cada celular debe tener marca color, peso, resolucion de pantalla, resolucion de camara y memoria
3. Cada celular debe poder predner, reiniciar, apagar, tomar fotos y grabar


class celular{
    constructor(color,peso,resPant,resCam,memRam){
        this.color=color;
        this.peso=peso;
        this.resPant=resPant;
        this.resCam=resCam;
        this.memRam=memRam;
        this.encendido=false;
        this.reiniciado=false;
        this.apagado=false;
    }
    prender(){
        if(this.encendido== false){
            alert("Prendiendo celular");
            this.encendido=true;
        }
        else{alert("El celular esta prendido")}
    }
    apagar(){
        if(this.encendido== true){
            alert("Apagando celular");
            this.encendido=false;
        }
        else{alert("El celular esta apagado")}
    }
    reinicar(){
        if(this.encendido== true){
            alert("Reiniciando celular");
            this.encendido=true;
        }
        else{alert("El celular no se puede reiniciar");}
    }
    tomarFoto(){
        alert("Se tomo la foto con una resolucion de: "+this.resCam);
    }

    grabarVideo(){
        alert("Video grabado con una resolucion de: "+this.resCam);
    }

    showInfo(){return ("El celular tiene un color "+ this.color+" Su peso es de "+this.peso+" Tiene una resolucion de pantalla de "+this.resPant+
        " Su camara tiene "+this.resCam+" y tiene una capacidad de almacenamiento ram de "+this.memRam+"<br>");
    }
}

class gamaAlta extends celular{

    constructor(color,peso,resPant,resCam,memRam,camExtra){
        super(color,peso,resPant,resCam,memRam);
        this.camExtra=camExtra;
    }
    vidCamLenta(){
        alert("Estas grabando en camara lenta")
    }

    recFacial(){
        alert("DEsbloqueando con reconocimiento facial")
    }
  
}
const samsung = new celular("negro","30g","1920x1080 pix","20MP","4GB ram");
const iphone = new celular("rojo","20g","1920x1080 pix","30MP","6GB ram");
const sony = new celular("verde","25g","1920x1080 pix","40MP","8GB ram");

const iphoneAlta = new gamaAlta("rojo","20g","1920x1080 pix","50MP","12GB ram");
const samsungAlta = new gamaAlta("negro","10g","1920x1080 pix","20MP","24GB ram");
*/
/*
samsung.prender();
samsung.tomarFoto();
samsung.grabarVideo();
samsung.reinicar();
samsung.apagar();


iphoneAlta.prender();
iphoneAlta.recFacial();
iphoneAlta.tomarFoto();
iphoneAlta.grabarVideo();
iphoneAlta.vidCamLenta();
iphoneAlta.reinicar();
iphoneAlta.apagar();


//imprimir = samsung.showInfo()+"<br>"+iphone.showInfo()+"<br>"+sony.showInfo();

imprimir = samsungAlta.showInfo()+"<br>"+iphoneAlta.showInfo();

document.write(imprimir);
*/