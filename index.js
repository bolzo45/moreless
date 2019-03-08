//ce code sert à bouger le +
$(".ecran1").append("<div class='plus' id='plus1'>+</div>");
//code animation trouver ici: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_animate_3
function animation() {
  var elem = document.getElementById("plus1");
  var pos = 0;
  var id = setInterval(frame, 25);
  function frame() {
    if (pos == 100) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'vh';

    }
  }
}


//ce code sert à faire bouger le personage droite/gauche
//flèche droite
$('body').on('keypress',function ( event ) {

				var myChar = String.fromCharCode(event.which);
				if ( event.keyCode == '39' ) {
					//colorChange();
					console.log("réussi");
				}
				else {
				console.log("raté");
					// On pourrait produire un son d'erreur.
					function checkKey(e) {


		}


}
				}

			});
