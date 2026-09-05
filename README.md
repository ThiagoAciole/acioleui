# acioleui

Biblioteca de componentes React para uso em aplicacoes web.

## Instalacao

```bash
npm install acioleui
```

## Uso

```tsx
import 'acioleui/styles';
import { ThemeProvider, Button } from 'acioleui';

function App() {
  return (
    <ThemeProvider>
      <Button variant="primary">Hello AcioleUI</Button>
    </ThemeProvider>
  );
}
```

## Entry points publicos

```ts
import { Button, ThemeProvider, useTheme, useOverlay } from 'acioleui';
import { Icon, iconRegistry } from 'acioleui/icons';
```

## Publicação automática

O workflow `.github/workflows/publish-ui.yml` publica `packages/ui` quando há alteração na biblioteca na branch `main`. Também pode ser executado manualmente em **Actions → Release acioleui → Run workflow**.

Configure o secret `NPM_TOKEN` em **Settings → Secrets and variables → Actions**. O token precisa ter permissão de publicação no pacote `acioleui`.

O workflow instala com `npm ci`, bloqueia vulnerabilidades high/critical, incrementa a versão patch, gera o build, publica no npm e commita a nova versão com `[skip ci]` para evitar loop.
