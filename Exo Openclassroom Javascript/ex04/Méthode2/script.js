let Titre="Chat"                      //créer un variable Titre qui contient le string "Chat"
let Paragraphe="Lilou est un chat"    //créer un variable Paragraphe qui contient le string "Lilou est un chat"

let H1=document.createElement("h1")   //créer un variable H1 puis dans ce variable on ajoute un élément <h1> </h1>
let P=document.createElement("p")     //créer un variable P puis dans ce variable on ajoute un élément <p> </p>

H1.textContent=Titre //introduire le texte de variable Titre dans le variable H1
P.innerText=Paragraphe //introduire le texte de variable Paragraphe dans le variable P

let DIV=document.createElement("div")  //créer un variable DIV, dans ce DIV, on crée un nouvelle élément <div> </div>

DIV.appendChild(H1)  //mettre H1 dans DIV
DIV.appendChild(P)   //mettre P dans DIV

let corps=document.querySelector("body")  //récupérer l'élément <body> </body>
corps.appendChild(DIV)   //mettre DIV dans corps 
