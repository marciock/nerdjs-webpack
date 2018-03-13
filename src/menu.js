//import 'babel-polyfill';
import {Creator} from '../dist/nerdcreator';

  export class Menu extends Creator {

    constructor(){
        super();
        super.render(
            `<h1>teste</h1>`       
            
        );

       // super.show();
       return super.show('nd-menu');
    }
    
}
const menu=new Menu();
//const menu=new Menu();






//window.onload=()=>{
 // teste();
   // console.log(teste());
//}
//document.body.appendChild(teste())




//let ti=document.getElementsByTagName(tg);
