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
    document.getElementById("numresa").innerHTML = "Numéro de Réservation : " + Math.floor(Math.random() * Math.floor(10000));
    document.getElementById("durée").innerHTML = "Durée du voyage : " + durée(départ,retour) +" jours";
}
// Calcul la durée du voyage (en jours) :
function durée(date1,date2) {
    var date1 = new Date(date1)
    var date2 = new Date(date2)
    // différence des heures
    var time_diff = date2.getTime() - date1.getTime();
    // différence de jours
    var days_Diff = time_diff / (1000 * 3600 * 24);
    // afficher la différence
    return days_Diff 
}

//Le prix est calculé automatiquement en fonction de la durée du séjour, du nombre d’adultes, du nombres d’enfants et du petit déjeuner ; un enfant paie 40% du prix d’un adulte, quel que soit le séjour choisi. Un petit déjeuner ajoute un supplément de 12€ par personne et par jour. Evidemment, la date de retour doit obligatoirement être postérieure à la date de départ. Les enfants ne peuvent voyager sans être accompagnés d’un adulte. Toute modification dans le formulaire conduit à un recalcul du prix.