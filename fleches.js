// Code pour intercepter les fleches gauche-droite

// Utiliser l'événement "keydown", car "keypress" ne tient pas compte des flèches
// selon https://stackoverflow.com/questions/19347269/

$('body').on('keydown',function ( event ) {

    var toucheClavier = event.which;
	//détécter la largeur du navigateur
var largeurEcran = document.documentElement.clientWidth;
var stopDroite = largeurEcran - ( largeurEcran / 11.1111 );

	// Détecter position du personnage:
	persoPosition = $('.personnage').offset();
	$("#debug").html("left: " + persoPosition.left + "<br>ecran: "+largeurEcran+"px" + "<br>limite: "+ stopDroite);


    if ( toucheClavier == 39 ) {

		if ( persoPosition.left < largeurEcran - ( largeurEcran / 11.1111 )) {
			console.log("flèche gauche");
	        $(".personnage").animate(
				{left: "-=11.1111%"},
				100
			);

        console.log("flèche droite");
        // superFlash();

        // Déplacement du personnage
        $(".personnage").animate(
			{left: "+=11.1111%"},
			100
		);

    } else if ( toucheClavier == 37 ) {

		if ( persoPosition.left > 10) {
			console.log("flèche gauche");
	        $(".personnage").animate(
				{left: "-=11.1111%"},
				100
			);

		}

    }

    else {
        console.log("raté");
    }

});


// Une fonction qui change la couleur de fond
function superFlash() {

   $( ".ecran" ).css({
     "background-color": "red"
   });

}
