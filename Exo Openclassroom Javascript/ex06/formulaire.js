//Récupéer une valeur issue de la balise input classique  xxxx.value, cela marche pour le plupart de type de input "text" "email" "password" "select" "textarea"
let NAME=document.getElementById("name")
let nom=NAME.value    //récupérer la valeur de contenu saisi dans la balise input id="name"
console.log(nom)    //afficher le contenu tapé dans l'input name seulement si on rafraîchit la page web! 

//Récupérer une valeur issue de la balise input type="checkbox"
let baliseAccepter=document.getElementById("accepter")
let contenuBaliseAccepte=baliseAccepter.checked //récupérer la valeur de contenu sasi dans la balise input id="accepter" ATTENTION on utilise "checked" au lieu de "value"
console.log(contenuBaliseAccepte)   // quand on coche la case, le résultat affiché est "true" sinon c'est "false"

//Récupérer une valeur issue de la balise input type="radio"
let baliseRadioCouleur=document.querySelectorAll('input[name="color"]') //On cherche tous les input radio qui porte le name="color", ici on ne peut pas utiliser getElementById car on veut d'abord récupérer l'élément de tous les radio red blue blanc donc c'est un tableau que l'on veut récupérer
console.log(baliseRadioCouleur)
let color="" //on initialise la variable qui vient d'être crée comme ""
for (let i=0;i<baliseRadioCouleur.length;i++) {         // on crée un boucle pour vérifier lequel bouton radio porte la valeur "checked"
    if (baliseRadioCouleur[i].checked){                 //si l'input radio porte l'attribut "cheched"
        color=baliseRadioCouleur[i].value               //on mettra à jour la valeur de color dont la case a été cochée
        break                                           //on arrête la boucle car c'est pas la peine de vérifer le prochain bouton radio
    }
}

console.log(color)                         //on imprime la valeur de variable "color"

let FORM=document.querySelector("form")                     //imprimer les contenus saisis par l'utilisateur quand on a cliqué sur le bouton "Envoyer"

FORM.addEventListener("submit",(event) =>{
    event.preventDefault();
    const Nom=document.getElementById("name").value
    const EMAIL=document.getElementById("email").value
    console.log(Nom)
    console.log(EMAIL)
})