import '@webcomponents/custom-elements';
import {NdView,NdLink} from '../../dist/nerdrouter';
import {Creator} from '../../dist/nerdcreator';

import {NdFab} from './forms/ndfab'
import {fab_usuarios} from '../../assets/data/fab_usuarios';
 
export class Usuarios extends Creator{

  constructor(){
    
      super();
      const data=fab_usuarios;
      
      
      super.render(`
        <div class="container">
          <div class="row"><h4>Usuários:</h4> </div>

          <nd-fab data="${data}"></ndfab>
          
        </div>
      `);

     

        
    }
    

    
      
  
  }
  window.suportCustomElements="customElements" in window;
  customElements.define('nd-usuarios',Usuarios);
  
  
      
  
  
  
  
  
  