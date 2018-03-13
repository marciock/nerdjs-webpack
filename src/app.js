import '@webcomponents/custom-elements';
import {NdView,NdLink} from '../dist/nerdrouter';
import {Creator} from '../dist/nerdcreator';

import {myClasse} from './components/meudiv';
import {myData} from './components/mydata';

export class Apps extends Creator{

  constructor(){
    
      super();
       // let variavel="Cotton";
      
       const endereco=[{
        url:'/',
        component:'teste'
      },
      {
       url:'#about',
       component:'about'
     },
     ]
     

      super.render(`
        
         <div>
            <nd-link url="about" component="<meu-div />">Meu Div</nd-link>
            <nd-link url="contact" component="<my-data />">My data</nd-link>
           <nd-view></nd-view>
         </div>
   
      `);
        
    }
    
      
  
  }
  window.suportCustomElements="customElements" in window;
  customElements.define('nd-app',Apps);
  
  
      
  
  
  
  
  
  