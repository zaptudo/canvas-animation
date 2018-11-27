class Animacao {

    constructor(context) {

        this.context = context;
        this.sprites = [];
        this.ligado = false;
    }

    novoSprite(sprite) {

        this.sprites.push(sprite);
    }

    ligar() {

        this.ligado = true;
        this.proximoFrame();
    }

    desligar() {

        this.ligado = false;
    }

    proximoFrame() {

        if (!this.ligado) {
            return;
        }

        this.limparTela();

        for (let i in this.sprites) {

            this.sprites[i].atualizar();
        }

        for (let i in this.sprites) {

            this.sprites[i].desenhar();
        }

        requestAnimationFrame(() => this.proximoFrame());
    }

    limparTela() {

        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
    }
}