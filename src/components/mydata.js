import '@webcomponents/custom-elements';
import {Creator} from '../../dist/nerdcreator';


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
      super.render(`<div nd-for data="mydata">
      <h3>{name}</h3>
      <h3>{type}</h3>
      </div>`);
     
    }
  
      
  
  }
  customElements.define('my-data',myData);
  
  
      
  
  
  
  
  
  