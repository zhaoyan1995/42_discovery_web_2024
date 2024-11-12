function retournerMessageScore (score, nombreQuestions) {
    let message= 'Votre score est de ' + score + " sur " + nombreQuestions
    return message
}


let newmessage=retournerMessageScore(4,5)

console.log(newmessage)