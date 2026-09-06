import * as Labs from 'acioleui';
import { defineComponent } from '../../defineComponent';
import type { ComponentDefinition } from '../../types';

const sparklineDefinition: ComponentDefinition<Record<string, never>> = defineComponent<Record<string, never>>({
  id: 'sparkline',
  name: 'Sparkline',
  category: 'charts',
  icon: 'activity',
  description: 'Tendência compacta para cards e métricas.',
  playground: {
    initialProps: {},
    controls: [],
    render: () => <Labs.Sparkline data={[8, 14, 10, 18, 15, 24, 20]} variant="area" showEndPoint />,
    code: () => '<Sparkline data={[8, 14, 10, 18, 15, 24, 20]} variant="area" showEndPoint />',
  },
});

export default sparklineDefinition;
