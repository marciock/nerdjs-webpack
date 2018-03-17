import {Bind,FilterBind, Component} from './nerdbinds';

export class DataBind{
/* Uma classe midleware, que gerencia objectos 
consumidos por databind. Utiliza um parâmetro inical 
chamado 'data', onde será injetado um objeto array ou 
um json. 
o método público bind, gera um objeto array, contendo
os campos injetados pelo parâmetro 'field'. Criando
assim, listas sem filtragem de dados. Será instanciada 
a classe  Bind(), para a execução do motor lógico onde
consumirá os dados.
o método público filterBind, gera um objeto array, sendo
filtrado pela condicional do parâmetro 'filter, contendo
os campos injetados pelo parâmetro 'field'. Criando
assim, uma lista com filtragem de dados. Será instanciada 
a classe  FilterBind(), para a execução do motor lógico onde
consumirá os dados.
o método público forBind, gera um componente dinâmico, a partir 
dos parâmetros 'fields', que representará as váriáveis dinâmicas,
que serão filtradas a partir do parâmetro 'filter'. o resultado,
gerado será de uma lista criada a partir da interpolação injetada
através do parâmetro 'interpolation'.
*/

    constructor(data){
        this.data=data;
    }
    bind(fields){
        const bFields=fields;
        const bind=new Bind(this.data,bfields);

        return bind;
    }
    filterBind(filter,fields){
        const bFilter=filter;
        const bFields=fields;
        const filterbind=new FilterBind(this.data,bfields,bFilter);

        return filterbind;
    }
    forBind(fields,fiter,interpolation){
        const bFilter=filter;
        const bFields=fields;
        const tag=interpolation;
        const component=new Component(bfields,bfiter,tag);

        return component;
    }

}