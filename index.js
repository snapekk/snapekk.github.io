// Cria o evento de clique para as caixas
var boxes = document.getElementsByClassName('box');
for (var i = 0; i < boxes.length; i++) {
	boxes[i].addEventListener('click', function() {
		window.location.href = 'https://www.youtube.com';
	});
}
