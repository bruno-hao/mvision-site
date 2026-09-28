# IDENTIDADE VISUAL — M Vision Ótica Especializada — Landing Page

## Stack Técnica

- Next.js 15 (App Router) com `output: "export"` — HTML/CSS/JS estático puro, sem servidor Node necessário no provedor de hospedagem. Publicado a partir de `github.com/bruno-hao/mvision-site`.
- Tailwind CSS v4 para toda estilização, com tokens semânticos declarados em `globals.css` (`@theme`) — nunca cor/raio/sombra crus no JSX.
- Sem shadcn/ui (poucos componentes de formulário necessários; construir os poucos botões/badges/accordion à mão, mais leve e mais fácil de casar com a identidade).
- Animações de scroll em CSS puro (`@starting-style`, `animation-timeline`/`IntersectionObserver` leve) — sem Framer Motion, para manter o bundle mínimo em export estático.
- Assets: fotografia real da loja e da equipe (`equipe.jpeg`, `atendimento.jpeg`, `frente-loja.webp`, `loja1/2/3.webp`, `produto.webp`) + fotos de arquétipo de cliente (`adulto1-3.png`, `crianca1-3.png`, `idoso1-3.png`) já fornecidas pelo cliente. Nenhum mockup de device, nenhuma ilustração de pessoa gerada em SVG.

## A Alma da LP

Uma pessoa que já foi mal atendida numa ótica de varejo — porque o problema dela não era "só miopia": é alta miopia, é prisma, é lente filtrante, é um filho pequeno que não para quieto, é um pai idoso que já não enxerga a régua do exame — chega na página e sente **"finalmente uma ótica que entende exatamente o meu caso"**. Não é a frieza confiante de uma fintech; é alívio técnico: alguém que manja do assunto específico dela. O scroll conduz de "isso é sobre o meu problema" (Hero) → "essas pessoas existem e são assim" (Sobre + equipe real) → "eles resolvem exatamente isso" (Especialidades, uma cena por especialidade) → "é assim que funciona" (Como funciona) → "é aqui, é real" (Loja + localização) → "fala com a Mvision agora" (CTA WhatsApp).

## Referências e Princípios (das fotos analisadas)

- **Fachada e interior da loja (`frente-loja.webp`, `loja1-3.webp`)**: parede verde-floresta como único plano de cor forte, o resto é branco/cinza-claro, cadeiras e sacolas em laranja vibrante, um letreiro branco com o logo preto. → Princípio: base neutra clara + duas cores reais da marca, cada uma com um papel fixo (verde = estrutura/seções institucionais, laranja = ação). → Aplicação: essa é literalmente a paleta da LP — não uma paleta nova inventada, a mesma que já pinta a parede e as cadeiras da loja.
- **Parede "caça-palavras" da loja (`loja1.webp`, `loja3.webp`)**: um painel gigante de letras soltas formando um caça-palavras com termos como "maravilhosa", "moda", "momento", "mvision" em verde e laranja sobre fundo branco. → Princípio: a marca já tem uma textura de atmosfera própria e nada genérica (nada de blob/dot-grid). → Aplicação: essa grade de letras vira a **atmosfera global** da LP — muito sutil, no fundo do body, com palavras relevantes ao problema real do cliente (visão, foco, nitidez, lente, prisma, clareza, mvision).
- **Fotos reais de atendimento (`atendimento.jpeg`, `equipe.jpeg`)**: luz natural, sorrisos genuínos, sem pose de stock corporativo. → Princípio: fotografia real > qualquer ilustração/gráfico abstrato sempre que disponível. → Aplicação: toda seção que puder usar uma foto real da loja usa — SVG/composição só entra onde não há e não faria sentido ter foto (ex. diagramas de "como funciona").
- **Sacola/embalagem (`produto.webp` e a sacola fotografada)**: tipografia condensada em caixa alta, cantos retos na sacola mas lentes/armações com curvas suaves. → Princípio: geometria mista — estrutura reta (cards, botões pill) + curvas nos elementos que remetem a lente/olho. → Aplicação: badges e CTAs em pill (formato de lente), cards em cantos levemente arredondados (não retos, não excessivamente suaves).
- **O que é rejeitado**: dark mode (pedido explícito: light mode); gradientes multicoloridos; qualquer paleta terceira além de verde+laranja+neutros; ícone de "arco-íris" para cada especialidade; hero com mockup de app (não é produto digital); clichê de "confie em nós" sem prova concreta.

## Narrativa de Scroll (Blueprint da Página)

| Seção | Energia | Fundo | Papel narrativo |
|---|---|---|---|
| Nav | sutil, constante | branco translúcido, sticky | Orientação + WhatsApp sempre visível |
| Hero | **alta** | branco, atmosfera de letras | "É sobre o meu problema específico" |
| Prova rápida (o que resolvemos) | respiro | off-white | 4 badges de especialidade, sem enfeite |
| Especialidades | **alta** | branco | Uma cena visual por especialidade (lentes filtrantes, prismas, baixa visão, infantil) |
| Sobre / Equipe real | média | verde-claríssimo | Foto real da equipe, "gente de verdade" |
| Como funciona | média | branco | Fluxo de 3 passos conectado por um traço serpenteante |
| A loja | **respiro** | off-white | Fotos reais da fachada e do interior, quase sem texto |
| Para quem é | média-alta | branco | 3 arquétipos (criança, adulto, idoso) com foto real de cada |
| FAQ | média | off-white | Acordeão limpo |
| CTA final | **clímax** | verde institucional cheio | Convite direto ao WhatsApp |
| Footer | encerramento | verde bem escuro | Endereço real, contato, horário |

Contraste-chave: **Especialidades e Como Funciona (densos, com composição)** alternam com **A Loja e Prova Rápida (respiro, quase só imagem/uma frase)**.

## Decisões de Identidade

### Ritmo e Estrutura
- **O que:** alternância branco → off-white → verde-claro → branco → verde institucional cheio, criando "atos" sem nunca escurecer o texto principal (light mode fixo).
- **Por que:** o público inclui pessoas com baixa visão — contraste alto e previsível importa mais que efeito.
- **Como:** padding vertical generoso (mín. 96px desktop) nas seções de respiro; densidade visual só nas seções de prova.
- **Nunca:** dark mode, seções translúcidas sobre fundo escuro, todas as seções com a mesma densidade.

### Navegação
- **O que:** header sticky branco quase opaco, logo à esquerda, botão "Falar no WhatsApp" em laranja sempre visível à direita.
- **Nunca:** header transparente sobre o hero, nav que some no scroll.

### Tipografia
- **O que:** uma família condensada/geométrica em caixa alta para headlines (ecoando o wordmark da logo), peso 700-800; uma família neutra e muito legível para corpo (peso 400-500, mínimo 16px).
- **Por que:** o wordmark já é a "arma tipográfica" da marca — reforçar isso nos títulos em vez de introduzir uma terceira linguagem visual.
- **Como:** `text-hero` 40-64px conforme viewport, `text-section-title` 28-36px, `text-body` 16-18px, `text-caption` 14px.
- **Nunca:** letter-spacing negativo agressivo, tamanhos de corpo abaixo de 16px.

### Paleta de Cores
- **O que:** verde institucional `brand-forest` (~ o verde real da parede da loja) para estrutura/seções cheias; laranja `brand-orange` (~ o laranja real das cadeiras/sacolas) como ÚNICA cor de ação — CTA, links, destaques, badges ativos; neutros brancos/cinzas para tudo mais.
- **Por que:** são as duas cores que já existem fisicamente na loja — usar qualquer outra cor de destaque romperia o reconhecimento da marca.
- **Nunca:** terceira cor de destaque, gradiente multicolorido, glow colorido em hover.

### Geometria
- **O que:** cards com raio médio (`radius-card`), botões e badges em pill (`radius-pill`) — remetendo à curva da lente — fotos em containers com raio médio e leve sombra suave.
- **Nunca:** ângulos diagonais/cortados, formas assimétricas sem função.

### Micro-interações
- **O que:** hover sutil (leve elevação + escurecimento de 6-8% na cor, sem glow), foco visível em outline laranja 2px para acessibilidade de teclado, entrada suave (fade + translateY 12px) ao entrar no viewport.
- **Nunca:** parallax pesado, animações que não podem ser desativadas via `prefers-reduced-motion`.

## Dramaturgia Visual

### Atmosfera Global
- **O que:** grade de letras estilo "caça-palavras" (homenagem direta ao painel real da loja), formando de forma dispersa palavras como VISÃO, FOCO, NITIDEZ, LENTE, PRISMA, CLAREZA, MVISION.
- **Tratamento:** `position: fixed`, opacidade 3-4%, cor `brand-forest`, atrás de todo o conteúdo, ligeiramente diferente por seção (mais denso nas seções de respiro, quase ausente nas seções de prova para não competir com fotos).

### Composições Narrativas por Seção

**Hero**
- Comunica: "esta ótica resolve exatamente o meu tipo de problema de visão".
- Composição: layout split. Esquerda: headline + subtítulo + CTA. Direita: foto real de produto/óculos (`produto.webp` ou `hero-full.png`) dentro de um container com raio grande, com um badge pill sobreposto no canto inferior ("Lentes filtrantes • Prismas • Alta miopia").
- Mobile: composição empilha, foto acima do texto reduzida a ~55% da altura.
- Viabilidade: código puro (foto real já existe).

**Especialidades** (Lentes filtrantes, Prismas, Alta miopia/hipermetropia, Atendimento infantil)
- Comunica: prova concreta de que cada necessidade específica é atendida.
- Composição: 4 cartões, cada um com uma foto real de contexto (não ícone solto): filtrante → `produto.webp`; prismas/alta miopia → `idoso2.png` ou `adulto2.png`; infantil → `atendimento.jpeg`; armações/clip-on → `kids-optical-frames.avif` ou `crianca2.png`. Cada cartão tem um pequeno selo pill com o nome da especialidade.
- Viabilidade: código puro (fotos reais).

**Como Funciona**
- Comunica: remoção de atrito — simples de agendar/chegar.
- Composição: 3 passos (Fale no WhatsApp → Leve sua receita ou faça a avaliação na loja → Escolha a lente/armação certa para seu caso) conectados por um traço SVG curvo e fino que serpenteia entre os três, com pontos que preenchem a cor laranja conforme o scroll entra no viewport.
- Viabilidade: código puro (path SVG simples).

**A Loja**
- Comunica: "é um lugar de verdade, você pode entrar agora".
- Composição: mosaico de 3 fotos reais (`frente-loja.webp`, `loja1.webp`, `loja2.webp`) com legendas curtas, sem texto de venda.
- Viabilidade: código puro.

**Para Quem É**
- Comunica: a loja atende toda a família, com atenção a cada fase.
- Composição: 3 blocos (Criança, Adulto, Pessoa idosa), cada um com uma foto de arquétipo (`crianca1.png`, `adulto1.png`, `idoso1.png`) e uma frase curta do cuidado específico daquela fase.
- Viabilidade: código puro.

**CTA Final**
- Comunica: convite direto, sem urgência artificial.
- Composição: fundo verde institucional cheio, headline branca grande, botão laranja único, sem imagem — o contraste de cor cheia depois de tanta seção clara é o próprio clímax.
- Viabilidade: código puro.

## Tokens de Design

| Token | Valor | Uso |
|---|---|---|
| `surface-page` | `#FFFFFF` | Fundo principal |
| `surface-alt` | `#F7F5F1` | Seções de respiro (off-white quente) |
| `surface-tint-green` | `#EAF0EC` | Seções institucionais claras |
| `surface-forest` | `#33463A` | Seções cheias (CTA final, footer) |
| `surface-forest-dark` | `#20301F` | Footer |
| `text-primary` | `#171512` | Headlines, corpo principal |
| `text-secondary` | `#5C5A54` | Subtítulos, descrições |
| `text-on-forest` | `#FFFFFF` | Texto sobre fundo verde cheio |
| `brand-orange` | `#FF6A3D` | CTA, links, badges, destaques — única cor de ação |
| `brand-orange-hover` | `#E85A2E` | Hover/active do laranja |
| `brand-forest` | `#33463A` | Cor estrutural da marca (nav ativo, ícones, atmosfera) |
| `border-subtle` | `#E7E3DA` | Divisores, contornos de card |
| `radius-card` | `16px` | Cards, containers de foto |
| `radius-pill` | `999px` | Botões, badges |
| `shadow-card` | `0 8px 24px -12px rgb(23 21 18 / 0.18)` | Cards elevados |
| `font-display` | `"Fraunces"` alternativa condensada geométrica sans (ver nota) | Headlines |
| `font-body` | `"Inter"` | Corpo |

> Nota tipográfica: como o wordmark é uma sans condensada em caixa alta, usar **Inter** (peso 800) para headlines em vez de uma serifada — mantém uma única família em toda a LP (mais leve para export estático, sem carregar uma segunda fonte web).

## Regra de Ouro

1. Verde e laranja são as ÚNICAS cores de marca — laranja sempre com função de ação, nunca decorativo.
2. Toda seção com fotografia real da loja/equipe usa a foto real — nunca substitui por ilustração.
3. A grade de letras "caça-palavras" é a atmosfera de toda a página, sempre em opacidade muito baixa.
4. O ritmo alterna denso/respiro; nenhuma seção de respiro ganha composição pesada.
5. Light mode fixo, contraste alto, `prefers-reduced-motion` respeitado.
6. Nenhum conteúdo inventado — sem depoimentos, prêmios, contagem de clientes ou preços que não vieram do cliente.
