function lastValueFrom(dividendOrDivisor) {
    return $(dividendOrDivisor).val() || $(dividendOrDivisor).text();
}
var lastNumberIs = function returnLastTurn() {
    if ($(".resultado").length % 2 == 0 && $(".resultado:last-child").last().hasClass("resultado-final") == false) {
        return "dividend"
    }
    if ($(".resultado").length % 2 != 0 && $(".resultado:last-child").last().hasClass("resultado-final") == false) {
        return "divisor"
    }
    if ($(".resultado:last-child").last().hasClass("resultado-final")){
        return "final_result"
    }
}
function deleteResults(){
    const resultados = $(".resultado:not(.caixaDeTexto)");
    if (resultados.length > 0) {

        resultados.each(function () {
            $(this).remove();
        });

        idDivisor = 0;
        idDividendo = 1;
    }
}
window.onload = function chooseBackground(){
    var backgroundColors = ["#B0D0FF", "#87E895", "#FFEF78"];
    var sortPosition = Math.floor(Math.random() * backgroundColors.length)
    var color =  backgroundColors[sortPosition] ;
    
    var headPart = document.getElementById("club");
    var buttonsPart = document.getElementById("buttons");
    headPart.style.backgroundColor = color ;
    buttonsPart.style.backgroundColor = color ;
}
