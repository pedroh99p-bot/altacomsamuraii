# Altinha com Samurai 2.0

Landing page em Next.js para a marca Altinha com Samurai, com jornada completa de conversão para aulas de altinha na Praia do Pontal, Recreio dos Bandeirantes.

## Stack

- Next.js App Router
- React
- TypeScript
- CSS global
- lucide-react

## Instalação

```bash
npm install
```

## Executar localmente

```bash
npm run dev
```

Abra `http://localhost:3000`.

## Build

```bash
npm run build
```

## Validação

```bash
npm run typecheck
npm audit --omit=dev
```

## Variáveis de ambiente

As integrações de analytics só carregam quando os IDs públicos reais estiverem configurados e houver consentimento do visitante:

```bash
NEXT_PUBLIC_GTM_ID=
NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_META_PIXEL_ID=
```

Não há valores reais desses IDs no repositório.

## Dados editáveis

Os dados centrais da landing ficam em `data/`, incluindo informações do negócio, perfis de aula, FAQ, quiz, prova social e privacidade.

## Legado

`legacy/index.html` preserva a versão antiga como backup e não deve ser removido sem decisão explícita.

## Deploy

Este checkpoint ainda não foi publicado em Vercel ou outro serviço de hospedagem.
