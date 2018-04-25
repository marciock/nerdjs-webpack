
import '@webcomponents/custom-elements';
export class Creator extends HTMLElement{
    
    constructor(){
     super();
     
    
     // let shadow=this.attachShadow({mode:'open'});


        
      
    
  }
  render(){
    
   // this.innerHTML=value;
  }
  connectedCallback(){
      this.innerHTML=this.render();
  }
  
        

          
}   //end class