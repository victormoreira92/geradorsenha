import TipoCaractere from "./TiposCaractere.js";
/**
 * Classe geradora de senha com tamanho,tipo_caractere e parametro e classifica a senha
 */
export class Senha {
    constructor (tamanho,tipo_caractere,parametro){
        this.tamanho_senha = tamanho;
        this.tipo = tipo_caractere;
        this.parametro = parametro
        this.ambigous = /([i,0,I,1,O,o])/
        this.listacaracteres = new TipoCaractere;
        this.senha = ''
    }
    check_ambigous(letter){
      return ! this.ambigous.test(letter)
    }
    criar_senha(){
        let i = 0;
        
          if(this.parametro == 'read'){
               for(let lista in this.listacaracteres){
                    this.listacaracteres[lista] = this.listacaracteres[lista].filter((letter,i) => this.ambigous.test(letter) ? letter = '' : letter)
               }
          }

          while(i < this.tamanho_senha){
            this.senha += this.listacaracteres.caractere(this.tipo[Math.floor(Math.random() * this.tipo.length)])
            i++
          }
        return this.senha
    }
    classificacao(){
        let classificao = ''
       if(this.tamanho_senha <=  4){
            classificao = 'Muito_Fraca';

       }else if(this.tamanho_senha > 4 && this.tamanho_senha <= 6){
            classificao = "Fraca";

       }else if(this.tamanho_senha > 6 && this.tamanho_senha <= 8){
            classificao = 'Boa';

       }else if(this.tamanho_senha > 8 && this.tamanho_senha <=  12){
            classificao = 'Forte';

       }else if(this.tamanho_senha > 12 && this.tamanho_senha <= 14){
               classificao = 'Muito_Forte';
       }else if(this.tamanho_senha > 14){
          classificao = 'Muito_Forte';
       }

       return classificao
        
    }
}