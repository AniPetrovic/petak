function required() {

    //preuzimanje vrednosti iz forme
    var ime = document.forms["form1"]["unosImePrezime"].value;
    var email = document.forms["form1"]["unosEmail"].value;
    var tel = document.forms["form1"]["unosTelefon"].value;
    var brOsoba = document.forms["form1"]["unosOsoba"].value;
    var datum = document.forms["form1"]["unosDatum"].value;

    //provera da li su unete sve vrednosti
    if ((ime == "") || (email == "") || (tel == "") || (brOsoba == "") || (datum == "")) {
        alert('Niste popunili sva polja');
    } 
    //proverva da li je mejl ispravno unet
    if (!proveriMejl(email)) {
        alert('Neispravno ste uneli mejl')
    }
    //proverava da li je broj telefona ispravno unet
    if(!proveriBroj(tel)){
        alert('Neispravno ste uneli broj telefona');
    } else {
        alert('Poslata je rezervacija');
    }
}

 //ako email sadrži @ i .rs ili ako sadrži @ i .com vrati true - to znači da je email ispravan, u suprotnom vrati false - to znači da je email neispravan
 //funkcija includes() proverava da li se zadati string nalazi u drugom stringu nad kojim se poziva
function proveriMejl(email) {
    if ( (email.toString().includes('@') && (email.toString().includes('.com'))) || (email.toString().includes('@') && (email.toString().includes('.rs'))) ) {
        return true;
    }
    return false;
}

//funkciaj test(myString) proverava da li neki karakter iz stringa myString pripada rasponu stringova nad kojim se poziva funkcija
//ako je myString broj tj ne sadrži ni jedan karakter iz raspona funkcija će vratiti true, ako sadrži bar jedan karakter iz raspona vratiće false
function proveriBroj(myString) {
    var raspon = /[a-zA-Z]/g;
    if (raspon.test(myString)) {
       return false;
    } else {
        return true;
    }
  }