import '@webcomponents/custom-elements';


import {Creator} from '../dist/nerdcreator';
import {NavBar} from '../src/components/tools/NavBar';  
 
export class Apps extends Creator{

  constructor(){
    
      super();
       // let variavel="Cotton";
      
         const data=['banana','laranja','melao'];
     
    
         
    
 
  }
  render(){
    return (
      `<div>
        <nav-bar></nav-bar>
      
      </div>`
    )
  }
  
    
  
  

    
      
  
  }
//  window.suportCustomElements="customElements" in window;
 
  customElements.define('nd-app',Apps);
  
  
      
  
  
  
  
  
  