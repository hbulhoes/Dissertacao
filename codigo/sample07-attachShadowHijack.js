// Uma referência ao método (*\underline{attachShadow}*), do (*\textit{prototype}*) Element,
// é armazenada na variável (*\underline{metodoInterceptado}*):
var metodoInterceptado = Element.prototype.attachShadow;

// É definido um (*\textit{array}*) para posterior armazenamento das (*\textit{shadow roots}*)
// que forem criadas, independentemente da opção de visibilidade atribuída pelos desenvolvedores.
var everyShadowRoot = [];

// O método (*\underline{attachShadow}*) é redefinido no (*\textit{prototype}*) Element.
// Deste ponto em diante, todos os elementos HTML referenciados no DOM passam a
// refletir o método redefinido.
Element.prototype.attachShadow = function sniffer() {
	// O método original, nativo do navegador, é aplicado para que a (*\textit{shadow root}*)
	// seja efetivamente criada; a coleção (*\underline{arguments}*) contém o parâmetro
	// (*\underline{mode}*) de valor 'open' ou 'closed'.
    var newShadowRoot = metodoInterceptado.apply(this, arguments);

    // A referência à nova (*\textit{shadow root}*) é armazenada para uso (e abuso) posterior.
    everyShadowRoot.push(newShadowRoot);

    return newShadowRoot;
};