import '@webcomponents/custom-elements';
import {Creator} from '../../dist/nerdcreator';
import {Bind,Component,DataBind} from '../../dist/nerdbinds';
import {gatos} from './data';
export class myData extends Creator{
    constructor(){
      super();

       // let variavel="Cotton";
       const post='';
       

     const teste=this.listName(gatos);
      console.log(window.ndGet);

   //  console.log(teste);
      super.render(`<div>
      <table>
      <thead>
        <tr>
          <th>Nome </th>
          <th>Tipo</th>
        </tr>
      </thead>
      <tbody nd-bind="datable">
        ${teste}

      </tbody>
    </table>
        
      </div>`);
      
      const dataBind=new DataBind(gatos);

      dataBind.bind()

    }

    listName(data){

      let mybind=new Component(data);
      let teste='';
      
        
    const db= mybind.render(`
      <div class="fixed-action-btn">
      <a class="btn-floating btn-large red">
        <i class="large material-icons">mode_edit</i>
      </a>
      <ul>
        <li><a class="btn-floating red"><i class="material-icons">insert_chart</i></a></li>
        <li><a class="btn-floating yellow darken-1"><i class="material-icons">format_quote</i></a></li>
        <li><a class="btn-floating green"><i class="material-icons">publish</i></a></li>
        <li><a class="btn-floating blue"><i class="material-icons">attach_file</i></a></li>
      </ul>
    </div>
    `);
    
    
    console.log(db);
      return db;
     // console.log(db);
     
    }

  
      
  
  }
  customElements.define('nd-login',myData);
  
  
      
  
  
  
  
  
  