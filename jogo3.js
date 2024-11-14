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
            location.href = "jogo3um.html";
            
            
        } else if (sorteio == 2) {
            alert("selec 2");
            localStorage.setItem("grupo", 2);
            location.href = "jogo3um.html";
        } else if (sorteio == 3) {
            alert("selec 3");
        } else if (sorteio == 4) {
            alert("selec 4");
        } else if (sorteio == 5) {
            alert("selec 5");
        } else if (sorteio == 6) {
            alert("selec 6");
        } else if (sorteio == 7) {
            alert("selec 7");
        }
    } else {
        alert("jogo2");
        location.href = "jogo3um.html";
    }
}

grupo = localStorage.getItem("grupo");
if (grupo == 1) {
    
    
    alcool();
} else if (grupo == 2) {
    aldeido();
}

function botaoenvio() {
    if (document.querySelector('#alcool').checked) {
        alert("alcool");
        
    }
    if (document.querySelector('#ester').checked) {
        alert("ester");
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
    }
    if (document.querySelector('#fenol').checked) {
        alert("fenol");
    }
    if (document.querySelector('#eter').checked) {
        alert("eter");
    }
    if (document.querySelector('#acido').checked) {
        alert("acido");
    }
}


function alcool() {
    var teste = "https://www.infoescola.com/wp-content/uploads/2007/06/polialcool";
    teste += ".jpg"
    document.getElementById("imagemcomposto").src = teste;
   
}

function aldeido() {
    sorteio = Math.floor((Math.random() * 10));
    sorteio += 1;
    var teste = "aldeido_";
    teste = teste + sorteio; 
    teste += ".jpg";
    
    document.getElementById("imagemcomposto").src = teste;
   
}






