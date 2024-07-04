var tamanhoExpressao;
var operadores = new Array('/', '*', '-', '+');
var expressao = new Array(tamanhoExpressao);
var operadorOuExpressao;
var resultadoString;
var resultadoExpressao;
var expressaoOculta;
var botaodigito;
var botaoinserido;
var tentativas;
var ocupaleatorio;
var arrayAcertado = new Array;
var arrayExpressaoOculta = new Array;
var acertouAlgo;
var vitoria;


//function dos botoes

function botaovoltar() {
location.href = "projetos.html";
}

function botaovoltar2() {
    location.href = "artigos.html";
    }

function botaorecebamais() {
    botaodigito = '+';
}
    
function botaorecebamenos() {
    
    botaodigito = '-';
    
}
    
function botaorecebavezes() {
    
    botaodigito = '*';

}
    
function botaorecebadivide() {
    
    botaodigito = '/';
        
}

function botaorecebazero() {
    
    botaodigito = '0';
        
}

function botaorecebaum() {
    
    botaodigito = '1';
        
}

function botaorecebadois() {
    
    botaodigito = '2';
        
}

function botaorecebatres() {
    
    botaodigito = '3';
        
}

function botaorecebaquatro() {
    
    botaodigito = '4';
        
}

function botaorecebacinco() {
    
    botaodigito = '5';
        
}

function botaorecebaseis() {
    
    botaodigito = '6';
        
}

function botaorecebasete() {
    
    botaodigito = '7';
        
}

function botaorecebaoito() {
    
    botaodigito = '8';
        
}

function botaorecebanove() {
    
    botaodigito = '9';
        
}

// botao do enter fica mais a frente


function jogo() {

tamanhoExpressao = Math.random() * 15;    

tamanhoExpressao = Math.round(tamanhoExpressao);  


tamanhoExpressao = tamanhoExpressao + 5;
//separado do proximo para leitura; tamanho minimo de 10 na expressao


tamanhoExpressao = tamanhoExpressao - 1;
//para o indice

expressao[0] = Math.floor(Math.random() * 7);
//sorteia digito de 0 a 9

for (i = 0; i <= tamanhoExpressao; i++) {
    if (expressao[i] == null) {
        expressao[i] = "X";
    }
}


for (i = 1; i <= tamanhoExpressao; i++) {

    anterior = i - 1;

operadorOuExpressao = Math.floor(Math.random() * 4);


if (operadorOuExpressao >= 1) {
    if (expressao[anterior] == '+' || expressao[anterior] == '-' || expressao[anterior] == '*' || expressao[anterior] == '/') {
        expressao[i] = Math.floor(Math.random() * 10);
    } else if (i === tamanhoExpressao){
        //para o ultimo digito da expressao nao ser um operador (precisa ser)
        expressao[i] = Math.floor(Math.random() * 10);
    } else {
        expressao[i] = operadores[Math.floor(Math.random() * 4)];
    }
}

if (operadorOuExpressao < 1) {
    if (expressao[anterior] == 0) {
        expressao[i] = operadores[Math.floor(Math.random() * 4)];
    } else {
        expressao[i] = Math.floor(Math.random() * 10);
    }
}
}

//agora a parte pra fazer uma variavel que seja somente a expressao

resultadoString = expressao[0];

expressaoOculta = "?";
// tem que estar preenchido

for (i = 1; i <= tamanhoExpressao; i++) {
    resultadoString = (`${resultadoString}${expressao[i]}`);
//desta forma para nao somar com os anteriores, estavam somando os 2 primeiros digitos quando tinha +
    expressaoOculta += "?";
}


resultadoExpressao = eval(resultadoString);
//resultadoExpressao = parseInt(resultadoExpressao);
//

resultadoExpressao.toString();


if (resultadoExpressao < 0 && resultadoExpressao.toString().length > 5) {
    jogo();

} else if (resultadoExpressao.toString().length > 5) {
    jogo();

} else if (isNaN(resultadoExpressao)) {
    jogo();
    
}

//script pra fazer o jogo funcionar
tentativas = tamanhoExpressao;

if (tamanhoExpressao < 17) {
tentativas = (tamanhoExpressao/100)*110;

}
if (tamanhoExpressao < 14) {
tentativas = (tamanhoExpressao/100)*120;

}
if (tamanhoExpressao < 10) {
tentativas = (tamanhoExpressao/100)*140;
}
if (tamanhoExpressao < 8) {
tentativas = (tamanhoExpressao/100)*150;
}

 //dificuldade do jogo
    
 tentativas = Math.round(tentativas);

for (i = 0; i <= Number(expressaoOculta.length - 1); i++) {
    arrayExpressaoOculta[i] = expressaoOculta.charAt(i);
}

}

jogo();

function botaoenter() {
    botaoinserido = botaodigito;

    acertouAlgo = 0;

    if (botaoinserido != undefined) {
        for (i = 0; i <= Number(expressaoOculta.length - 1); i++) {
            if (botaoinserido == expressao[i]) {
                arrayAcertado.push(i);
                acertouAlgo = 1;
            }
            
        }
        
        if (acertouAlgo == 0) {
            tentativas--;
            document.getElementById("output").innerHTML = "Dica: 1. Multiplicação/Divisão, 2. Soma/Subtração. <br><br>" + "Tentativas restantes --> " + tentativas + "<br> Digito inserido: " + botaoinserido;
            document.getElementById(botaoinserido).innerHTML = "X";
        } else {
            vitoria++;
            document.getElementById("output").innerHTML = "Dica: 1. Multiplicação/Divisão, 2. Soma/Subtração. <br><br>" + "Tentativas restantes --> " + tentativas + "<br> Digito inserido: " + botaoinserido;
        }

        //acertoualgo com 0 e 1 pra ser uma boolean

        ocupaleatorio = arrayAcertado[Math.floor(Math.random() * arrayAcertado.length)];

        arrayExpressaoOculta[ocupaleatorio] = expressao[ocupaleatorio];
        
        expressao[ocupaleatorio] = "X";

        arrayAcertado.length = 0;
        
        document.getElementById("expressaofinal").innerHTML = arrayExpressaoOculta.join("");
      
        ocupaleatorio = "";


    } else {
        alert("Nenhum digito")
    }

    if (arrayExpressaoOculta.join("") == resultadoString) {
        document.getElementById("output").innerHTML = "Tentativas restantes --> " + tentativas + "<br><br> Você ganhou! Clique no botão de reload para iniciar um novo jogo.";
    }

    if (tentativas <= 0) {
        document.getElementById("output").innerHTML = "Tentativas restantes --> " + tentativas + "<br> Você perdeu. Clique no botão de reload para iniciar um novo jogo. <br> A expressão completa era: " + resultadoString;
    }
}


//saida na caixa de texto no inicio do jogo

document.getElementById("expressaofinal").innerHTML = arrayExpressaoOculta.join("");

document.getElementById("expressaoResultado").innerHTML = "= " + resultadoExpressao;

document.getElementById("output").innerHTML = "Dica: 1. Multiplicação/Divisão, 2. Soma/Subtração. <br>" + "Quando o botão for substituido por X, não restam mais deste digito na expressão. <br> Tentativas restantes --> " + tentativas;

//
