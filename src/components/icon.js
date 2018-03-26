import '@webcomponents/custom-elements';
import {Creator} from '../../dist/nerdcreator';
import {InterBind,dataBind} from '../../dist/nerdbinds';


 export class Icon extends Creator{
  constructor(){
    super();
     // let variavel="Cotton";
     const gatos=[
       {
         name:'Cotton',
         type:'Himalaio'
       },
       {
        name:'Kali',
        type:'Exotico'
      }

     ]
     super.render(`
    <div>
     
  </div>`);

    dataBind(gatos);

    
  }

    

}
customElements.define('nd-icon',Icon);


    





