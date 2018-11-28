var MAGIA = 0;
var PARADO = 1;
var SOCO = 2;
var ANDANDO = 3;
var MAGIA_INDO = 4;
var MAGIA_ACERTANDO = 5;
var CHUTE_FRACO = 6;
var CHUTE_FORTE = 7;
var PULO = 8;
var AGACHADO = 9;

var TAMANHO_ANIMACAO = [
    4,
    4,
    3,
    5,
    2,
    4,
    5,
    5,
    7,
    1
];


function Ken(context, teclado, imagem) {
    this.context = context;
    this.teclado = teclado;
    this.x = 0;
    this.y = 0;

    this.estado = PARADO;

    this.sheet = new Spritesheet(context, imagem, 10, 7);
    this.sheet.intervalo = 120;

    this.velocidade = 5;
}



Ken.prototype = {

    atualizar: function() {

        if(this.teclado.pressionada(Teclado.SETA_DIREITA)) {

            this.estado = ANDANDO;
            this.x += this.velocidade;

            return;
        }

        if(this.teclado.pressionada(Teclado.SETA_ESQUERDA)) {

            this.estado = ANDANDO;
            this.x -= this.velocidade;

            return;
        }

        if(this.teclado.pressionada(Teclado.SETA_CIMA)) {

            this.estado = PULO;
            this.y == 1;

            return;
        }

        if(this.teclado.pressionada(Teclado.SETA_BAIXO)) {

            this.estado = AGACHADO;

            return;
        }

        if(this.teclado.pressionada(Teclado.A)) {

            this.estado = SOCO;

            return;
        }

        if(this.teclado.pressionada(Teclado.S)) {

            this.estado = CHUTE_FRACO;

            return;
        }

        if(this.teclado.pressionada(Teclado.D)) {

            this.estado = CHUTE_FORTE;

            return;
        }

        if(this.teclado.pressionada(Teclado.Z)) {

            this.estado = MAGIA;

            return;
        }

        this.estado = PARADO;
    },

    desenhar: function() {

        if(this.estado == PARADO) {

            this.sheet.linha = PARADO;
            this.sheet.tamanhoAnimacao = TAMANHO_ANIMACAO[ANDANDO] - 1;
            this.sheet.proximoQuadro();
        }

        if(this.estado == ANDANDO) {

            this.sheet.linha = ANDANDO;
            this.sheet.tamanhoAnimacao = TAMANHO_ANIMACAO[ANDANDO] - 1;
            this.sheet.proximoQuadro();
        }

        if(this.estado == PULO) {

            this.sheet.linha = PULO;
            this.sheet.tamanhoAnimacao = TAMANHO_ANIMACAO[PULO] - 1;
            this.sheet.proximoQuadro();
        }

        if(this.estado == AGACHADO) {

            this.sheet.linha = AGACHADO;
            this.sheet.coluna = 0;
        }     

        if(this.estado == SOCO) {

            this.sheet.linha = SOCO;
            this.sheet.tamanhoAnimacao = TAMANHO_ANIMACAO[SOCO] - 1;
            this.sheet.proximoQuadro();
        }

        if(this.estado == CHUTE_FRACO) {

            this.sheet.linha = CHUTE_FRACO;
            this.sheet.tamanhoAnimacao = TAMANHO_ANIMACAO[CHUTE_FRACO] - 1;
            this.sheet.proximoQuadro();
        }

        if(this.estado == CHUTE_FORTE) {

            this.sheet.linha = CHUTE_FORTE;
            this.sheet.tamanhoAnimacao = TAMANHO_ANIMACAO[CHUTE_FORTE] - 1;
            this.sheet.proximoQuadro();
        }

        if(this.estado == MAGIA) {

            this.sheet.linha = MAGIA;
            this.sheet.tamanhoAnimacao = TAMANHO_ANIMACAO[MAGIA] - 1;
            this.sheet.proximoQuadro();
        }

        this.sheet.desenhar(this.x, this.y);
    }
}