var DIRECAO_ESQUERDA = 1;
var DIRECAO_DIREITA = 2;
var MOVIMENTO = 1;
var PARADO = 2;

function Sonic(context, teclado, imagem) {
    this.context = context;
    this.teclado = teclado;
    this.x = 0;
    this.y = 0;

    this.direcao = DIRECAO_DIREITA;
    this.estado = PARADO;

    this.sheet = new Spritesheet(context, imgSonic, 3, 8);
    this.sheet.intervalo = 60;

    this.velocidade = 10;
}



Sonic.prototype = {

    atualizar: function() {

        if(this.teclado.pressionada(Teclado.SETA_DIREITA)) {

            this.direcao = DIRECAO_DIREITA;
            this.estado = MOVIMENTO;
            this.x += this.velocidade;

            return;
        }

        if(this.teclado.pressionada(Teclado.SETA_ESQUERDA)) {

            this.direcao = DIRECAO_ESQUERDA;
            this.estado = MOVIMENTO;
            this.x -= this.velocidade;

            return;
        }

        this.estado = PARADO;
    },

    desenhar: function() {

        if(this.estado == PARADO && this.direcao == DIRECAO_DIREITA) {

            this.sheet.linha = 0;
            this.sheet.coluna = 0;
        }

        if(this.estado == PARADO && this.direcao == DIRECAO_ESQUERDA) {

            this.sheet.linha = 0;
            this.sheet.coluna = 1;
        }

        if(this.estado == MOVIMENTO && this.direcao == DIRECAO_DIREITA) {

            this.sheet.linha = 1;
            this.sheet.proximoQuadro();
        }

        if(this.estado == MOVIMENTO && this.direcao == DIRECAO_ESQUERDA) {

            this.sheet.linha = 2;
            this.sheet.proximoQuadro();
        }        

        this.sheet.desenhar(this.x, this.y);
    }
}