window.onload = function() {recap();scrollFunction()}

// Pour afficher les infos du récapitulatif
function recap() { //récupérer les infos dans l'URL
    let nom = new URLSearchParams(window.location.search).get("name");
    let prénom = new URLSearchParams(window.location.search).get("firstname");
    let email = new URLSearchParams(window.location.search).get("email");
    let phone = new URLSearchParams(window.location.search).get("phone");
    let enfant = new URLSearchParams(window.location.search).get("nbch");
    let adulte = new URLSearchParams(window.location.search).get("nbad");
    let départ = new URLSearchParams(window.location.search).get("debut");
    let retour = new URLSearchParams(window.location.search).get("fin");
    let dej = new URLSearchParams(window.location.search).get("breakfast");
    document.getElementById("nom").innerHTML = ''+ nom;  //mettre les infos dans le tableau du récapitulatif
    document.getElementById("prénom").innerHTML = ''+ prénom;
    document.getElementById("email").innerHTML =  ' ' + email;
    document.getElementById("phone").innerHTML = ' ' + phone;
    document.getElementById("enfant").innerHTML =  ' ' + enfant;
    document.getElementById("adulte").innerHTML =  ' ' + adulte;
    document.getElementById("in").innerHTML = ' ' + départ;
    document.getElementById("out").innerHTML =  ' ' + retour;
    if (dej=='no') {
        document.getElementById("dej").innerHTML = "Sans l'Option Petit Déjeuner"
    }
    if (dej=='yes') {
        document.getElementById("dej").innerHTML = "Avec l'Option Petit Déjeuner"
    }
    document.getElementById("dest").innerHTML = "Vous avez choisi de voyager à : " + affDest()
    document.getElementById("durée").innerHTML =  durée(départ,retour) +" jours";
    document.getElementById("prix").innerHTML =  prix() +"€";
    document.getElementById("numresa").innerHTML =  + Math.floor(Math.random() * Math.floor(10000));
    
}
// Calcul la durée du voyage (en jours) :
function durée(date1,date2) {
    var date1 = new Date(date1)
    var date2 = new Date(date2)
    // différence des heures
    var diff = date2.getTime() - date1.getTime();
    // différence de jours
    var Diff = diff / (1000 * 3600 * 24);
    // Retourne la différence
    return (Diff+1) 
}
// Les Destinations :
var Destination = ["Angleterre","Chine","Italie","Japon","Espagne","Canada","Etats-Unis","Mexique"];

// Fonction permettant de retourner la destination choisie
function affDest() {
    let destId = new URLSearchParams(window.location.search).get("destId");
    return (Destination[destId])
}

// Ordre dans Tarif : ["Angleterre","Chine","Italie","Japon","Espagne","Canada","Etats-Unis","Mexique"]


//calcul du prix
function prix() { 
    var Tarif = [150,180,100,220,105,210,250,160];
    let destId = new URLSearchParams(window.location.search).get("destId");
    let enfant = new URLSearchParams(window.location.search).get("nbch");
    let adulte = new URLSearchParams(window.location.search).get("nbad");
    let départ = new URLSearchParams(window.location.search).get("debut");
    let retour = new URLSearchParams(window.location.search).get("fin");
    let dej = new URLSearchParams(window.location.search).get("breakfast");
    if (dej=='no') {
        return (Tarif[destId] * adulte + Tarif[destId] * 0.6 * enfant) * durée(départ,retour)
    }
    if (dej=='yes') {
        return (Tarif[destId] * adulte + Tarif[destId] * 0.6 * enfant + 12) * durée(départ,retour)
    }
}

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