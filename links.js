const links = [
  { title: 'Noema — Site', description: 'Conheça o mundo e os mistérios de Noema.', url: 'https://games.enigmatica.art.br/noema/' },
  { title: 'Noema — itch.io', description: 'Jogue Noema no itch.io.', url: 'https://enigmatica-art.itch.io/noema' },
  { title: 'Noema — Steam', description: 'Página da Steam em preparação.', url: null },
  { title: 'YouTube', description: 'Vídeos e novidades da Enigmática.', url: 'https://www.youtube.com/@enigmatica-art' },
  { title: 'Discord', description: 'Entre na comunidade.', url: 'https://discord.gg/URapb2bbFA' },
  { title: 'Instagram', description: 'Acompanhe a Enigmática.', url: 'https://www.instagram.com/enigmatica.official/' }
];

const nav = document.querySelector('#project-links');

for (const [index, item] of links.entries()) {
  const card = document.createElement(item.url ? 'a' : 'div');
  card.className = 'project-card';
  card.style.setProperty('--delay', (260 + index * 75) + 'ms');

  if (item.url) card.href = item.url;
  else card.setAttribute('aria-disabled', 'true');

  if (item.url && !item.url.includes('enigmatica.art.br')) {
    card.target = '_blank';
    card.rel = 'noreferrer';
  }

  const number = document.createElement('span');
  number.className = 'card-number';
  number.textContent = String(index + 1).padStart(2, '0');

  const copy = document.createElement('span');
  copy.className = 'card-copy';

  const title = document.createElement('span');
  title.className = 'card-title';
  title.textContent = item.title;

  const description = document.createElement('span');
  description.className = 'card-description';
  description.textContent = item.description;

  const arrow = document.createElement('span');
  arrow.className = item.url ? 'card-arrow' : 'card-soon';
  arrow.textContent = item.url ? '↗' : 'Em breve';
  arrow.setAttribute('aria-hidden', 'true');

  copy.append(title, description);
  card.append(number, copy, arrow);
  nav.append(card);
}

document.querySelector('#year').textContent = new Date().getFullYear();
requestAnimationFrame(() => document.body.classList.add('is-ready'));
