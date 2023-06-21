// Enhanced Objet literal

function newUser(userName,age,country,uId){
    return {
        userName,
        age,
        country,
        id:uId
    }
}

console.log(newUser('Javpor',23,'Colombia',2170657))