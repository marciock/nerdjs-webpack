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