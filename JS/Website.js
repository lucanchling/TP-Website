// Execution des fonctions
window.onload = function () {
  scrollFunction();
  chgmDiapo()
};

// Création du Bouton de retour en haut
function scrollFunction() {
  var mybutton = document.getElementById("myBtn");
  window.onscroll = function () {
    scrollFunction();
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
var numDiapo = 1;
affDiapo(numDiapo);

function chgmDiapo(n) {
  affDiapo((numDiapo += n));
}

function affDiapo(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    numDiapo = 1;
  }
  if (n < 1) {
    numDiapo = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[numDiapo - 1].style.display = "block";
}

// Gestion du Tableau :

// Gestion de la connexion :
function check(form) {
  /* Test nom d'utilisateur / mdp */
  if (
    (form.userid.value == "utilisateur" && form.pswrd.value == "mdp") ||
    (form.userid.value == "user" && form.pswrd.value == "pswd")
  ) {
    alert("Connexion Réussie");
  } else {
    alert("Nom d'utilisateur ou mot de passe incorrect");
  }
}

// Permet de cacher le footer (non utilisée mais fonctionelle)
function hidefooter() {
  document.getElementById("login").style.display = "none";
}

//Filtre :

// Fonction permettant l'affectation du tri selectionné
function trie(liste) {
  document.getElementById("prix1").innerHTML = liste[0].prix;
  document.getElementById("prix2").innerHTML = liste[1].prix;
  document.getElementById("prix3").innerHTML = liste[2].prix;
  document.getElementById("prix4").innerHTML = liste[3].prix;
  document.getElementById("prix5").innerHTML = liste[4].prix;
  document.getElementById("prix6").innerHTML = liste[5].prix;
  document.getElementById("prix7").innerHTML = liste[6].prix;
  document.getElementById("prix8").innerHTML = liste[7].prix;

  document.getElementById("pays1").innerHTML = liste[0].destination;
  document.getElementById("pays2").innerHTML = liste[1].destination;
  document.getElementById("pays3").innerHTML = liste[2].destination;
  document.getElementById("pays4").innerHTML = liste[3].destination;
  document.getElementById("pays5").innerHTML = liste[4].destination;
  document.getElementById("pays6").innerHTML = liste[5].destination;
  document.getElementById("pays7").innerHTML = liste[6].destination;
  document.getElementById("pays8").innerHTML = liste[7].destination;

  document.getElementById("continent1").innerHTML = liste[0].continent;
  document.getElementById("continent2").innerHTML = liste[1].continent;
  document.getElementById("continent3").innerHTML = liste[2].continent;
  document.getElementById("continent4").innerHTML = liste[3].continent;
  document.getElementById("continent5").innerHTML = liste[4].continent;
  document.getElementById("continent6").innerHTML = liste[5].continent;
  document.getElementById("continent7").innerHTML = liste[6].continent;
  document.getElementById("continent8").innerHTML = liste[7].continent;
}

// Fonction retournant le tableau comme disposé initialement
function sansfiltre() {
  var Angleterre = {prix: 150,destination: "Angleterre", continent: "Europe"};
  var Chine = { prix: 180, destination: "Chine", continent: "Asie" };
  var Italie = { prix: 100, destination: "Italie", continent: "Europe" };
  var Japon = { prix: 220, destination: "Japon", continent: "Asie" };
  var Espagne = { prix: 105, destination: "Espagne", continent: "Europe" };
  var Canada = { prix: 220, destination: "Canada", continent: "Amérique" };
  var EtatsUnis = {prix: 250, destination: "Etats-Unis", continent: "Amérique",};
  var Mexique = { prix: 160, destination: "Mexique", continent: "Amérique" };

  let liste = [
    Angleterre,
    Chine,
    Italie,
    Japon,
    Espagne,
    Canada,
    EtatsUnis,
    Mexique,
  ];
  trie(liste);
}

// Fonction retournant le tableau trié par ordre de prix croissant
function Trieprix() {
  var Angleterre = {prix: 150,destination: "Angleterre", continent: "Europe"};
  var Chine = { prix: 180, destination: "Chine", continent: "Asie" };
  var Italie = { prix: 100, destination: "Italie", continent: "Europe" };
  var Japon = { prix: 240, destination: "Japon", continent: "Asie" };
  var Espagne = { prix: 105, destination: "Espagne", continent: "Europe" };
  var Canada = { prix: 220, destination: "Canada", continent: "Amérique" };
  var EtatsUnis = {prix: 250,destination: "Etats-Unis",continent: "Amérique",};
  var Mexique = { prix: 160, destination: "Mexique", continent: "Amérique" };

  let liste = [
    Italie,
    Espagne,
    Angleterre,
    Mexique,
    Chine,
    Canada,
    Japon,
    EtatsUnis,
  ];
  trie(liste);
}

// Fonction retournant le tableau trié par ordre alphabétique sur le nom des destinations
function Triealpha() {
  var Angleterre = {prix: 150,destination: "Angleterre",continent: "Europe",};
  var Chine = { prix: 180, destination: "Chine", continent: "Asie" };
  var Italie = { prix: 100, destination: "Italie", continent: "Europe" };
  var Japon = { prix: 240, destination: "Japon", continent: "Asie" };
  var Espagne = { prix: 105, destination: "Espagne", continent: "Europe" };
  var Canada = { prix: 220, destination: "Canada", continent: "Amérique" };
  var EtatsUnis = { prix: 250, destination: "Etats-Unis",continent: "Amérique",};
  var Mexique = { prix: 160, destination: "Mexique", continent: "Amérique" };

  let liste = [
    Angleterre,
    Canada,
    Chine,
    Espagne,
    EtatsUnis,
    Italie,
    Japon,
    Mexique,
  ];
  trie(liste);
}
