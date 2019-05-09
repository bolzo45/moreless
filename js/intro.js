$('body').on('keydown',function ( event ) {

  var toucheClavier = event.which;

  // enter = 13
  if ( toucheClavier == 13 ) {

    startGame();

    // on change l'image du personnage
    changePerso();

  }

});

function startGame() {

  // masquer le texte Intro

  $( "#intro1" ).hide( 500, function() {
    // afficher la zone de jeu
    $("#snowZone").show( 800, function() {
      // démarrer!
      $("#plus").show();
      restart();
    } );

  });


}