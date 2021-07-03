var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var tr_paciente = document.querySelectorAll(".paciente");

titulo.addEventListener("click", function(){
	console.log("Ola, eu fui clicado aqui");
});

for(var cont = 0; cont < tr_paciente.length; cont++){

	var td_peso = tr_paciente[cont].querySelector(".info-peso");
	var peso = td_peso.textContent;

	var td_altura = tr_paciente[cont].querySelector(".info-altura");
	var altura = td_altura.textContent;

	td_imc = tr_paciente[cont].querySelector(".info-imc");

	var pesoEhValido = validaPeso(peso);
	var alturaEhValido = validaAltura(altura);

	if (!pesoEhValido) {
		td_imc.textContent = "Peso inválido!";
		tr_paciente[cont].classList.add("peso_altura_invalido");
	}

	else if (!alturaEhValido) {
		td_imc.textContent = "Altura inválida!";
		tr_paciente[cont].classList.add("peso_altura_invalido");
	}

	else {
		var imc = peso / (altura * altura); 
		td_imc.textContent = imc.toFixed(2);
	}
}

function validaPeso(peso){
	if (peso >= 0 && peso <= 1000){
		return true;
	}else{
		return false;
	}
}

function validaAltura(altura){
	if (altura >= 0 && altura <= 3.0){
		return true;
	}else {
		return false;
	}
}

function calculoIMC(peso,altura){
	var imc = 0;
	imc = peso / (altura * altura);
	return imc.toFixed(2);
}


