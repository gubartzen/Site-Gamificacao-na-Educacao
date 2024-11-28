var sorteio;
var grupo;
grupo = localStorage.getItem("grupo");

function botaovoltar() {
    location.href = "jogo3pagina.html";
  
  }

  function botaovoltar2() {
    location.href = "jogo3.html";
  
  }

function botaotreino() {
    window.open("jogo3treinamento.html");
}

function botaovoltaum() {
window.history.back();
}

function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName(checkbox.name)
    
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })

    
}

function botaostart() {
   
        sorteio = 0;
        sorteio = Math.floor((Math.random() * 7));
        sorteio += 1;

        if (sorteio == 1) {
            localStorage.setItem("grupo", 1);
            
        } else if (sorteio == 2) {
            localStorage.setItem("grupo", 2);
            
        } else if (sorteio == 3) {
            localStorage.setItem("grupo", 3);
        } else if (sorteio == 4) {
            
            localStorage.setItem("grupo", 4);
        } else if (sorteio == 5) {
            
            localStorage.setItem("grupo", 5);
        } else if (sorteio == 6) {
            
            localStorage.setItem("grupo", 6);
        } else if (sorteio == 7) {
            
            localStorage.setItem("grupo", 7);
        }
    
        location.href = "jogo3um.html";
    
}
var gruponome;

grupo = localStorage.getItem("grupo");
if (grupo == 1) {
    
    gruponome = "alcool_";

} else if (grupo == 2) {

    gruponome = "ester_";

} else if (grupo == 3) {

    gruponome = "aldeido_";

} else if (grupo == 4) {

    gruponome = "cetona_";

} else if (grupo == 5) {

    gruponome = "fenol_";
    
} else if (grupo == 6) {

    gruponome = "eter_";
    
} else if (grupo == 7) {

    gruponome = "acido_";
    
}

jogoiniciar();

function botaoenvio() {
    if (document.querySelector('#alcool').checked) {
        
        if (grupo == 1) {
            alert("Você ganhou. Clique OK para iniciar nova partida");
            botaostart();
        } else {
            alert("Não é um álcool, tente novamente.");
        }
    }
    if (document.querySelector('#ester').checked) {
        
        if (grupo == 2) {
            alert("Você ganhou. Clique OK para iniciar nova partida");
            botaostart();
        } else {
            alert("Não é um éster, tente novamente.");
        }
    }
    if (document.querySelector('#aldeido').checked) {
        
        if (grupo == 3) {
            alert("Você ganhou. Clique OK para iniciar nova partida");
            botaostart();
        } else {
            alert("Não é um aldeído, tente novamente.");
        }
    }
    if (document.querySelector('#cetona').checked) {
        
        if (grupo == 4) {
            alert("Você ganhou. Clique OK para iniciar nova partida");
            botaostart();
        } else {
            alert("Não é uma cetona, tente novamente.");
        }
    }
    if (document.querySelector('#fenol').checked) {
        
        if (grupo == 5) {
            alert("Você ganhou. Clique OK para iniciar nova partida");
            botaostart();
        } else {
            alert("Não é um fenol, tente novamente.");
        }
    }
    if (document.querySelector('#eter').checked) {
        
        if (grupo == 6) {
            alert("Você ganhou. Clique OK para iniciar nova partida");
            botaostart();
        } else {
            alert("Não é um éter, tente novamente.");
        }
    }
    if (document.querySelector('#acido').checked) {
        
        if (grupo == 7) {
            alert("Você ganhou. Clique OK para iniciar nova partida");
            botaostart();
        } else {
            alert("Não é um ácido, tente novamente.");
        }
    }
}

function jogoiniciar() {
    sorteio = Math.floor((Math.random() * 10));
    sorteio += 1;
    
    
    gruponome += sorteio; 
    gruponome += ".jpg";
    
    document.getElementById("imagemcomposto").src = gruponome;
   
}






