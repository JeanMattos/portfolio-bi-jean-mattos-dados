# Jean Mattos — Dados, BI & Engenharia

Portfólio pessoal estático em português. HTML, CSS e JavaScript, sem build e sem dependências JavaScript em produção.

## Executar localmente

Na pasta do repositório:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Abrir [http://127.0.0.1:4173](http://127.0.0.1:4173).

## Conteúdo e manutenção

- `index.html`: apresentação, casos profissionais, trajetória, formação e contato.
- `styles.css`: tema Clareza Analítica e layouts responsivos.
- `app.js`: demonstração interativa, filtros dos casos e navegação móvel.
- `assets/Jean-Mattos-Curriculo.pdf`: currículo atual utilizado nos botões de download.
- `Jean Mattos — Analista de Dados (BI).pdf`: mesmo currículo atual, mantendo compatibilidade com o nome do arquivo antigo.
- `assets/fonts/`: fontes auto-hospedadas, sem chamadas a serviços de fontes no carregamento.
- `PRODUCT.md`, `THEME.md`, `DIRECTION.md` e `DESIGN.md`: contexto e decisões de design.

A fonte do conteúdo profissional é o currículo fornecido em 29/10/2026, `Jean_Mattos_Curriculo.pdf`. Para trocar o currículo, substituir as duas cópias do PDF e atualizar os textos profissionais conforme necessário. Preservar a indicação de formação em andamento e de estimativa interna para a economia organizacional.

Os dados do gráfico interativo são fictícios e identificados como demonstração. As representações dos casos são conceituais; não são capturas de dashboards corporativos. Não há coleta de dados, cookies analíticos, envio de formulários ou integrações autenticadas.

## Hospedagem

Compatível com hospedagem estática, inclusive GitHub Pages em subdiretório, pois todos os arquivos de produção usam caminhos relativos. Publicar `index.html`, `styles.css`, `app.js`, os dois PDFs e `assets/`. As notas de design e evidências de teste não são necessárias no servidor público. A publicação depende da configuração da hospedagem e não é feita automaticamente pelo projeto.

## Fontes e licenças

Bricolage Grotesque e Source Sans 3, distribuídas sob SIL Open Font License. Origem: Google Fonts; licenças em `assets/fonts/`. Ícones SVG e diagramas geométricos são autorais. Nenhuma imagem gerada ou fotografia de terceiros é utilizada.
