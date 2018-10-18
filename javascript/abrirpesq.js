window.onload = function(){
    
    var tam = parseInt(window.localStorage.getItem("tamanho"));
    var div = document.querySelector(".jogos");
    var control = window.localStorage.getItem("tipo");

    if (tam != 0){
        var p = document.createElement("h2");
        p.innerText = ("Resultados da Busca")
        p.classList.add("titulo_jogos")
        div.insertAdjacentHTML('beforeend',p.outerHTML); 
    }
    else{
        var p = document.createElement("h2");
        p.innerText = ("Infelizmente não encontramos sua busca, tente novamente")
        p.classList.add("titulo_jogos")        
        div.insertAdjacentHTML('beforeend',p.outerHTML); 
    }


    if (control == "pesquisa"){
        for (i=1; i <= tam; i++){

            var link = document.createElement("a");
            link.setAttribute("href", window.localStorage.getItem("linkobj" + i))
    
            var img = window.localStorage.getItem("imagemobj" + i);        
            var nome = window.localStorage.getItem("nomeobj" + i);  
            
            link.innerHTML = "<img src=" + img + " class='jogo'/>" + "<figcaption>"+ nome +"</figcaption>";
            div.insertAdjacentHTML('beforeend', link.outerHTML);
        }

    }
    else{

        for (i=0; i < tam; i++){
            
            var link = document.createElement("a");
            link.setAttribute("href", window.localStorage.getItem("linkobj" + i))
    
            var img = window.localStorage.getItem("imagemobj" + i);       
            var nome = window.localStorage.getItem("nomeobj" + i);
    
            link.innerHTML = "<img src=" + img + " class'jogo'/>" + "<figcaption>"+ nome +"</figcaption>";
            div.insertAdjacentHTML('beforeend', link.outerHTML);
        }
    }

}