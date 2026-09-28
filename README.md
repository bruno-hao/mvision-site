# M Vision Ótica Especializada — Landing Page

Landing page institucional da M Vision Ótica Especializada (Salvador - BA), construída como site estático (Next.js com `output: "export"`) para hospedagem compartilhada.

Ver [IDENTIDADE_VISUAL.md](./IDENTIDADE_VISUAL.md) para a direção de design, paleta e composições de cada seção.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build estático

```bash
npm run build
```

Gera a pasta `out/` pronta para ser enviada ao provedor de hospedagem (upload via FTP/painel, ou como artefato de deploy a partir do GitHub Actions).

## Stack

- Next.js 15 (App Router), export estático
- Tailwind CSS v4 com tokens semânticos (`src/app/globals.css`)
- Sem backend — contato via link direto para WhatsApp
