function Spritesheet(context, imagem, qtdLinhas, qtdColunas) {

    this.context = context;

    this.imagem = imagem;
    this.qtdLinhas = qtdLinhas;
    this.qtdColunas = qtdColunas;
    this.tamanhoAnimacao = qtdColunas;


    this.linha = 0;
    this.coluna = 0;
    this.intervalo = 0;
}

Spritesheet.prototype = {

    proximoQuadro: function() {

        let isUltimoQuadro = false;

        if (this.coluna == this.tamanhoAnimacao - 1) {

            isUltimoQuadro = true;
        }

        var agora = new Date().getTime();

        if(!this.ultimoTempo) {
            this.ultimoTempo = agora;
        }

        if(agora - this.ultimoTempo < this.intervalo) {

            return false;
        }

        this.coluna = (this.coluna + 1) % this.tamanhoAnimacao;

        this.ultimoTempo = agora;

        return isUltimoQuadro;
    },

    desenhar: function(x, y, escala) {

        let larguraQuadro = this.imagem.width / this.qtdColunas;
        let alturaQuadro = this.imagem.height / this.qtdLinhas;

        var clipX = this.coluna * larguraQuadro;
        var clipY = this.linha * alturaQuadro;

        this.context.drawImage(
            this.imagem,
            clipX,
            clipY,
            larguraQuadro,
            alturaQuadro,
            x,
            y,
            larguraQuadro * escala,
            alturaQuadro * escala,
        );
    }
};