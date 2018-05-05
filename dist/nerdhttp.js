export class NdSession {

    constructor(){
        
    }
    set(id,controller){

       return  window.localStorage.setItem(id,controller);
    }
    remove(id){
        return window.localStorage.removeItem(id);
    }
    get(id){
        return window.localStorage.getItem(id);
    }
}

export class NdGet{

    constructor(url){
        this.url=url;
        
    }
    show(){
        const http=new XMLHttpRequest();
        http.open('GET',this.url,false);

        http.send();
           // console.log(http.responseText);
           return JSON.parse(http.responseText);
       
    }
}
export class NdPost{

    constructor(params){

        this.params=params;


    }
    send(){

        const obj=Object.keys(this.params);
        obj.map((f)=>{
        let url='';
        let params=[];
            if(f==='url'){
                 url=f;
            }else{
                params.push(f);
            }
        })
        console.log(url);
        console.log(params);
        
    }
    fetch(url,params){
        let ok=false;

        fetch(url,params).then((res)=>{
            if(res.status>=400){
                throw new Error('Bad response from Server');
            }
            return res.json();
        }).then((data)=>{
            console.log(data);
            return ok=true;
            
        })
        


    }
}
