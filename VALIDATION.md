# Validação — 29/10/2026

## Comportamento e visual

29 verificações com Playwright/Chromium passaram. Cobertura: carregamento HTTP, idioma/título, troca entre três áreas analíticas, atualização de métricas e tabela acessível, quatro filtros de projetos, abertura do contexto dos casos, âncoras internas, navegação móvel, Escape com devolução de foco, movimento reduzido, recursos locais e ausência de erros JavaScript/CSP.

Sem overflow horizontal nas larguras 320, 360, 390, 720, 768, 1024, 1280 e 1440px. Capturas completas de desktop e celular inspecionadas. Revisão independente pediu a remoção de cinco rótulos redundantes; todos removidos, recapturados e classificados como resolvidos pelo revisor. O veredito final `ship` se refere à lista de correções pontuadas, não a uma certificação universal de qualidade.

O detector Impeccable foi executado uma vez. Tamanhos funcionais inferiores a 12px e sombra colorida foram corrigidos. A sinalização estática de texto claro sobre fundo branco foi confrontada com o CSS: o texto claro correspondente é usado em superfícies azul-escuras. Dez pares de cores de texto/superfície foram calculados e todos superaram 4,5:1. Isso não substitui auditoria WCAG completa nem teste com todos os leitores de tela.

## Currículo e fatos

Fonte: `C:/Users/jean.mattos/Documents/Curriculo/Jean_Mattos_Curriculo.pdf`, uma página, extraída diretamente com pypdf.

As duas cópias de PDF do repositório e o arquivo baixado pelo navegador correspondem ao SHA-256:

```text
ee6a01f1ae4fc4eab61af60364b86f29b754349fc3127a313af8aa868632a216
```

PDF antigo substituído inclusive sob o nome legado. Conteúdo profissional atualizado a partir do documento fornecido. Graduação em andamento; 800+ horas/mês identificadas como estimativa interna. Demonstração de receita, produção e margem explicitamente fictícia e separada dos resultados profissionais.

## Segurança aplicável

Site público estático, sem login, backend, banco, upload, pagamentos, sessão, formulários ou segredos. Portanto controles de IDOR, organização, autenticação, autorização de API, CSRF, webhooks, transações, rate limit e acesso a dados privados não têm uma superfície de aplicação neste projeto. Não há bibliotecas JavaScript ou CDN em produção a auditar.

Aplicáveis e verificados: política CSP sem scripts inline/terceiros, `object-src 'none'`, política de referência, recursos e fontes locais, criação de conteúdo via DOM/textContent sem `innerHTML`, IDs únicos, existência de arquivos relativos, `noopener noreferrer` em destinos externos e busca por padrões reconhecíveis de credenciais no código. Contatos públicos e PDF profissional expostos intencionalmente por solicitação do titular. Nenhum segredo encontrado e nenhum risco crítico/alto conhecido nestes checks.

O servidor de prévia está vinculado apenas a `127.0.0.1`. HTTPS, cabeçalhos HTTP completos, compactação e cache dependem da futura hospedagem e precisam ser verificados ao publicar. Nenhuma publicação ou push remoto foi executado nesta entrega local.

## Evidências locais

Em `.impeccable/review/` (não versionado): `checks.json`, `static-checks.json`, capturas `desktop.png`, `desktop-hero.png`, `mobile.png` e scripts de verificação. `node --check app.js` também passou.
