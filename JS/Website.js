// Execution des fonctions
window.onload = function() {scrollFunction()}

// Création Tableau Destination
var Destination = ["Canada","Espagne","Japon","Etats-Unis","Angleterre","Chine","Mexique","Italie"]

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
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Diaporama des Destination :

// Les Images
var photos = new Array;
$a = 0;//compteur de boucle
$repertoire = opendir("../Images");//on ouvre le dossier 'images' qui contient toutes les images du diaporama
while (($fichier = readdir())!=false)
{
        clearstatcache();
        if($fichier!=".." && $fichier!=".")
                {
                echo "photos[$a] = 'images/$fichier';";//On place dans un tableau toutes les images trouvées dans le répertoire ouvert.
                $a++;
                }
}
closedir($repertoire); //on referme le dossier 'images'
