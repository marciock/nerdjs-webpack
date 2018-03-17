import '@webcomponents/custom-elements';
import {Creator} from '../../dist/nerdcreator';
import {InterBind,dataBind} from '../../dist/nerdbinds';


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
      <table>
        <thead>
          <tr>
            <th>Nome </th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody nd-bind="datable">
          <tr >
          <td nd-content="name"> </tb>
          <td nd-content="type"></tb>
          </tr>

        </tbody>
      </table>
  </div>`);

    dataBind(gatos);

    
  }

    

}
customElements.define('meu-div',myClasse);


    





