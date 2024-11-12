//ATTENTION: Vérifier bien que "defer" est bien indiqué dans la balise script, sinon on ne peut pas afficher le resultat/NbElement dans la page web!
// lien exo https://openclassrooms.com/fr/courses/7696886-apprenez-a-programmer-avec-javascript/8206599-soumettez-votre-formulaire

function afficherResultat(resultat,NbElement) {//creation de la fonction pour afficher le resultat final et le nombre d'élément propose par le systeme
    //console.log("votre resultat est " + resultat + " sur " + NbElement)  
    let Message=`${resultat}/${NbElement}`   //on crée un nouveau varaible Message pour afficher le resultat et le nombre de mot proposé par le program
    let DIV=document.getElementById("RESULTAT")  //on récupère un élément DOM avec Id="RESULTAT" dans html
    DIV.innerText=Message   //on va introduire le contenu du variable Message dans la section DIV id="RESULTAT"
                            //ceci permet d'introduire le resultat dans une section qui est déjà créee par HTML à la base!
}
//A chaque fois on clique sur le bouton "Envoyer" ou sur le bouton "Rafraichir" ou cliquer l'onglet pour rafraichir la page web, le mot saisi par l'utilisateur dans la balise <input id=motUtilisateur> sera remplacé par "", ce qui permet à l'utilisateur de taper le 2ème ou 3ème mots sans enlever le mot précédent manuellement
function CleanContent(){                
    motUtilisateur.value=""
}  
//Création d'une fonction, on crée un event dedans, quand on clique sur le bouton "Rafraichir", la page sera rafraichit puis le contenu dans l'input de fênetre à saisir est effacé, la page web va cocher systématiquement le bouton radio "Mot" pour chaque rafraichissement de la page web:
function RafrachirParBouton(){
    const rafraichir=document.getElementById("rafraichir")   //récupérer un élément button avec id="rafraichir" dans le fichier html
    rafraichir.addEventListener("click",function(){   
            location.reload()  //on va rafraichir la page quand on clique sur le bouton "Rafraichir"
            CleanContent()      //on appelle la fonction CleanContent() pour effacer le contenu dans la balise input MotUtilisateur
            motButton.checked=true //quand on appuye sur le bouton rafraichir, le bouton radio "mot" sera coché systématiquement
    })
}
//Création d'une fonction, en cliquant sur le onglet rafraichir on efface le contenu dans la balise input id=motUtilisateur
function RafraichirParOnglet(){
        // être sur que lorsque l'on rafraichir la page, le contenu dans la balise input MotUtilisateur est effacé. 
        window.onload = function() {     //rafraichir la page web et exécuter la tâche suivante:
            CleanContent();
        };
        motButton.checked=true   //lorsque l'on met à jour la page web, le bouton radio sera coché sur le "mot" systématiquement
}

//on crée une fonction pour afficher le motPropose avec le paramètre motPropose
function afficherProposition(MotPropose){            
    let MOTPROPOSE=document.getElementById("motPropose")  //on récupère l'élément DOM <div> avec id="motPropose" via HTML
    MOTPROPOSE.innerText=MotPropose                   //dans le <div> avec id="motPropose", on introduit le text de paramètre MotPropose dedans pour afficher le motPropose dans la page web
}

//L'ensemble de variables globaux à utiliser pour la function lancerJeu()
let SCORE=0
let i=0 //on crée un compteur i=0 = Nombre d'argument proposé par le système à l'instantané
let motUtilisateur=document.getElementById("motUtilisateur")  //récupérer l'objet balise inputEcriture
const motButton=document.getElementById("mot") //récupérer le bouton radio id="mot" pour le désactiver lorsque le jeu est terminé
const phraseButton=document.getElementById("phrase") //récupérer le bouton radio id="phrase" pour le désactiver lorsque le jeu est terminé

function lancerJeu () { //création de la fonction lancerJeu   
    //On affiche l'état initaile de SCORE et le nombre d'argument dès le début de jeu
    afficherResultat(SCORE,i) 

    //Etat inital de l'affichage Proposition pour le premier élément à taper, ici on a choisi ListeMots par défaut avant que l'utilisateur intervient dessus
    let choix="mot" //par défaut, on écrit le choix initial est "mot" dont listeMots
    let ListeProposition=listeMots  //on va mettre ListeProposition=listeMots pour la première fois avant que l'utilisateur fait son choix
    afficherProposition(ListeProposition[i]) //on affiche le premier mot dans la listeMots. Toutefois si l'utilisateur a choisi l'option phrase, l'affichage de text à taper sera basculé en listePhrase par la suite
    
    //L'utilisateur doit choisir un radio bouton parmi "mot" et "phrase", Event pour chaque bouton radio "mot" ou "phrase", si bouton radio "mot" checked, affichageProposition 1er élément ListeMots sinon la même chose pour le bouton "phrase"
    const radioButtons=document.querySelectorAll('input[name="element"]')   //récupérer l'ensenbme des éléments bouton radio qui portent le name="element" via html
    radioButtons.forEach(radio =>{    //pour chaque bouton radio, on ajoute un addeventListener 
        radio.addEventListener('change',CHANGE)   //ici event s'appelle 'change', lorsque le choix de bouton radio est changé, on exécutera la function CHANGE ci-dessous
    })
    function CHANGE (){                            //on a construit la function CHANGE suivant
        for (let i=0;i<radioButtons.length;i++){   //pour chaque bouton radio, on vérifie sa valeur, si elle porte bien l'attribut "checked"
        if (radioButtons[i].checked){              //si le bouton radio porte bien l'attribut "checked"
            choix=radioButtons[i].value            //on donnera sa valeur au variable "choix"
            break                                  //on s'arrête la boucle for, car on peut seulement avoir un seul checked parmis tous les boutons radio
        }    //fin de logique if 
    } //fin de boucle for
        console.log(choix)                         //imprimer la valeur de choix pour être sûr que le programme fonctionne
        if (choix === "mot") {                     //si le choix est égale à "mot"
            ListeProposition=listeMots             //on attribut la listeMots à la ListeProposition
            console.log(ListeProposition)          //pour vérifier si la ListeProposition a bien pris en compte les contenus inscrits dans la listeMots
            
        } else{
            ListeProposition=listePhrase           //sinon on attribut la listePhrase à la ListeProposition
            console.log(ListeProposition)          //pour vérifier si la ListeProposition a bien pris en compte les contenus inscrits dans la listePhrase
            
        }
        afficherProposition(ListeProposition[i]) //appeler la fonction afficherProposition() pour afficher le premier mot que l'on veut proposer avant de cliquer sur envoyer la première fois
    }   
    
    //L'utilissateur commence à remplir le contenu dans le champ (input id="motPropose", une fois il clique sur "Envoyer", on compare le contenu saisi par l'utilisateur dans le champ (input id=motUtilisateur) et le mot/phrase proposé dans la div id="motPropose" )
    
    const ENVOYER=document.getElementById("Envoyer")   //récupérer l'objet balise bouton id="Envoyer"
    ENVOYER.addEventListener("click",envoyer)  //créaction d'un event, lorsque l'on clique sur le bouton "Envoyer", on exécutera la fonction suivante:
        function envoyer(){       //function envoyer() => si le motUtilisateur === ListeProposition[i], on ajoute 1 pour le variable SCORE
        if (motUtilisateur.value===ListeProposition[i]){  
            SCORE++
        }

        i++  //on passera à l'argument dans la listeProposition suivant

        //affichage du mot suivant inscrit dans le tableau listeProposition dans la div id="motPropose"
        if (i<ListeProposition.length) {                   //si le compteur i < listeMots.length
            afficherProposition(ListeProposition[i])        //alors on appelle la foncton afficherProposition() avec le paramètre listeMot[i]                 
        }else{                   //Si i>=Nombre d'argument proposé par la listeMots, le jeu sera terminé, on désactive tous les inputs suivants
            afficherProposition("Le jeu est terminé.")
            ENVOYER.disabled =true;               //Désactiver le bouton de validation "ENVOYER"
            motButton.disabled= true;            //Désactiver le bouton radio "mot" lorsque le jeu est terminé
            phraseButton.disabled= true;         //Désactiver le bouton radio "phrase" lorsque le jeu est terminé
            motUtilisateur.disabled=true;        //Désactiver le champ de saisi input id="motUtilisateur" lorsque le jeu est terminé
        }
        afficherResultat(SCORE,i) //mise à jour de l'affichageResultat à chaque fois on clique sur le bouton "Envoyer"

        //A chaque fois on clique sur envoyer, la balise input MotUtilisateur sera effacé
        CleanContent()//On appelle la fonction CleanContent() à chaque fois on clique sur le bouton Envoyer    
        } //fin de la function envoyer()
                 
    //Méthode I pour rafraichir la page et vider le champ par un bouton "Rafraichir"
    RafrachirParBouton()
    //Méthode II pour rafraichir la page et vider le champ: appeler la fonction pour rafraichir la page web sans utiliser le bouton "Rafraichir" à l'intérieur de la page web   
    RafraichirParOnglet() 

    SHARE()
  
} //fin de lancerjeu()

