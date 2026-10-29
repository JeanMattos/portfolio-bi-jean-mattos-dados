'use strict';

const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'];
// Demonstração autoral. Estes valores não correspondem a dados de empregadores.
const analyses = {
  comercial: {label: 'Receita no semestre', value: 'R$ 4,8 mi', change: '+18% vs. semestre anterior', caption: 'Evolução da receita', unit: 'R$ mil', values: [580, 650, 720, 830, 960, 1060], max: 1200, table: 'Receita mensal demonstrativa, em R$ mil', insight: 'O crescimento acelera no segundo trimestre. O próximo passo é investigar mix de produtos e margem.'},
  producao: {label: 'Eficiência em junho', value: '94%', change: '+12 p.p. vs. janeiro', caption: 'Eficiência produtiva', unit: '%', values: [82, 85, 84, 89, 92, 94], max: 100, table: 'Eficiência mensal demonstrativa, em %', insight: 'A eficiência sobe de 82% para 94%. Vale investigar o que mudou após março e os gargalos que ainda permanecem.'},
  financeiro: {label: 'Margem em junho', value: '24%', change: '+6 p.p. vs. janeiro', caption: 'Margem operacional', unit: '%', values: [18, 20, 19, 21, 23, 24], max: 30, table: 'Margem mensal demonstrativa, em %', insight: 'A margem avança ao longo do semestre. Custos e composição da receita ajudam a explicar a mudança.'}
};

function svgNode(name, attrs = {}, text = '') {
  const element = document.createElementNS('http://www.w3.org/2000/svg', name);
  for (const [key, value] of Object.entries(attrs)) element.setAttribute(key, value);
  if (text) element.textContent = text;
  return element;
}

function renderAnalysis(key) {
  const data = analyses[key];
  if (!data) return;
  const fields = {'metric-label': data.label, 'metric-value': data.value, 'metric-change': data.change, 'chart-caption': data.caption, 'chart-unit': data.unit, 'chart-insight': data.insight, 'table-caption': data.table};
  for (const [id, text] of Object.entries(fields)) document.getElementById(id).textContent = text;
  document.querySelectorAll('[data-analysis]').forEach(button => {
    const selected = button.dataset.analysis === key;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  const svg = svgNode('svg', {viewBox: '0 0 450 145', preserveAspectRatio: 'none', role: 'img', 'aria-labelledby': 'chart-svg-title chart-svg-description'});
  svg.append(svgNode('title', {id: 'chart-svg-title'}, data.caption));
  svg.append(svgNode('desc', {id: 'chart-svg-description'}, 'Dados fictícios. ' + months.map((month, i) => `${month}: ${data.values[i]} ${data.unit}`).join('; ') + '. Valores também disponíveis na tabela abaixo.'));
  [25, 70, 115].forEach(y => svg.append(svgNode('line', {x1: 0, x2: 450, y1: y, y2: y, stroke: '#ffffff20', 'stroke-width': 1})));
  const points = data.values.map((value, i) => [14 + i * 84.4, 130 - value / data.max * 110]);
  const group = svgNode('g', {class: 'chart-series'});
  group.append(svgNode('path', {d: `M ${points.map(p => p.join(',')).join(' L ')} L ${points.at(-1)[0]},140 L ${points[0][0]},140 Z`, fill: '#f2c811', opacity: '.09'}));
  group.append(svgNode('polyline', {points: points.map(p => p.join(',')).join(' '), fill: 'none', stroke: '#f2c811', 'stroke-width': 3, 'stroke-linejoin': 'round', 'vector-effect': 'non-scaling-stroke'}));
  points.forEach(([cx, cy], i) => {
    group.append(svgNode('circle', {cx, cy, r: i === 5 ? 5 : 3, fill: i === 5 ? '#f2c811' : '#142d4e', stroke: '#f2c811', 'stroke-width': 2}));
    group.append(svgNode('text', {x: cx, y: cy - 12, fill: '#e7effa', 'font-size': 12, 'text-anchor': 'middle', 'font-family': 'Source Sans 3, sans-serif'}, String(data.values[i])));
  });
  svg.append(group);
  document.getElementById('hero-chart').replaceChildren(svg);
  const rows = data.values.map((value, i) => {
    const tr = document.createElement('tr');
    const month = document.createElement('th');
    month.scope = 'row';
    month.textContent = months[i];
    const cell = document.createElement('td');
    cell.textContent = `${value.toLocaleString('pt-BR')} ${data.unit}`;
    tr.append(month, cell);
    return tr;
  });
  document.getElementById('chart-table').replaceChildren(...rows);
}

document.querySelectorAll('[data-analysis]').forEach(button => button.addEventListener('click', () => renderAnalysis(button.dataset.analysis)));
renderAnalysis('comercial');

document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  let count = 0;
  document.querySelectorAll('.project').forEach(project => {
    const visible = filter === 'todos' || project.dataset.category.split(' ').includes(filter);
    project.hidden = !visible;
    if (visible) count++;
  });
  document.querySelectorAll('[data-filter]').forEach(item => {
    const selected = item === button;
    item.classList.toggle('active', selected);
    item.setAttribute('aria-pressed', String(selected));
  });
  document.getElementById('project-count').textContent = `${count} ${count === 1 ? 'caso selecionado' : 'casos selecionados'}`;
}));

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.getElementById('navigation');
function closeMenu(returnFocus = false) {
  const wasOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  navigation.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  if (returnFocus && wasOpen) menuToggle.focus();
}
menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  navigation.classList.toggle('open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(true); });
document.addEventListener('click', event => { if (!event.target.closest('.site-header')) closeMenu(); });
const desktopQuery = window.matchMedia('(min-width: 721px)');
desktopQuery.addEventListener('change', event => { if (event.matches) closeMenu(); });
document.getElementById('year').textContent = new Date().getFullYear();
