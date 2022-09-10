/**
 * Classe que armazena um objeto com todos os elementos do DOM, necessários para a geração da senha
 */
export class Base{
    constructor(){
        this.elements = {
            illustration : document.querySelector('.illustration'),
            password : document.querySelector('.password__container'),
            badge : document.querySelector('.badge'),
            length : document.querySelector('#length'),
            range : document.querySelector('#range'),
            radio_buttons : document.querySelectorAll('.radio__button'),
            checkbox : document.querySelectorAll('.checkbox'),
            copy: document.querySelector('#copy')
        }
    }
}