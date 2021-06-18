class NegociacaoController {
    private _inputData: HTMLInputElement; //private _inputData: JQuery;
    private _inputQuantidade: HTMLInputElement; //private _inputQuantidade: JQuey;
    private _inputValor: HTMLInputElement; // private _inputValor: JQuery;
    private _negociacoes: Negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView("#negociacoesView");
    private _mensagemView = new MensagemView("#mensagemView");

    constructor() {
        this._inputData = <HTMLInputElement>document.querySelector("#data"); // this._inputData = $("#data");
        this._inputQuantidade = <HTMLInputElement>document.querySelector("#quantidade"); //this._inputQuantidade = $("#quantidade")
        this._inputValor = <HTMLInputElement>document.querySelector("#valor"); //this._inputValor = $("#valor");
        this._negociacoesView.update(this._negociacoes);
    }

    adiciona(event: Event): void {
        
        event.preventDefault();
        const negociacao = new Negociacao(
            new Date(this._inputData.value.replace(/-/g, ',')), //new Date(this._inputData.val()).replace(/-/g, ',')),
            parseInt(this._inputQuantidade.value), //parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.value) //parseFloat(this._inputValor.val())
        );

        this._negociacoes.adiciona(negociacao) ;
        //console.log(negociacao);

        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update("Negociação adicionada com sucesso"); 

/*      this._negociacoes.paraArray().forEach(negociacao => {
            console.log(negociacao.data);
            console.log(negociacao.quantidade);
            console.log(negociacao.valor);
        }) */

    }
}

