//Pour faire appraitre la fenêtre rose une fois on clique sur le bouton "Partager"

//création de la fonction pour ouvrir l'application outlook et rentrer le message ci-dessous, mail=addresse mail de destinataire
function afficherEmail(nom, email, score) {
    let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`
    location.href = mailto
}
//création de la fonction pour valider le format de nom
function validerNom(ContenuDeName) {
    let regex=new RegExp("^[A-Za-z]+[A-Za-z]$")    // ^ = le début de l'expression normale, [] =un groupe du type de l'élément, A-Z=lettre majuscule, a-z^=Lettre minuscule , + = pour [xxxxx] qui le précède, cela signifie qu'il est possible d'avoir un ou plusieurs caractères qui correspondent à cett critère, $ =la fin de l'expression, on veut avoir au moins deux lettres minuscules ou majuscule ici, donc on a deux fois la même []
    if (regex.test(ContenuDeName)===false){ //Si le résultat de regex.text(ContenuDeName) est false, on exécutera la fonction ci-desous, attention pas de "" entre false
        console.log("Le nom est trop court.")
    }
}
//création de la fonction pour valider le format de email
function validerEmail(ContenuDeEmail) {
    let regex=new RegExp("^[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+$")  //idem que RegExp pour valider le format de nom, 0-9 = le chiffre entre O et 9, [ xx_xx] = on accepte le caractère"_", idem pour [.] et [-], \\. = on doit avoir un seul "." ici
    //Échappement de caractères spéciaux dans une chaîne : En JavaScript, une barre oblique inverse (\) est un caractère d'échappement utilisé pour indiquer des caractères spéciaux dans une chaîne de caractères, comme \n pour une nouvelle ligne ou \\ pour représenter une barre oblique inverse elle-même. Donc, pour inclure une barre oblique inverse dans une chaîne de caractères, vous devez la doubler en écrivant \\.
    //Dans le cas d'un RegExp : Lorsque vous créez une expression régulière avec new RegExp(), si vous utilisez une barre oblique inverse dans la chaîne de caractères (par exemple pour échapper un caractère comme \d pour un chiffre), vous devez également doubler la barre oblique inverse pour qu'elle soit correctement interprétée par le moteur JavaScript.
    if (regex.test(ContenuDeEmail)===false){ //idem que la function ValiderNom
        console.log("L'email n'est pas valide.")
    }
}

//Variables globaux pour lancer la function SHARE()
const PARTAGE=document.getElementById("partager") //récupérer le bouton id="partager"
let Nom=document.getElementById("name")  //récupérer l'objet input id="name"
let Email=document.getElementById("email") //récupérer l'objet input id="email"
const blocgris=document.getElementById("blocgris") //récupérer le bloc div id="blocgris"

function SHARE(){
    //création d'un évènement suivant pour faire appraître la div id=blocgris et la form id="send": lorsque l'on clique sur le bouton "partager", il exécutera la fonction suivante: 
    PARTAGE.addEventListener("click",function(){        
        FORM.setAttribute("class","")         //on va ajouter un class="" pour la form, avant de cliquer class="off"  => off.{display:none}, après avoir cliqué, la class="off" a été remplacée par la class="", display:none a été enlevé, donc on peut réapparaitre la form id="send"
        blocgris.setAttribute("class","gris") //on va ajouter également un class="gris" pour le div id=blocgris, cette section div prendra toute la place de la page web avec une couleur transparente, par contre il sera en dessous de la form id="send", car on a ajouté une mise en forme particulière via fichier css, voir le fichier css
    })
    
    //création d'un évènement suivant: lorsque l'on clique sur le bouton envoyer (on soumis le form),il va transférer les infos saisies par l'utilisateur vers le console:
    const FORM=document.querySelector("#send")  //récupérer l'objet form id="send"
    FORM.addEventListener("submit",(event) =>{  
        event.preventDefault();    //pour éviter que l'on ne peut pas exécuter le code ci-dessous, sinon quand on clique sur le bouton envoyer, la page sera rafraichie automatiquement, il va pas envoyer le text saisi dans la form id="send" vers console
        //Création du format de message à partager
        let scoreEmail=`${SCORE}/${i}`    //créer un variable local et lui attribuer la valeur de SCORE et la valeur de i à jour, si on l'a mis en dehors de la fonction lancerJeu, on risque de ne pas prendre en compte la mise à jour du score et de la valeur de i        
        afficherEmail(Nom.value, Email.value,scoreEmail) ; //ouvrir l'application OUTLOOK et ouvrir la page pour éditer un mail, le contenu de ce mail contient Nom, email, score dans la fênetre de message      
        //Validation de contenu saisi dans le champ Nom et Email
        validerNom(Nom.value)
        validerEmail(Email.value)
    })

    //création d'un évènement suivant: lorsque l'on a laissé la case Nom vide dans la form id="send", quand on clique en dehors de cette case, on imprimera le message "le champs est vide" via console, sinon le champ sera rempli
    Nom.addEventListener('change',()=>{
        let ValeurDeNom=Nom.value
        if (ValeurDeNom.trim() ===""){        //trim() consiste à enlever la tabulation et les espaces saisies dans le champ, celui-ci permet de nettoyer le champ avant de vérifier si vraiment la valeur de champ est vide ""
            console.log("le champ est vide.")
        }else {
            console.log("le champ a été rempli.")
        }
    })  

    //création d'un évènement suivant: lorsque l'on clique sur le div id=blocgris, la div id="blocgris" et la form id="send" sera disparu
    blocgris.addEventListener("click",function(){    
        blocgris.setAttribute("class","off")  //on va mettre une class="off", l'idée consiste à faire disparaitre le div id=blocgris
        FORM.classList.add("off")  //idem que la blocgris, par contre on veut plutôt utiliser classList.add, sinon ça va enlever la class="blocDePartage"
    })
}

