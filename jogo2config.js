var booleanFracao;
var booleanPotencia; 
var booleanCoeficiente;
var booleanNegativo;
var tNumerador;
var tDenominador;
var tBase;
var tExp;
var tCoeficiente;
var sorteio;

function botaovoltar() {
      location.href = "projetos.html";
      
    }

    document.registrationForm.ageInputId.oninput = function(){
        document.registrationForm.ageOutputId.value = document.registrationForm.ageInputId.value;
    }

    function sendConfig() {
          booleanFracao = document.querySelector('#checkFracao');
          booleanPotencia = document.querySelector('#checkPotencia');
          booleanCoeficiente = document.querySelector('#checkCoeficiente');
          booleanNegativo = document.querySelector('#checkNegativo');

          tNumerador = document.getElementById("range1").value;
          tDenominador = document.getElementById("range2").value;
          tCoeficiente = document.getElementById("range3").value;
          tBase = document.getElementById("range4").value;
          tExp = document.getElementById("range5").value;
      
        //alert("Valores: "+tNumerador+", "+tDenominador+", "+tCoeficiente+", "+tBase+" e "+tExp+".")
        

         // guardar os valores no localStorage para usar nas outras páginas
        // usar checked para boolean
        // if pois o checked sempre aparece como false apos o get, um problema do localstorage que nao passa boleana
        
        if (booleanFracao.checked == true) {
          localStorage.setItem("booleanFracao", "true");
        } else {
          localStorage.setItem("booleanFracao", "false");
        }

        if (booleanPotencia.checked == true) {
          localStorage.setItem("booleanPotencia", "true");
        } else {
          localStorage.setItem("booleanPotencia", "false");
        }

        if (booleanCoeficiente.checked == true) {
          localStorage.setItem("booleanCoeficiente", "true");
        } else {
          localStorage.setItem("booleanCoeficiente", "false");
        }

        if (booleanNegativo.checked == true) {
          localStorage.setItem("booleanNegativo", "true");
        } else {
          localStorage.setItem("booleanNegativo", "false");
        }

        localStorage.setItem("tNumerador", tNumerador);
        localStorage.setItem("tDenominador", tDenominador);
        localStorage.setItem("tCoeficiente", tCoeficiente);
        localStorage.setItem("tBase", tBase);
        localStorage.setItem("tExp", tExp);
        //
       
        if(booleanFracao.checked == false && booleanPotencia.checked == false ) {
        alert("Leia as observações.");
        } else if (booleanFracao.checked == true && booleanPotencia.checked == true ){
          // sorteia entre 1 e 0
          var sorteiolocal = Math.floor(Math.random() * 2);
          //alert(sorteiolocal);

          //o frac é armazenado indicando que é para carregar somente o script de frac, assim como o pot
          if (sorteiolocal == 1) {
            localStorage.setItem("paginaAtual", "frac");
            location.href = "jogo2frac.html";
          } else {
            localStorage.setItem("paginaAtual", "pot");
            location.href = "jogo2pot.html";
          }
        } else if (booleanFracao.checked == true) {
          localStorage.setItem("paginaAtual", "frac");
          location.href = "jogo2frac.html";
        } else { 
          localStorage.setItem("paginaAtual", "pot");
          location.href = "jogo2pot.html";
        }
      }
    
      

     
    
        


    
        
