let monNombre =1

function afficheUnNombre () {
    let monNombreLocal= 2
    console.log ("Intérieur de la fonction: ")
    console.log(monNombre)
    console.log(monNombreLocal)
}

afficheUnNombre ()




console.log("Extérieur de la fonction: ")
console.log(monNombre)
console.log(monNombreLocal)