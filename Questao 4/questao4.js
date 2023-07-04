function avaliaIdade(idade){
	if (idade < 18)
		alert ("Voce e Menor de Idade");
	else if (idade > 18)
		alert ("Voce e Maior de idade");
}

var nome = prompt("Informe seu nome");
var idade = prompt("Informe sua idade");

avaliaIdade(idade);