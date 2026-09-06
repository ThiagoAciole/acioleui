import type { Category, CategoryConfigItem } from './types';

export const CATEGORY_CONFIG: Record<Category, CategoryConfigItem> = {
  typography: { label: 'Typography', icon: 'type', order: 1 },
  forms: { label: 'Forms', icon: 'form-input', order: 2 },
  'data-display': { label: 'Data Display', icon: 'database', order: 3 },
  charts: { label: 'Charts', icon: 'activity', order: 4 },
  navigation: { label: 'Navigation', icon: 'external-link', order: 5 },
  feedback: { label: 'Feedback', icon: 'message-square', order: 6 },
  overlay: { label: 'Overlay', icon: 'panel-left', order: 7 },
  layout: { label: 'Layout', icon: 'layout-template', order: 8 },
};
