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
var header = document.getElementById('header');
var lastScroll = 0;

window.addEventListener('scroll', () => {
    var currentScroll = window.scrollY;
    if (currentScroll > lastScroll && currentScroll > 200) {
        // se estiver rolando para baixo e passar dos 200px, esconde o cabeçalho
        header.style.top = '-50px';
    } else {
        // se estiver rolando para cima, mostra o cabeçalho
        header.style.background = '#191919';
        header.style.top = '0';
    }
    lastScroll = currentScroll;
});
//FIM DO CABEÇALHO
