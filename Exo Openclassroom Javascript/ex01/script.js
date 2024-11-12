//Le lien d'exercices : https://openclassrooms.com/fr/courses/7696886-apprenez-a-programmer-avec-javascript/8205369-controlez-du-code-grace-aux-conditions
const listeMots = ["Cachalot","Pétunia","Serviette"]

let score=0 

let motUtilisateur_1 = prompt("taper le mot suivant :"+listeMots[0])

if (motUtilisateur_1 === listeMots[0]) {
    score+=1
    console.log(score)
} else {
    console.log("vous avez fait une erreur de frappe.")
    console.log(score)
}

let motUtilisateur_2 =prompt("taper le mot suivant:"+listeMots[1])
    
if (motUtilisateur_2 === listeMots[1]) {
    score=score+1
    console.log(score)
} else {
    console.log("vous avez fait une erreur de frappe.")
    console.log(score)
}

let motUtilisateur_3 =prompt("taper le mot suivant:"+listeMots[2])

if (motUtilisateur_3 === listeMots[2]) {
    score=score+1
    console.log(score)
} else {
    console.log("vous avez fait une erreur de frappe.")
    console.log(score)
}



