function Buraco(context, imagem){
    this.context = context;
    this.imagem = imagem;
    this.x = 0;
    this.y = 0;
    this.velocidade = 0;
}
Buraco.prototype = {
    atualizar: function(){
        this.x += this.velocidade;
        if(this.x > this.context.canvas.width){
            this.animacao.excluirSprites(this);
            this.colisor.excluirSprites(this);
        }
    },
    desenhar: function(){
       let ctx = this.context;
       let img = this.imagem;
        ctx.drawImage(img, this.x, this.y, img.width, img.height);
    }
}