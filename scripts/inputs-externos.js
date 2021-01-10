var idDivisor = 0;
var idDividendo = 0;
var idTabIndex = 2;
var resultadosObtidos = document.querySelectorAll(".resultado");

var dividends = '.dividendo:last-child';
var divisors = '.divisor:last-child';

var turns = function () {
    if (lastNumberIs() == "dividend" && lastValueFrom(dividends) > 1) {
        return "dividend_turn";
    }
    if (lastNumberIs() == "divisor") {
        return "divisor_turn";
    }
    if (lastNumberIs() == "dividend" && lastValueFrom(dividends) == 1) {
        return "last_turn";
    }
    if (lastNumberIs() == "final_result") {
        return "finished";
    }
}

function paintLastOneFrom(whichOne){
    var valores = document.getElementsByClassName("resultado");

    for(let valor = 0; valor < valores.length ; valor++){
        valores[valor].style.fontWeight = "200";
        valores[valor].style.color = "white";
    }

    var textBox = document.getElementById("caixaDeTexto");
    var textBoxStyle = textBox.style;
    textBoxStyle.color = "#333";

    var valoresSelecionados = document.getElementsByClassName(whichOne);
    var ultimoValor = valoresSelecionados[valoresSelecionados.length-1];
    var ultimoValorStyle = ultimoValor.style;
    ultimoValorStyle.fontWeight = "400";
    // ultimoValorStyle.color = "hsl(271, 100%, 47%)";
    ultimoValorStyle.color = "hsl(29, 100%, 62%)";
    
}

$('.btn-result').on("click", function goAll() {
    while (turns() != "finished") {
        $(".btn-front").click();
    }
});

$('.btn-front').on("click", function goOn() {
    switch (turns()) {
       case "dividend_turn":{

            for (var divisor = 2; divisor <= lastValueFrom(dividends); divisor++) {

                if (lastValueFrom(dividends) % divisor === 0) {
                    
                    const divisorDiv = $(`<div id="divisor-${idDivisor}" class="resultado divisor divisor-${idDivisor}" tabindex="${idTabIndex}" tab="${divisor}" value="${divisor}" >${divisor}</div>`);                    
                    $(".divisores").append(divisorDiv);

                    idDivisor++;           
                    paintLastOneFrom("divisor");

                    break;
                }
            }

            break;
        }
        case "divisor_turn":{
            idDividendo++;

            const nextDividend = (lastValueFrom(dividends) / lastValueFrom(divisors));
            const dividendoDiv = $(`<div id="dividendo-${idDividendo}" class="resultado dividendo dividendo-${idDividendo}" tabindex="${idTabIndex}" tab="${nextDividend}" value="${nextDividend}" >${nextDividend}</div>`);

            $(".dividendos").append(dividendoDiv);
            paintLastOneFrom("dividendo");     

              window.location.href = "#dividendo-"+idDividendo;

            break;
        }
        case "last_turn":{
            calculateFinalResult();
            
            /* MUDANCA DE CORES */
            var valores = document.getElementsByClassName("resultado dividendo");
            
            for(let valor = 0; valor < valores.length ; valor++){
                valores[valor].style.fontWeight = "200";
                valores[valor].style.color = "white";
            }

            window.location.href = "#resultado-final";

            break;
        }
    }
    resultadosObtidos = document.querySelectorAll(".resultado");
    idTabIndex++;
});

$('.btn-back').on("click", function goBack() {

    switch(turns()){
        case "dividend_turn":
        case "last_turn":{
            $(".dividendo:last-child:not(.caixaDeTexto)").remove();
            idDividendo--;

            paintLastOneFrom("divisor");

            break;
        }
        case "divisor_turn":{
            $(".divisor:last-child").remove();
            idDivisor--;

            paintLastOneFrom("dividendo");

            break;
        }
        case "finished":{
            $(".resultado-final").remove();

            paintLastOneFrom("dividendo");
            break;
        }
    }
    idTabIndex--;
});

$('.btn-clear').on("click", function () {
    document.getElementById("caixaDeTexto").value = "";
    document.getElementById("caixaDeTexto").focus();

    deleteResults();
    $(".btn").prop("disabled", true);
    
});

$('.caixaDeTexto').on("input change", function () {
        deleteResults();

        var textBox = document.getElementById("caixaDeTexto");
        var textBoxStyle = textBox.style;
        textBoxStyle.color = "#333";
});

$('.caixaDeTexto').bind("keydown", function deixaClicarComEnter(event) {
    if ((event.key == "Enter" || event.key == " ")) {
        $(".btn-result").click();
    }
});

$('.container-buttons button, .caixaDeTexto').on("click input", function habilitarDesabilitarBotoes() {

    if (document.getElementById("caixaDeTexto").value == "") {
        $(".btn").prop("disabled", true);
        console.log("a")
    }

    else if ($(".resultado").length == 0){
        $(".btn-front, .btn-result").prop("disabled", false);
        $(".btn-back, .btn-clear").prop("disabled", true);
        $(".caixaDeTexto").focus();
        console.log("b")
    }
    
    else if(lastNumberIs() != "final_result") {
        $(".btn").prop("disabled", false);
        console.log("c")
    }

    else{
        $(".btn-front, .btn-result").prop("disabled", true);
        console.log("d")
    }
});

/* MUDAR TODOS OS DIVIDENDOS PARA LARANJA [GAMBIARRA] */
$('.btn-result, .btn-front, .btn-back, .btn-clear').on("click", function changeDividendoColor() {
    var valores = document.getElementsByClassName("divisor");
            
    for(let valor = 0; valor < valores.length ; valor++){
        valores[valor].style.color = "orange";
    }
});
