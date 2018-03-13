export class NerdRouter {
    constructor(parameter){

        
            console.log(parameter[0]['url'])
       
    }
}

export class NdView extends HTMLElement{

    constructor(){
        super();

        const view=document.createElement('div');


        this.appendChild(view);
    }

    get router(){
        
    }

}
export class NdLink extends HTMLElement{
    constructor(){
        super();

        const myUrl=this.getAttribute('url');
        const myComponent=this.getAttribute('component');
        const myId=this.getAttribute('id');

       // const div=document.createElement('div');
        const link=document.createElement('a');
        const view=document.querySelector('nd-view');
        
        this.addEventListener('click',()=>{
            view.innerHTML=myComponent;
        })
        link.href=this.url(myUrl);
        this.clearContent(link);
        this.appendChild(link);

    
    }

    url(variable){

        const url_normal=window.location;

        const location=url_normal+'#'+variable;
        if( location !=url_normal){
            return location;
        }else{
            return url_normal;
        }
    }
    goRouter(){

    }
    clearContent(new_element){
        new_element.textContent=this.textContent;

        this.textContent='';

    }
}
customElements.define('nd-link',NdLink);