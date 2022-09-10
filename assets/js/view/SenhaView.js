
export class SenhaView{
    constructor(classificao,senha){
        this.classificao = classificao
        this.elementosView = {
            Muito_Fraca: ['Muito Fraca','url("../assets/img/muito_fraca.jpg")','#f00'],
            Fraca:['Fraca','url("../assets/img/fraco.jpg")','#ff8181'],
            Boa:['Boa','url("../assets/img/boa.jpg")','#ffae00'],
            Forte:['Forte','url("../assets/img/forte.jpg")','#0099ff'],
            Muito_Forte:['Muito Forte','url("https://user-images.githubusercontent.com/93490417/189467967-33c18018-4fe4-4411-b53d-71750413ab98.jpg)
")','#0000ff']
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
