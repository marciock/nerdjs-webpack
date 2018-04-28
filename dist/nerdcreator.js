
import '@webcomponents/custom-elements';

window.state=[];
export class Creator extends HTMLElement{
    
    constructor(){
     super();
      
      

  }
  render(){}
  connectedCallback(){
        this.state=window.state;
      this.innerHTML=this.render();
      
  }
 
  getProps(prop){

    let myProp=this.getAttribute(prop);

    return myProp;

}
setState(state,value){
    window.state[state]=value;
    return window.state;
}

  
        

          
}   //end class