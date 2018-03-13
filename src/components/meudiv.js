import '@webcomponents/custom-elements';
import {Creator} from '../../dist/nerdcreator';
import {InterBind, dataBind} from '../../dist/nerdbinds';


 export class myClasse extends Creator{
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
      <ul nd-bind="gato">
        <li content="gato.name">
      </ul>
    </div>`);

    dataBind(gatos);

    
  }

    

}
customElements.define('meu-div',myClasse);


    





