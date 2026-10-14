window.I18N = {
  pt: {
    'meta.title': 'Enigmática',
    'meta.description': 'Enigmática — projetos, jogos e canais oficiais.',
    langGroup: 'Idioma',
    logoAlt: 'Logo da Enigmática',
    motto: 'Enigmas são arte.',
    linksHeading: 'Projetos e canais oficiais',
    soon: 'Em breve',
    newTab: '(abre em nova aba)',
    'games.title': 'Enigmática Games',
    'games.desc': 'Todos os jogos do estúdio',
    'noema.title': 'Case 27: Noema',
    'noema.desc': 'Site oficial do jogo',
    'steam.desc': 'Loja de Case 27: Noema',
    'youtube.desc': 'Vídeos e novidades',
    'discord.desc': 'Entre na comunidade',
    'instagram.desc': 'Bastidores e anúncios',
    'reddit.desc': 'Discussões e teorias',
    'tiktok.desc': 'Vídeos curtos'
  },
  en: {
    'meta.title': 'Enigmática',
    'meta.description': 'Enigmática — projects, games and official channels.',
    langGroup: 'Language',
    logoAlt: 'Enigmática logo',
    motto: 'Enigmas are art.',
    linksHeading: 'Projects and official channels',
    soon: 'Soon',
    newTab: '(opens in a new tab)',
    'games.title': 'Enigmática Games',
    'games.desc': 'Every game from the studio',
    'noema.title': 'Case 27: Noema',
    'noema.desc': 'The game’s official website',
    'steam.desc': 'Case 27: Noema store page',
    'youtube.desc': 'Videos and news',
    'discord.desc': 'Join the community',
    'instagram.desc': 'Behind the scenes and announcements',
    'reddit.desc': 'Discussions and theories',
    'tiktok.desc': 'Short videos'
  }
};

/* tint = tom de laranja que a luz assume quando o link está em foco (variações próximas) */
var LINKS = [
  { id: 'games', icon: 'cube', url: 'https://games.enigmatica.art.br/', tint: [0.95, 0.68, 0.26] },
  { id: 'noema', icon: 'eye', url: 'https://games.enigmatica.art.br/noema/', tint: [0.98, 0.61, 0.22] },
  { id: 'steam', title: 'Steam', icon: 'store', url: 'https://store.steampowered.com/app/5361160', tint: [0.89, 0.70, 0.31] },
  { id: 'youtube', title: 'YouTube', icon: 'play', url: 'https://www.youtube.com/@enigmatica-art', tint: [0.97, 0.58, 0.20] },
  { id: 'discord', title: 'Discord', icon: 'chat', url: 'https://discord.gg/URapb2bbFA', tint: [0.93, 0.74, 0.32] },
  { id: 'instagram', title: 'Instagram', icon: 'lens', url: 'https://www.instagram.com/enigmatica.official/', tint: [0.91, 0.60, 0.24] },
  { id: 'reddit', title: 'Reddit', icon: 'alien', url: 'https://www.reddit.com/user/Enigmatica-Art/', tint: [0.97, 0.64, 0.23] },
  { id: 'tiktok', title: 'TikTok', icon: 'note', url: null, tint: [0.90, 0.72, 0.30] }
];

var ICONS = {
  alien: '<ellipse cx="12" cy="14.5" rx="8" ry="5.5"/><circle cx="9" cy="14" r=".9" fill="currentColor"/><circle cx="15" cy="14" r=".9" fill="currentColor"/><path d="M9.5 17c1.5.9 3.5.9 5 0M12 9l1.2-5 3.6 1"/><circle cx="18" cy="5" r="1.3"/>',
  note: '<path d="M13 3v11.5a3.5 3.5 0 1 1-3.5-3.5"/><path d="M13 3c.6 2.6 2.6 4.4 5.5 4.6"/>',
  cube: '<path d="M12 2.8 20 7.4v9.2L12 21.2 4 16.6V7.4Z"/><path d="M4 7.4 12 12l8-4.6M12 12v9.2"/>',
  eye: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="3.2"/>',
  store: '<path d="M4 9h16l-1.2 10.5H5.2Z"/><path d="M8.5 9V7a3.5 3.5 0 0 1 7 0v2"/>',
  play: '<rect x="2.8" y="5.5" width="18.4" height="13" rx="3.6"/><path d="m10.2 9.4 4.6 2.6-4.6 2.6Z" fill="currentColor"/>',
  chat: '<path d="M4 5.5h16v10.5h-8.5L7 19.5V16H4Z"/><circle cx="9" cy="10.8" r=".9" fill="currentColor"/><circle cx="15" cy="10.8" r=".9" fill="currentColor"/>',
  lens: '<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="3.9"/><circle cx="17.1" cy="6.9" r=".8" fill="currentColor"/>'
};

var list = document.getElementById('link-list');
var socialList = document.getElementById('social-list');
var SOCIAL = { youtube: 1, discord: 1, instagram: 1, reddit: 1, tiktok: 1 };

LINKS.forEach(function (item) {
  var li = document.createElement('li');
  var el = document.createElement(item.url ? 'a' : 'div');
  el.className = 'link' + (item.url ? '' : ' is-soon');
  el.dataset.id = item.id;
  if (item.url) {
    el.href = item.url;
    if (!/enigmatica\.art\.br/.test(item.url)) { el.target = '_blank'; el.rel = 'noopener noreferrer'; }
  } else {
    el.setAttribute('aria-disabled', 'true');
  }

  var titleAttr = item.title ? '' : ' data-i18n="' + item.id + '.title"';
  el.innerHTML =
    '<svg class="link-icon" viewBox="0 0 24 24" aria-hidden="true">' + ICONS[item.icon] + '</svg>' +
    '<span class="link-text">' +
      '<span class="link-title"' + titleAttr + '>' + (item.title || '') + '</span>' +
      '<span class="link-desc" data-i18n="' + item.id + '.desc"></span>' +
    '</span>' +
    (item.url
      ? '<svg class="link-go" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg>' +
        (el.target ? '<span class="sr-only" data-i18n="newTab"></span>' : '')
      : '<span class="link-soon" data-i18n="soon"></span>');

  ['pointerenter', 'focus'].forEach(function (ev) {
    el.addEventListener(ev, function () { Light.tint(item.tint); });
  });
  ['pointerleave', 'blur'].forEach(function (ev) {
    el.addEventListener(ev, function () { Light.tint(null); });
  });

  li.appendChild(el);
  if (SOCIAL[item.id]) { el.classList.add('link-social'); socialList.appendChild(li); }
  else list.appendChild(li);
});

document.getElementById('year').textContent = new Date().getFullYear();
window.EnigmaticaI18n.apply();

/* ---------- Cubo: inclina com o ponteiro ---------- */
(function () {
  var cube = document.querySelector('[data-cube]');
  if (!cube || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  window.addEventListener('pointermove', function (e) {
    var r = cube.getBoundingClientRect();
    var dx = (e.clientX - (r.left + r.width / 2)) / innerWidth;
    var dy = (e.clientY - (r.top + r.height / 2)) / innerHeight;
    cube.style.setProperty('--ry', (dx * 22).toFixed(2) + 'deg');
    cube.style.setProperty('--rx', (-dy * 22).toFixed(2) + 'deg');
  }, { passive: true });
})();

/* ---------- Luz de fundo (WebGL) ----------
 * Um gradiente vivo de âmbar e obsidiana, como a luz que escapa
 * de dentro do cubo. Ao focar um link, a luz muda de tom.
 */
var Light = (function () {
  var canvas = document.querySelector('.light');
  var target = [0.95, 0.68, 0.26];
  var base = target.slice();
  var tint = target.slice();
  var api = { tint: function (c) { target = c || base; if (still) draw(performance.now()); } };
  var gl = canvas && canvas.getContext('webgl', { antialias: false, premultipliedAlpha: false });
  var still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!gl) { document.body.classList.add('no-webgl'); return api; }

  var vs = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
  var fs = [
    'precision mediump float;',
    'uniform vec2 r;uniform float t;uniform vec3 tint;uniform vec2 focus;',
    'float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}',
    'float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);',
    ' return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}',
    'float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*n(p);p=p*2.03+vec2(1.7,9.2);a*=.5;}return v;}',
    'void main(){',
    ' vec2 uv=gl_FragCoord.xy/r;float S=min(r.x,r.y);vec2 q=(gl_FragCoord.xy-.5*r)/S;',
    ' vec2 f=(focus*r-.5*r)/S;',
    ' float s=t*.035;',
    ' vec2 w=vec2(fbm(q*1.6+s),fbm(q*1.6-s+4.1));',
    ' float m=fbm(q*1.3+w*1.7+vec2(s*1.4,-s));',
    ' float d=length(q-f);',
    ' float core=exp(-d*d*7.0);',
    ' float warm=1.-smoothstep(0.12,1.00,d+(m-.5)*.25);',
    ' float fall=1.-smoothstep(.05,1.6,d);',
    ' float field=m*1.4+d*.9;',
    ' float lines=pow(.5+.5*sin(field*18.-s*9.),22.);',
    ' float silk=smoothstep(.35,.95,fbm(q*.8+w*2.3-s*.6));',
    ' vec3 col=mix(vec3(0.006,0.012,0.035),vec3(0.020,0.050,0.150),silk*0.90);',
    ' col+=tint*core*0.42*(.6+.3*m);',
    ' col+=mix(vec3(0.220,0.340,0.700),tint,warm)*lines*fall*(.12+.4*warm);',
    ' col+=mix(vec3(0.100,0.200,0.550),mix(tint,vec3(0.620,0.380,0.100),.55),warm)*silk*fall*.16;',
    ' col+=vec3(0.900,0.740,0.500)*pow(core,5.)*.14;',
    ' col*=1.-.6*smoothstep(.55,1.25,length(uv-.5)*1.6);',
    ' col+=(h(gl_FragCoord.xy+fract(t))-.5)*.025;',
    ' gl_FragColor=vec4(col,1.);',
    '}'
  ].join('\n');

  function sh(type, src) { var s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); return s; }
  var prog = gl.createProgram();
  gl.attachShader(prog, sh(gl.VERTEX_SHADER, vs));
  gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, fs));
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) { document.body.classList.add('no-webgl'); return api; }
  gl.useProgram(prog);
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  var loc = gl.getAttribLocation(prog, 'p');
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  var uR = gl.getUniformLocation(prog, 'r'), uT = gl.getUniformLocation(prog, 't');
  var uTint = gl.getUniformLocation(prog, 'tint'), uF = gl.getUniformLocation(prog, 'focus');

  var cube = document.querySelector('[data-cube]');
  var focus = [0.3, 0.5];
  function resize() {
    var scale = Math.min(devicePixelRatio || 1, 1.5) * 0.5;
    canvas.width = Math.round(innerWidth * scale);
    canvas.height = Math.round(innerHeight * scale);
    gl.viewport(0, 0, canvas.width, canvas.height);
    var b = cube.getBoundingClientRect();
    focus = [(b.left + b.width / 2) / innerWidth, 1 - (b.top + b.height / 2) / innerHeight];
    if (still) draw(performance.now());
  }

  function draw(now) {
    for (var i = 0; i < 3; i++) tint[i] += (target[i] - tint[i]) * (still ? 1 : 0.045);
    gl.uniform2f(uR, canvas.width, canvas.height);
    gl.uniform1f(uT, still ? 20 : now / 1000);
    gl.uniform3f(uTint, tint[0], tint[1], tint[2]);
    gl.uniform2f(uF, focus[0], focus[1]);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }

  var raf = 0;
  function loop(now) { draw(now); raf = requestAnimationFrame(loop); }
  addEventListener('resize', resize);
  setTimeout(resize, 1500);
  document.addEventListener('visibilitychange', function () {
    if (still) return;
    cancelAnimationFrame(raf);
    if (!document.hidden) raf = requestAnimationFrame(loop);
  });
  resize();
  if (still) draw(0); else raf = requestAnimationFrame(loop);
  document.body.classList.add('has-light');
  return api;
})();

/* ---------- efeito de clique: anel dourado, losango e faíscas ---------- */
(function () {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.addEventListener('pointerdown', function (e) {
    var t = document.createElement('span');
    t.className = 'tap';
    t.style.transform = 'translate(' + e.clientX + 'px,' + e.clientY + 'px)';
    for (var i = 0; i < 6; i++) {
      var a = (Math.PI * 2 / 6) * i + Math.random() * .5, r = 26 + Math.random() * 14;
      var sp = document.createElement('i');
      sp.style.setProperty('--dx', (Math.cos(a) * r).toFixed(1) + 'px');
      sp.style.setProperty('--dy', (Math.sin(a) * r).toFixed(1) + 'px');
      t.appendChild(sp);
    }
    document.body.appendChild(t);
    setTimeout(function () { t.remove(); }, 700);
  }, { passive: true });
})();
