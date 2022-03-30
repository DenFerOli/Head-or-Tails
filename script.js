function caraOuCoroa(){
    let aleatorio = Math.round(Math.random() * 1);
    return aleatorio;
}

function caras(){
    var headCoin = document.createElement("img");
    headCoin.setAttribute("class", "coin-style");
    headCoin.setAttribute("src", "/img/realfront.png");
    document.body.appendChild(headCoin);
}

function coroas(){
    var tailsCoin = document.createElement("img");
    tailsCoin.setAttribute("class", "coin-style");
    tailsCoin.setAttribute("src", "/img/realback.png");
    document.body.appendChild(tailsCoin);
}

function desabilitarBotao(){
    document.querySelector("#head").disabled = true;
}

var cara = document.querySelector("#head");

cara.addEventListener("click", function(){
    let headOrTails = caraOuCoroa();

    if(headOrTails == 0){
        caras();
    } else {
        coroas();
    }

    
})