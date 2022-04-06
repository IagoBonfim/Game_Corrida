function Jogador(context, teclado, imagem){
    this.context = context;
    this.teclado = teclado;
    this.imagem = imagem;
    this.animcacao = animacao;
    this.x = 0;
    this.y = 0; 
    this.velocidade = 0;
    this.spritesheet = new Spritesheet(context, imagem, 1, 4);
    this.spritesheet.linha = 0;
    
}
Jogador.prototype = {
    atualizar: function(){
        let incremento = this.velocidade * this.animacao.decorrido / 1000;
       if(this.teclado.pressionada(SETA_ESQUERDA) && this.x > 0)
           this.x -= incremento;
        if(this.teclado.pressionada(SETA_DIREITA) && 
            this.x < this.context.canvas.width - 20)
            this.x += incremento;
        if(this.teclado.pressionada(SETA_ACIMA) && this.y > 0)
            this.y -= incremento;
        if(this.teclado.pressionada(SETA_ABAIXO) && 
          this.y < this.context.canvas.height)
            this.y += incremento;
    }, 
    desenhar: function(){
        if(this.teclado.pressionada(SETA_ESQUERDA))
            this.spritesheet.linha = 1;
        else if(this.teclado.pressionada(SETA_DIREITA))
            this.spritesheet.linha = 2;
        else
            this.spritesheet.linha = 0;
        
        this.spritesheet.desenhar(this.x, this.y);
        this.spritesheet.proximoQuadro();
         
    },
    posicionar: function(){
        let canvas = this.context.canvas;
        this.x = canvas.height /2 - 18;
        this.y = canvas.width - 48;
    }
}