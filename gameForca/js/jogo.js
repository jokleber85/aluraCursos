var criaJogo = function(sprite){

	var palavraSecreta = '';
	var lacunas = [];
	var etapa = 1;

	var ganhou = function(){
		
		return lacunas.length
			? !lacunas.some(function(lacuna){ // if ternário
				return lacuna == '';
			})
				:false;
	};

	var perdeu = function(){
		
		return sprite.isFinished();
	};

	var ganhouOuPerdeu = function(){

		return ganhou() || perdeu(); 
	};

	var reinicia = function(){
		etapa = 1;
		lacunas = [];
		palavraSecreta = '';
	};

	var processaChute = function(chute){

		if (!chute.trim()) throw Error ("Chute Inválido...");

		var exp = new RegExp(chute, 'gi'), //'g' significa percorrer toda palavra (sem seria so a primeira letra), i significa caseSensitive
		resultado,
		acertou = false; 

		while (resultado = exp.exec(palavraSecreta)){
			acertou = true;
			lacunas[resultado.index] = chute;
		}

		if (!acertou) sprite.nextFrame();
	};

	var criaLacunas = function(){
		lacunas = Array(palavraSecreta.length).fill(''); // substiui for 
	};

	var proximaEtapa = function(){
		etapa = 2;

	};

	var setPalavraSecreta = function(palavra){
		if (!palavra.trim()) throw Error('Palavra Secreta Inválida...');

		palavraSecreta = palavra;
		criaLacunas();
		proximaEtapa();
	};

	var getLacunas = function(){
		return lacunas;

	};

	var getEtapa = function(){
		return etapa;

	};

	return { setPalavraSecreta: setPalavraSecreta, getLacunas: getLacunas, getEtapa: getEtapa, processaChute: processaChute, ganhou: ganhou, perdeu: perdeu, ganhouOuPerdeu: ganhouOuPerdeu, reinicia: reinicia };
};