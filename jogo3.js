var sorteio;
var grupo;
grupo = localStorage.getItem("grupo");

function botaovoltar() {
    location.href = "jogo3pagina.html";
  
  }

function botaotreino() {
   location.href = "jogo3treinamento.html";
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
    sorteio = Math.floor((Math.random() * 0));
    if (sorteio == 0) {

        alert("jogo1");
        sorteio = 0;
        sorteio = Math.floor((Math.random() * 2));
        sorteio += 1;
        sorteio = 2;
        //1 a 2

        if (sorteio == 12) {
            alert("selec 1");
            localStorage.setItem("grupo", 1);
            
        } else if (sorteio == 2) {
            alert("selec 2");
            localStorage.setItem("grupo", 2);
            
        } else if (sorteio == 3) {
            localStorage.setItem("grupo", 3);
            alert("selec 3");
        } else if (sorteio == 4) {
            alert("selec 4");
            localStorage.setItem("grupo", 4);
        } else if (sorteio == 5) {
            alert("selec 5");
            localStorage.setItem("grupo", 5);
        } else if (sorteio == 6) {
            alert("selec 6");
            localStorage.setItem("grupo", 6);
        } else if (sorteio == 7) {
            alert("selec 7");
            localStorage.setItem("grupo", 7);
        }
    } else {
        alert("jogo2");
        location.href = "jogo3um.html";
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
        alert("alcool");
        if (grupo == 2) {
            alert("Você ganhou.");
            botaostart();
        }
    }
    if (document.querySelector('#ester').checked) {
        alert("ester");
        if (grupo == 2) {
            alert("Você ganhou.");
            botaostart();
        }
    }
    if (document.querySelector('#aldeido').checked) {
        alert("aldeido");
        if (grupo == 2) {
            alert("Você ganhou.");
            botaostart();
        }
    }
    if (document.querySelector('#cetona').checked) {
        alert("cetona");
        if (grupo == 2) {
            alert("Você ganhou.");
            botaostart();
        }
    }
    if (document.querySelector('#fenol').checked) {
        alert("fenol");
        if (grupo == 2) {
            alert("Você ganhou.");
            botaostart();
        }
    }
    if (document.querySelector('#eter').checked) {
        alert("eter");
        if (grupo == 2) {
            alert("Você ganhou.");
            botaostart();
        }
    }
    if (document.querySelector('#acido').checked) {
        alert("acido");
        if (grupo == 2) {
            alert("Você ganhou.");
            botaostart();
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






