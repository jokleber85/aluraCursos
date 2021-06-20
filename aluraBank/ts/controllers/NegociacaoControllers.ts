import { Negociacoes, Negociacao } from "../models/index";
import { NegociacoesView, MensagemView } from "../views/index";

export class NegociacaoController {
    private _inputData: HTMLInputElement; //private _inputData: JQuery;
    private _inputQuantidade: HTMLInputElement; //private _inputQuantidade: JQuey;
    private _inputValor: HTMLInputElement; // private _inputValor: JQuery;
    private _negociacoes: Negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView("#negociacoesView", true);
    private _mensagemView = new MensagemView("#mensagemView", true);

    constructor() {
        this._inputData = <HTMLInputElement>document.querySelector("#data"); // this._inputData = $("#data");
        this._inputQuantidade = <HTMLInputElement>document.querySelector("#quantidade"); //this._inputQuantidade = $("#quantidade")
        this._inputValor = <HTMLInputElement>document.querySelector("#valor"); //this._inputValor = $("#valor");
        this._negociacoesView.update(this._negociacoes);
    }

    adiciona(event: Event): void {

        const t1 = performance.now();
        
        event.preventDefault();

        let data = new Date(this._inputData.value.replace(/-/g, ',')); //new Date(this._inputData.val()).replace(/-/g, ',')),


        if (!this._ehDiaUtil(data)){
        
            this._mensagemView.update("As negociações só poderão ser realizadas apenas em dias úteis");
            return
        }

        const negociacao = new Negociacao(
            data,
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

        const t2 = performance.now();
        console.log(`Tempo execução método Adiciona: ${t2 - t1} ms`);
    }

    private _ehDiaUtil(data: Date){

        return data.getDay() != DiaDaSemana.Sábado && data.getDay() != DiaDaSemana.Domingo;
    }
}

enum DiaDaSemana{
    Domingo,
    Segunda,
    Terça,
    Quarta,
    Quinta,
    Sexta,
    Sábado
}
