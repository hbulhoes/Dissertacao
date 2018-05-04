// Início dos blocos de script na página web.
// ------ <script src="safe-attachShadow.js">
// Uma referência ao método attachShadow (nativo e confiável) é armazenada
// na variável safeMethodRef. O método referenciado será invocado pela
// função createClosedShadowRoot(), exportada por este script.
var safeMethodRef = Element.prototype.attachShadow;
var createClosedShadowRoot = function(host) {
	return safeMethodRef.apply(host, [{mode: 'closed'}]);
};
// </script>

// ------ <script src="stealthy-apply.js">
// Este script, oriundo de um componente de terceiros incorporado à página,
// vai interceptar todas as chamadas ao método Function.apply.
var nativeApply = Function.prototype.apply;
nativeApply.apply = nativeApply; // Esta atribuição impede a recursividade infinita
                                 // em chamadas a Function.apply()

Function.prototype.apply = function() {
	var res = nativeApply.apply(this, arguments);
	if (res instanceof ShadowRoot) {
		res.innerHTML = 'Shadow root interceptada';
	}

	return res;
}
// </script>

// ------ <script src="app.js">
// Este script fará uso da função createClosedShadowRoot(), sem que o desenvolvedor tenha
// conhecimento de que a shadow root retornada será visível a outros scripts.
var host = document.createElement('div'),
    sr = createClosedShadowRoot(host);

document.body.appendChild(host);
// </script>

// Neste momento, o elemento host e sua shadow root estão incorporados ao
// DOM. E, por causa do comportamento do script stealthy-apply.js,
// a mensagem "Shadow root interceptada" será visível na tela.