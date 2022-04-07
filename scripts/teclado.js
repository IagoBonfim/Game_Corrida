const ESPACO = 32;
const SETA_ESQUERDA = 37;
const SETA_ACIMA = 38;
const SETA_DIREITA = 39;
const SETA_ABAIXO = 40;

function Teclado(elemento){
    this.elemento = elemento;
    this.pressionadas = [];
    this.disparadas = [];
    this.funcoesDisparo = [];
    let teclado = this;
    elemento.addEventListener('keydown', function(evento){
        let tecla = evento.keyCode;
        teclado.pressionadas[tecla] = true;
            if(teclado.funcoesDisparo[tecla] && !teclado.disparadas[tecla]){
                teclado.disparadas[tecla] = true;
                teclado.funcoesDisparo[tecla] ();
            }
    });
    elemento.addEventListener('keyup', function(evento){
        teclado.pressionadas[evento.keyCode] = false;
        teclado.disparadas[evento.keyCode] = false;
    });
}
Teclado.prototype = {
    pressionada: function(tecla){
       return this.pressionadas[tecla];
    },
    disparou: function(tecla, callback) {
        this.funcoesDisparo[tecla] = callback;
    }
}
