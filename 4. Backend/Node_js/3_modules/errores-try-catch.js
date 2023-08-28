async function errorAsync(){
    setTimeout(()=>{
        try{
            return 3+z;
        }catch(e){
            console.error('Mira wuacho sumas numero y letras');
            // console.error(e);
        }
    },1500)
}

 function posibleError(){
    try{
        return 3+z;
    }catch(e){
        console.error('Mira wuacho sumas numero y letras');
        // console.error(e);
    }
}

try{errorAsync()
} catch(errorrrrr){
    console.error('errorrrrr')
}