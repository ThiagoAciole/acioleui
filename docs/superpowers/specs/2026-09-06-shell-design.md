# Shell Design

## Objetivo

Disponibilizar um componente público `Shell` para aplicações internas, que compõe a `Sidebar`, a `TopBar` e uma área de conteúdo inset responsiva a partir de um objeto tipado.

## Contrato público

```tsx
type ShellNavigationItem = {
  id: string;
  label: string;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  content: React.ReactNode;
};

type ShellConfig = {
  brand?: {
    logo?: React.ReactNode;
    label?: React.ReactNode;
  };
  navigation: ShellNavigationItem[];
  topbar?: {
    actions?: React.ReactNode;
    themeToggle?: boolean;
  };
};

type ShellProps = {
  config: ShellConfig;
  defaultItemId?: string;
  activeItemId?: string;
  onActiveItemChange?: (itemId: string) => void;
};
```

`Shell` exibe o `content` do item ativo. Sem `activeItemId`, administra o estado a partir de `defaultItemId` ou do primeiro item. Com `activeItemId`, o estado é controlado pelo consumidor; `onActiveItemChange` permite sincronização com URL ou roteador sem adicionar dependência de roteamento à biblioteca.

## Layout e responsividade

- Em telas largas, a `Sidebar` plana permanece visível; a `TopBar` e o outlet ficam ao lado dela, dentro de uma superfície inset com margem, raio e fundo semântico.
- Em telas estreitas, o botão de menu do Shell abre a mesma navegação plana em `Drawer` esquerdo e fecha após selecionar um item.
- O outlet mantém `min-width: 0`, `min-height: 0` e rolagem própria para evitar overflow.

## Limites da primeira versão

- Navegação plana somente: não há grupos ou subitens.
- Não há integração obrigatória com React Router, URL ou histórico.
- Não há novos pacotes, contexto global ou abstrações paralelas.
- A demonstração fica no Playground e o componente é exportado pelo barril público.

## Validação

O workspace não possui runner de testes. A demonstração do Playground tipada deve compilar com o build da biblioteca e o typecheck do Playground; a verificação visual cobre desktop e mobile.
