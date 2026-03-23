// ================================
// 1. NAVBAR — muda visual ao rolar
// ================================

const navbar = document.querySelector('.navbar');
// querySelector busca o primeiro elemento com aquela classe
// É como um "seletor CSS" mas dentro do JavaScript

window.addEventListener('scroll', function() {
  // 'scroll' dispara toda vez que o usuário rola a página

  if (window.scrollY > 50) {
    // scrollY = quantos pixels o usuário já rolou verticalmente
    navbar.classList.add('navbar-scrolled');
    // classList.add adiciona uma classe CSS ao elemento
  } else {
    navbar.classList.remove('navbar-scrolled');
    // classList.remove remove a classe
  }
});


// ================================
// 2. SCROLL SUAVE nos links da navbar
// ================================

const linksNavbar = document.querySelectorAll('.nav-links a');
// querySelectorAll retorna TODOS os elementos (não só o primeiro)

linksNavbar.forEach(function(link) {
  // forEach percorre cada link, um por um

  link.addEventListener('click', function(evento) {
    evento.preventDefault();
    // preventDefault cancela o comportamento padrão do link
    // (que seria pular bruscamente para a seção)

    const destino = link.getAttribute('href');
    // pega o valor do href, ex: "#servicos"

    const secao = document.querySelector(destino);
    // encontra a seção com aquele id

    secao.scrollIntoView({ behavior: 'smooth' });
    // rola a página suavemente até a seção
  });
});


// ================================
// 3. MENU MOBILE — abrir e fechar
// ================================

const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', function() {
  navLinks.classList.toggle('nav-aberto');
  // toggle: se a classe existe, remove. Se não existe, adiciona.
  // É um "liga/desliga" perfeito para menus
});