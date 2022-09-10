
export class SenhaView{
    constructor(classificao,senha){
        this.classificao = classificao
        this.elementosView = {
            Muito_Fraca: ['Muito Fraca','url("https://user-images.githubusercontent.com/93490417/189468048-d5d00abd-fba6-4ec3-9379-b42a8cb39563.jpg")','#f00'],
            Fraca:['Fraca','url("https://user-images.githubusercontent.com/93490417/189468113-86e685ba-fba8-4fc7-b486-11067d6f7bbe.jpg")','#ff8181'],
            Boa:['Boa','url("https://user-images.githubusercontent.com/93490417/189468062-78d6d81f-9f21-4a8f-a0e4-acb1aeec9896.jpg")','#ffae00'],
            Forte:['Forte','url("https://user-images.githubusercontent.com/93490417/189468082-0acdf843-44d5-487d-a7c1-0beeed7eb1f9.jpg")','#0099ff'],
            Muito_Forte:['Muito Forte','url("https://user-images.githubusercontent.com/93490417/189467967-33c18018-4fe4-4411-b53d-71750413ab98.jpg")','#0000ff']
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
