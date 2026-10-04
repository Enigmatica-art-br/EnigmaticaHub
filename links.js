const links = [
  { title: 'Portfólio', description: 'Design, criação e trabalhos selecionados.', url: 'https://portfolio.enigmatica.art.br/' },
  { title: 'Projetos', description: 'Experimentos e projetos pessoais.', url: 'https://projects.enigmatica.art.br/' },
  { title: 'Noema', description: 'Página oficial do jogo no itch.io.', url: 'https://enigmatica-art.itch.io/noema' },
  { title: 'Timer', description: 'Contagem regressiva da Enigmática.', url: 'https://timer.enigmatica.art.br/' },
  { title: 'Editor', description: 'Editor 3D da Enigmática.', url: 'https://itzfenyxzeditor.enigmatica.art.br/' },
  { title: 'ARG Codec', description: 'Codificador e decodificador para ARG.', url: 'https://argcodec.enigmatica.art.br/' },
  { title: 'YouTube', description: 'Vídeos e novidades da Enigmática.', url: 'https://www.youtube.com/@enigmatica-art' },
  { title: 'Discord', description: 'Entre na comunidade.', url: 'https://discord.gg/URapb2bbFA' },
  { title: 'Instagram', description: 'Acompanhe a Enigmática.', url: 'https://www.instagram.com/enigmatica.official/' }
];

const nav = document.querySelector('#project-links');

for (const [index, item] of links.entries()) {
  const card = document.createElement('a');
  card.className = 'project-card';
  card.href = item.url;
  card.style.setProperty('--delay', (260 + index * 75) + 'ms');

  if (!item.url.includes('enigmatica.art.br')) {
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
  arrow.className = 'card-arrow';
  arrow.textContent = '↗';
  arrow.setAttribute('aria-hidden', 'true');

  copy.append(title, description);
  card.append(number, copy, arrow);
  nav.append(card);
}

document.querySelector('#year').textContent = new Date().getFullYear();
requestAnimationFrame(() => document.body.classList.add('is-ready'));
