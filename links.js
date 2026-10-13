const links = [
  { code: 'PLAY', title: 'Enigmática Games', description: 'Jogos e mundos interativos.', url: 'https://games.enigmatica.art.br/' },
  { code: 'CASE 27', title: 'Case 27: Noema', description: 'Entre na ilha e siga as pistas.', url: 'https://games.enigmatica.art.br/noema/' },
  { code: 'STORE', title: 'Case 27: Noema — Steam', description: 'A transmissão ainda não foi liberada.', url: null },
  { code: 'WATCH', title: 'YouTube', description: 'Diários, imagens e novidades.', url: 'https://www.youtube.com/@enigmatica-art' },
  { code: 'TALK', title: 'Discord', description: 'Entre na comunidade.', url: 'https://discord.gg/URapb2bbFA' },
  { code: 'TRACE', title: 'Instagram', description: 'Acompanhe os sinais.', url: 'https://www.instagram.com/enigmatica.official/' }
];

const nav = document.querySelector('#project-links');

for (const [index, item] of links.entries()) {
  const card = document.createElement(item.url ? 'a' : 'div');
  card.className = 'signal-link reveal';
  card.style.setProperty('--delay', `${index * 55}ms`);

  if (item.url) card.href = item.url;
  else card.setAttribute('aria-disabled', 'true');

  if (item.url && !item.url.includes('enigmatica.art.br')) {
    card.target = '_blank';
    card.rel = 'noreferrer';
  }

  card.innerHTML = `
    <span class="link-number">${String(index + 1).padStart(2, '0')}</span>
    <span class="link-code">${item.code}</span>
    <span class="link-copy"><strong>${item.title}</strong><small>${item.description}</small></span>
    <span class="link-action" aria-hidden="true">${item.url ? '↗' : 'AGUARDE'}</span>
  `;
  nav.append(card);
}

document.querySelector('#year').textContent = new Date().getFullYear();

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduceMotion) {
  const light = document.querySelector('.cursor-light');
  window.addEventListener('pointermove', (event) => {
    light.style.setProperty('--x', `${event.clientX}px`);
    light.style.setProperty('--y', `${event.clientY}px`);
  }, { passive: true });

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));
} else {
  document.querySelectorAll('.reveal').forEach((item) => item.classList.add('visible'));
}
