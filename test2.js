// Snow Falling

    function fallingSnow() {

        // Création élément HTML
        var snowflake = $('<div class="snowflakes">+</div>');
        $('#snowZone').prepend(snowflake);

        // Position de départ
        snowX = Math.floor(Math.random() * $('#site').width());

        // Vitesse = durée d'animation
        snowSpd = Math.floor(Math.random() + 4000);

        // Position de départ (axe horizontal)
        snowflake.css({'left':snowX+'px'});

        // Déplacement avec jQuery animate
        snowflake.animate({
            top: "100vh",

        // Durée et Fin de l'animation, on supprime le flocon
        }, snowSpd, function(){
            $(this).remove();
            // On répète l'animation
            // fallingSnow();
        });

    }
    var timer = Math.floor(Math.random() +5000);

    // on répète à l'infini, une fois par seconde.
    window.setInterval(function(){
        fallingSnow();
    }, timer);
