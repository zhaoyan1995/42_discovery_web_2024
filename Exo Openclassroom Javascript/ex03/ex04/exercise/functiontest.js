function afficherResultat(resultat,NbElement) {//creation de la fonction pour afficher le resultat final et le nombre d'élément propose par le systeme
    console.log("votre resultat est " + resultat + " sur " + NbElement)                 
}

function choisirPhraseOuMots () {  //creation de la fonction pour choisir le type de contenu a taper
    choix=prompt("veuillez choisir le type de contenu à taper: mot ou phrase")    //prompt permet d'afficher une fenetre pour que l'utilisateur puisse taper un élément via cette fenetre.
    while (choix !== "mot" && choix !== "phrase"){                 //si le choix n'est pas le "mot" ou la "phrase", la boucle s'arrete pas
        choix=prompt("veuillez choisir le type de contenu à taper: mot ou phrase")   
    }
    return choix             //retourner le resultat de cette fonction
}

function lancerBoucleDeJeu (listeproposition) {       //creation la fonction pour lancer la boucle de jeu
    let score=0                                       //déclarer le score inital, important, sinon le programme va afficher une erreur dans la console.
    for (i=0;i<listeproposition.length;i++){          //i signifie le i ème élément dans le tableau listeMot ou listePhrase, la boucle for permet de faire passer tous les éléments du tableau dans le test,du premier jusqu'au dernier.
       let motUtilisateur=prompt(listeproposition[i]) //demander à l'utilisateur de saisir le mot proposé par le système dont "listeproposition[i], le contenu saisi par l'utilisateur sera la valeur de variable motUtilisateur"
       if (motUtilisateur === listeproposition[i]){   //si le contenu saisi par l'utilisateur (motUtilisateur) = l'élément proposé par le system, on ajoute 1 sur le score
        score++
       }
    }
    return score                                      //retourner le resultat de cette fonction
}

function lancerJeu () {                              //creation de la fonction lancerJeu pour lier la fonction afficherResultat, choisirPhraseOuMots,lancerBoucledeJeu
    let CHOIX=choisirPhraseOuMots()                   //on a crée un nouveau variable "CHOIX", on veut que le resultat retourné par la fonction choisirPhraseOuMot = CHOIX (on peut nommer ce variable comme "choix" comme dans la fonction choisirPhraseOuMot)
    let SCORE=0                                      //on a crée un nouveau variable "SCORE", on peut également le nommer "score" comme dans la fonction lancerBoucledeJeu
    let NbArgument=0                                  //on a crée un nouveau variable "NbArgument", on peut également le nommer "NbElement" comme dans la fonction afficherResultat
    if (CHOIX === "mot") {                            //si CHOIX ="mot"
        SCORE = lancerBoucleDeJeu(listeMots)          //on fait appeler la fonction lancerBoucleDeJeu avec le parametre listeproposition, la listeproposition = listeMots, on met à jour la valeur de variable SCORE, sinon SCORE reste toujours à O à la sortie du programme, le variable SCORE peut également etre nommé comme "score", comme dans la fonction afficherResultat
        NbArgument=listeMots.length                   //on met à jour la valeur de variable NbArgument comme listeMots.length
     }else{ 
        SCORE = lancerBoucleDeJeu(listePhrase)        //idem que la ligne 29
        NbArgument=listePhrase.length                 //idem que la ligne 30
    }
    afficherResultat(SCORE,NbArgument)                //appeler la fonction afficherResultat avec le paramètre score et Nbelement, score=SCORE, NbArgument=NbElement
}

