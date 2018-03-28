import '@webcomponents/custom-elements';
//import {NdView,NdLink} from '../../dist/nerdrouter';
import {Creator} from '../../../dist/nerdcreator';

 
export class NdText extends Creator{

  constructor(){
    
      super();
    
      this.values='';
      
      super.render(`
        
      <div class="input-field" id='myDiv'>
        <input placeholder="Placeholder"   class="validate">
        <label ></label>
        </div>
   
      `);

     
        this.composer();
        
    }
    composer(){

        const input=document.querySelector('input');
        const label=document.querySelector('label');
        const div=document.getElementById('myDiv');

        const nCols=this.getAttributes('col');
        const type=this.getAttributes('type');
        const myValue=input.getAttributes('value');
        const myFor=this.getAttributes('for');
        const myName=this.getAttributes('name');
        const textLabel=this.textContent;


        this.getValue(myValue);

        div.classList.add(nCols);
        input.setAttribute('type',type);
        label.setAttributes('for',myFor);
        label.textContent=textLabel;
        
    }
    getValue(value){
        return this.values=value;
    }
    

    
      
  
  }
 // window.suportCustomElements="customElements" in window;
  customElements.define('nd-text',NdText);
  
  
      
  
  
  
  
  
  