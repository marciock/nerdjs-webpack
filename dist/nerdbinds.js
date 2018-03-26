export class FilterBind{
    /* Gera um objeto array, a partir do parametro 'data',
    na qual será ou um objeto array ou um json, sendo filtrado 
    por uma criteria utilizando o parametro filter, listando
    registros formados pelo parametro array de 'filter'. Essa 
    função retornará um objeto com os resultados filtrados.
    */
 constructor(data){
        this.fData=data;
       
    }
    bind(filter,fields_array){


    }
    
}

export class Bind{
    /* Gera um objeto unico, a partir do parametro 'data', retornando
    um vetor, listado pelo parâmetro  'fileds'.
    */
   constructor(data){ 
       
        this.fData=data;
      
    }
     bind(key,field){
       // console.log(field)
        const result=this.fData[key][field];
        return result;
         
    }
    
}
export class ListBind{
    constructor(data){
    this.fData=data;
   // this.results=[];
}
bind(fields_array){

    let bind=new Bind(this.fData);
    let result=[];
        for(let i=0;i<this.fData.length;i++){

            for(let j of fields_array){
                let db=bind.bind(i,j)
               result.push(db);
              // console.log(db);
            }

        }
        return result;


}
}
export class Composer{
     /* Gera um objeto interpolado, a partir do parametro 'data',
    na qual será ou um objeto array ou um json, sendo filtrado 
    por uma criteria utilizando o parametro filter, listando
    registros formados pelo parametro array de 'filter'. Essa 
    função retornará um objeto com os resultados filtrados.
    O método 'render', possibilitará a interpolação de um loop
    contendo os campos ('fields') através de sua fonte de dados
    ('data').
    */
   constructor(data){ 
        this.fData=data;
           
      //  this.work=new Worker('./dist/workers/counter.js');

        
       
             
    }
   render(interpolation){

        let tag=interpolation;
        let result='';
      //  let datas=this.fData[0]['name'];
       // let fields=['name','type'];
        
        


               
        for(let n=0;n<this.fData.length;n++){
               
            result +=tag;
                    
        }
        
        return result;
        
        
    }
 
    
} 
export class DataBind{
 /* Inejta valores aos resultados da iterpolação dos objetos
 de Componet*/
    constructor(data){
        this.data=data;

    }
    bind(){
        // const interpolationMatches=['{','}']
         let tags=document.querySelectorAll('[nd-content]');
        const datable=Array.from(this.data)
        let n=0;
        let fields=[];
        let obj=Array.from(this.data);
        let  valField=[];
        let objName=Object.keys(this.data)
 
             obj.forEach((key,value)=>{
                
                for(let i in key){
                    fields.push(i);
                    valField.push(key[i])
                }
                           
            });

            for(let i of tags){
                    let tag=i.getAttribute('nd-content')
                    
                if(fields[n]===tag){

                    i.textContent=valField[n];
                }
                n++
                    console.log(i)
                 
             }

 
     }
     

}
export class ND{
    /* Inejta valores aos resultados da iterpolação dos objetos
 de Componet, a partir do atributo nd, no qual acumula o objeto atributo
 das tgs no DOM.*/
    constructor(data){
        this.data=data;
        return this.bind();
    }
    bind(){
       
       this.nd();
        

        


    }
    ndContent(){
     const ndContent=document.querySelectorAll('[nd-content]');
     let r=record;
   
        Array.from(ndContent).forEach((key)=>{
            let content=key.getAttribute('nd-content');
            let db=this.data[r][content];
            let result=key.textContent=db;
            console.log(result)
        })
        
        
    }
    nd(){
       // const r=record;
        
        let all=document.getElementsByTagName('*');
      //  console.log(all)
        const att=[];
        const val=[];
        const fields=[];
        const valField=[];
        const obj=Array.from(this.data)
        
        let ndElement=[];
        let n=0;
        let test='';
      Array.prototype.forEach.call(all,(elem)=>{
          Array.prototype.forEach.call(elem.attributes,(attr)=>{

                if(attr.name.indexOf('nd-') !=-1){
                        n++;
                      //  console.log(attr.name.indexOf('nd-'))
                       
                    
                    if( attr.name.indexOf('nd-content') !=-1){
                        let slice=attr.name;
                        ndElement.push(elem);
                     att.push(slice);
                    }else{
                        let slice=attr.name.slice(3,attr.length);
                    
                       

                    // let teste=attr.name.slice(rest,attr.length);
                        att.push(slice);
                        val.push(attr.value)
                        
                       // console.log(att)
                    }            
                }
          })
      })

        obj.forEach((key,value)=>{
            for(let i in key){
                fields.push(i);
                valField.push(key[i])
            }
        })

        

        for(let i in ndElement){
           console.log(i)
           for(let j in att){

                let f=val[j];
                let valField=this.data[i][f];
                
                if(att[i]==='nd-content'){
                    if(ndElement[i].name.indexOf('nd-link')){
                        ndElement[i].lastChild.textContent=valField;
                    }else{
                        ndElement[i].textContent=valField;
                    }
                    
                }
                if(typeof valField != 'undefined' && typeof f !='undefined'){
                    if(f==='component'){
                        console.log( ndElement[i]);
                    }
                    ndElement[i].setAttribute(f,valField);
                    
                }
                const cont=ndElement[i].getAttribute('nd-content');

                ndElement[i].lastChild.textContent=this.data[i][cont];
                 
               
           }
        }
        

       console.log(ndElement)    
      
      
      
    }
    
}

export class Interpolation{
    constructor(data){

        this.data=data;
       this.dady=document.querySelectorAll('[data-bind]');
         console.log(this.dady)
       // this.son=dady.children;
        this.tag=['{','}'];
    }
    hasBinding(element){
        return element.textContent.indexOf(this.tag[0]) >-1 &&
        element.textContent.indexOf(this.tag[1]) >-1;
    }
    interpolate_old(){
        const properties=this.data;
        let bindings=Array.from(this.dady);
       let n=0;
        let tobe=[];

        console.log(bindings)
        for(let i=0;i<properties.length;i++){
           

            bindings.forEach((binding)=>{

               
                    if(this.hasBinding(binding)===true){
                       // console.log(properties[i])
                        let value=binding.textContent.slice(1,binding.textContent.lastIndexOf(this.tag[1]));
                   
                     // if( && value !==null){
                      //  for(let i=0;i<properties.length;i++){
                          //properties.hasOwnProperty(value)
                       // console.log(value)
                        binding.textContent=properties[i][value];
                        tobe.push(binding);
                           // console.log(properties[i][value])
                     //   tobe +=binding.outerHTML;
                        }
                    
                        //  
                    //  }
                //    }

                
                });

               // tobe +=only.outHTML;
                
              


        }
          

    }
    interpolate(){
        
    }

}