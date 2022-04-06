function Fundo(context, imagem){
    this.context = context;
    this.imagem = imagem;
    this.velocidade = 0;
    this.posicaoEmenda = 0;
}
Fundo.prototype = {
    atualizar: function(){
        this.posicaoEmenda +=
            this.velocidade * animacao.decorrido / 1000;
        if(this.posicaoEmenda > this.imagem.width)
            this.posicaoEmenda = 0;
    },
    desenhar: function(){
        
        let img = this.imagem;
        let posicaoX = this.posicaoEmenda - img.width;
        this.context.drawImage(img, posicaoX, 0, img.width, img.height);
        
        posicaoX = this.posicaoEmenda;
        this.context.drawImage(img, posicaoX, 0, img.width, img.height);
        
    }
}