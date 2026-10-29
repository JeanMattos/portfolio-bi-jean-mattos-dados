---
name: Jean Mattos — Clareza Analítica
description: Portfólio de Dados e BI com clareza editorial e análise explorável.
colors:
  navy: "#142d4e"
  paper: "#f7f9fc"
  ink: "#172335"
  blue: "#245bdb"
  yellow: "#f2c811"
  white: "#fff"
  muted: "#526175"
  line: "#d9e1eb"
  pale-blue: "#e9effb"
  on-navy: "#b9cbe3"
typography:
  display:
    fontFamily: "Bricolage Grotesque, sans-serif"
    fontSize: "clamp(60px,5.8vw,84px)"
    fontWeight: 800
    lineHeight: 1.025
    letterSpacing: "-.04em"
  headline:
    fontFamily: "Bricolage Grotesque, sans-serif"
    fontSize: "clamp(36px,3.6vw,54px)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-.035em"
  title:
    fontFamily: "Bricolage Grotesque, sans-serif"
    fontSize: "30px"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-.03em"
  body:
    fontFamily: "Source Sans 3, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Source Sans 3, sans-serif"
    fontSize: "12px"
    fontWeight: 400
rounded:
  badge: "4px"
  selector: "5px"
  control: "6px"
  surface: "14px"
spacing:
  compact: "12px"
  control: "20px"
  inset: "24px"
  group: "30px"
components:
  button-primary:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.white}"
    rounded: "{rounded.control}"
    padding: "15px 20px"
  button-primary-hover:
    backgroundColor: "{colors.navy}"
  header-contact:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
    rounded: "{rounded.control}"
    padding: "11px 19px"
  analysis-selected:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.navy}"
    rounded: "{rounded.selector}"
    padding: "7px 14px"
  filter-selected:
    backgroundColor: "{colors.pale-blue}"
    textColor: "{colors.navy}"
    rounded: "{rounded.control}"
    padding: "9px 14px"
  analysis-workspace:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
    rounded: "{rounded.surface}"
---

# Design System: Jean Mattos — Clareza Analítica

## Overview

**Creative North Star: "Clareza Analítica"**

Uma bancada de análise legível, com a precisão de um relatório e a abertura de um portfólio editorial. O contraste entre superfícies claras e blocos de azul profundo orienta a leitura; a identidade vem da tipografia e dos próprios dados, sem imagens decorativas.

O sistema foi extraído de `styles.css`, `index.html` e `app.js` após a revisão de entrega de 29/10/2026. `THEME.md` registra o tema aprovado por delegação explícita de Jean. `PRODUCT.md` conserva a verdade profissional e `DIRECTION.md` o contrato de direção. Os valores construídos prevalecem sobre medidas apenas planejadas: as superfícies usam cantos de 14px, apesar da menção preliminar a 12px no contrato.

**Key Characteristics:**

- Contraste claro, espaços amplos e alinhamento preciso.
- Títulos expressivos e texto de apoio sóbrio.
- Diagramas em código e análise demonstrativa explorável.
- Movimento breve associado a interação.

## Colors

Uma base fria e clara, ancorada em azul profundo, distingue ação, leitura e destaque analítico.

### Primary

- **Azul de ação** (`blue`): links de casos, ações principais, palavras enfatizadas e identidade.
- **Azul profundo** (`navy`): bancada analítica, seções de conhecimento e contato, além de títulos e ações de cabeçalho.

### Secondary

- **Amarelo Power BI** (`yellow`): série analítica, seleção na bancada, pontos de processo e ação circular de contato. Evitar texto amarelo sobre branco.

### Neutral

- **Branco** (`white`): superfície principal e texto em áreas escuras.
- **Papel frio** (`paper`): faixas de evidência, apresentação pessoal e rodapé.
- **Tinta** (`ink`): texto principal; **cinza de leitura** (`muted`): apoio em superfícies claras.
- **Linha** (`line`): divisórias; **azul pálido** (`pale-blue`): filtro selecionado e marcador de vínculo atual.
- **Texto sobre azul** (`on-navy`): rótulos e descrições em superfícies escuras.

**The Selected Data Rule.** Na bancada, amarelo identifica a seleção e a série que responde à pergunta de negócio.

## Typography

**Display Font:** Bricolage Grotesque, fallback sans-serif.
**Body Font:** Source Sans 3, fallback sans-serif. Ambas são hospedadas localmente em `assets/fonts/`; não há dependência de fontes remotas.

### Hierarchy

O frontmatter registra a hierarquia base. A escala é editorial e não segue uma razão matemática uniforme. Títulos usam quebras balanceadas e tracking negativo; dados de resumo e tabelas usam números tabulares.

- **Display:** título principal; acima de 1500px passa a 87px. Até 1190px usa 66px, até 960px 58px e até 720px `clamp(53px,10.8vw,74px)`.
- **Headline:** títulos de seção; no celular os títulos principais de seção usam 39px. Contato tem escala própria `clamp(36px,4vw,58px)`, chegando a 36px no celular e 31px até 370px.
- **Title:** casos usam a escala registrada, 27px até 960px e 29px até 720px. Títulos de experiência e educação ficam em torno de 24–25px.
- **Body:** base conforme frontmatter; descrições de casos usam 16px/1.65, texto pessoal 17px e introdução do hero 19px/1.65. Parágrafos têm teto geral de 70ch, com introdução do hero limitada a 43ch no desktop.
- **Label:** rótulos operacionais e notas usam 12–14px. Navegação e ações principais usam 16px e peso 600. A métrica da bancada usa 38px, peso 600 e entrelinha 1.25; cai para 33px no intervalo intermediário.

**The Readable Data Rule.** Rótulos pequenos servem aos dados e controles; não se tornam uma camada decorativa de sobrancelhas acima dos títulos.

## Layout

O contêiner tem largura máxima de 1240px e largura fluida `calc(100% - 104px)`. Até 1190px, as margens laterais são 36px; até 720px, 20px. Seções usam 108px de respiro vertical, 80px até 960px e 65px até 720px. O cabeçalho é sticky, com altura 88px, depois 80px e 72px; a compensação de âncora é 100px, ou 82px no celular.

A abertura tem duas colunas `.93fr 1.07fr`, gap de 56px, reduzido para 30px e 27px nos intervalos intermediários. Até 720px, vira coluna única, com texto antes da bancada. A grade de casos usa `1.12fr 1fr`, gaps 38px/45px, vira duas colunas iguais até 960px e uma coluna até 720px. As imagens de casos são diagramas com altura 275px, 255px no intervalo intermediário e 265px no celular.

Apresentação pessoal e trajetória têm duas colunas com gap inicial 100px e se empilham até 720px. Competências usam quatro colunas, duas até 960px e uma até 370px. A faixa de evidências usa quatro colunas, três até 960px e duas com último item ocupando toda a largura até 720px.

Impressão remove navegação, controles e diagramas, reduz respiro para 24px e usa superfícies claras. Não há animação ligada ao scroll.

## Elevation & Depth

Predominam superfícies planas, blocos tonais e divisórias finas. A bancada recebe a única sombra de superfície (`0 24px 55px -30px #00000030`), suficiente para separar a demonstração do fundo sem transformar os casos em cartões elevados.

**The Quiet Surface Rule.** Use contraste tonal e linhas para organizar; preserve a sombra como assinatura discreta da bancada.

## Shapes

Superfícies de análise e diagramas têm cantos suaves conforme `rounded.surface`. Controles têm cantos menores; badges e seletores seguem o frontmatter. Barras de gráficos são quase retas, com raio de 2px. Marcas e indicadores pontuais usam círculos; a ação de contato também é circular. Ícones são SVG com traço, normalmente 22px, espessura 1.7 e terminações arredondadas.

## Components

### Buttons

A ação principal combina azul e branco, peso 600, texto 16px, altura mínima 52px e gap interno 18px. O hover troca para azul profundo e sobe 2px em 200ms. No celular, usa 14px, altura mínima 49px e padding 12px 16px. A ação de cabeçalho tem base azul profundo e hover azul. Links secundários são textuais, com altura mínima 44px e sublinhado no hover.

Todo link, botão e summary recebe foco visível de 3px, offset 5px; azul nas áreas claras e amarelo nas áreas escuras. O link de pulo aparece quando focado.

### Navigation

Marca tipográfica com três barras SVG/CSS e ponto azul. Navegação horizontal, peso 600, gap 34px. Até 720px, o botão Menu de 44px abre uma lista vertical abaixo do cabeçalho. `aria-expanded` acompanha o estado; Escape fecha e devolve o foco ao botão. Selecionar link, clicar fora ou retornar ao desktop fecha o menu.

### Selectors and tags

Seletores da bancada usam 13px, borda clara translúcida e estado selecionado amarelo. São botões com `aria-pressed`, não tabs com navegação especial de teclado. Filtros de casos usam 14px, altura mínima 42px e seleção azul pálido; no celular usam 12px/40px. A contagem acompanha a filtragem. Tags de tecnologia são texto de 12px separado por pontos, sem aparência de botão.

### Case containers and disclosure

Casos têm diagrama com cantos suaves e texto fora da superfície colorida, sem borda ou sombra envolvente. O conteúdo usa padding superior 24px. Detalhes usam `details/summary` nativos, linha inferior e botão visual de mais que vira menos. O summary tem altura mínima 48px, texto azul 15px/peso 600. Não há campos de entrada nem formulário no produto.

### Analysis workspace

A assinatura visual é uma bancada azul profundo, cabeçalho fino, corpo com padding 26px 28px 16px e rodapé mais escuro. Comercial, Produção e Financeiro atualizam métrica, comparação, gráfico, insight e tabela. O gráfico SVG tem seis meses, grade translúcida, linha amarela de 3px, pontos e preenchimento amarelo a 9% de opacidade. Possui título e descrição acessíveis; a tabela expansível oferece os mesmos valores em texto.

Os valores são fictícios e identificados como demonstração. A evidência profissional permanece visual e semanticamente separada. A série entra com revelação horizontal por clip em 600ms e easing `cubic-bezier(.16,1,.3,1)`. `prefers-reduced-motion: reduce` desativa animações e transições e troca scroll suave por automático.

### Diagrams and contact

Migração compara durações com números grandes e trilhos; pipeline conecta fontes a três camadas; automação conecta ícones por linhas; pessoas usa barras temáticas ilustrativas. São HTML/CSS/SVG autorais, sem raster nem capturas empresariais. As barras temáticas não expressam percentuais de proficiência. Contato é composto por links públicos e uma ação circular amarela que se desloca 3px no hover; não envia mensagens automaticamente.

## Do's and Don'ts

### Do:

- **Do** preserve o azul profundo como âncora e o azul vivo como ação.
- **Do** mantenha dados tabulares, alternativas textuais e foco visível.
- **Do** derive diagramas de conteúdo real ou identifique explicitamente a simulação.
- **Do** reutilize fontes locais e o comportamento de movimento reduzido.

### Don't:

- **Don't** apresente dados demonstrativos como resultados de clientes.
- **Don't** adicione sombras a cada caso ou transforme toda seção em cartões.
- **Don't** substitua os diagramas por imagens inventadas de relatórios empresariais.
- **Don't** use barras temáticas como avaliação percentual de competência.
