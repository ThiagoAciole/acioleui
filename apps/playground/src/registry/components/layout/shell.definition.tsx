import * as Labs from 'acioleui';
import { defineComponent } from '../../defineComponent';
import type { ComponentDefinition } from '../../types';

const shellConfig: Labs.ShellConfig = {
  brand: {
    label: 'AcioleUI',
  },
  navigation: [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: <Labs.Icon name="home" size={18} />,
      content: <Labs.Text>Visão geral da operação.</Labs.Text>,
    },
    {
      id: 'products',
      label: 'Produtos',
      icon: <Labs.Icon name="box" size={18} />,
      content: <Labs.Text>Catálogo de produtos.</Labs.Text>,
    },
  ],
  topbar: {
    actions: <Labs.Badge color="primary">Admin</Labs.Badge>,
    themeToggle: true,
  },
};

const shellDefinition: ComponentDefinition<Record<string, never>> = defineComponent<Record<string, never>>({
  id: 'shell',
  name: 'Shell',
  category: 'layout',
  icon: 'layout-template',
  description: 'Layout responsivo com navegação e conteúdo organizado por configuração.',
  playground: {
    initialProps: {},
    controls: [],
    render: () => <Labs.Shell config={shellConfig} defaultItemId="dashboard" />,
    code: () => '<Shell config={shellConfig} defaultItemId="dashboard" />',
  },
});

export default shellDefinition;
