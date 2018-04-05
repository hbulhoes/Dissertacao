var openShadowHost = document.createElement('div');
var openRoot = openShadowHost.attachShadow({mode: 'open'});
openRoot.innerHTML = '<p><i>Shadow root</i> aberta.';

var closedShadowHost = document.createElement('div');
var closedRoot = closedShadowHost.attachShadow({mode: 'closed'});
closedRoot.innerHTML = '<p><i>Shadow root</i> fechada.';

document.body.appendChild(openShadowHost);
document.body.appendChild(closedShadowHost);

// A instrução a seguir resulta em um objeto "#shadow-root" sendo exposto no console do navegador:
console.log(openShadowHost.shadowRoot);

// A instrução a seguir resulta em um valor null sendo exposto no console do navegador:
console.log(closedShadowHost.shadowRoot);