let photo=document.getElementById("cat");   //récupérer l'élément avec id "cat" dans le DOM html
console.log(cat)      //affichage via console : <img id="cat" class="roux" src="cutecat2.jpg"> Idem que le fichier html
photo.src="cutecat1.jpg"  //remplacer l'image "cutecat1.jpg" par "cutecat2.jpg"
console.log(photo)    //affichage via console a été changé : <img id="cat" class="roux" src="cutecat1.jpg">

photo.setAttribute("class","roux blanc")  //remplacer l'attribut class="roux" par class="roux blanc"
console.log(photo)   //affichage via console a été changé : <img id="cat" class="roux blanc" src="cutecat1.jpg">

photo.classList.remove("roux") //si on veut garder la class "blanc" et on enlève la class roux, on peut utiliser la méthode classList.remove        
console.log(photo) //affichage via console a été changé : <img id="cat" class="blanc" src="cutecat1.jpg"

photo.classList.add("roux") //Si on veut ajouter la class roux, on utilise classList.add
console.log(photo) //affichage via console a été changé: <img id="cat" class="blanc roux" src="cutecat1.jpg"