function Buraco(context, imagem){
    this.context = context;
    this.imagem = imagem;
    this.x = 0;
    this.y = 0;
    this.velocidade = 0;
}
Buraco.prototype = {
    atualizar: function(){
        this.x += this.velocidade * animacao.decorrido / 1000;
        if(this.x < this.context.canvas.width){
            animacao.excluirSprite(this);
            colisor.excluirSprite(this);
        }
    },
    desenhar: function(){
       let ctx = this.context;
       let img = this.imagem;
        ctx.drawImage(img, this.x, this.y, img.width, img.height);
    },
    retangulosColisao: function(){
        let rets =[
            {x: this.x+20, y: this.y+1, largura:25, altura:10},
            
        ];
        let ctx = this.context;
        for(var i in rets){
        ctx.save();
        ctx.strokeStyle = 'yellow';
        ctx.strokeRect(rets[i].x, rets[i].y, rets[i].largura, rets[i].altura);
        ctx.restore();
        }
        return rets;
    },
    colidiuCom: function(outro){
        
    }
}