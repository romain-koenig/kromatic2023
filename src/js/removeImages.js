function replaceImagesForPrinting() {
	var images = document.querySelectorAll('img');
	var placeholders = [];
	images.forEach(function (img, index) {
		var altText = img.alt;
		var textNode = document.createTextNode(`[Illustration supprimée pour l'impression : ${altText}]`);
		img.parentNode.replaceChild(textNode, img);
		placeholders[index] = { textNode: textNode, img: img };
	});

	window.onafterprint = function () {
		placeholders.forEach(function (placeholder) {
			placeholder.textNode.parentNode.replaceChild(placeholder.img, placeholder.textNode);
		});

	}
}

window.onbeforeprint = replaceImagesForPrinting;