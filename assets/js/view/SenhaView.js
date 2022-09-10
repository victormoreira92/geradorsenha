
export class SenhaView{
    constructor(classificao,senha){
        this.classificao = classificao
        this.elementosView = {
            Muito_Fraca: ['Muito Fraca','url("https://github.com/victormoreira92/geradorsenha/blob/main/assets/img/muito_fraca.jpg")','#f00'],
            Fraca:['Fraca','url("https://github.com/victormoreira92/geradorsenha/blob/main/assets/img/fraco.jpg")','#ff8181'],
            Boa:['Boa','url("https://github.com/victormoreira92/geradorsenha/blob/main/assets/img/boa.jpg")','#ffae00'],
            Forte:['Forte','url("https://github.com/victormoreira92/geradorsenha/blob/main/assets/img/forte.jpg")','#0099ff'],
            Muito_Forte:['Muito Forte','url("https://github.com/victormoreira92/geradorsenha/blob/main/assets/img/muito_forte.jpg")','#0000ff']
        }
        this.element = '';
        this.senha = senha;
    }
    estilos(){
        for(let i in this.elementosView){
            if(i == this.classificao) 
                return this.elementosView[i]
        }
       
    }
    render(){
        this.element = `<span class='password'>${this.senha}</span>`
        return this.element

    }
}
