window.onload = function() {recap();scrollFunction()}

// Pour afficher les infos du récapitulatif
function recap() {
    let nom = new URLSearchParams(window.location.search).get("name");
    let prénom = new URLSearchParams(window.location.search).get("firstname");
    let email = new URLSearchParams(window.location.search).get("email");
    let phone = new URLSearchParams(window.location.search).get("phone");
    let enfant = new URLSearchParams(window.location.search).get("nbch");
    let adulte = new URLSearchParams(window.location.search).get("nbad");
    let départ = new URLSearchParams(window.location.search).get("debut");
    let retour = new URLSearchParams(window.location.search).get("fin");
    let dej = new URLSearchParams(window.location.search).get("breakfast");
    document.getElementById("nom").innerHTML = "Nom :" + ' ' + nom;
    document.getElementById("prénom").innerHTML = "Prénom :" + ' ' + prénom;
    document.getElementById("email").innerHTML = "Email :" + ' ' + email;
    document.getElementById("phone").innerHTML = "Téléphone :" + ' ' + phone;
    document.getElementById("enfant").innerHTML = "Nombre d'enfant(s) :" + ' ' + enfant;
    document.getElementById("adulte").innerHTML = "Nombre d'adulte(s) :" + ' ' + adulte;
    document.getElementById("in").innerHTML = "Date de Départ :" + ' ' + départ;
    document.getElementById("out").innerHTML = "Date de Retour :" + ' ' + retour;
    if (dej=='no') {
        document.getElementById("dej").innerHTML = "Sans l'Option Petit Déjeuner"
    }
    if (dej=='yes') {
        document.getElementById("dej").innerHTML = "Avec l'Option Petit Déjeuner"
    }
    document.getElementById("dest").innerHTML = "Destination : " + affDest()
    document.getElementById("durée").innerHTML = "Durée du voyage : " + durée(départ,retour) +" jours";
    document.getElementById("prix").innerHTML = "Coût : " + prix() +"€";
    document.getElementById("numresa").innerHTML = "Numéro de Réservation : " + Math.floor(Math.random() * Math.floor(10000));
    
}
// Calcul la durée du voyage (en jours) :
function durée(date1,date2) {
    var date1 = new Date(date1)
    var date2 = new Date(date2)
    // différence des heures
    var diff = date2.getTime() - date1.getTime();
    // différence de jours
    var Diff = diff / (1000 * 3600 * 24);
    // afficher la différence
    return (Diff+1) 
}
// Les Destinations :
var Destination = ["Angleterre","Chine","Italie","Japon","Espagne","Canada","Etats-Unis","Mexique"];

function affDest() {
    let destId = new URLSearchParams(window.location.search).get("destId");
    return (Destination[destId])
}

// ["Angleterre","Chine","Italie","Japon","Espagne","Canada","Etats-Unis","Mexique"]

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