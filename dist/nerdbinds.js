export function dataBind(data){

    const datable=data;
    const dady=document.querySelector('[nd-bind]');
    const ndbind=dady.getAttribute('nd-bind');
    const son=dady.children;
    const content=son;

    console.log(Object.getPrototypeOf(datable))

}