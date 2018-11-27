const SETA_DIREITA = 39;
const SETA_ESQUERDA = 37;
const SETA_CIMA = 38;
const SETA_BAIXO = 40;

function Teclado(elemento) {

    this.elemento = elemento;
    this.pressionadas = [];

    let teclado = this;

    elemento.addEventListener('keydown', function(evento) {

        teclado.pressionadas[evento.keyCode] = true;
    });

    elemento.addEventListener('keyup', function(evento) {

        teclado.pressionadas[evento.keyCode] = false;
    });
}

Teclado.prototype = { 
    
    pressionada: function(tecla) {

        return this.pressionadas[tecla];
    }
}