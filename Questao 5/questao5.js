function somaVetor(meuVetor){
	var soma = parseInt(meuVetor) + parseInt(meuVetor)
	return soma
}

var vetor1 = [3, 5, 7, 10, 4];
var soma1 = somaVetor(vetor1); //tem que retornar 29
alert(soma1);

var vetor2 = [1, 2, 3, 1, 3];
var soma2 = somaVetor(vetor2); //tem que retornar 10
alert(soma2);

var vetor3 = [10, 5, 3, 2, 10];
var soma3 = somaVetor(vetor2); //tem que retornar 30
alert(soma3);