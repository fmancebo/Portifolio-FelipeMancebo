//CABEÇALHO
var header = document.getElementById('header');             //para qualquer funçao no JS primeiro definimos a variavel

window.addEventListener('scroll', () => {                   //essa funçao define um envento. evento esse do mouse que seria => 
    if(window.scrollY > 200){                               //para definir a posiçao do mouse usamos scrolly e nao scroll
        header.style.background = '#191919';                // e definimos a funçao atraves do if else para executar conforme decidirmos
    } else {
        header.style.background = 'transparent';
    }
});
//FIM DO CABEÇALHO


//CARROCEL PREJETOS
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 5,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//END CARROCEL PROJETOS


