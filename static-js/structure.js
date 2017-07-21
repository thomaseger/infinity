
var structure = {
	"header" : function (){
		$.ajax({
			url: "_header.html",
			dataType: "html",
			error: function(xhr, error){
				console.debug(xhr); 
				console.debug(error);
			}
		}).then(function(headerHtml) {
			$('#header').append(headerHtml);
		});
	}
}
