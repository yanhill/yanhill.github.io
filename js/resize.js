var cw = $('.centered-buttons').width();
$('.btn-result').css({ 'height': cw });

/* var brainWidth = $('.cerebro').width();
$('.container-buttons').css({ 'width': brainWidth }); */

$(window).resize(function resizeResultButton() {
    cw = $('.centered-buttons').width();
    $('.btn-result').css({ 'height': cw });
});

(function resizableInput() {
    const textBox = document.querySelector('.caixaDeTexto');
    const int = Number(14);

    function resize() {
        textBox.style.width = ((textBox.value.length) * int) + 'px';
    }

    var e = 'keydown,keyup,keypress,focus,blur,change'.split(',');

    for (let i in e) {
        textBox.addEventListener(e[i], resize, false);
    }
    resize();
    
})();
