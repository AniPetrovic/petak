var slideIndex = 1;
 
   //kada se otvori strana prikazuje samo prvu sliku
    showSlides(slideIndex);
    
    //ova funkcija obezbeđuje prelazak na sledeću ili prethodnu sliku, na sledeću ako se prosledi +1 a na prethodnu ako se prosledi -1
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    

  //ovoj funkciji prosleđujemo n koje je jednako (vrednost slideIndex-a + 1) ako je korisnik kliknuo na strelicu unapred, ili (vrednost slideIndex-a - 1)
  // ako je kliknuo na strelicu unazad
    function showSlides(n) {
      var i;
      
      //slides je lista čije su vrednosti slike koje imaju klasu slide
      var slides = document.getElementsByClassName("slide");

//ako je n veće od dužine liste to znači da smo na poslednjoj slici i korisnik je kliknuo strelicu unapred, tj treba da se prikaže slika koja je prvi elemet liste slides
      if (n > slides.length) {slideIndex = 1}
      
      //ako je n manje od 1 to znači da smo na prvoj slici i korisnik je kliknuo strelicu unazad, tj treba da se prikaže slika koja je poslednji elemet liste slides
      if (n < 1) {slideIndex = slides.length}

      //ova petlja zabranjuje svim slikama da budu prikazane
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
      }

     //ova komanda znači: slika na kojoj se nalazimo neka se prikaže
      slides[slideIndex-1].style.display = "block";  
    }