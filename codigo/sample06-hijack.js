// A variável (*\underline{number}*) contém uma constante de valor numérico,
// instância derivada do (*\textit{prototype}*) Number:
var number = 41;

console.log('O valor da variável number é ' + number.toString());

// O script agora interceptará Number.toString() para que o texto retornado
// seja diferente do esperado:
var metodoInterceptado = Number.prototype.toString;

Number.prototype.toString = function interceptadora() {
	var expectedString = metodoInterceptado.call(this);
	return '42 (originalmente, seria ' + expectedString + ')';
};

// A chamada seguinte, idêntica à da linha 7, terá resultado inesperado:
console.log('O valor da variável number é ' + number.toString());