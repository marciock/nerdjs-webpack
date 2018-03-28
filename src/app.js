import '@webcomponents/custom-elements';

import {NdView,NdLink} from '../dist/nerdrouter';
import {Creator} from '../dist/nerdcreator';


import {NavBar} from './components/navbar';
import {Icon} from './components/icon';
import {Documentos} from './components/documentos';
import {Usuarios} from './components/usuarios';
//import {Login} from './components/login';



 
export class Apps extends Creator{

  constructor(){
    
      super();
       // let variavel="Cotton";
      
      
       super.render(`
       <nav-bar></nav-bar>
       <div  style="margin-top:5em;">
        
         <nd-view id="view"></nd-view>
       </div>
 
    `);

    this.show();
   

      
  }
  show(){
    const view=document.getElementById('view');

   // let icon=document.createElement('nd-icon');

    console.log(view.innerHTML=`<nd-icon></nd-icon>`);
    
    return view.innerHTML=`<nd-icon></nd-icon>`;

 //   view.style='margin-top:3em;'

    

  }
    

    
      
  
  }
//  window.suportCustomElements="customElements" in window;
 
  customElements.define('nd-app',Apps);
  
  
      
  
  
  
  
  
  