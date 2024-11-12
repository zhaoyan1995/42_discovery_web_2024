//https://openclassrooms.com/fr/courses/7696886-apprenez-a-programmer-avec-javascript/8205519-repetez-du-code-grace-aux-boucles

const listeMots = ["Cachalot","Pétunia","Serviette"]
let score=0
for (let i= 0; i <= (listeMots.length -1); i++) {
    let motUtilisateur= prompt ("taper le mot suivant: " +listeMots[i])
    if  (motUtilisateur === listeMots[i]) {
        score++
    }
}

console.log(score)







