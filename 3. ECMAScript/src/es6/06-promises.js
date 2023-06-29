const funcionJeje=()=>{
    return new Promise((resol,reject)=>{
        if(false){
            resol("Funcionó");
        }
        else{
            reject("No funcionó");
        }
    })
}

funcionJeje().then(Response=>console.log(Response)).catch(err=>console.log(err));