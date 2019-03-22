function calculateFinalResult() {

    var fatoracao = [];
    var countExp = [];

    const divisoresResultados = document.querySelectorAll(".divisor");

    for (let v1 = 0, count = 0; v1 < divisoresResultados.length; v1++) {

        if (v1 == 0 || divisoresResultados[v1].textContent != divisoresResultados[v1 - 1].textContent) {

            fatoracao[count] = divisoresResultados[v1].textContent;

            for (let v2 = v1, contagemVezes = 0; v2 < divisoresResultados.length; v2++) {
                if (divisoresResultados[v1].textContent == divisoresResultados[v2].textContent) {

                    contagemVezes++;
                    countExp[count] = contagemVezes;
                }
            }
            count++;
        }
    }

    var resultadoFinal = [];
    for (let i = 0; i < fatoracao.length; i++) {
        if (countExp[i] > 1) {
            resultadoFinal[i] = fatoracao[i] + "<sup>" + countExp[i] + "</sup>";
        }
        else {
            resultadoFinal[i] = fatoracao[i];
        }
    }

    const resultadoDiv = $(`<div id="resultado-final" class="resultado resultado-final" tabindex="${idTabIndex}" tab="${resultadoFinal.join(' x ')}" value="0" >${resultadoFinal.join(' <span class="xis">x</span>  ')}</div>`);
    $(".container-result").append(resultadoDiv);
}

function limpaResultado(resultadoFinal) {
    resultadoFinal.remove();
}
