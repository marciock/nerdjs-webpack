import '@webcomponents/custom-elements';
import {Creator} from '../../dist/nerdcreator';
import {Interpolation,Composer} from '../../dist/nerdbinds';


 export class Home extends Creator{
  constructor(){
    super();
    
    const myData=[
      {
        title:'Comitês',
        image: '../../assets/icons/comites.sgv'
      },
      {
        title: 'Notícias',
        image:'../../assets/icons/noticias.svg'
      }
    ]
  

      const variable=this.interpolation(myData)
     
     super.render(`<div class="container">
        ${variable}
     </div>`);


       // this.interpolation(myData);
    

    
  }
  interpolation(data){
    const composer=new Composer(data);
      let inter=new Interpolation(data);
    const db=composer.render(`<div class="col s3 center-text" data-bind><img src="{image}" id="figura"><br><p>{title} /sei la</p></div>`);
    
    inter.interpolate();

  }

    

}
customElements.define('nd-home',Home);


    





