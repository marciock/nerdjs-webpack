//import '@webcomponents/custom-elements';
export class NerdRouter {
    constructor(){

        this.routerBox=new Map;
       // this.view=document.querySelectorAll('nd-view');
      // const view=document.querySelector('nd-view');

      
       //  const result=this.exec();
         
         //   view.innerHTML=result;

        

      //  return this.routerBox;


    }
    router(){

        const location=window.location.hash.slice(2);
        //document.write=location;
       // console.log(location)
        return location;
       
       
        
    }
    add(router,component){

      // let box=new Map;
      this.routerBox.set(router,component);
       

      

     //  console.log(this.routerBox)
      // return this.routerBox;


    }
   element(){
       
        const substract=this.router();
        
      if(typeof substract !='undefined'){

        console.log(this.routerBox)
            let obj=this.routerBox.get(substract);
           // console.log(obj);
           const el= `<${obj}/>`;
           // const el=this.view.appendChild(obj)
            // this.view.appendChild(obj)
            
            return el;
       }else{

        console.log('URL não encontrada')
           return ' ';
        
      }


      //  }

    }
    exec(){
        let element=this.element();
        let view=document.querySelector('nd-view');

        console.log(element);
        console.log(view);

        view.innerHTML=element;
        return this;

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


       this.url_normal=window.location;
        const myUrl=this.getAttribute('url');
        const myComponent=this.getAttribute('component');
        const interComponent=`< ${myComponent} />`
        const myId=this.getAttribute('id');
        const myGet=this.getAttribute('get');
        let newComponent=document.createElement(myComponent);


       
        console.log(myUrl);   

        if(myGet !=null){
            window.ndGet=myGet;
        }

       // const div=document.createElement('div');
        const link=document.createElement('a');
        const view=document.querySelector('nd-view');

        // usado para a tag 'a'

     /*   this.url_normal=window.location;
        const myUrl=link.getAttribute('url');
        const myComponent=link.getAttribute('component');
        const myId=link.getAttribute('id');
        const myGet=link.getAttribute('get');
        let newComponent=document.createElement(myComponent); */
        
        
      //  this.addEventListener('click',()=>{
            console.log(newComponent);

          // view.innerHTML="";
           
      //  })
        //link.href=this.url(myUrl);
        link.href='javascript:void(0)';
        link.addEventListener('click',()=>{
            this.url(myUrl);
            view.appendChild(newComponent);

            console.log(newComponent);
        })
        this.clearContent(link);
        this.appendChild(link);

    
    }

    url(variable){

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
        new_element.textContent=this.textContent;

        this.textContent='';

    }
}this
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