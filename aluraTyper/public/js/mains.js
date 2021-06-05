var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");


$(function(){
	atualizaTamanhoFrase();
	inicializaContadores();
	inicializaCronometro();
	inicializaMarcadores();	
	$("#botao-reiniciar").click(reiniciaJogo);	
	atualizaPlacar(); // frases.js
	$("#usuarios").selectize({
		create: true,
		sortField: 'text',
	});
	$('.tooltip').tooltipster({
		trigger: 'custom',
	});
});

function atualizaTempo(tempo){
	tempoInicial = tempo;
	$("#tempo-digitacao").text(tempo);
}

function atualizaTamanhoFrase(){
	var frase = $(".frase").text();
	var numeroPalavras = frase.split(" ").length;
	var tamanhoFrase = $("#tamanho-frase");
	tamanhoFrase.text(numeroPalavras);
};

function inicializaContadores(){
	campo.on("input", function(){
		var conteudo = campo.val();

		var quantidadeCaracteres = conteudo.length; 
		$("#contador-caracteres").text(quantidadeCaracteres);

		var quantidadePalavras = conteudo.split(/\S+/).length -1;
		$("#contador-palavras").text(quantidadePalavras);
	});	
};

function inicializaCronometro(){
	campo.one("focus", function(){
		var tempoRestante = $("#tempo-digitacao").text();
		$("#botao-reiniciar").attr("disabled", true)
		var cronometroID = setInterval(function(){
			tempoRestante--;
			$("#tempo-digitacao").text(tempoRestante);
			if (tempoRestante < 1){
				clearInterval(cronometroID);
				finalizaJogo();
			}
		},1000);
	});
};


function finalizaJogo(){
	campo.attr("disabled",true);
	$("#botao-reiniciar").attr("disabled", false);
	campo.toggleClass("campo-desativado");	//campo.addClass("campo-desativado");
	inserePlacar();
};

function inicializaMarcadores(){
	campo.on("input", function(){
		var frase = $(".frase").text(); 
		var digitado = campo.val();
		var comparavel = frase.substr(0, digitado.length);
		if (digitado == comparavel){
			campo.addClass("campo-correto");
			campo.removeClass("campo-errado");
		}else {
			campo.addClass("campo-errado");	
			campo.removeClass("campo-certo");
		}
	});
};

function reiniciaJogo(){
	campo.attr("disabled", false);
	campo.val("");
	$("#contador-caracteres").text("0");
	$("#contador-palavras").text("0");
	$("#tempo-digitacao").text(tempoInicial);
	inicializaCronometro();
    campo.toggleClass("campo-desativado");	//campo.removeClass("campo-desativado");
    campo.removeClass("campo-correto");
    campo.removeClass("campo-errado");	
}
