// Uma referência ao método attachShadow, do prototype Element,
// é armazenada na variável metodoInterceptado:
var metodoInterceptado = Element.prototype.attachShadow;

// É definido um array para posterior armazenamento das shadow roots
// que forem criadas, independentemente da opção de visibilidade atribuída pelos desenvolvedores.
var everyShadowRoot = [];

// O método attachShadow é redefinido no prototype Element.
// Deste ponto em diante, todos os elementos HTML referenciados no DOM passam a
// refletir o método redefinido.
Element.prototype.attachShadow = function sniffer() {
	// O método original, nativo do navegador, é aplicado para que a shadow root
	// seja efetivamente criada; a coleção arguments contém o parâmetro
	// mode de valor 'open' ou 'closed'.
    var newShadowRoot = metodoInterceptado.apply(this, arguments);

    // A referência à nova shadow root é armazenada para uso (e abuso) posterior.
    everyShadowRoot.push(newShadowRoot);

    return newShadowRoot;
};