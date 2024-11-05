function botaovoltar() {
    location.href = "jogo3pagina.html";
  
  }

function botaotreino() {
   location.href = "jogo3treinamento.html";
}

function botaostart() {
    location.href = "jogo3um.html";
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
        alert(".");
    }
}