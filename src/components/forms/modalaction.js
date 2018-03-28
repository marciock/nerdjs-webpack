import '@webcomponents/custom-elements';
//import {NdView,NdLink} from '../../dist/nerdrouter';
import {Creator} from '../../../dist/nerdcreator';


  
export class ModalAction extends Creator{

  constructor(){
    
      super();
      
      
      super.render(`
   
          <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat" id="btmodal"></a>
       
   
      `);

     

        
    }
    composer(){

        const btmodal=document.getElementById('btmodal');
        const action=this.getAttributes('action');
        const content=this.textContent;
        btmodal.textContent=content;
         
        


    }
    actions(action){
        var elem = document.querySelector('.modal');
        var instance = M.Modal.init(elem, options);
      

        switch (action) {
            case 'send':
                //envia por JSON
                console.log('enviar')
                break;
            case 'cancel':
                instance.close();
            
            break;
        
            default:
                break;
        }
    }
    

    
      
  
  }
  window.suportCustomElements="customElements" in window;
  customElements.define('modal-action',ModalAction);
  
  
      
  
  
  
  
  
  