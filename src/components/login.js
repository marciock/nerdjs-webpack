import '@webcomponents/custom-elements';
import {NdView,NdLink} from '../../dist/nerdrouter';
import {Creator} from '../../dist/nerdcreator';

import {NdText} from './forms/ndtext';
import {ModalAction} from './forms/modalaction'
  
export class Login extends Creator{

  constructor(){
    
      super();
       // let variavel="Cotton";
      
      
      super.render(`
        
      <!-- Modal Structure -->
      <div id="modal1" class="modal">
        <div class="modal-content">
          <h4>Login de Acesso</h4>
            <div class="center">
                <nd-text type="text" name="usuario" col="col s2">Usuário</nd-text>
                <nd-text type="password" name="senha"  col="col s2">Senha</nd-text>
            </div>
        </div>
        <div class="modal-footer">
            <modal-action action="cancel">Entrar</modal-action>
            <modal-action action="send">Cancelar</modal-action>
        </div>
      </div>
   
      `);

     

        
    }
    

    
      
  
  }
  window.suportCustomElements="customElements" in window;
  customElements.define('nd-login',Login);
  
  
      
  
  
  
  
  
  