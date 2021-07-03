//var paciente = document.querySelectorAll(".paciente");

//paciente.forEach(function(paciente){
//	paciente.addEventListener("dblclick", function(){
//		console.log("Fui Clicado aqui");
//		this.remove();
//	});
//});

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
	event.target.classList.add("fadeOut");
	setTimeout(function(){
		event.target.parentNode.remove();
	},500);
});