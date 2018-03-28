import '@webcomponents/custom-elements';
import {NdView,NdLink} from '../../dist/nerdrouter';
import {Creator} from '../../dist/nerdcreator';
 
export class Documentos extends Creator{

  constructor(){
    
      super();
       // let variavel="Cotton";
      
      
      super.render(`
        
         <div>
           
         <h1>Documentos</h1>
         
          
         </div>
   
      `);

     

        
    }
    

    
      
  
  }
  window.suportCustomElements="customElements" in window;
  customElements.define('nd-documentos',Documentos);
  
  
      
  
  
  
  
  
  