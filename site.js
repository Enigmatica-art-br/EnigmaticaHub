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
    'noema.status': 'Em desenvolvimento para PC · 2027',
    'noema.text': 'Um jogo não linear de investigação e puzzle em primeira pessoa, ambientado numa ilha. Explore livremente, descubra seus segredos e decifre as linguagens que escondem uma história sombria e filosófica.',
    'noema.site': 'Site oficial',
    'math.status': 'Jogo educativo de navegador',
    'math.text': 'Um jogo educativo de navegador com questões diárias de matemática do Exame Nacional do Ensino Médio (Enem), exame brasileiro usado no ingresso ao ensino superior. Resolva um novo desafio a cada dia.',
    'math.site': 'Acessar o site',
    'games.previous': 'Jogos anteriores', 'games.next': 'Mais jogos',
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
    'noema.status': 'In development for PC · 2027',
    'noema.text': 'A non-linear, first-person investigation and puzzle game set on an island. Explore freely, uncover its secrets, and decipher the languages that conceal a dark, philosophical story.',
    'noema.site': 'Official site',
    'math.status': 'Educational browser game',
    'math.text': 'An educational browser game with daily maths questions from Brazil’s Exame Nacional do Ensino Médio (Enem), an exam used for university admission. Solve a new challenge every day.',
    'math.site': 'Visit the site',
    'games.previous': 'Previous games', 'games.next': 'More games',
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

(function(){
 const row=document.querySelector('.games-carousel .games');if(!row)return;
 const previous=document.querySelector('[data-games-move="-1"]'),next=document.querySelector('[data-games-move="1"]'),cards=[...row.children];
 function update(){const canBack=row.scrollLeft>2,canNext=row.scrollLeft<row.scrollWidth-row.clientWidth-2;previous.hidden=!canBack;next.hidden=!canNext;const viewport=row.getBoundingClientRect();cards.forEach(card=>{const rect=card.getBoundingClientRect(),outside=rect.right<=viewport.left+1||rect.left>=viewport.right-1;card.inert=outside;card.setAttribute('aria-hidden',String(outside))});if(document.activeElement===next&&!canNext&&canBack)previous.focus({preventScroll:true});else if(document.activeElement===previous&&!canBack&&canNext)next.focus({preventScroll:true})}
 for(const button of [previous,next])button.addEventListener('click',()=>{const step=cards[0].getBoundingClientRect().width+parseFloat(getComputedStyle(row).columnGap),max=row.scrollWidth-row.clientWidth,target=Math.max(0,Math.min(max,row.scrollLeft+Number(button.dataset.gamesMove)*step));row.scrollTo({left:target,behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth'})});
 row.addEventListener('scroll',update,{passive:true});new ResizeObserver(update).observe(row);requestAnimationFrame(update);
})();
