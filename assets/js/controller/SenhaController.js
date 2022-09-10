import { Senha } from "../models/Senha.js";
import { SenhaView } from "../view/SenhaView.js";
import {Base} from "./Base.js"

/**
 * Classe Controller que recebe tamanho,lista,parametro e cria senha e a classsifica
 */
export class SenhaController{
  constructor(tamanho, lista, parametro){
    this.tamanho = tamanho;
    this.lista = lista;
    this.parametro = parametro;

    
    this.gerar_senha = new Senha(this.tamanho, this.lista, this.parametro);
    this.senha = this.gerar_senha.criar_senha();
    this.classificaco = this.gerar_senha.classificacao();
    this.view = new SenhaView(this.classificaco,this.senha);
    this.base = new Base();
    this.criar_view()
  }

  criar_view(){
    var lista = this.view.estilos();
    this.base.elements.password.innerHTML = '';
    this.base.elements.password.innerHTML = this.view.render()
    this.base.elements.badge.textContent = lista[0];
    this.base.elements.illustration.style.backgroundImage = lista[1];
    this.base.elements.badge.style.background = lista[2];
  }

    
}

