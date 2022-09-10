import { Base } from "../controller/Base.js"

export class Events{
    constructor(){
        this.base =  new Base();
        this.characters = []
        this.parameters = ''

    }
    events(){
        this.base.elements.range.addEventListener('mousemove',(e)=>{
            if(e.which === 1) this.base.elements.length.value = this.base.elements.range.value;
        })
        
        this.base.elements.length.addEventListener('click',(e)=>{
            this.base.elements.range.value = e.target.value
        })
        this.base.elements.radio_buttons.forEach((btn)=>{
            btn.addEventListener('click', (e)=>{
                if(e.target.id == 'easy'){ this.base.elements.checkbox.forEach((check)=>{
                    if(check.dataset.tipo == 'easy'){
                        check.checked = true;
                    }else{
                        if(check.checked){
                            check.checked =  false;
                            check.disabled = true;
                        }
                    }
                })
                }else{
                    if(e.target.id == 'all'){
                        this.base.elements.checkbox.forEach((check)=>{
                            check.checked = true
                        })
                    }if(e.target.id == 'read'){
                        this.base.elements.checkbox.forEach((check)=>{
                            check.disabled = false;
                        })
                    }
                }
            })
        this.base.elements.copy.addEventListener('click',()=>{
            navigator.clipboard.writeText(this.base.elements.password.textContent)
        })
    })
    }
    parameters_generator(){
        let characters_acessory = []
        this.base.elements.radio_buttons.forEach((btn)=>{
            btn.checked? this.parameters = btn.id : btn
        })
        this.base.elements.checkbox.forEach((check)=>{
            check.checked ? characters_acessory.push(check): check
        });
        characters_acessory.length === 1 ? characters_acessory[0].disabled = true : characters_acessory.forEach(check => check.disabled = false)
        this.characters = characters_acessory.map(check => check.id)
        
        return [this.base.elements.length.value, this.characters, this.parameters]
    }

}   