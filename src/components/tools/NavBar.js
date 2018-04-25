import '@webcomponents/custom-elements';

import {Creator} from '../../../dist/nerdcreator';
//import {NdLink} from '../../../dist/nerdrouter';
export class NavBar extends Creator{

    constructor(){
      
        super();
         // let variavel="Cotton";
         this.data=[
            {
                'title':'Home',
                'link':'home.js'
            },
            {
             'title':'about',
             'link':'about.js'
         }
    
        ];
          
       
      
    }
   
    render(){
          
        return (
            `<nav>
            <div class="nav-wrapper">
                <a href="#" class="brand-log">Logo</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    ${
                        this.data.map((f)=>{
                            return `<li><a href="#">${f.title}</a></li>`
                        })
                    }
                </ul>
            </div>
         </nav>
            `
        )
    }
}




customElements.define('nav-bar',NavBar);

//<nd-link url="${f.title}" component="${f.link}">${f.title}</nd-link>

/*
  super.render(`
         <nav>
            <div class="nav-wrapper">
                <a href="#" class="brand-log">Logo</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    ${
                        data.map((f)=>{
                            return `<li>${f.title}</li>`
                        })
                    }
                </ul>
            </div>
         </nav>
   
      `);
      */