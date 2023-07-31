// const hola =()=>{
//     return(console.log('Dice Hola'))
// }

// export default hola;

class objeto{
    constructor(movie,year,protagonist){
        this.movie=movie;
        this.year=year;
        this.protagonist=protagonist;
    }
    get infoObjeto(){
        return(this.movie,this.year,this.protagonist);
    }
};



export default objeto;
