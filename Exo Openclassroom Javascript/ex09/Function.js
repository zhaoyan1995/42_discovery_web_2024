// ci-dessous le code correct
//let maVariable=document.getElementById("idInexistant")
//if (maVariable === null) {
//    console.log("L'élément n'existe pas")
//} else {
//    let nouvelElement= document.createElement("div")
//    maVariable.appendChild(nouvelElement)
//}

//on fait exprès d'écrire maVariable.createElement("div") pour tester si il y a une erreur dans le code inscrit dans try {}
try {
   if (maVariable === null) {
        console.log("L'élément n'existe pas")
    } else {
        maVariable.createElement("div")
    }
} catch {
    console.log("Il y a eu une erreur dans le bloc try");
}


function Verification(champ){
    if (champ.value === "") {
        throw new Error(`le champ "${champ.id}" est vide.`)
    }

}

let FORM=document.getElementById("idInexistant")

FORM.addEventListener("submit",(event)=>{
    event.preventDefault();
    try{
    let NOM=document.getElementById("nom")
    Verification(NOM)
    let PRENOM=document.getElementById("prenom")
    Verification(PRENOM)
    let SURNOM=document.getElementById("surnom")
    Verification(SURNOM)
    }catch(error){
    console.log("Une erreur est survenue: "+ error.message)
    }
})