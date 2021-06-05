$("#botao-frase").click(fraseAleatoria);
$("#botao-frase-id").click(buscaFrase);
$("#botao-syn").click(sincronizaPlacar);

function fraseAleatoria(){
	$(".spinner").show();
	$.get("http://localhost:3000/frases", trocaFraseAleatoria).
	fail(function(){
		$("#erro").show();
		setTimeout(function(){
			$("#erro").hide();
		},2000);
	})
	.always(function(){
		$(".spinner").hide();
	});
};

function trocaFraseAleatoria(data){
	var frase = $(".frase");
	numeroAleatorio = Math.floor(Math.random() * data.length);
	frase.text(data[numeroAleatorio].texto);
	atualizaTamanhoFrase();
	atualizaTempo(data[numeroAleatorio].tempo);
	
};

function buscaFrase(){
	idFrase = $("#id_frase").val();
	dados = {id: idFrase};
	$(".spinner").show();
	$.get("http://localhost:3000/frases",dados,trocaFrase).
	fail(function(){
		$("#erro").show();
		setTimeout(function(){
			$("#erro").hide();
		},2000);
	}).
	always(function(){
		$(".spinner").hide();
	});
};

function trocaFrase(data){
	frase = $(".frase");
	frase.text(data.texto);
	atualizaTamanhoFrase();
	atualizaTempo(data.tempo);
};

function sincronizaPlacar(){
	var placar = [];
	var linhas = $("tbody>tr");

	linhas.each(function(){
		usuario = $(this).find("td:nth-child(1)").text();
		palavras = $(this).find("td:nth-child(2)").text();

		var score = {
			usuario: usuario,
			palavras: palavras
		} 

		placar.push(score);
	});

	dados = {placar: placar};

	$.post("http://localhost:3000/placar",dados,function(){
		$(".tooltip").tooltipster("open").tooltipster("content", "Sucesso ao sicronizar...");
	}).always(function(){
		setTimeout(function(){
			$(".tooltip").tooltipster("close");	
		},1500);
		
	}).fail(function(){
		$(".tooltip").tooltipster("open").tooltipster("content", "Falha ao sicronizar...");
	});
};

function atualizaPlacar(){
	$.get("http://localhost:3000/placar",function(data){
		$(data).each(function(){
			var linha = novaLinha(this.usuario, this.palavras);
			linha.find(".botao-remover").click(removeLinha);
			$("tbody").append(linha);
		});
	});
};	










//