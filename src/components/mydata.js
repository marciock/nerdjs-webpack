import '@webcomponents/custom-elements';
import {Creator} from '../../dist/nerdcreator';
import {Bind,Component} from '../../dist/nerdbinds';

export class myData extends Creator{
    constructor(){
      super();

       // let variavel="Cotton";
       const post='';
       const mydata=[
        {name:'MAgali',type:'Persa' },
       {name:'Kali',type:'Exotico'},
       {name:'Koton',type:'himalaio'}
      ];

     const teste=this.listName(mydata);


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
    }

    listName(data){

      let mybind=new Component(data);
      let teste='';
    
        
    const db= mybind.render(`
      <tr>
        <td>${mybind.bind('name')}</td>
        <td>${mybind.bind('type')}</td>
      </tr>
    `);
    
      
      return db;
     // console.log(db);
     
    }

  
      
  
  }
  customElements.define('my-data',myData);
  
  
      
  
  
  
  
  
  