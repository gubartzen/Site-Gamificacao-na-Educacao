function botaovoltarconfig() {
  location.href = "jogo2config.html";

}

// recriar as variaveis do jogo2config.js pegando seus valores com o localstorage
// as booleans sao strings como "true" e "false" por causa do problema do localstorage
// usar ifs com == "true"
var booleanFracao = localStorage.getItem("booleanFracao");
var booleanPotencia = localStorage.getItem("booleanPotencia");
var booleanCoeficiente = localStorage.getItem("booleanCoeficiente");
var booleanNegativo = localStorage.getItem("booleanNegativo");

var tNumerador = localStorage.getItem("tNumerador");
var tDenominador = localStorage.getItem("tDenominador");
var tCoeficiente = localStorage.getItem("tCoeficiente");
var tBase = localStorage.getItem("tBase");
var tExp = localStorage.getItem("tExp");

var paginaAtual = localStorage.getItem("paginaAtual");
//

// criando a variavel aqui para nao virar local
var resultado1;
var resultado2;

// o localstorage sempre passa para string entao com o eval passa para variavel denovo
tNumerador = eval(tNumerador);
tDenominador = eval(tDenominador);
tCoeficiente = eval(tCoeficiente);
//

function jogoFrac() {

  //define o coeficiente. caso esteja desativado será igual a 1, + 1 no final para nao dar zero o random
  if (booleanCoeficiente == "true") {
    var coeRandom1 = Math.floor((Math.random() * tCoeficiente)+1);
    document.getElementById("coeficiente1").innerHTML = coeRandom1;

    var coeRandom2 = Math.floor((Math.random() * tCoeficiente)+1);
    document.getElementById("coeficiente2").innerHTML = coeRandom2;

  } else {
    var coeRandom1 = 1;

    var coeRandom2 = 1;
  }
  //------------------

  //a partir de agora os dois modos com ou sem coeficiente seguem iguais
  function geraFrac() {
  var numerador1 = Math.floor(Math.random() * tNumerador) + 1;
  document.getElementById("numerador1").innerHTML = numerador1;

  var denominador1 = Math.floor(Math.random() * tDenominador) + 1;
  document.getElementById("denominador1").innerHTML = denominador1;

  resultado1 = (numerador1/denominador1)*coeRandom1;


  var numerador2 = Math.floor(Math.random() * tNumerador) + 1;
  document.getElementById("numerador2").innerHTML = numerador2;
  
  var denominador2 = Math.floor(Math.random() * tDenominador) + 1;
  document.getElementById("denominador2").innerHTML = denominador2;

  resultado2 = (numerador2/denominador2)*coeRandom2;


  if (Number.isInteger(resultado1)) {
  } else {
    //if da true se o numero é decimal
    geraFrac();
    //caso seja decimal, outra fração é gerada e fica em loop até gerar que resulte em um inteiro
  } 
  
//em configuracoes de tamanhos baixos numeradores iguais ao denominador e denominador 1 sao muito recorrentes
if (numerador1 == denominador1 || numerador2 == denominador2 || denominador1 == 1 || denominador2 == 1 || denominador1 == denominador2) {
  var sorteiolocal = Math.floor(Math.random() * 149);
  if (sorteiolocal >= 2) {
    geraFrac();
  }
}


}
geraFrac();

if (Number.isInteger(resultado2)) {
} else {
  //if da true se o numero é decimal
  geraFrac();
  //caso seja decimal, outra fração é gerada e fica em loop até gerar que resulte em um inteiro
} 
}

//funcao ativada pelo botao de enviar
function enviarResposta() {
var menorQue = document.querySelector('#menorQueId').checked;
var igualQue = document.querySelector('#igualQueId').checked;
var maiorQue = document.querySelector('#maiorQueId').checked;

if (menorQue == false && igualQue == false && maiorQue == false) {
  alert("Nenhuma opção escolhida");
}else if (menorQue == true && resultado1 < resultado2) {
  alert("Você ganhou");
  novoJogo();
} else if (igualQue == true && resultado1 == resultado2) {
  alert("Você ganhou");
  novoJogo();
} else if (maiorQue == true && resultado1 > resultado2) {
  alert("Você ganhou");
  novoJogo();
} else {
  alert("Você errou: "+resultado1+" e "+resultado2);
  novoJogo();
}


//alert(""+menorQue+", "+igualQue+" e "+maiorQue+".");
}

function novoJogo() {
if(booleanFracao == "false" && booleanPotencia == "false" ) {
  alert("Leia as observações.");
  } else if (booleanFracao == "true" && booleanPotencia == "true" ){
    // sorteia entre 1 e 0
    var sorteiolocal = Math.floor(Math.random() * 2);
    //alert(sorteiolocal);
    if (sorteiolocal == 1) {
      localStorage.setItem("paginaAtual", "frac");
      location.href = "jogo2frac.html";
    } else {
      localStorage.setItem("paginaAtual", "pot");
      location.href = "jogo2pot.html";
    }
  } else if (booleanFracao == "true") {
    localStorage.setItem("paginaAtual", "frac");
    location.href = "jogo2frac.html";
  } else { 
    localStorage.setItem("paginaAtual", "pot");
    location.href = "jogo2pot.html";
  }
}
 
if (paginaAtual == "frac") {
  jogoFrac();
}     


    
