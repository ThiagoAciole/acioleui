# Shell Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publicar um `Shell` responsivo e tipado que organiza navegação plana, topbar e outlet interno.

**Architecture:** `Shell` recebe uma configuração plana e compõe os componentes existentes `Sidebar`, `TopBar` e `Drawer`. O item selecionado usa o modo controlado quando `activeItemId` é informado e, caso contrário, mantém estado interno a partir de `defaultItemId` ou do primeiro item. A CSS do Shell controla a superfície inset e a troca desktop/mobile.

**Tech Stack:** React 18, TypeScript estrito, CSS com tokens AcioleUI, Vite e Playground React.

**Spec:** `docs/superpowers/specs/2026-09-06-shell-design.md`

## Global Constraints

- Não adicionar dependências, roteador, grupos ou subitens.
- Reutilizar `Sidebar`, `TopBar`, `Drawer`, `IconButton` e tokens existentes.
- No mobile, fechar o `Drawer` ao selecionar um item.
- Manter o estado ativo controlável por `activeItemId` e `onActiveItemChange`.
- Validar com build da biblioteca e typecheck do Playground; o workspace não possui runner de testes.

---

### Task 1: Componente Shell público

**Files:**
- Create: `packages/ui/src/components/Shell/types.ts`
- Create: `packages/ui/src/components/Shell/Shell.tsx`
- Create: `packages/ui/src/components/Shell/Shell.css`
- Modify: `packages/ui/src/components/index.ts`

**Interfaces:**
- Consumes: `Sidebar`, `TopBar`, `Drawer`, `IconButton` e `classNames` já públicos/internos.
- Produces: `Shell`, `ShellProps`, `ShellConfig` e `ShellNavigationItem` exportados por `acioleui`.

- [x] **Step 1: Criar uma verificação de compilação que falha**

Adicionar a definição do Playground em `apps/playground/src/registry/components/layout/shell.definition.tsx` importando `Labs.Shell`, `Labs.ShellConfig` e uma configuração com `navigation[].content`.

- [x] **Step 2: Executar a verificação para confirmar a falha**

Run: `npm run typecheck --workspace=apps/playground`

Expected: FAIL com ausência dos exports `Shell` e `ShellConfig`.

- [x] **Step 3: Implementar o contrato e a composição mínima**

Criar os tipos públicos planos e `Shell`. Renderizar cada `ShellNavigationItem` com `Sidebar.Item`; selecionar um item chama `onActiveItemChange`, atualiza o estado não controlado e fecha o drawer. Renderizar a sidebar persistente no desktop, `Drawer` esquerdo no mobile, `TopBar` com botão de menu e o conteúdo do item ativo no outlet.

- [x] **Step 4: Implementar a CSS responsiva**

Adicionar `Shell.css` com layout de `100dvh`, outlet com `min-width: 0`, superfície inset e breakpoint baseado no encaixe da sidebar. Ocultar a sidebar desktop e mostrar o botão de menu abaixo do breakpoint; usar somente tokens semânticos existentes.

- [x] **Step 5: Executar a verificação para confirmar o sucesso**

Run: `npm run typecheck --workspace=apps/playground && npm run build --workspace=packages/ui`

Expected: PASS.

### Task 2: Demonstração pública no Playground

**Files:**
- Create: `apps/playground/src/registry/components/layout/shell.definition.tsx`

**Interfaces:**
- Consumes: `Shell` e `ShellConfig` exportados pela Task 1.
- Produces: uma definição auto-descoberta do Playground para o componente Shell.

- [x] **Step 1: Criar a definição com configuração de exemplo**

Usar duas entradas planas (`Dashboard` e `Produtos`), cada uma com `content`, ícone e `defaultItemId`. Demonstrar `topbar.actions` e `themeToggle` sem criar estado de roteamento.

- [x] **Step 2: Compilar a demonstração**

Run: `npm run typecheck --workspace=apps/playground`

Expected: PASS, comprovando que o contrato público é consumível pelo projeto.

### Task 3: Validação final

**Files:**
- Verify: `packages/ui/src/components/Shell/*`
- Verify: `apps/playground/src/registry/components/layout/shell.definition.tsx`

**Interfaces:**
- Consumes: implementação e demonstração das Tasks 1 e 2.
- Produces: build distribuível e verificação sem diffs de whitespace.

- [x] **Step 1: Rodar validações**

Run: `npm run lint && npm run build:all && git diff --check`

Expected: PASS ou relato explícito de falhas pré-existentes não relacionadas.

- [x] **Step 2: Verificar o diff focado**

Run: `git diff -- packages/ui/src/components/Shell packages/ui/src/components/index.ts apps/playground/src/registry/components/layout/shell.definition.tsx`

Expected: apenas o Shell, seus exports e sua demonstração.
