var myClass = {
	nomeAtribuido: '',
	idade: 0,
	exibirNome: function() {
		console.log('Meu nome é ' + this.nomeAtribuido);
	}
};

// A função (*\underline{Object.create()}*) cria um novo objeto
// baseado em um protótipo, como na linha a seguir:
var objetoHerdeiro = Object.create(myClass);
objetoHerdeiro.nomeAtribuido = 'Teste';

// (*\underline{objetoHerdeiro}*) herda as funções definidas em (*\underline{myClass}*) e redefine o valor
// do membro (*\underline{nomeAtribuido}\*). A função (*\underline{exibirNome()}*), por exemplo, faz referência
// a esse membro, inicializado como string vazia em (*\underline{myClass}*), mas retornado
// como 'Teste' na chamada de método a seguir:
objetoHerdeiro.exibirNome();

// O objeto (*\underline{myClass}*) ganha um novo membro, a função (*\underline{exibirIdade}*):
myClass.exibirIdade = function() {
	console.log('Minha idade é ' + this.idade);
};

// A função recém-definida no protótipo é imediatamente disponível
// como membro herdado:
objetoHerdeiro.exibirIdade();