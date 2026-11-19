# Portfólio · Luan Kairo

Site pessoal com projetos, carreira, skills, contato e currículo, feito com [Astro](https://astro.build) e publicado no GitHub Pages em **https://luan-k10.github.io**.

## Requisitos

- Node.js **22.23.4 ou superior** (recomendado: versão LTS atual). Confira com `node --version`.

## Rodar localmente

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # verifica tipos (astro check) e gera o site em dist/
npm run preview   # serve o conteúdo de dist/
```

## Onde editar o conteúdo

| O quê | Arquivo |
| --- | --- |
| Nome, cargo, bio, links, formação, idiomas, foto | `src/data/profile.ts` |
| Experiências (timeline da carreira) | `src/data/experience.ts` |
| Skills | `src/data/skills.ts` |
| Prêmios e certificados | `src/data/certifications.ts` |
| PDFs de certificados (linkados pelo campo `pdf` do prêmio / `awardUrl` do projeto) | `public/certificados/` |
| Projetos (um arquivo `.md` por projeto) | `src/content/projects/` |
| Cores e estilos globais (destaque bordô `--accent`, `--accent-fill`) | `src/styles/global.css` |
| Imagem de compartilhamento (Open Graph, 1200×630, com a logo "LK") | `public/og-image.png` |
| Logo "LK" (bordô `#6e1423`, fundo transparente) | `public/logo.svg` |
| Logo "LK" branca para fundos escuros | `public/logo-white.svg` |
| Ícone da aba e do cabeçalho (logo "LK" branca sobre bordô) | `public/favicon.svg` |

### Adicionar um projeto

Crie `src/content/projects/meu-projeto.md`:

```md
---
title: Nome do projeto
summary: Uma frase sobre o que ele faz.
context: Projeto pessoal          # opcional
status: Em andamento              # opcional
award: 🏅 Nome do prêmio          # opcional
awardUrl: /certificados/premio.pdf # opcional (link do selo)
stack: [Java, Oracle]
repo: https://github.com/luan-k10/meu-projeto   # opcional
demo: https://meu-projeto.exemplo.com           # opcional
order: 3                          # posição na lista
---

Detalhes em Markdown (lista de funcionalidades, resultados etc.).
```

O formato é validado no build (`src/content.config.ts`). Se faltar um campo obrigatório, o `npm run build` avisa.

### Foto

A foto fica em `src/assets/profile.jpg` (quadrada, rosto centralizado) e é otimizada pelo Astro no build. Para trocar, substitua o arquivo mantendo o nome. Para voltar às iniciais, use `photo: undefined` em `src/data/profile.ts`.

### Currículo

A página `/curriculo` é gerada a partir dos mesmos dados do site. Para baixar em PDF, abra a página e clique em **Imprimir / Salvar PDF**. O layout de impressão já é A4.

> Não coloque dados pessoais sensíveis (telefone, CPF, documentos) no repositório: tudo em `public/` e no código fica público.

## Publicar no GitHub Pages

O deploy é feito automaticamente pelo workflow `.github/workflows/deploy.yml` a cada push na branch `main`.

1. Autentique o `gh` com a conta **pessoal** (`luan-k10`). Se houver `GH_TOKEN` definido no ambiente, ele tem prioridade sobre o login. Limpe a variável na sessão antes de autenticar:
   ```powershell
   Remove-Item Env:GH_TOKEN -ErrorAction SilentlyContinue
   gh auth login --hostname github.com
   gh auth status
   ```
2. Crie o repositório com o nome `luan-k10.github.io` e envie o código:
   ```bash
   gh repo create luan-k10/luan-k10.github.io --public --source . --remote origin --push
   ```
3. No GitHub, abra **Settings → Pages** e em **Build and deployment → Source** escolha **GitHub Actions**.
4. Acompanhe o deploy na aba **Actions**. Depois, o site fica em https://luan-k10.github.io.

### Usar outro nome de repositório

Se o repositório tiver outro nome (ex.: `portfolio`), o site fica em `https://luan-k10.github.io/portfolio`. Nesse caso, adicione `base: '/portfolio'` em `astro.config.mjs` e use `import.meta.env.BASE_URL` como prefixo nos links internos (`/curriculo/`, `/favicon.svg` etc.).

## Estrutura

```
src/
  components/   seções da página (About, Projects, Experience, Skills, Certifications, Contact...)
  content/      projetos em Markdown
  data/         dados pessoais, experiência e skills
  layouts/      layout base com SEO, Open Graph e modo escuro
  pages/        index, curriculo e 404
public/         favicon, imagem Open Graph e arquivos estáticos
```
