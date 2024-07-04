<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="jogo2.css">
</head>
<body>
    <div onclick="botaovoltarconfig()" class="voltar"></div>
    <div onclick="location. reload()" class="reload">
            
    </div>
    <br>

    <h1 id="titulo">Jogo da Comparação</h1>
    <div class="visor1">
        <div class="ladoEsquerdo">
            <p id="base1">x</p><p><sup id="expoente1">y</sup>
        </div>
        
        <form action="">
            <label class="form-control">
              <input type="radio" name="radio" id="menorQueId"/>
              <p id="selecResposta1"><</p>
            </label>
          
            <label class="form-control">
              <input type="radio" name="radio" id="igualQueId"/>
              <p id="selecResposta2">=</p>
            </label>

            <label class="form-control">
                <input type="radio" name="radio" id="maiorQueId"/>
                <p id="selecResposta3">></p>
              </label>
          </form>

          <button class="start2" role="button" onclick="enviarResposta()">Enviar</button>

        <div class="ladoDireito">
            <p id="base2">a</p><sup id="expoente2">b</sup>
        </div>
        
    </div>
</body>
<script src="jogo2.js"></script>
</html>
     
    
        
