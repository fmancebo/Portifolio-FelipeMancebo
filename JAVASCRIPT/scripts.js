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
    if (window.scrollY > 200) {                               //para definir a posiçao do mouse usamos scrolly e nao scroll
        header.style.background = '#191919';                // e definimos a funçao atraves do if else para executar conforme decidirmos
    } else {
        header.style.background = 'transparent';
    }
});
//FIM DO CABEÇALHO

