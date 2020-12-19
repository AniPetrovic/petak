//preuzimanje vrednosti iz forme
function provera(){
var ime = document.forms["form2"]["unosImePrezime"].value;
var email = document.forms["form2"]["unosEmail"].value;
var komentar = document.forms["form2"]["comments"].value;

//ukoliko korisnik ostavi prazno polje izlazi mu obavestenja "Niste popunili sva polja"
//Ako su popunjena sva polja izlazi obavestenje "Poslali ste zahtev"
if ((ime == "") || (email == "") || (komentar == "") ) {
    alert('Niste popunili sva polja');
} else {
    alert('Poslali ste zahtev');
}

}
$(function(){
    $("#draggable").draggable();
});