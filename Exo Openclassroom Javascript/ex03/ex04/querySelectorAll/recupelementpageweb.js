let baliseZoneChoix = document.querySelectorAll("#zoneChoix input");  //Chercher un élément dont la section est attribuée avec id "zoneProposition", cet élément est balisé par span
console.log(baliseZoneChoix);    //il va afficher <span>Cachalot</span> dans la console, la fichier js récupère l'élément situé à la section nommée "zoneProposition" et inclus dans la balise <span>Cachalot</span>

for (let i=0;i<baliseZoneChoix.length;i++) {
    console.log(baliseZoneChoix[i])
}