function Spritesheet(context, imagem, linhas, colunas){
    this.context = context;
    this.imagem = imagem;
    this.numLinhas = linhas;
    this.numColunas = colunas;
    this.intervalo = 0;
    this.linha = 0;
    this.coluna = 0;
    this.fimDoCiclo = null;
}
Spritesheet.prototype = {
    proximoQuadro: function(){
        let agora = new Date().getTime();
        if(!this.ultimoTempo) this.ultimoTempo = agora;
        if(agora - this.ultimoTempo < this.intervalo) return;
            
        if(this.coluna < this.numColunas -1)
            this.coluna ++;
        else
            this.coluna = 0;
            if(this.fimDoCiclo) this.fimDoCiclo();
            this.ultimoTempo = agora;
    },
    desenhar: function(x,y){
        let largura = this.imagem.width / this.numColunas;
        let altura = this.imagem.height;
        this.context.drawImage(
            this.imagem,
            largura * this.coluna,
            altura * this.linha,
            altura,
            largura,
            x,
            y,
            largura,
            altura
        );
    }
}