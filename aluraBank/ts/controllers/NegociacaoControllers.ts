// import {logarTempoDeExecucao} from "../helpers/decorators/index";
//import { domInject } from "../helpers/decorators/index"; Erro, aguardando resposta do forum da Alura

import { Negociacoes, Negociacao, NegociacaoParcial } from "../models/index";
import { NegociacoesView, MensagemView } from "../views/index";
import { throttle } from "../helpers/decorators/index";
import { NegociacaoService } from '../services/index';
import { imprimir } from "../helpers/index";

export class NegociacaoController {

    //@domInject('#data')
    private _inputData: HTMLInputElement; //private _inputData: JQuery;

    //@domInject('#quantidade')
    private _inputQuantidade: HTMLInputElement; //private _inputQuantidade: JQuery;

    //@domInject('#valor')
    private _inputValor: HTMLInputElement;  //private _inputValor: JQuery; 

    private _negociacoes: Negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView("#negociacoesView", true);
    private _mensagemView = new MensagemView("#mensagemView", true);

    private _service = new NegociacaoService();

    constructor() {
        this._inputData = <HTMLInputElement>document.querySelector("#data");//this._inputData = $("#data");  
        this._inputQuantidade = <HTMLInputElement>document.querySelector("#quantidade"); //this._inputQuantidade = $("#quantidade"); 
        this._inputValor = <HTMLInputElement>document.querySelector("#valor"); //this._inputValor = $("#valor");
        this._negociacoesView.update(this._negociacoes);
    }

    //@logarTempoDeExecucao()
    @throttle()
    adiciona() {

        let data = new Date(this._inputData.value.replace(/-/g, ',')); //new Date(this._inputData.val()).replace(/-/g, ',')),

        if (!this._ehDiaUtil(data)) {

            this._mensagemView.update("As negociações só poderão ser realizadas apenas em dias úteis");
            return
        }

        const negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.value), //parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.value) //parseFloat(this._inputValor.val())
        );

        this._negociacoes.adiciona(negociacao); //console.log(negociacao);

        imprimir(negociacao, this._negociacoes);

        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update("Negociação adicionada com sucesso");

        /*      this._negociacoes.paraArray().forEach(negociacao => {
                    console.log(negociacao.data);
                    console.log(negociacao.quantidade);
                    console.log(negociacao.valor);
                }) */

        //const t2 = performance.now(); console.log(`Tempo execução método Adiciona: ${t2 - t1} ms`);
    }

    private _ehDiaUtil(data: Date) {

        return data.getDay() != DiaDaSemana.Sábado && data.getDay() != DiaDaSemana.Domingo;
    }

    @throttle()
    async importarDados() {

        try {
            const negociacoesParaImportar = await this._service
                .obterNegociacoes(res => {

                    if (res.ok) {
                        return res;
                    } else {
                        throw new Error(res.statusText);
                    }
                });

            const negociacoesJaImportadas = this._negociacoes.paraArray();

            negociacoesParaImportar
                .filter(negociacao =>
                    !negociacoesJaImportadas.some(jaImportadas =>
                        negociacao.ehIgual(jaImportadas)))
                .forEach(negociacao =>
                    this._negociacoes.adiciona(negociacao));

            this._negociacoesView.update(this._negociacoes);

        } catch (err) {
            this._mensagemView.update(err.message)
        }



        /*  Foi para NegociacaoService.ts      
            fetch("http://localhost:8080/dados")
                .then(res => isOk(res))
                .then(res => res.json())
                .then((dados: NegociacaoParcial[]) => {
                    dados
                    .map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
                    .forEach(negociacao => this._negociacoes.adiciona(negociacao))
                    this._negociacoesView.update(this._negociacoes);
                })
                .catch(err => console.log(err.message)) */
    }
}

enum DiaDaSemana {
    Domingo,
    Segunda,
    Terça,
    Quarta,
    Quinta,
    Sexta,
    Sábado
}
