System.register(["../models/index", "../views/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, NegociacaoController, DiaDaSemana;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_1.Negociacoes();
                    this._negociacoesView = new index_2.NegociacoesView("#negociacoesView", true);
                    this._mensagemView = new index_2.MensagemView("#mensagemView", true);
                    this._inputData = document.querySelector("#data");
                    this._inputQuantidade = document.querySelector("#quantidade");
                    this._inputValor = document.querySelector("#valor");
                    this._negociacoesView.update(this._negociacoes);
                }
                adiciona(event) {
                    const t1 = performance.now();
                    event.preventDefault();
                    let data = new Date(this._inputData.value.replace(/-/g, ','));
                    if (!this._ehDiaUtil(data)) {
                        this._mensagemView.update("As negociações só poderão ser realizadas apenas em dias úteis");
                        return;
                    }
                    const negociacao = new index_1.Negociacao(data, parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
                    this._negociacoes.adiciona(negociacao);
                    this._negociacoesView.update(this._negociacoes);
                    this._mensagemView.update("Negociação adicionada com sucesso");
                    const t2 = performance.now();
                    console.log(`Tempo execução método Adiciona: ${t2 - t1} ms`);
                }
                _ehDiaUtil(data) {
                    return data.getDay() != DiaDaSemana.Sábado && data.getDay() != DiaDaSemana.Domingo;
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
            (function (DiaDaSemana) {
                DiaDaSemana[DiaDaSemana["Domingo"] = 0] = "Domingo";
                DiaDaSemana[DiaDaSemana["Segunda"] = 1] = "Segunda";
                DiaDaSemana[DiaDaSemana["Ter\u00E7a"] = 2] = "Ter\u00E7a";
                DiaDaSemana[DiaDaSemana["Quarta"] = 3] = "Quarta";
                DiaDaSemana[DiaDaSemana["Quinta"] = 4] = "Quinta";
                DiaDaSemana[DiaDaSemana["Sexta"] = 5] = "Sexta";
                DiaDaSemana[DiaDaSemana["S\u00E1bado"] = 6] = "S\u00E1bado";
            })(DiaDaSemana || (DiaDaSemana = {}));
        }
    };
});
