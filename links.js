const links = [
  { title: 'Enigmática Games', description: 'Jogos da Enigmática', url: 'https://games.enigmatica.art.br/' },
  { title: 'Case 27: Noema', description: 'Site oficial do jogo', url: 'https://games.enigmatica.art.br/noema/' },
  { title: 'Steam', description: 'Case 27: Noema · em breve', url: null },
  { title: 'YouTube', description: 'Vídeos e novidades', url: 'https://www.youtube.com/@enigmatica-art' },
  { title: 'Discord', description: 'Comunidade oficial', url: 'https://discord.gg/URapb2bbFA' },
  { title: 'Instagram', description: '@enigmatica.official', url: 'https://www.instagram.com/enigmatica.official/' }
];

const nav = document.querySelector('#project-links');

links.forEach((item, index) => {
  const card = document.createElement(item.url ? 'a' : 'div');
  card.className = 'link-card';
  if (item.url) card.href = item.url;
  else card.setAttribute('aria-disabled', 'true');

  if (item.url && !item.url.includes('enigmatica.art.br')) {
    card.target = '_blank';
    card.rel = 'noreferrer';
  }

  card.innerHTML = `
    <span class="number">${String(index + 1).padStart(2, '0')}</span>
    <span class="copy"><strong>${item.title}</strong><small>${item.description}</small></span>
    <span class="action" aria-hidden="true">${item.url ? '↗' : 'EM BREVE'}</span>
  `;
  nav.append(card);
});

document.querySelector('#year').textContent = new Date().getFullYear();
