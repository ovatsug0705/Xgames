window.onscroll =function() {

    var navbar = document.querySelector(".menu");
    var elemento = document.querySelector(".container").offsetTop;
    var x = parseInt(elemento);
    x = x - 50;
    if (window.pageYOffset >= x){   
      navbar.classList.add("scroll"); 
    } 
    else {
      navbar.classList.remove("scroll"); 
    }
    
}

function abrirmenu(){
      document.querySelector(".menu").classList.toggle("menuresponsivo");
      document.querySelector(".navjogos").classList.remove("drop");
}

function menudrop(){
    document.querySelector(".navjogos").classList.toggle("drop");
}

function removemenu(){
  document.querySelector(".menu").classList.remove("menuresponsivo");
}

function movfiltro(par){
  if (par == 2){
    document.querySelector(".filter").classList.add("filtro");
  }
  else{
    document.querySelector(".filter").classList.remove("filtro");
  }
  
}


//realiza pesquisas de jogos no site
function pesquisar(){

  var palavra = document.querySelector(".search").value.toLowerCase();
  var letras = [];
  var palavra2 = "";
  var z = "";
  var cont = 0;
  var cont2 = 0;  

  if (palavra != ""){
    
    //requisição no arquivo Json
    $.get("./banco.json",function(res){
      res.map(function(item){ 

        //colocando as letras no array
          z = item.nome;
          for(var x = 0; x < z.length; x++){
            letras.push(z.substr(x,1));
          }

          //concatenando espaço para não dar problema na iteração
          letras.push("");

          //loop na palavra
          for (var l = 0; l < letras.length; l++){
            for (var y = l; y <= (letras.length); y++ ){
              if (palavra === palavra2 && cont < 1){
                cont++;
                cont2 ++;
              }
              palavra2 += letras[y];
            }

            if (cont > 0){
              l = letras.length;
            }

            palavra2 = "";
          }

          //exibe fora do loop para não ter repetições com as letras iguais na palavra
          if (cont > 0){

            window.localStorage.setItem("nomeobj" + cont2 , item.nome);          
            window.localStorage.setItem("linkobj" + cont2, item.link);                       
            window.localStorage.setItem("imagemobj" + cont2, item.imagem);                  
          }

          cont = 0;

          //limpa o array
          letras.length = 0;
      })
      window.localStorage.setItem("tamanho" , cont2); 
      window.localStorage.setItem("tipo" , "pesquisa")                        
    })  

    }
    
}

//realiza pesquisar através de uma filtragem de dados
function buscar(){

  var ano = document.querySelector(".filterano");
  ano = ano.options[ano.selectedIndex].text;
  ano = ano.toLowerCase();

  var genero = document.querySelector(".filtergenero");
  genero = genero.options[genero.selectedIndex].text;
  genero = genero.toLowerCase();

  var plataforma = document.querySelector(".filterplataforma");
  plataforma = plataforma.options[plataforma.selectedIndex].text;
  plataforma = plataforma.toLowerCase();
  
  
      if (ano == "ano" && genero != "gênero" && plataforma != "plataforma"){
        var i = 0;
        $.get("./banco.json",function(res){
          res.map(function(item){
            if(item.genero == genero && item.plataforma == plataforma){
              window.localStorage.setItem("nomeobj" + i, item.nome);
              window.localStorage.setItem("linkobj" + i, item.link);
              window.localStorage.setItem("imagemobj" + i, item.imagem);
              i++;
            }
          })
          window.localStorage.setItem("tamanho", i);
          
         })
      }

      if (ano != "ano" && genero == "gênero" && plataforma != "plataforma"){
        var i = 0;
        $.get("./banco.json",function(res){
          res.map(function(item){
            if(item.ano == ano && item.plataforma == plataforma){            
            window.localStorage.setItem("nomeobj" + i, item.nome);
            window.localStorage.setItem("linkobj" + i, item.link);
            window.localStorage.setItem("imagemobj" + i, item.imagem); 
            i++;
            }
          })
          window.localStorage.setItem("tamanho", i);
         })
      }

      if (ano != "ano" && genero != "gênero" && plataforma == "plataforma"){
        var i = 0;
        $.get("./banco.json",function(res){
          res.map(function(item){
            if(item.genero == genero && item.ano == ano){            
            window.localStorage.setItem("nomeobj" + i, item.nome);
            window.localStorage.setItem("linkobj" + i, item.link);
            window.localStorage.setItem("imagemobj" + i, item.imagem); 
            i++;
            }
          })
          window.localStorage.setItem("tamanho", i);
         })
      }

      if (ano != "ano" && genero == "gênero" && plataforma == "plataforma"){
        var i = 0;
        $.get("./banco.json",function(res){
          res.map(function(item){
            if(item.ano == ano){            
            window.localStorage.setItem("nomeobj" + i, item.nome);
            window.localStorage.setItem("linkobj" + i, item.link);
            window.localStorage.setItem("imagemobj" + i, item.imagem);
            i++;
            }
          })
          window.localStorage.setItem("tamanho", i);
         })
      }

      if (ano == "ano" && genero != "gênero" && plataforma == "plataforma"){
        var i = 0;
        $.get("./banco.json",function(res){
          res.map(function(item){
            if(item.genero == genero){            
            window.localStorage.setItem("nomeobj" + i, item.nome);
            window.localStorage.setItem("linkobj" + i, item.link);
            window.localStorage.setItem("imagemobj" + i, item.imagem); 
            i++;
            }
          })
          window.localStorage.setItem("tamanho", i);
         })
      }

      if (ano == "ano" && genero == "gênero" && plataforma != "plataforma"){
        var i = 0;
        $.get("./banco.json",function(res){
          res.map(function(item){
            if(item.plataforma == plataforma){            
            window.localStorage.setItem("nomeobj" + i, item.nome);
            window.localStorage.setItem("linkobj" + i, item.link);
            window.localStorage.setItem("imagemobj" + i, item.imagem);
            i++;
            }
          })
          window.localStorage.setItem("tamanho", i);
         })
      }

      if (ano != "ano" && genero != "gênero" && plataforma != "plataforma"){
        var i = 0;
        $.get("./banco.json",function(res){
          res.map(function(item){
            if(item.genero == genero && item.plataforma == plataforma && item.ano == ano){            
            window.localStorage.setItem("nomeobj" + i, item.nome);
            window.localStorage.setItem("linkobj" + i, item.link);
            window.localStorage.setItem("imagemobj" + i, item.imagem);
            i++;
            }
          })
          window.localStorage.setItem("tamanho", i);
         })
      }

      if (ano == "ano" && genero == "gênero" && plataforma == "plataforma"){
        var i = 0;
        $.get("./banco.json",function(res){
          res.map(function(item){
            window.localStorage.setItem("nomeobj" + i, item.nome);
            window.localStorage.setItem("linkobj" + i, item.link);
            window.localStorage.setItem("imagemobj" + i, item.imagem); 
            i++;
          })
          window.localStorage.setItem("tamanho", i);
         })
      }
      window.localStorage.setItem("tipo", "busca");
}

var status = 1;

function slider(){
  
    document.querySelector(".destaques1").style.display = "none";
    document.querySelector(".destaques2").style.display = "none";
    document.querySelector(".destaques3").style.display = "block";      

    setInterval(slider2 , 4000)

}

function slider2(){
    
  var max = 3;

  document.querySelector(".destaques1").style.display = "none"
  document.querySelector(".destaques2").style.display = "none"    
  document.querySelector(".destaques3").style.display = "none";

  document.querySelector(".destaques" + status).style.display = "block";

  status++

  if(status > max){
    status = 1;
  }
  
}




    


  


  





