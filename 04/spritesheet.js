function Spritesheet(context, imagem, qtdLinhas, qtdColunas) {

    this.context = context;

    this.imagem = imagem;
    this.qtdLinhas = qtdLinhas;
    this.qtdColunas = qtdColunas;


    this.linha = 0;
    this.coluna = 0;
    this.intervalo = 0;
}

Spritesheet.prototype = {

    proximoQuadro: function() {

        debugger;

        var agora = new Date().getTime();

        if(!this.ultimoTempo) {
            this.ultimoTempo = agora;
        }

        if(agora - this.ultimoTempo < this.intervalo) {

            return;
        }

        this.coluna = (this.coluna + 1) % this.qtdColunas;

        this.ultimoTempo = agora;
    },

    desenhar: function(x, y) {

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
            larguraQuadro,
            alturaQuadro,
        );
    }
};