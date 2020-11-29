window.onload = function() {dates();destination();scrollFunction()}

// Date par Défaut avec limites:
function dates() {
    // Paramétrage des constantes (explicites)
    let auji = new Date()
    const today = auji.getFullYear() + '-' + (auji.getMonth()+1) + '-' + auji.getDate()
    const dayafter = modification(auji.addDays(1))
    const weeklater = modification(auji.addDays(7))

    // Pour la date de départ :
    // Par défaut : aujourd'hui
    document.getElementById("departure").defaultValue = dayafter;
    // Valeur Min :
    document.getElementById("departure").min = today;
    // Valeur Max :
    document.getElementById("departure").max = weeklater;
    
    // Pour la date de retour :
    // Par défaut :
    document.getElementById("return").defaultValue = weeklater;
    // Valeur Min :
    document.getElementById("return").min = dayafter;
    // Valeur Max : pas de nécessité (voyage peut être infini ^^)
}
// Modification de la date Min d'Arrivée :
function date_change1(element) {
    document.getElementById("return").min=element.target.value
}

// Modification de la date Max de Départ :
function date_change2(element) {
    document.getElementById("departure").max=element.target.value
}

// Ajout de N jour(s) à la date sélectionnée :
Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}
// Modification du format de la date pour utilisation dans l'input de type "date"
function modification(date) {
    var modifdate = date.getFullYear()
    if (date.getMonth()<9) {
        var modifdate = modifdate + "-0" + (date.getMonth()+1)
    }
    if (date.getMonth()>9) {
        var modifdate = modifdate + "-" + (date.getMonth()+1)
    }
    if (date.getDate()<10) {
        var modifdate = modifdate + "-0" + date.getDate()
    }
    if (date.getDate()>9) {
        var modifdate = modifdate + "-" + date.getDate()
    }
    return modifdate
}

// Permet de mettre la destination choisi à l'acceuil
function destination() {
    let dest = new URLSearchParams(window.location.search).get("destId");
    document.getElementById("destination").value = dest
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