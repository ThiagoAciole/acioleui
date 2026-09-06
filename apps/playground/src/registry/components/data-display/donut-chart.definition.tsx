import * as Labs from 'acioleui';
import { defineComponent } from '../../defineComponent';
import type { ComponentDefinition } from '../../types';

const donutChartDefinition: ComponentDefinition<Record<string, never>> = defineComponent<Record<string, never>>({
  id: 'donut-chart',
  name: 'DonutChart',
  category: 'charts',
  icon: 'activity',
  description: 'Distribuição compacta entre categorias.',
  playground: {
    initialProps: {},
    controls: [],
    render: () => (
      <Labs.DonutChart
        data={[{ label: 'Pago', value: 62 }, { label: 'Pendente', value: 38, color: 'warning' }]}
        showLegend
      />
    ),
    code: () => '<DonutChart data={[{ label: "Pago", value: 62 }, { label: "Pendente", value: 38, color: "warning" }]} showLegend />',
  },
});

export default donutChartDefinition;
