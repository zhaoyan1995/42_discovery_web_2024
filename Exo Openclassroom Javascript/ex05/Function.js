let BOUTON1=document.getElementById("monBouton1");
BOUTON1.addEventListener("click",function(){           //lorsque on clique sur le bouton, il va afficher un message indiqué dans la consle.log
    console.log("Vous avez cliqué sur le bouton 1")
})

let BOUTON2=document.getElementById("monBouton2");
BOUTON2.addEventListener("click", () => {
console.log("Vous avez cliqué sur le bouton 2")
})

document.addEventListener("keydown", function(event) { //Quand on tape la touche "enter", il va afficher la phrase "La touche Entrer vient d'être appuyée."
    if (event.key === "Enter") {
        console.log("La touche Entrer vient d'être appuyée.");
    }
});

document.addEventListener("click", function(event) {   //Quand on clique le monBouton1, il va afficher "on vient de cliquer l'élément: Bouton1" le texte entre <bouton>xxx</bouton>
    console.log("on vient de cliquer l'élément: ", event.target.textContent);
});

document.addEventListener("click", function(event) {   //Quand on clique le monBouton1, la couleur de celle-ci va devenir jaune, également si on fait la même chose pour monBonton2
    event.target.style.backgroundColor = "yellow";
});

document.addEventListener("keydown", function(event) { //Lorsque j'ai appuyé une touche dans le clavier
    console.log("J'ai appuyé la touche: ", event.key); //Il va imprimer le nom du touch que je vient de taper 
});