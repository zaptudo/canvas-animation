class Heroi {

    constructor(context, teclado, animacao) {

        this.context = context;
        this.teclado = teclado;
        this.animacao = animacao;

        this.direcao = Heroi.DIRECAO_DIREITA;

        this.x = 0;
        this.y = 0;
    }

    static get DIRECAO_DIREITA() { return 1 };
    static get DIRECAO_ESQUERDA() { return 2 };
    static get DIRECAO_CIMA() { return 3 };
    static get DIRECAO_BAIXO() { return 4 };

    atualizar() {

        if (teclado.pressionada(Teclado.SETA_ESQUERDA) && this.x > 0) {

            this.direcao = Heroi.DIRECAO_ESQUERDA;
            this.x -= 5;
        }

        if (teclado.pressionada(Teclado.SETA_DIREITA) && this.x < this.context.canvas.width - 20) {

            this.direcao = Heroi.DIRECAO_DIREITA;
            this.x += 5;
        }

        if (teclado.pressionada(Teclado.SETA_CIMA) && this.y > 0) {

            this.direcao = Heroi.DIRECAO_CIMA;
            this.y -= 5;
        }

        if (teclado.pressionada(Teclado.SETA_BAIXO) && this.y < this.context.canvas.height - 50) {

            this.direcao = Heroi.DIRECAO_BAIXO;
            this.y += 5;
        }

    }

    desenhar() {

        context.fillRect(this.x, this.y, 20, 50);
    }

    atirar() {

        let tiro = new Bola(this.context);
        tiro.x = this.x + 10;
        tiro.y = this.y + 10;
        tiro.raio = 2;
        tiro.cor = 'red';

        if (this.direcao == Heroi.DIRECAO_ESQUERDA) {

            tiro.velocidadeX = -20;
        }

        if (this.direcao == Heroi.DIRECAO_DIREITA) {

            tiro.velocidadeX = 20;
        }

        if (this.direcao == Heroi.DIRECAO_CIMA) {

            tiro.velocidadeY = -20;
        }

        if (this.direcao == Heroi.DIRECAO_BAIXO) {

            tiro.velocidadeY = 20;
        }

        this.animacao.novoSprite(tiro);
    }
}