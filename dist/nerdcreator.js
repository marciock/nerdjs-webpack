
export class Creator extends HTMLElement{
    
    constructor(){
     super();
     
    
   //  this.attr_for=this.getAttribute('nd-for');
     const div=document.createElement('div');
     this.appendChild(div);

     // return myElement;
      
    
  }
  render(value){
    this.innerHTML=value;
  }
  
        

          
}   //end class