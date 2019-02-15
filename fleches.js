// Code pour intercepter les fleches gauche-droite

// Utiliser l'événement "keydown", car "keypress" ne tient pas compte des flèches
// selon https://stackoverflow.com/questions/19347269/

$('body').on('keydown',function ( event ) {

    var toucheClavier = event.which;

    if ( toucheClavier == 39 ) {

        console.log("flèche droite");

    } else if ( toucheClavier == 37 ) {

        console.log("flèche gauche");
    }

    else {
        console.log("raté");
    }

});