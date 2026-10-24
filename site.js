window.I18N = {
  pt: {
    'meta.title': 'Enigmática',
    langGroup: 'Idioma',
    navLabel: 'Seções',
    newTab: '(abre em nova aba)',
    tagline: 'Estúdio de uma pessoa só',
    'nav.games': 'Jogos',
    'nav.community': 'Comunidade',
    'nav.about': 'Sobre',
    'hero.title': 'Jogos que fazem você pensar.',
    'hero.lede': 'A Enigmática é um estúdio independente de um desenvolvedor só, focado em jogos de enigma e mistério. Nada vem explicado: cada resposta precisa ser descoberta.',
    'hero.wishlist': 'Case 27: Noema na Steam',
    'hero.games': 'Ver os jogos',
    'trailer.play': 'Assistir ao trailer',
    'trailer.label': 'Trailer oficial',
    'noema.status': 'Em desenvolvimento para PC',
    'noema.text': 'Uma investigação em primeira pessoa numa ilha construída sobre segredos, com uma linguagem que nunca explica as próprias regras.',
    'noema.site': 'Site oficial',
    'bd.status': 'ARG em desenvolvimento · 2027',
    'bd.text': 'Um ARG difícil, inspirado em Notpron, jogado direto no navegador. Lançamento oficial em 2027.',
    'bd.enter': 'Visitar o site',
    'about.title': 'Estúdio de uma pessoa só',
    'about.text': 'A Enigmática é o estúdio de Arthur Nascimento Nogueira. Cada jogo é pensado para desafiar quem joga: observar, ligar as pistas e chegar à resposta sozinho.'
  },
  en: {
    'meta.title': 'Enigmática',
    langGroup: 'Language',
    navLabel: 'Sections',
    newTab: '(opens in a new tab)',
    tagline: 'A one-dev studio',
    'nav.games': 'Games',
    'nav.community': 'Community',
    'nav.about': 'About',
    'hero.title': 'Games that make you think.',
    'hero.lede': 'Enigmática is an independent one-dev studio focused on puzzle and mystery games. Nothing is handed to you: every answer has to be found.',
    'hero.wishlist': 'Wishlist Case 27: Noema',
    'hero.games': 'See the games',
    'trailer.play': 'Play the trailer',
    'trailer.label': 'Official trailer',
    'noema.status': 'In development for PC',
    'noema.text': 'A first-person investigation on an island built on secrets, and a language that never explains its own rules.',
    'noema.site': 'Official site',
    'bd.status': 'ARG in development · 2027',
    'bd.text': 'A hard ARG inspired by Notpron, played right in the browser. Officially launching in 2027.',
    'bd.enter': 'Visit the site',
    'about.title': 'A one-dev studio',
    'about.text': 'Enigmática is the studio of Arthur Nascimento Nogueira. Every game is built to challenge the player: observe, connect the clues and reach the answer on your own.'
  }
};

(function () {
  document.getElementById('year').textContent = new Date().getFullYear();
  window.EnigmaticaI18n.apply();

  /* clicar várias vezes não seleciona texto; arrastar continua selecionando */
  document.addEventListener('mousedown', function (e) {
    if (e.detail > 1 && !e.target.closest('input, textarea, [contenteditable]')) e.preventDefault();
  });

  var head = document.querySelector('[data-head]');
  var tick = function () { head.classList.toggle('is-scrolled', scrollY > 10); };
  tick();
  addEventListener('scroll', tick, { passive: true });

  /* trailer: mostra a capa real e só carrega o player ao clicar */
  document.querySelectorAll('[data-video]').forEach(function (box) {
    var btn = box.querySelector('.poster');
    btn.addEventListener('click', function () {
      var f = document.createElement('iframe');
      f.src = 'https://www.youtube-nocookie.com/embed/' + box.getAttribute('data-video') + '?autoplay=1&rel=0';
      f.title = 'Case 27: Noema | Official Trailer';
      f.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      f.referrerPolicy = 'strict-origin-when-cross-origin';
      f.allowFullscreen = true;
      btn.replaceWith(f);
    });
  });
})();
