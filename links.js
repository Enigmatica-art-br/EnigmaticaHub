// Edite somente esta lista para adicionar, remover ou reorganizar destinos.
// Deixe url: null enquanto o endereço ainda não estiver confirmado.
const links = [
  { title: 'Portfólio', description: 'Design, criação e trabalhos selecionados.', url: 'https://portfolio.enigmatica.art.br/' },
  { title: 'Projetos pessoais', description: 'Experimentos e trabalhos independentes.', url: 'https://projects.enigmatica.art.br/' },
  { title: 'Case 27: Noema', description: 'Uma experiência em desenvolvimento.', url: null }
];

const nav = document.querySelector('#project-links');
for (const [index, item] of links.entries()) {
  const card = document.createElement(item.url ? 'a' : 'div');
  card.className = 'project-card';
  if (item.url) card.href = item.url;
  else card.setAttribute('aria-disabled', 'true');

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
  copy.append(title, description);
  const end = document.createElement('span');
  end.className = item.url ? 'card-arrow' : 'card-soon';
  end.textContent = item.url ? '↗' : 'Em breve';
  if (item.url) end.setAttribute('aria-hidden', 'true');
  card.append(number, copy, end);
  nav.append(card);
}
document.querySelector('#year').textContent = new Date().getFullYear();
