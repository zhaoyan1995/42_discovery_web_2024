//ATTENTION: Vérifier bien que "defer" est bien indiqué dans la balise script, sinon on ne peut pas afficher le resultat/NbElement dans la page web!
// lien exo https://openclassrooms.com/fr/courses/7696886-apprenez-a-programmer-avec-javascript/8206599-soumettez-votre-formulaire

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
const rafraichir=document.getElementById("rafraichir")   //récupérer un élément button avec id="rafraichir" dans le fichier html
let motUtilisateur=document.getElementById("motUtilisateur")  //récupéer l'objet balise inputEcriture
const ENVOYER=document.getElementById("Envoyer")                 //récupérer l'objet balise bouton id="Envoyer"
let SCORE=0
let i=0 //on crée un compteur i=0 = Nombre d'argument proposé par le système à l'instantané
const radioButtons=document.querySelectorAll('input[name="element"]')   //récupérer l'ensenbme des éléments bouton radio qui portent le name="element" via html
const motButton=document.getElementById("mot") //récupérer le bouton radjio id="mot" pour le désactiver lorsque le jeu est terminé
const phraseButton=document.getElementById("phrase") //récupérer le bouton radio id="phrase" pour le désactiver lorsque le jeu est terminé
const FORM=document.querySelector("#send")  //récupérer l'objet form id="send"
let Nom=document.getElementById("name")  //récupérer l'objet input id="name"
let Email=document.getElementById("email") //récupérer l'objet input id="email"
const PARTAGE=document.getElementById("partager") //récupérer le bouton id="partager"
const blocgris=document.getElementById("blocgris") //récupérer le bloc div id="blocgris"



function lancerJeu () {                              //creation de la fonction lancerJeu pour lier la fonction afficherResultat, choisirPhraseOuMots,lancerBoucledeJeu
    console.log(FORM)
    //afficher la listeProposition à taper listeMots ou listePhrase inscrits dans le fichier config.js  
    let choix="mot" //par défaut, on écrit le choix initial est "mot" dont listeMots
    let ListeProposition=listeMots  //on va mettre ListeProposition=listeMots pour la première fois avant que l'utilisateur fait son choix
    afficherProposition(ListeProposition[i]) //on affiche le premier mot dans la listeMots. Toutefois si l'utilisateur a choisi l'option phrase, l'affichage de text à taper sera basculé en listePhrase par la suite
    afficherResultat(SCORE,i) //on affiche le score et le nombre d'argument proposé dès le début de jeu
    radioButtons.forEach(radio =>{    //pour chaque bouton radio, on ajoute un addeventListener 
        radio.addEventListener('change',CHANGE)   //ici event s'appelle 'change", lorsque le choix de bouton radio est changé, on exécutera la function CHANGE ci-dessous
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
        afficherResultat(SCORE,i)  //afficher le résultat et le nombre d'argument proposé dès le début avant de cliquer sur le bouton envoyer
    }   
   
    ENVOYER.addEventListener("click",envoyer)  
        function envoyer(){          //créaction d'une deuxième event, lorsque l'on clique sur le bouton, on exécutera la fonction suivante:      
        //comparaison du motUtilisateur avec le mot proposé pour la gestion de score
        if (motUtilisateur.value===ListeProposition[i]){  //attention: ne pas mettre cette partie au sein de la fonction affichage du mot proposé dans la zone proposée, tu risques de décaler le mot proposé et le mot saisi à comparer!! puis le score restera toujours à 0 à la fin
            SCORE++
        }
        i++
        //affichage du mot suivant inscrit dans le tableau listeMots dans la zone proposée
        if (i<ListeProposition.length) {                   //si le compteur i < listeMots.length -1 (le nombre d'élément dans le tableau listeMots.length -1)
            afficherProposition(ListeProposition[i])        //alors on appelle la foncton afficherProposition() avec le paramètre listeMot[i]                 
        }else{                   //Si i>=Nombre d'argument proposé par la listeMots, le jeu sera terminé
            afficherProposition("Le jeu est terminé.")
            ENVOYER.disabled =true;               //Désactiver le bouton de validation "ENVOYER"
            motUtilisateur.disabled = true;      //Desactiver l'input motUtilisateur. Lorsque le jeu est terminé, on ajoute un attribut "disabled" pour la fenetre de input MotUtilisateur pour empêcher la saisie via cet input.
            motButton.disabled= true;            //Désactiver le bouton radio "mot" lorsque le jeu est terminé
            phraseButton.disabled= true;         //Désactiver le bouton radio "phrase" lorsque le jeu est terminé
        }
        afficherResultat(SCORE,i)

        //A chaque fois on clique sur envoyer, la balise input MotUtilisateur sera effacé
        CleanContent()//On appelle la fonction CleanContent() à chaque fois on clique sur le bouton Envoyer    
        } //fin de la function envoyer()
    
              
       
        //Création d'un évènement, quand on clique le bouton "Rafraichir", la page sera rafraichit puis le contenu dans l'input de fênetre à saisir est effacé, la page web va cocher systématiquement le bouton radio "Mot" pour chaque rafraichissement de la page web:
        rafraichir.addEventListener("click",function(){   
        location.reload()  //on va rafraichir la page quand on clique sur le bouton "Rafraichir"
        CleanContent()      //on appelle la fonction CleanContent() pour effacer le contenu dans la balise input MotUtilisateur
        motButton.checked=true //quand on appuye sur le bouton rafraichir, le bouton radio "mot" sera coché systématiquement
    })
    
    //appeler la fonction pour rafraichir la page web sans utiliser le bouton "Rafraichir" à l'intérieur de la page web   
    RAFRACHIR() 
        
    //création d'un évènement suivant pour faire appraître la div id=blocgris et la form id="send": lorsque l'on clique sur le bouton "partager", il exécutera la fonction suivante: 
    PARTAGE.addEventListener("click",function(){        
        FORM.setAttribute("class","")         //on va ajouter un class="" pour la form, avant de cliquer class="off"  => off.{display:none}, après avoir cliqué, la class="off" a été remplacée par la class="", display:none a été enlevé, donc on peut réapparaitre la form id="send"
        blocgris.setAttribute("class","gris") //on va ajouter également un class="gris" pour le div id=blocgris, cette section div prendra toute la place de la page web avec une couleur transparente, par contre il sera en dessous de la form id="send", car on a ajouté une mise en forme particulière via fichier css, voir le fichier css
    })
    
    //création d'un évènement suivant: lorsque l'on clique sur le bouton envoyer (on soumis le form),il va transférer les infos saisie par l'utilisateur vers le console:
    FORM.addEventListener("submit",(event) =>{  
        event.preventDefault();    //pour éviter que l'on ne peut pas exécuter le code ci-dessous, sinon quand on clique sur le bouton envoyer, la page sera rafraichie automatiquement, il va pas envoyer le text saisi dans la form id="send" vers console
        console.log(Nom.value);         //imprimer la valeur de l'élément Nom qui représente l'input id="name"
        console.log(Email.value);         //imprimer la vlaeur de l'élément Email qui représente l'input id="email"
        let scoreEmail=`${SCORE}/${i}`    //créer un variable local et lui attribuer la valeur de SCORE et la valeur de i à jour, si on l'a mis en dehors de la fonction lancerJeu, on risque de ne pas prendre en compte la mise à jour du score et de la valeur de i        
        afficherEmail(Nom.value, Email.value,scoreEmail) ; //ouvrir l'application OUTLOOK et ouvrir la page pour éditer un mail, le contenu de ce mail contient Nom, email, score dans la fênetre de message
        
    })  
 
    //création d'un évènement suivant: lorsque l'on clique sur le div id=blocgris, la div id="blocgris" et la form id="send" sera disparu
    blocgris.addEventListener("click",function(){    
        blocgris.setAttribute("class","off")  //on va mettre une class="off", l'idée consiste à faire disparaitre le div id=blocgris
        FORM.classList.add("off")  //idem que la blocgris, par contre on veut plutôt utiliser classList.add, sinon ça va enlever la class="blocDePartage"
    })

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
        motButton.checked=true   //lorsque l'on met à jour la page web, le bouton radio sera coché sur le "mot" systématiquement
}

let MOTPROPOSE=document.getElementById("motPropose")  //on récupère l'élément DOM <div> avec id="motPropose" via HTML
function afficherProposition(MotPropose){             //on crée une fonction pour afficher le motPropose avec le paramètre motPropose
    //console.log(motPropose)                         //pour tester si le paramètre sera affiché correctement via console 
    MOTPROPOSE.innerText=MotPropose                   //dans le <div> avec id="motPropose", on introduit le text de paramètre MotPropose dedans pour afficher le motPropose dans la page web
}

//création de la fonction pour ouvrir l'application outlook et rentrer le message ci-dessous, mail=addresse mail de destinataire
function afficherEmail(nom, email, score) {
    let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`
    location.href = mailto
}

