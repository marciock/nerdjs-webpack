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
export class Component{
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
        this.n=0;
      //  console.log(this.fData)
        
    }
   render(interpolation){

        let tag=interpolation;
        let result='';
        
        
        for(this.counter.n=0;this.counter.n<this.fData.length;this.counter.n++){
            
           
            counter.g=i;
            result +=tag;

          // this.counter.n=i;
            
        }
        console.log(counter)
        return result;
        
        
    }
    bind(field){
        
    const f=field;
    let n=this.n;
   const data=new Bind(this.fData);
    const result=data.bind(n,f);
    console.log(this.counter.n)
    return result;
   
}

    
    
} 