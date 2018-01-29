$(document).ready(function(){
	$(".splash").delay(2000).fadeOut(); //vista splash
	showRestaurants();
	$("#search-btn").click(identifyFood);
	$(document).on("click", ".restaurant", showDetails); 

	var resultsArray = data.results;

		/*Función para mostrar todos los restaurantes*/
	function showRestaurants(){
		var resultsArray = data.results;
		
		for( var i= 0; i < resultsArray.length; i++){
				/*Creando elementos contenedores y agregandoles una clase*/
			var $restaurant = $('<div />').addClass('restaurant');
			var $name = $('<p />').addClass('nameRestaurant');
			var $photoContainer =$('<div />').addClass('photo-container');
			var $photoRes = $('<img />').addClass('photo-restaurant');
			
				/*Agregando texto a elementos creados o cambiando atributos*/
			$name.text(resultsArray[i]["name"]);
			$photoRes.attr( "src", resultsArray[i]["foto"] );

				/*Agregando dataset a contenedores de restaurante*/
			$restaurant.attr( "data-name", resultsArray[i]["name"]);
			$restaurant.attr( "data-location", resultsArray[i]["vicinity"]);
			$restaurant.attr( "data-rating", resultsArray[i]["rating"]);
			$restaurant.attr( "data-toggle", "modal");
			$restaurant.attr( "data-target", "#modal-restaurant");

				/*Linkeando elementos entre sí*/
			$photoContainer.append($photoRes);//linkeando elementos DOM
			$restaurant.append($name); 
			$restaurant.append($photoContainer);
			$('.results').append($restaurant); //linkeando a seccion existente en html
		}
	}
		/*Función para filtrar los restaurantes*/
	function identifyFood() {
		$( ".restaurant" ).remove(); //limpiando seccion de resultados
		$.answer = $("input").val().toLowerCase();;
		var resultsArray = data.results;

		for( var i= 0; i < resultsArray.length; i++){
			if(resultsArray[i]["especialidad"] ===$.answer){

					/*Creando elementos contenedores y agregandoles una clase*/
				var $restaurant = $('<div />').addClass('restaurant');
				var $name = $('<p />').addClass('nameRestaurant');
				var $photoContainer =$('<div />').addClass('photo-container');
				var $photoRes = $('<img />').addClass('photo-restaurant');
			
					/*Agregando texto a elementos creados o cambiando atributos*/
				$name.text(resultsArray[i]["name"]);
				$photoRes.attr( "src", resultsArray[i]["foto"] );

					/*Agregando dataset a contenedores de restaurante*/
				$restaurant.attr( "data-name", resultsArray[i]["name"]);
				$restaurant.attr( "data-location", resultsArray[i]["vicinity"]);
				$restaurant.attr( "data-rating", resultsArray[i]["rating"]);
				$restaurant.attr( "data-toggle", "modal");
				$restaurant.attr( "data-target", "#modal-restaurant");

					/*Linkeando elementos entre sí*/
				$photoContainer.append($photoRes);//linkeando elementos DOM
				$restaurant.append($name); 
				$restaurant.append($photoContainer);
				$('.results').append($restaurant); //linkeando a seccion existente en html

			}
		}
	}

	function showDetails() {
		var resModal = $("#modal-restaurant");
		resModal.find('#rest-name-modal').text(this.dataset.name);
		resModal.find('#rest-location-modal').text(this.dataset.location);
        resModal.find('#rest-rating-modal').text(this.dataset.rating);
	}

});






