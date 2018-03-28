import '@webcomponents/custom-elements';
export class NerdRouter {
    constructor(){

        this.routerBox=new Map;
     

    }
    router(){

        const location=window.location.hash.slice(2);
       alert(location)
        return location;
           
    }
    add(router,component){

      // let box=new Map;
      this.routerBox.set(router,component);

    }
   element(){
       
        const substract=this.router();
        
      if(typeof substract !='undefined'){

        console.log(this.routerBox)
            let obj=this.routerBox.get(substract);
           // console.log(obj);
           const el= `<${obj}></${obj}>`;
                       
            return el;
       }else{

        console.log('URL não encontrada')
           return ' ';
        
      }

    }
    exec(){
       
        let view=document.querySelector('nd-view');

        //console.log(this.element());
        console.log(view);
        let element=this.element();
      //  if(element !=='<undefined />' ){
            view.innerHTML=""
            view.innerHTML=element;


          // return window.location.reload;
        

         // return  view;
       // return this;
       // }

    }

   
}

export class NdView extends HTMLElement{

    constructor(){
        super();

        const view=document.createElement('div');
      /*  const content=this.innerHTML;
        view.innerHTML=content;
        this.appendChild(view);*/
        
        //this.router();
        // this.go()

    }

     

}
customElements.define('nd-view',NdView);
export class NdLink extends HTMLElement{
    constructor(){
        super();
        window.ndGet='';

        let newComponent='';

       this.url_normal=window.location;
        const myUrl=this.getAttribute('url');
        const myComponent=this.getAttribute('component');

     //   console.log(myComponent)
      //  const interComponent=`< ${myComponent} />`
        
        const myId=this.getAttribute('id');
        const myGet=this.getAttribute('get');
        if(myComponent !==''){
             newComponent=`<${myComponent}></${myComponent}>`;

            // newComponent=document.createElement(myComponent);
        }
       

      
       // console.log(myUrl);   

        if(myGet !=null){
            window.ndGet=myGet;
        }
        const view=document.querySelector('nd-view');
       

        this.anchor=document.createElement('A');
        this.anchor.href='javascript:void(0)';
       
        this.anchor.innerHTML=this.innerHTML;
        this.innerHTML='';
        
        this.anchor.addEventListener('click',()=>{
            this.goUrl(myUrl);
           // let view=document.createElement('nd-view');
            console.log(view);
           // view.appendChild(newComponent);
           view.innerHTML=null;
           view.innerHTML=newComponent
        //  view.appendChild(newComponent);
        
            
        })
        this.appendChild(this.anchor);
       // this.clearContent(this);
        

    
    }

    goUrl(variable){

       // const url_normal=window.location;

        const location=this.url_normal+''+variable;
        if( location !=this.url_normal){
           // return location;
            history.pushState(variable,"Document",variable);
            return false;

        }else{
            return this.url_normal;
        }

    }
    goRouter(){

    }
    clearContent(new_element){

        const inner=this.innerHTML;
        this.innerHTML='';
        new_element.innerHTML=inner;

       

    }
}

customElements.define('nd-link',NdLink);




/*
function getHASH(){
    const hash=window.location.hash.slice(1);
    const pares=hash.split('&');
    const chaves=pares.map(function (par){
        const chave_valor=par.split('=');
            return{
                chave:chave_valor[0],
                valor:chave_valor[1]
            }
    })
    return chaves;
}

 var url = "https://andafter.org";
  alert("Encode : " + encodeURIComponent(url));
  alert("Decode: " + decodeURIComponent(url));


*/