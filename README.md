# Zap que Trabalha por Você

Landing page para automação de WhatsApp voltada para profissionais autônomos e prestadores de serviços.

## Stack

- Vue 3 (Composition API + `<script setup>`)
- Vite
- Tailwind CSS 3
- JavaScript (sem TypeScript)

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

## Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/` prontos para deploy na Vercel.

## Deploy na Vercel

1. Conecte seu repositório na Vercel
2. Configure o build command: `npm run build`
3. Configure o output directory: `dist`
4. Deploy!

Ou use o Vercel CLI:

```bash
npm install -g vercel
vercel
```

## Estrutura do Projeto

```
├── index.html
├── package.json
├── vite.config.js
├── postcss.config.js
├── tailwind.config.js
├── public/
│   └── og-image.svg
└── src/
    ├── main.js
    ├── App.vue
    ├── styles/
    │   └── tailwind.css
    └── components/
        ├── Hero.vue
        ├── Features.vue
        ├── Contact.vue
        └── Footer.vue
```

## Recursos

- Design responsivo (mobile-first)
- Navegação suave entre seções
- Formulário de contato com redirecionamento para WhatsApp
- Totalmente acessível (WCAG AA)
- Sem dependências externas além de Vue e Tailwind

## Contato

WhatsApp: +55 11 99762-8274
