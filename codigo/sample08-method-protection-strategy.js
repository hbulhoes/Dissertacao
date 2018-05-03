var number = 41,
	nativeToString = Number.prototype.toString;

console.log('Antes da manipulação de Number.toString() - ' + number.toString());

// O método toString() será adulterado para que sempre retorne '42'
// para qualquer instância de Number:
Number.prototype.toString = function () { return '42'; };

// A chamada a seguir produzirá o resultado incorreto '42':
console.log('Depois da manipulação de Number.toString() - ' + number.toString());

// Porém, a chamada a seguir produzirá '41', refletindo o valor subjacente correto:
console.log('Chamada imune à manipulação ocorrida - ' + nativeToString.apply(number, []));