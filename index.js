$(".ecran2").append("<div class='plus' id='plus1'>+</div>");
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
