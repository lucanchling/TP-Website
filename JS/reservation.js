// Date par Défaut avec limites:

function dates() {
    // Paramétrage des constantes (explicites)
    let auji = new Date()
    const today = auji.getFullYear() + '-' + (auji.getMonth()+1) +'-'+auji.getDate()
    const dayafter = auji.getFullYear() + '-' + (auji.getMonth()+1) +'-'+ ((auji.getDate()+1) % 30)
    const weekafter = auji.getFullYear() + '-' + (auji.getMonth()+1) +'-'+ ((auji.getDate()+7) % 30)
    // Pour la date de départ :
    // Par défaut : aujourd'hui
    document.getElementById("departure").defaultValue = today;
    // Valeur Min :
    document.getElementById("departure").min = today;
    // Valeur Max :
    document.getElementById("departure").max = weekafter;
    

    // Pour la date de retour :
    // Par défaut :
    document.getElementById("return").defaultValue = weekafter;
    // Valeur Min :
    document.getElementById("return").min = dayafter;
    // Valeur Max : pas de nécessité (voyage peut être infini)
}
// Modification de la date Min d'Arrivée :
function date_change1(e) {
    document.getElementById("return").min=e.target.value
}

// Modification de la date Max de Départ :
function date_change2(e) {
    document.getElementById("departure").max=e.target.value
}