import '@webcomponents/custom-elements';
import {Creator} from '../../dist/nerdcreator';
import {Bind,Composer,ND} from '../../dist/nerdbinds';
import {NdLink} from '../../dist/nerdrouter';
import {navbar} from '../../assets/data/navbar';
import {meuDiv} from '../components/meudiv';
export class NavBar extends Creator{
    constructor(){
      super();

       // let variavel="Cotton";
       const post='';
       

     const options=this.listOptions(navbar);
     //
     
   //  console.log(teste);
      super.render(`
      
        <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">Logo</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
             
            ${options}
          
          </ul>
        </div>
      </nav>
    
      `);
      
     // const dataBind=new DataBind(gatos);
      const nd=new ND(navbar);
   //  nd.bind();

    }

    listOptions(data){

      let mybind=new Composer(data);
      
      
        
    const db= mybind.render(`
     <li><nd-link nd-url="url" nd-id="title" nd-component="component" nd-content="title"></nd-link></li>
    `);
    
    
      
      return db;
     // console.log(db);
     
    }

  
      
  
  }
  customElements.define('nav-bar',NavBar);
  
  
      
  
  
  
  
  
  