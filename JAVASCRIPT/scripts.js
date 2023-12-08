const menuhamburguer = document.querySelector('.menu-hamburguer');
const nav = document.querySelector('.navbar');
const links = document.querySelectorAll('.navbar-links li a');

// ativa e desativa menu
menuhamburguer.addEventListener('click', () => {
    nav.classList.toggle('active')
})

links.forEach(item => {
    item.addEventListener('click', () => {
      nav.classList.toggle('active');  
    })
})
// END

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
    spaceBetween: 30,
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

//FUNÇAO PARA SLIDE CONFORME LARGURA

function handleWidth(){
    let getWidth = window.innerWidth || document.documentElement.clientWidth;
    slideShow = 2;

    if(getWidth < 700){
        slideShow = 1
    }
    // Atualiza a configuração do Swiper
    swiper.params.slidesPerView = slideShow;
    swiper.update();
}
//END FUNCCION

// Chama a função handleWidth imediatamente quando a página é carregada
handleWidth();

// Adiciona um ouvinte de evento 'resize' ao objeto window
window.addEventListener('resize', handleWidth);


