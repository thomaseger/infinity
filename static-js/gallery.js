var gallery = {
	"load": function(){
		$('body').append('<div id="loader">Lade Fotos ... </div>');
		$.ajax({
			url: "http://www.thomaseger.de/wordpress/wp-json/wp/v2/media?per_page=100"
		}).then(function(data) {
			data.map(function (image) {
				if(image.alt_text === "Galerie Bild") {
				  var html = '<div class="gallery-thumb-wrapper"><img class="gallery-thumb shadow" src="'+image.source_url+'" /></div>';       
				  $('#gallery').append(html);  
				}
			});
		}).done(function(){
			$('#loader').remove();
		});
			
	}
}
