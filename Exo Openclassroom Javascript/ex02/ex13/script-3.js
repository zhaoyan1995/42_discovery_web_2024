//https://openclassrooms.com/fr/courses/7696886-apprenez-a-programmer-avec-javascript/8205519-repetez-du-code-grace-aux-boucles

const listeMots = ["Cachalot","Pétunia","Serviette"]
const listePhrase = ["Pas de panique !","La vie","Merci pour le poisson"]
let score=0

let choixUtilisateur= prompt ("choisir le type de contenu a taper : mot ou phrase")
while (choixUtilisateur !== "mot" && choixUtilisateur !== "phrase") {                          //la boucle pour nofitier à l'utilisateur de taper le bon choix! sinon  on peut pas avancer à l'étape suivante!
    choixUtilisateur= prompt ("choisir le type de contenu a tapers : mot ou phrase")
}

switch (choixUtilisateur) {
    case "mot":                //c'est comme "if choixUtilisateur === "mot". "
        for (let i= 0; i <= (listeMots.length -1); i++) {
            let motUtilisateur= prompt ("taper le mot suivant: " +listeMots[i])
            if  (motUtilisateur === listeMots[i]) {
                score++
            }
        }
        break               //break est accompagner avec case "mot".
    case "phrase":          //c'est comme "if choixUtilisateur === "phrase". "
        for (let i= 0; i <= (listePhrase.length -1); i++) {
            let motUtilisateur= prompt ("taper le mot suivant: " +listePhrase[i])   
            if  (motUtilisateur === listePhrase[i]) {
                score++
            }    
        }  
        break             //break est accompagner avec case "phrase".
}

console.log(score)







