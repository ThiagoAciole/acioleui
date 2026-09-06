import * as Labs from 'acioleui';
import { defineComponent } from '../../defineComponent';
import type { ComponentDefinition } from '../../types';

const radialProgressDefinition: ComponentDefinition<Record<string, never>> = defineComponent<Record<string, never>>({
  id: 'radial-progress',
  name: 'RadialProgress',
  category: 'charts',
  icon: 'activity',
  description: 'Progresso circular para uma métrica única.',
  playground: {
    initialProps: {},
    controls: [],
    render: () => <Labs.RadialProgress value={72} label="72%" description="Perfil completo" />,
    code: () => '<RadialProgress value={72} label="72%" description="Perfil completo" />',
  },
});

export default radialProgressDefinition;
