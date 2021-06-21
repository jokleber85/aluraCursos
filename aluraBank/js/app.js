System.register(["./controllers/NegociacaoControllers"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var NegociacaoControllers_1, controller;
    return {
        setters: [
            function (NegociacaoControllers_1_1) {
                NegociacaoControllers_1 = NegociacaoControllers_1_1;
            }
        ],
        execute: function () {
            controller = new NegociacaoControllers_1.NegociacaoController();
            document.querySelector('.form').addEventListener('submit', controller.adiciona.bind(controller));
            document.querySelector('#botaoImportar').addEventListener('click', controller.importarDados.bind(controller));
        }
    };
});
