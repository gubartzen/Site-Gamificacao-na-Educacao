var sorteio;

function botaovoltar() {
    location.href = "jogo3pagina.html";
  
  }

function botaotreino() {
   location.href = "jogo3treinamento.html";
}

function botaovoltaum() {
window.history.back();
}

function aldeidos() {
    location.href = "treinoaldeido.html";
}

function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName(checkbox.name)
    
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })

    
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

function botaostart() {
    var grupo;
    sorteio = Math.floor((Math.random() * 0));
    if (sorteio == 0) {

        alert("jogo1");
        sorteio = Math.floor((Math.random() * 2));
        

        if (sorteio == 0) {
            alert("selec 0");
            localStorage.setItem("grupo", 0);
            grupo = 0;
            alcool();
        } else if (sorteio == 1) {
            alert("selec 1");
            location.href = "jogo3um.html";
            localStorage.setItem("grupo", 1);
        } else if (sorteio == 2) {
            alert("selec 2");
        } else if (sorteio == 3) {
            alert("selec 3");
        } else if (sorteio == 4) {
            alert("selec 4");
        } else if (sorteio == 5) {
            alert("selec 5");
        } else if (sorteio == 6) {
            alert("selec 6");
        }
    } else {
        alert("jogo2");
        location.href = "jogo3um.html";
    }
}


function alcool() {
    alert("0101");
    location.href = "jogo3um.html";

    
}

var grupo = localStorage.getItem("grupo");
if (grupo == 0) {
    document.getElementById("imagemcomposto").src = "https://th.bing.com/th/id/R.fc413a010f043cab4810b323da85734d?rik=3WrGJp%2fVQPMb7A&riu=http%3a%2f%2fwww.infoescola.com%2fwp-content%2fuploads%2f2010%2f07%2faldeido-carbonila.jpg&ehk=0f0LGFx9kPGWzM7omAIOPRTpgvZ3GB1ae%2bBXG98QdGw%3d&risl=&pid=ImgRaw&r=0";
}



