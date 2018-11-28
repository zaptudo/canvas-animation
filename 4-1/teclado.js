class Teclado {

    constructor(elemento) {

        this.elemento = elemento;
        this.pressionadas = [];
        this.funcoesDisparo = [];

        let teclado = this;

        elemento.addEventListener('keydown', (evento) => {

            let tecla = evento.keyCode;

            if (this.funcoesDisparo[tecla] && !this.pressionadas[tecla]) {
                this.funcoesDisparo[tecla]();
            }

            this.pressionadas[tecla] = true;
        });

        elemento.addEventListener('keyup', (evento) => {

            let tecla = evento.keyCode;

            this.pressionadas[tecla] = false;
        });
    }

    static get SETA_DIREITA() { return 39 };
    static get SETA_ESQUERDA() { return 37 };
    static get SETA_CIMA() { return 38 };
    static get SETA_BAIXO() { return 40 };
    static get ESPACO() { return 32 };
    static get A() { return 65 };
    static get S() { return 83 };
    static get D() { return 68 };
    static get Z() { return 90 };

    pressionada(tecla) {

        return this.pressionadas[tecla];
    }

    disparou(tecla, callback) {

        this.funcoesDisparo[tecla] = callback;
    }
}