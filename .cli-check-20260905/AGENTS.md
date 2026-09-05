# Estrutura do projeto

React + Vite + TypeScript com AcioleUI.

- `src/components`: um componente reutilizável por pasta, com `index.tsx` e `styles.ts` quando necessário.
- `src/pages`: telas, uma por pasta.
- `src/layouts`: shells compartilhados.
- `src/contexts`: providers e estado global.
- `src/hooks`: hooks reutilizáveis.
- `src/services`: API e integrações externas.
- `src/store`: estado de domínio.
- `src/styles`: tokens, temas e estilos globais.
- `src/assets`: imagens importadas pelo código.
- `src/utils`: helpers puros.

Use AcioleUI e seu `ThemeProvider` antes de criar alternativas. Separe UI, negócio e dados. Preserve acessibilidade. Valide com `npm run build`.
