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

## Charts

Charts são SVGs leves, sem dependências externas. Use `Progress` para progresso horizontal e escolha o chart pela pergunta que o dado responde.

```tsx
import { BarChart, DonutChart, RadialProgress, Sparkline } from 'acioleui';

<BarChart
  data={[{ label: 'Seg', value: 24 }, { label: 'Ter', value: 48 }]}
  activeIndex={1}
/>
<Sparkline data={[8, 14, 10, 18]} variant="area" showEndPoint />
<RadialProgress value={72} label="72%" description="Perfil completo" />
<DonutChart data={[{ label: 'Concluído', value: 62, color: 'success' }, { label: 'Pendente', value: 38, color: 'warning' }]} showLegend />
```

- `BarChart`: compara valores discretos; use `maxBarWidth` para limitar cada coluna.
- `Sparkline`: tendência compacta para cards, sem legenda ou eixos.
- `RadialProgress`: uma única métrica de progresso.
- `DonutChart`: distribuição por categoria; a legenda opcional mostra valor e percentual.

## Shell

`Shell` organiza sidebar, topbar e o conteúdo ativo para aplicações internas. A sidebar é colapsável pelo cabeçalho e vira um `Drawer` no mobile.

```tsx
import { Icon, Shell } from 'acioleui';

<Shell
  config={{
    brand: { logo: <Logo />, label: 'Minha empresa' },
    navigation: [
      { id: 'dashboard', label: 'Dashboard', icon: <Icon name="home" />, content: <DashboardPage /> },
      { id: 'products', label: 'Produtos', icon: <Icon name="box" />, content: <ProductsPage /> },
    ],
    topbar: { actions: <UserMenu />, themeToggle: true },
  }}
  defaultItemId="dashboard"
/>
```

Use `activeItemId` e `onActiveItemChange` quando a aplicação precisar sincronizar a navegação com URL ou roteador. O Shell não exige uma dependência de rotas.

## Publicação automática

O workflow `.github/workflows/publish-ui.yml` publica `packages/ui` quando há alteração na biblioteca na branch `main`. Também pode ser executado manualmente em **Actions → Release acioleui → Run workflow**.

Configure o Trusted Publisher do pacote `acioleui` no npm: provedor **GitHub Actions**, usuário/organização `ThiagoAciole`, repositório `acioleui` e workflow `publish-ui.yml`. Não é necessário manter `NPM_TOKEN` no GitHub.

O workflow instala com `npm ci`, bloqueia vulnerabilidades high/critical, incrementa a versão patch, gera o build, publica no npm e commita a nova versão com `[skip ci]` para evitar loop.
