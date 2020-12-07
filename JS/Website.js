// Execution des fonctions
window.onload = function() {scrollFunction();plusDivs();sansfiltre();Trie()}

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
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

// Gestion du Tableau :



// Gestion de la connexion :
function check(form)
{
 /* Test nom d'utilisateur / mdp */
 if(form.userid.value == "utilisateur" && form.pswrd.value == "mdp"
 || form.userid.value == "user" && form.pswrd.value == "pswd")
  {
    alert("Connexion Réussi")
  }
 else
 {
   alert("Nom d'utilisateur ou mot de passe incorrect")
  }
}

// Permet de cacher le footer 
function hidefooter() {
    document.getElementById("login").style.display = "none";
}
//Filtre



  function sansfiltre() {
    var Angleterre = { prix : 150, destination : 'Angleterre', continent:'Europe',lien:"/HTML/reservation.html?destId=0"  };
  var Chine = { prix : 180, destination : 'Chine', continent: 'Asie' };
  var Italie = { prix : 100, destination : 'Italie', continent: 'Europe'  };
  var Japon = { prix : 220, destination : 'Japon', continent: 'Asie' };
  var Espagne = { prix : 105, destination : 'Espagne', continent: 'Europe' };
  var Canada = { prix : 220, destination : 'Canada', continent: 'Amérique' };
  var EtatsUnis = { prix : 250, destination : 'Etats-Unis', continent: 'Amérique'  };
  var Mexique = { prix : 160, destination : 'Mexique', continent: 'Amérique' };

  let liste=[Angleterre, Chine, Italie, Japon, Espagne, Canada, EtatsUnis,Mexique];
    document.getElementById("prix1").innerHTML = liste[0].prix;
    document.getElementById("prix2").innerHTML = liste[1].prix;
    document.getElementById("prix3").innerHTML =liste[2].prix;
    document.getElementById("prix4").innerHTML =liste[3].prix;
    document.getElementById("prix5").innerHTML =liste[4].prix;
    document.getElementById("prix6").innerHTML =liste[5].prix;
    document.getElementById("prix7").innerHTML =liste[6].prix;
    document.getElementById("prix8").innerHTML =liste[7].prix;

    document.getElementById("pays1").innerHTML = liste[0].destination;
    document.getElementById("pays2").innerHTML = liste[1].destination;
    document.getElementById("pays3").innerHTML =liste[2].destination;
    document.getElementById("pays4").innerHTML =liste[3].destination;
    document.getElementById("pays5").innerHTML =liste[4].destination;
    document.getElementById("pays6").innerHTML =liste[5].destination;
    document.getElementById("pays7").innerHTML =liste[6].destination;
    document.getElementById("pays8").innerHTML =liste[7].destination;

    document.getElementById("continent1").innerHTML = liste[0].continent;
    document.getElementById("continent2").innerHTML = liste[1].continent;
    document.getElementById("continent3").innerHTML =liste[2].continent;
    document.getElementById("continent4").innerHTML =liste[3].continent;
    document.getElementById("continent5").innerHTML =liste[4].continent;
    document.getElementById("continent6").innerHTML =liste[5].continent;
    document.getElementById("continent7").innerHTML =liste[6].continent;
    document.getElementById("continent8").innerHTML =liste[7].continent;
  
    document.getElementById("lien1").href = liste[0].lien;
    document.getElementById("lien2").href = liste[0].lien;
    document.getElementById("lien3").href = liste[0].lien;
    document.getElementById("lien4").href = liste[0].lien;
    document.getElementById("lien5").href = liste[0].lien;
    document.getElementById("lien6").href = liste[0].lien;
    document.getElementById("lien7").href = liste[0].lien;
    document.getElementById("lien8").href = liste[0].lien;
  }

  function Trie() {
    var Angleterre = { prix : 150, destination : 'Angleterre', continent:'Europe'  };
    var Chine = { prix : 180, destination : 'Chine', continent: 'Asie' };
    var Italie = { prix : 100, destination : 'Italie', continent: 'Europe'  };
    var Japon = { prix : 220, destination : 'Japon', continent: 'Asie' };
    var Espagne = { prix : 105, destination : 'Espagne', continent: 'Europe' };
    var Canada = { prix : 220, destination : 'Canada', continent: 'Amérique' };
    var EtatsUnis = { prix : 250, destination : 'Etats-Unis', continent: 'Amérique'  };
    var Mexique = { prix : 160, destination : 'Mexique', continent: 'Amérique' };

    let liste=[Angleterre, Chine, Italie, Japon, Espagne, Canada, EtatsUnis,Mexique];
    let listeprix=[Angleterre.prix, Chine.prix, Italie.prix, Japon.prix, Espagne.prix, Canada.prix, EtatsUnis.prix,Mexique.prix];
    let prixtrie=listeprix.sort();
    let listetrie=[];
    for (let i = 0; i < prixtrie.length; i++) {
      for (let j = 0; j < liste.length; j++) {
        if (prixtrie[i]===liste[j].prix) {
          listetrie=listetrie+liste[j];
      
        } 
      }
    }
    document.getElementById("prix1").innerHTML = listetrie[0].prix;
    document.getElementById("prix2").innerHTML = listetrie[1].prix;
    document.getElementById("prix3").innerHTML =listetrie[2].prix;
    document.getElementById("prix4").innerHTML =listetrie[3].prix;
    document.getElementById("prix5").innerHTML =listetrie[4].prix;
    document.getElementById("prix6").innerHTML =listetrie[5].prix;
    document.getElementById("prix7").innerHTML =listetrie[6].prix;
    document.getElementById("prix8").innerHTML =listetrie[7].prix;

    document.getElementById("pays1").innerHTML = listetrie[0].destination;
    document.getElementById("pays2").innerHTML = listetrie[1].destination;
    document.getElementById("pays3").innerHTML =listetrie[2].destination;
    document.getElementById("pays4").innerHTML =listetrie[3].destination;
    document.getElementById("pays5").innerHTML =listetrie[4].destination;
    document.getElementById("pays6").innerHTML =listetrie[5].destination;
    document.getElementById("pays7").innerHTML =listetrie[6].destination;
    document.getElementById("pays8").innerHTML =listetrie[7].destination;

    document.getElementById("continent1").innerHTML = listetrie[0].continent;
    document.getElementById("continent2").innerHTML = listetrie[1].continent;
    document.getElementById("continent3").innerHTML =listetrie[2].continent;
    document.getElementById("continent4").innerHTML =listetrie[3].continent;
    document.getElementById("continent5").innerHTML =listetrie[4].continent;
    document.getElementById("continent6").innerHTML =listetrie[5].continent;
    document.getElementById("continent7").innerHTML =listetrie[6].continent;
    document.getElementById("continent8").innerHTML =listetrie[7].continent;
  
  }
    
    