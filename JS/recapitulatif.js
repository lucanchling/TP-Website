// Pour afficher les infos du formulaire

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
}