// Code pour intercepter les fleches gauche-droite

// Utiliser l'événement "keydown", car "keypress" ne tient pas compte des flèches
// selon https://stackoverflow.com/questions/19347269/

largeurEcran = document.documentElement.clientWidth;
stopDroite = largeurEcran - ( largeurEcran / 5 );


function morelessDebug() {

	// Détecter position du personnage:
	persoPosition = $('.personnage').offset();
	$("#debug").html("left: " + persoPosition.left + "<br>ecran: "+largeurEcran+"px" + "<br>limite: "+ stopDroite);

}

$('body').on('keydown',function ( event ) {

    var toucheClavier = event.which;
	//détécter la largeur du navigateur


	morelessDebug();

	// Note:
	// flèche gauche 37
	// flèche droite: 39
    if ( toucheClavier == 37 ) {

<<<<<<< HEAD
		if ( persoPosition.left < largeurEcran - ( largeurEcran / 11.1111 )) {
	        $(".personnage_copie").animate(
=======
		// largeurEcran - ( largeurEcran / 11.1111 )

		morelessDebug();

		if ( persoPosition.left > 10 ) {
	        $(".personnage").animate(
>>>>>>> f30f83582b2388aa3a160914d60f61c231b969c4
				{left: "-=11.1111%"},
				100
			);

			morelessDebug();

		}

    }

	else if ( toucheClavier == 39 ) {

		morelessDebug();

		if ( persoPosition.left < stopDroite) {
	        $(".personnage").animate(
				{left: "+=11.1111%"},
				100 
			);

			morelessDebug();

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
