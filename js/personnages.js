
// Script pour changer l'image du personnage

// 1. La liste des personnages:
// On utilise un tableau de données
// voir https://cours-web.ch/js/arrays/

var persos = [
  "DOG.1.png", 
  "POTATO.1.png", 
  "DOG.2.png", 
  "SOCK.1.png",
  "DOG.3.png",
  "SOCK.2.png",
];

var numPerso = 0;

function changePerso() {

  // appliquer image

  $("#personnage img").attr("src", "personnages/"+persos[numPerso]);

  // incrémenter le numéro de 1

  numPerso++;

  // arrivé au bout de la liste, on recommence avec le 1er

  if ( numPerso == persos.length ) {
    numPerso = 0;
  }

}