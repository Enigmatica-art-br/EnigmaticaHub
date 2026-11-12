window.I18N = {
  pt: {
    'meta.title': 'Enigmática',
    langGroup: 'Idioma',
    navLabel: 'Seções',
    newTab: '(abre em nova aba)',
    tagline: 'Estúdio independente',
    'nav.games': 'Jogos',
    'nav.community': 'Comunidade',
    'nav.about': 'Sobre', 'nav.devlogs': 'Devlogs',
    'hero.title': 'Jogos que fazem você pensar.',
    'hero.lede': 'A Enigmática é um estúdio independente de um desenvolvedor só, focado em jogos de enigmas, mistério e tudo que promova o raciocínio de descobrir por conta própria.',
    'hero.wishlist': 'Case 27: Noema na Steam',
    'hero.games': 'Ver os jogos',
    'trailer.play': 'Assistir ao trailer',
    'trailer.label': 'Trailer oficial',
    'noema.status': 'Em desenvolvimento para PC',
    'noema.text': 'Case 27: Noema é um jogo não linear de investigação e puzzle em primeira pessoa, ambientado numa ilha. Explore livremente, descubra seus segredos e decifre as linguagens que escondem uma história sombria e filosófica.',
    'noema.site': 'Site oficial',
    'bd.status': 'ARG em desenvolvimento · 2027',
    'bd.text': 'Inspirado nos clássicos Alternate Reality Games (ARGs) da internet, Black Diamond apresenta uma seleção de enigmas originais de complexidade excepcional, construídos a partir de ideias inventivas e de uma curva de dificuldade cada vez mais exigente.',
    'bd.enter': 'Visitar o site',
    'about.title': 'Enigmática',
    'about.text': 'A Enigmática foi criada por Arthur Nascimento Nogueira para desenvolver e publicar experiências de mistério e enigmas.'
  },
  en: {
    'meta.title': 'Enigmática',
    langGroup: 'Language',
    navLabel: 'Sections',
    newTab: '(opens in a new tab)',
    tagline: 'Independent studio',
    'nav.games': 'Games',
    'nav.community': 'Community',
    'nav.about': 'About', 'nav.devlogs': 'Devlogs',
    'hero.title': 'Games that make you think.',
    'hero.lede': 'Enigmática is an independent, one-developer studio focused on puzzle and mystery games, and on experiences that encourage you to figure things out for yourself.',
    'hero.wishlist': 'Wishlist Case 27: Noema',
    'hero.games': 'See the games',
    'trailer.play': 'Play the trailer',
    'trailer.label': 'Official trailer',
    'noema.status': 'In development for PC',
    'noema.text': 'Case 27: Noema is a non-linear, first-person investigation and puzzle game set on an island. Explore freely, uncover its secrets, and decipher the languages that conceal a dark, philosophical story.',
    'noema.site': 'Official site',
    'bd.status': 'ARG in development · 2027',
    'bd.text': 'Inspired by classic internet Alternate Reality Games (ARGs), Black Diamond features a selection of exceptionally complex, original puzzles built around inventive ideas and an increasingly demanding difficulty curve.',
    'bd.enter': 'Visit the site',
    'about.title': 'Enigmática',
    'about.text': 'Arthur Nascimento Nogueira created Enigmática to develop and publish experiences built around mystery and puzzles.'
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
