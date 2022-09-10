
import { SenhaController } from "./controller/SenhaController.js";
import { Events } from "./view/Events.js";


var section = document.querySelector('.password__generator')
var parameters = ''

/*Chamar a classe Events para ativar os eventos dos elementos */

var evento =  new Events();
evento.events();

/*Ouve o evento de click, seleciona o target, gera os parametros para a geração da senha  e cria uma instancia de Senha Conntroller gera uma senha */
section.addEventListener('click',(e)=>{
    if(e.target.dataset.event === 'generator'){
        let parameters  = evento.parameters_generator()
        let generator_password = new SenhaController(parameters[0],parameters[1],parameters[2])
    }
})
/*Ouve o evento de mousemove, seleciona o target e a tecla do mouse,gera os parametros para a geração da senha e cria uma instancia de Senha Conntroller que gera uma senha */
section.addEventListener('mousemove',(e)=>{
    if(e.target.id === 'range' && e.which === 1){
        let parameters  = evento.parameters_generator()
        let generator_password = new SenhaController(parameters[0],parameters[1],parameters[2])

    }
})
/*Ouve o evento de load e cria uma instancia de Senha Conntroller que cria a senha */

window.addEventListener('load',()=>{
    var evento =  new Events();
    evento.events();
    let parameters  = evento.parameters_generator()
    let generator_password = new SenhaController(parameters[0],parameters[1],parameters[2])

})