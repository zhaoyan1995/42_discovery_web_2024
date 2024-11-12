//ATTENTION: Vérifier bien que "defer" est bien indiqué dans la balise script, sinon on ne peut pas afficher le resultat/NbElement dans la page web!
// lien exo https://openclassrooms.com/fr/courses/7696886-apprenez-a-programmer-avec-javascript/8206130-creez-un-nouvel-element-dans-une-page-web

function afficherResultat(resultat,NbElement) {//creation de la fonction pour afficher le resultat final et le nombre d'élément propose par le systeme
    //console.log("votre resultat est " + resultat + " sur " + NbElement)  
    let Message=`${resultat}/${NbElement}`   //on crée un nouveau varaible Message pour afficher le resultat et le nombre de mot proposé par le program
    let DIV=document.getElementById("RESULTAT")  //on récupère un élément DOM avec Id="RESULTAT" dans html
    DIV.innerText=Message   //on va introduire le contenu du variable Message dans la section DIV id="RESULTAT"
                            //ceci permet d'introduire le resultat dans une section qui est déjà créee par HTML à la base!
}

//function choisirPhraseOuMots () {  //creation de la fonction pour choisir le type de contenu a taper
//    choix=prompt("veuillez choisir le type de contenu à taper: mot ou phrase")    //prompt permet d'afficher une fenetre pour que l'utilisateur puisse taper un élément via cette fenetre.
//    while (choix !== "mot" && choix !== "phrase"){                 //si le choix n'est pas le "mot" ou la "phrase", la boucle s'arrete pas
//        choix=prompt("veuillez choisir le type de contenu à taper: mot ou phrase")   
//    }
//    return choix             //retourner le resultat de cette fonction
//}
let rafraichir=document.getElementById("rafraichir")   //récupérer un élément button avec id="rafraichir" dans le fichier html
let motUtilisateur=document.getElementById("motUtilisateur")  //récupéer l'objet balise inputEcriture
let ENVOYER=document.getElementById("Envoyer")                 //récupérer l'objet balise bouton id="Envoyer"
let SCORE=0
let i=0 //on crée un compteur i=0 = Nombre d'argument proposé par le système à l'instantané
function lancerJeu () {                              //creation de la fonction lancerJeu pour lier la fonction afficherResultat, choisirPhraseOuMots,lancerBoucledeJeu
   afficherProposition(listeMots[i]) //appeler la fonction afficherProposition() pour afficher le premier mot que l'on veut proposer avant de cliquer sur envoyer la première fois
   afficherResultat(SCORE,i)  //afficher le résultat et le nombre d'argument proposé dès le début avant de cliquer sur le bouton envoyer
    ENVOYER.addEventListener("click",envoyer)  
        function envoyer(){          //créaction d'une deuxième event, lorsque l'on clique sur le bouton, on exécutera la fonction suivante:
        console.log(motUtilisateur.value)         //envoyer le mot saisi dans la balise <input> vers le console, quand on clique le bouton id="Envoyer"
        
        //comparaison du motUtilisateur avec le mot proposé pour la gestion de score
        if (motUtilisateur.value===listeMots[i]){  //attention: ne pas mettre cette partie au sein de la fonction affichage du mot proposé dans la zone proposée, tu risques de décaler le mot proposé et le mot saisi à comparer!! puis le score restera toujours à 0 à la fin
            SCORE++
        }
        i++
        //affichage du mot suivant inscrit dans le tableau listeMots dans la zone proposée
        if (i<listeMots.length) {                   //si le compteur i < listeMots.length -1 (le nombre d'élément dans le tableau listeMots.length -1)
            afficherProposition(listeMots[i])        //alors on appelle la foncton afficherProposition() avec le paramètre listeMot[i]                 
            //afficherResultat(SCORE,i)                   //afficher le score et le nombre d'argument proposé à l'instantané
            }else{                   //Si i>=Nombre d'argument proposé par la listeMots, le jeu sera terminé
            afficherProposition("Le jeu est terminé.")
            ENVOYER.disabled =true;               //Désactiver le bouton de validation "ENVOYER"
            motUtilisateur.disabled = true;      //Desactiver l'input motUtilisateur. Lorsque le jeu est terminé, on ajoute un attribut "disabled" pour la fenetre de input MotUtilisateur pour empêcher la saisie via cet input.
        }
        
        afficherResultat(SCORE,i)
        
        //A chaque fois on clique sur envoyer, la balise input MotUtilisateur sera effacé
        CleanContent()                           //On appelle la fonction CleanContent() à chaque fois on clique sur le bouton Envoyer    
        }
        rafraichir.addEventListener("click",function(){   //ajouter un évènement, quand on clique le bouton "Rafraichir", on exécutera la fonction suivante:
        location.reload()  //on va rafraichir la page quand on clique sur le bouton "Rafraichir"
        CleanContent()      //on appelle la fonction CleanContent() pour effacer le contenu dans la balise input MotUtilisateur
    })
    RAFRACHIR() //appeler la fonction pour rafraichir la page web sans utiliser le bouton "Rafraichir" à l'intérieur de la page web   
} //fin de lancerjeu()

//A chaque fois on clique sur le bouton "Envoyer" ou sur le bouton "Rafraichir" ou cliquer l'onglet pour rafraichir la page web, le mot saisi par l'utilisateur dans la balise <input id=motUtilisateur> sera remplacé par "", ce qui permet à l'utilisateur de taper le 2ème ou 3ème mots sans enlever le mot précédent manuellement
function CleanContent(){                
    motUtilisateur.value=""
}  

//sans utiliser le bouton rafraichir dans la page web, créaton d'une fonction qui permet de rafraichir la page web tout en effaçant le contenu dans la balise input id=motUtilisateur
function RAFRACHIR(){
        // être sur que lorsque l'on rafraichir la page, le contenu dans la balise input MotUtilisateur est effacé. 
        window.onload = function() {     //rafraichir la page web et exécuter la tâche suivante:
            CleanContent();
        };
}

let MOTPROPOSE=document.getElementById("motPropose")  //on récupère l'élément DOM <div> avec id="motPropose" via HTML
function afficherProposition(MotPropose){             //on crée une fonction pour afficher le motPropose avec le paramètre motPropose
    //console.log(motPropose)                         //pour tester si le paramètre sera affiché correctement via console 
    MOTPROPOSE.innerText=MotPropose                   //dans le <div> avec id="motPropose", on introduit le text de paramètre MotPropose dedans pour afficher le motPropose dans la page web
}

