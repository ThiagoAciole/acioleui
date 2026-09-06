import * as Labs from 'acioleui';
import { defineComponent } from '../../defineComponent';
import type { ComponentDefinition } from '../../types';

const barChartDefinition: ComponentDefinition<Record<string, never>> = defineComponent<Record<string, never>>({
  id: 'bar-chart',
  name: 'BarChart',
  category: 'charts',
  icon: 'activity',
  description: 'Comparação compacta de valores.',
  playground: {
    initialProps: {},
    controls: [],
    render: () => <Labs.BarChart data={[{ label: 'Seg', value: 24 }, { label: 'Ter', value: 12 }, { label: 'Qua', value: 48 }, { label: 'Qui', value: 36 }, { label: 'Sex', value: 24 }]} activeIndex={2} />,
    code: () => '<BarChart data={[{ label: "Seg", value: 24 }, { label: "Ter", value: 12 }, { label: "Qua", value: 48 }]} activeIndex={2} />',
  },
});

export default barChartDefinition;
