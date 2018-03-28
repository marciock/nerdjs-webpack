import '@webcomponents/custom-elements';
import {Creator} from '../../dist/nerdcreator';

import {NdLink} from '../../dist/nerdrouter';
import {navbar} from '../../assets/data/navbar';

export class NavBar extends Creator{
    constructor(){
      super();

       // let variavel="Cotton";
       const post='';
       

     const options=this.listOptions();
     //
     
   // console.log(options);
      super.render(`
      
        <nav>
        <div class="nav-wrapper black">
          <a href="#" class="brand-logo">Logo</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
             
            ${this.listOptions()}
          
          </ul>
        </div>
      </nav>
    
      `);
      
     // const dataBind=new DataBind(gatos);
     

    }

    listOptions(){

      let list=new String;

      const data=navbar;

      for(let i=0;i<data.length;i++){

        list +=`<li ><nd-link   id="${data[i]['title']}"  url="${data[i]['url']}" component="${data[i]['component']}" >${data[i]['title']}</nd-link></li>`;
        

      }
      
      return list;
  }
} 
  customElements.define('nav-bar',NavBar);
  
  
      
  
  
  
  
  
  