window.I18N = {
  pt: {
    'meta.title': 'Enigmática',
    'meta.description': 'Enigmática — jogos, projetos e canais oficiais.',
    langGroup: 'Idioma',
    navLabel: 'Seções',
    'nav.games': 'Jogos',
    'nav.trailer': 'Trailer',
    'nav.community': 'Comunidade',
    logoAlt: 'Logo da Enigmática',
    motto: 'Enigmas são arte.',
    linksHeading: 'Projetos e canais oficiais',
    scrollCue: 'Descer para os jogos',
    newTab: '(abre em nova aba)',
    'noema.desc': 'Site oficial do jogo',
    'blackdiamond.desc': 'ARG no navegador',
    'steam.desc': 'Loja de Case 27: Noema',
    'youtube.desc': 'Vídeos e novidades',
    'discord.desc': 'Entre na comunidade',
    'instagram.desc': 'Bastidores e anúncios',
    'reddit.desc': 'Discussões e teorias',
    'tiktok.desc': 'Vídeos curtos',
    'games.title': 'Jogos',
    'noema.status': 'Em desenvolvimento',
    'noema.kind': 'Investigação em primeira pessoa · PC',
    'noema.text': 'Uma ilha construída sobre segredos e uma linguagem que nunca explica as próprias regras.',
    'noema.site': 'Site oficial',
    'noema.alt': 'Fortaleza de pedra cercada por floresta e caminhos.',
    'bd.kind': 'ARG · No navegador',
    'bd.quote': 'Uma porta. Dois caminhos. O que você sabe define a rota.',
    'bd.text': 'Enigmas em inglês, jogados direto no navegador. Para entrar, você precisa da senha.',
    'bd.site': 'Entrar no site',
    'bd.alt': 'O site do Black Diamond: o título sobre um céu noturno, um diamante negro e o campo de senha.',
    'trailer.title': 'Trailer',
    'community.title': 'Comunidade'
  },
  en: {
    'meta.title': 'Enigmática',
    'meta.description': 'Enigmática — games, projects and official channels.',
    langGroup: 'Language',
    navLabel: 'Sections',
    'nav.games': 'Games',
    'nav.trailer': 'Trailer',
    'nav.community': 'Community',
    logoAlt: 'Enigmática logo',
    motto: 'Enigmas are art.',
    linksHeading: 'Projects and official channels',
    scrollCue: 'Scroll to the games',
    newTab: '(opens in a new tab)',
    'noema.desc': 'The game’s official website',
    'blackdiamond.desc': 'ARG in the browser',
    'steam.desc': 'Case 27: Noema store page',
    'youtube.desc': 'Videos and news',
    'discord.desc': 'Join the community',
    'instagram.desc': 'Behind the scenes and announcements',
    'reddit.desc': 'Discussions and theories',
    'tiktok.desc': 'Short videos',
    'games.title': 'Games',
    'noema.status': 'In development',
    'noema.kind': 'First-person investigation · PC',
    'noema.text': 'An island built on secrets and a language that never explains its own rules.',
    'noema.site': 'Official website',
    'noema.alt': 'A stone fortress surrounded by forest and paths.',
    'bd.kind': 'ARG · In the browser',
    'bd.quote': 'One door. Two paths. What you know defines the route.',
    'bd.text': 'Puzzles in English, played straight in the browser. You need the password to get in.',
    'bd.site': 'Enter the site',
    'bd.alt': 'The Black Diamond website: the title over a night sky, a black diamond and the password field.',
    'trailer.title': 'Trailer',
    'community.title': 'Community'
  }
};

document.getElementById('year').textContent = new Date().getFullYear();
window.EnigmaticaI18n.apply();

var still = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- clicar várias vezes não seleciona texto; arrastar continua selecionando ---------- */
document.addEventListener('mousedown', function (e) {
  if (e.detail > 1 && !e.target.closest('input, textarea, [contenteditable]')) e.preventDefault();
});

/* ---------- cabeçalho aparece ao descer ---------- */
(function () {
  var head = document.querySelector('[data-head]');
  var tick = function () { head.classList.toggle('is-scrolled', scrollY > 40); };
  tick();
  addEventListener('scroll', tick, { passive: true });
})();

/* ---------- entradas ao rolar ---------- */
(function () {
  var els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || still) { els.forEach(function (el) { el.classList.add('is-in'); }); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  els.forEach(function (el) { io.observe(el); });
})();

/* ---------- cubo: inclina com o ponteiro ---------- */
(function () {
  var cube = document.querySelector('[data-cube]');
  if (!cube || still) return;
  addEventListener('pointermove', function (e) {
    var r = cube.getBoundingClientRect();
    var dx = (e.clientX - (r.left + r.width / 2)) / innerWidth;
    var dy = (e.clientY - (r.top + r.height / 2)) / innerHeight;
    cube.style.setProperty('--ry', (dx * 22).toFixed(2) + 'deg');
    cube.style.setProperty('--rx', (-dy * 22).toFixed(2) + 'deg');
  }, { passive: true });
})();

/* ---------- luz de fundo (WebGL): azul profundo com fios dourados ---------- */
var Light = (function () {
  var canvas = document.querySelector('.light');
  var base = [0.95, 0.68, 0.26];
  var target = base, tint = base.slice();
  var api = { tint: function () {} };
  var gl = canvas && canvas.getContext('webgl', { antialias: false, premultipliedAlpha: false });
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

  /* a luz nasce no cubo; ao descer a página ela sobe e fica no alto da tela */
  var cube = document.querySelector('[data-cube]');
  var focus = [0.3, 0.5], aim = focus.slice();
  function measure() {
    var b = cube.getBoundingClientRect();
    var y = 1 - (b.top + b.height / 2) / innerHeight;
    aim = [(b.left + b.width / 2) / innerWidth, Math.min(y, 0.9)];
  }
  function draw(now) {
    var e = still ? 1 : 0.05;
    for (var i = 0; i < 3; i++) tint[i] += (target[i] - tint[i]) * e;
    focus[0] += (aim[0] - focus[0]) * e; focus[1] += (aim[1] - focus[1]) * e;
    gl.uniform2f(uR, canvas.width, canvas.height);
    gl.uniform1f(uT, still ? 20 : now / 1000);
    gl.uniform3f(uTint, tint[0], tint[1], tint[2]);
    gl.uniform2f(uF, focus[0], focus[1]);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }
  function resize() {
    var k = Math.min(devicePixelRatio || 1, 1.5) * 0.5;
    canvas.width = Math.round(innerWidth * k);
    canvas.height = Math.round(innerHeight * k);
    gl.viewport(0, 0, canvas.width, canvas.height);
    measure();
    if (still) draw(0);
  }
  var raf = 0;
  function loop(now) { draw(now); raf = requestAnimationFrame(loop); }
  addEventListener('resize', resize);
  addEventListener('scroll', function () { measure(); if (still) draw(0); }, { passive: true });
  setTimeout(resize, 1500);
  document.addEventListener('visibilitychange', function () {
    if (still) return;
    cancelAnimationFrame(raf);
    if (!document.hidden) raf = requestAnimationFrame(loop);
  });
  resize();
  focus = aim.slice();
  if (still) draw(0); else raf = requestAnimationFrame(loop);
  document.body.classList.add('has-light');
  api.tint = function (c) { target = c || base; if (still) draw(0); };
  return api;
})();

/* cada link muda o tom da luz quando está em foco */
document.querySelectorAll('[data-tint]').forEach(function (el) {
  var c = el.getAttribute('data-tint').split(',').map(Number);
  ['pointerenter', 'focusin'].forEach(function (ev) { el.addEventListener(ev, function () { Light.tint(c); }); });
  ['pointerleave', 'focusout'].forEach(function (ev) { el.addEventListener(ev, function () { Light.tint(null); }); });
});

/* ---------- efeito de clique: anel dourado, losango e faíscas ---------- */
(function () {
  if (still) return;
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
