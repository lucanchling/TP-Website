window.onload = function() {scrollFunction()}

// Création du Bouton de retour en haut
function scrollFunction() {
    var mybutton = document.getElementById("myBtn");
    window.onscroll = function() {
        scrollFunction()
    };
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {  //revenir en haut
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}