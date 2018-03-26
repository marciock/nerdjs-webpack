import '@webcomponents/custom-elements';
import {NdView,NerdRouter} from '../dist/nerdrouter';
import {Creator} from '../dist/nerdcreator';

import {Home} from './components/home';

import {NavBar} from './components/navbar';


 
export class Apps extends Creator{

  constructor(){
    
      super();
       // let variavel="Cotton";
      
     
      super.render(`
        
         <div>
           
         
           <nd-view></nd-view>
         </div>
   
      `);

      this.ndRouter=new NerdRouter();
      this.ndRouter.add('menu','nav-bar');
     
      this.ndRouter.add('home','nd-home')
     
      this.ndRouter.exec();

        
    }

    
      
  
  }
  window.suportCustomElements="customElements" in window;
  customElements.define('nd-app',Apps);
  
  
      
  
  
  
  
  
  