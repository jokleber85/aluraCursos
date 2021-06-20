export abstract class View<T> {

    private _elemento: Element; //protected _elemento: JQuery;
    private _escapar: boolean;


    constructor(seletor: string, escapar:boolean = false) { //? indica que o parâmetro é opcional

        this._elemento = document.querySelector(seletor); //this._elemento = $(seletor);
        this._escapar = escapar;
    }

    update(model: T) {

        let template = this.template(model);

        if(this._escapar){
            template = template.replace(/<script>[\s\S]*?<\/script>/g, '');
        }

        this._elemento.innerHTML = this.template(model); //this._elemento.html(this.template(model)); 

    }

    abstract template(model: T): string;
}