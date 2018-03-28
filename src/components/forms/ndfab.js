import '@webcomponents/custom-elements';
import {NdView,NdLink} from '../../../dist/nerdrouter';
import {Creator} from '../../../dist/nerdcreator';

 
export class  NdFab extends Creator{

  constructor(){
    
      super();
    
  //    const data='';
   // this.init();
      const list=this.composer();
     
      super.render(`
        
      <div class="fixed-action-btn">
      <a class="btn-floating btn-large red">
        <i class="large material-icons">mode_edit</i>
      </a>
        <ul>
         ${list}
        </ul>
     </div>
   
      `);

          
    }
    composer(){

      const attrData=this.getAttribute('data');
      const data=attrData;
       const db=data;
       console.log(db)
      let list=new String;
      if(db !==null || typeof db !=='undefined'){
        for(let i=0;i<db.length;i++){
           list += `<li><nd-link class="btn-floating ${db[i]['color']}" url="${db[i]['url']}" component="${db[i]['component']}"><i class="material-icons">${db[i]['icon']}</i></nd-link></li>`
        }
      }else{
        list=` <li><a class="btn-floating blue"><i class="material-icons">attach_file</i></a></li>`

        
      }

      return list;
    }
    init(){
      let elem = document.querySelector('.fixed-action-btn');
    //  let instance = M.FloatingActionButton.init(elem, options);
    }
}
    
   

    
      
  

 // window.suportCustomElements="customElements" in window;
  customElements.define('nd-fab',NdFab);
  
  
      
  
  
  
  
  
  