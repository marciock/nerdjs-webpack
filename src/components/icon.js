import '@webcomponents/custom-elements';
import {NdView,NdLink} from '../../dist/nerdrouter';
import {Creator} from '../../dist/nerdcreator';
import {menu} from  '../../assets/data/menu';
 
export class Icon extends Creator{

  constructor(){
    
      super();
       // let variavel="Cotton";
      
      const inter=this.component(menu);
      super.render(`
      <div class="container">
        <div class="row">
          ${inter}

        </div>
      </div>
      `);


        
    }
    component(data){
      const db=data;
      let icon=new String;
      for(let i=0;i<db.length;i++){
          icon +=`<div class="col s3" style="margin-top:1em;" >
          <nd-link url="${data[i]['url']}" component="${data[i]['component']}">
          <div class="center">
              <img src="${data[i]['icon']}">
              
              <p style="margin-top:0.3em;">${data[i]['title']}</p>
            </div>
          </nd-link>
        </div>`;
      }

      return icon;

    }
   
      

    }

    
      
  
  
  window.suportCustomElements="customElements" in window;
  customElements.define('nd-icon',Icon);
  
  
      
  
  
  
  
  
  