function caraOuCoroa(){
    let aleatorio = Math.round(Math.random() * 1);
    return aleatorio;
}

function caras(){
    var headCoin = document.createElement("img");
    headCoin.setAttribute("id", "cara");
    headCoin.setAttribute("class", "coinStyles");
    headCoin.setAttribute("src", "/img/realfront.png");
    document.body.appendChild(headCoin);
}

function coroas(){
    var tailsCoin = document.createElement("img");
    tailsCoin.setAttribute("id", "coroa");
    tailsCoin.setAttribute("class", "coinStyles");
    tailsCoin.setAttribute("src", "/img/realback.png");
    document.body.appendChild(tailsCoin);
}

function vitoria(){
    var vitoria = document.createElement("h2");
    vitoria.setAttribute("id", "vitoria");
    var vitoriaTexto = document.createTextNode("Parabens! você venceu!");
    vitoria.appendChild(vitoriaTexto);
    document.body.appendChild(vitoria);
}

function derrota(){
    var derrota = document.createElement("h2");
    derrota.setAttribute("id", "derrota");
    var derrotaTexto = document.createTextNode("Infelizmente! você perdeu!");
    derrota.appendChild(derrotaTexto);
    document.body.appendChild(derrota);
}

function jogarNovamente(){
    let playAgainButton = document.createElement("button");
    playAgainButton.setAttribute("id", "playAgain");
    let playAgainText = document.createTextNode("Jogar Novamente?");
    playAgainButton.appendChild(playAgainText);
    document.body.appendChild(playAgainButton);

    var jognov = document.querySelector("#playAgain");
    jognov.addEventListener("click", function(){
    var excluirMoeda = document.querySelector("img");
    var excluirBotao = document.querySelector("#playAgain");
    var excluirResultado = document.querySelector("h2");

    document.body.removeChild(excluirMoeda);
    document.body.removeChild(excluirBotao);
    document.body.removeChild(excluirResultado);

    habilitarBotao()
})
}

function desabilitarBotao(){
    document.querySelector("#head").disabled = true;
    document.querySelector("#tails").disabled = true;
}

function habilitarBotao(){
    document.querySelector("#head").disabled = false;
    document.querySelector("#tails").disabled = false;
}

var cara = document.querySelector("#head");

cara.addEventListener("click", function(){
    let headOrTails = caraOuCoroa();

    if(headOrTails == 0){
        caras();
        vitoria();
    } else {
        coroas();
        derrota();
    }

   desabilitarBotao();
   jogarNovamente();
})

var coroa = document.querySelector("#tails");

coroa.addEventListener("click", function(){
    let headOrTails = caraOuCoroa();

    if(headOrTails == 1){
        coroas();
        vitoria();
    } else {
       caras();
       derrota();
    }

   desabilitarBotao();
   jogarNovamente();
})