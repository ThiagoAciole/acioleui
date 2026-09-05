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

## Criar um projeto

Depois de publicado, o gerador pode ser usado em qualquer pasta, sem clonar este repositório:

```bash
npm create acioleui@latest meu-projeto -- --install
cd meu-projeto
npm run dev
```

O projeto já inclui o layout inicial, `ThemeProvider`, `AGENTS.md` e `.agents/skills/acioleui-design`.

## Entry points publicos

```ts
import { Button, ThemeProvider, useTheme, useOverlay } from 'acioleui';
import { Icon, iconRegistry } from 'acioleui/icons';
```

## Publicação automática

O workflow `.github/workflows/publish-ui.yml` publica `packages/ui` quando há alteração na biblioteca na branch `main`. Também pode ser executado manualmente em **Actions → Release acioleui → Run workflow**.

Configure o Trusted Publisher do pacote `acioleui` no npm: provedor **GitHub Actions**, usuário/organização `ThiagoAciole`, repositório `acioleui` e workflow `publish-ui.yml`. Não é necessário manter `NPM_TOKEN` no GitHub.

O workflow instala com `npm ci`, bloqueia vulnerabilidades high/critical, incrementa a versão patch, gera o build, publica no npm e commita a nova versão com `[skip ci]` para evitar loop.
