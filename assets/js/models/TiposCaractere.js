/**
 * Classe que cria os caracteres e retorna aleatoriamente um tipo de caractere
 */
class TipoCaractere{
    constructor(){
       this.alpha = Array.from(Array(26)).map((e, i) => i + 65);
       this.uppercase = this.alpha.map((x) => String.fromCharCode(x)),
       this.lowercase = this.uppercase.map((x) => x.toLowerCase());
       this.number = [...Array(10).keys()],
       this.special = ['/','*','@','!','$','%','&','(',')','<','>','/','?','[',']','-']
    }
    
    
    caractere(tipo){
        const lista_caracteres = {
            uppercase: this.uppercase,
            lowercase: this.lowercase,
            number: this.number,
            special: this.special
        }
        let lista = lista_caracteres[tipo];
        let c = lista[Math.floor(Math.random() * lista.length)];
        return c
        
    }

}

export default TipoCaractere;