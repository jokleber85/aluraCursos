var botaoPaciente = document.querySelector("#adicionar-paciente");
botaoPaciente.addEventListener("click",function(event){
	event.preventDefault();

	//Obter Dados do Paciente
	var form = document.querySelector("#form-adiciona");
	var paciente = obterDadosPaciente(form);

	var erros = validaPaciente(paciente);
	console.log(erros);

	if (erros.length > 0){
		exibeMensagensDeErro(erros);
		return;	
	} 
    adicionaPacienteNaTabela(paciente);
	form.reset();
	var mensagensErro = document.querySelector("#mensagens-erro");
	mensagensErro.innerHTML = "";
});

function adicionaPacienteNaTabela(paciente){
	var pacienteTr = montarTr(paciente);
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);	
}


function exibeMensagensDeErro(erros){
 	var ul = document.querySelector("#mensagens-erro");
	ul.innerHTML = "";

	erros.forEach(function(erro){
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	});
}

function obterDadosPaciente(form){
	var paciente = {
		nome: form.nome.value, 
		peso: form.peso.value, 
		altura: form.altura.value, 
		gordura: form.gordura.value,
		imc: calculoIMC(form.peso.value, form.altura.value)
	}
	return paciente;
}

function montarTr(paciente){
	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add('paciente');

	pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
	pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

return pacienteTr;
}

function montaTd(dado,classe){
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe); 
	return td;
}

function validaPaciente(paciente){
	var erros = [];
	if (paciente.nome.length == 0) erros.push("Nome não poder ser em branco!!!")
	if (paciente.peso.length == 0) erros.push("Peso não poder ser em branco!!!")	
	if (paciente.altura.length == 0) erros.push("Altura não poder ser em branco!!!")
	if (paciente.gordura.length == 0) erros.push("Gordura não pode ser me branco!!!");		
	if (!validaPeso(paciente.peso)) erros.push("Peso Inválido!!!"); 
	if (!validaAltura(paciente.altura)) erros.push("Altura Inválida!!!");


	return erros;
}