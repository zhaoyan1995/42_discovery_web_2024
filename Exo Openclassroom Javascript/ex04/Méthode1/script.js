let Titre="Chat"
let Paragraphe="Lilou est chat."    //créer un variable div et mettre ce que l'on veut introduire dedans
let div=`                      
<div>                                  
    <h1>${Titre}</h1>               
    <p>${Paragraphe}<p>
</div>                              
`;                                 // ` ` est obligatoire entre les contenus à insérer dedans
let corps=document.querySelector("body") //récuprer l'élément <body> dans le DOM 
corps.innerHTML=div                      //introduire le contenu du variable div à l'intérieur de corps dont <body>  </body>