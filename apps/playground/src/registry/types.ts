import type { IconName } from 'acioleui';
import type * as React from 'react';

export type Category =
  | 'typography'
  | 'forms'
  | 'data-display'
  | 'charts'
  | 'navigation'
  | 'feedback'
  | 'overlay'
  | 'layout';

export type ControlOption = {
  label: string;
  value: string;
};

type ControlBase<TProps extends Record<string, unknown>, TName extends Extract<keyof TProps, string>> = {
  name: TName;
  label: string;
};

export type PlaygroundControl<TProps extends Record<string, unknown> = Record<string, unknown>> =
  | ({
      type: 'text' | 'textarea';
      placeholder?: string;
    } & ControlBase<TProps, Extract<keyof TProps, string>>)
  | ({
      type: 'boolean';
    } & ControlBase<TProps, Extract<keyof TProps, string>>)
  | ({
      type: 'select';
      options: ControlOption[];
    } & ControlBase<TProps, Extract<keyof TProps, string>>)
  | ({
      type: 'number';
      min?: number;
      max?: number;
      step?: number;
      placeholder?: string;
    } & ControlBase<TProps, Extract<keyof TProps, string>>);

export interface ComponentDefinition<TProps extends Record<string, unknown> = Record<string, unknown>> {
  id: string;
  name: string;
  category: Category;
  icon: IconName;
  description: string;
  order?: number;
  tags?: string[];
  playground: {
    initialProps: TProps;
    controls: PlaygroundControl<TProps>[];
    render: (props: TProps) => React.ReactNode;
    code: (props: TProps) => string;
  };
}

export type AnyComponentDefinition = ComponentDefinition<Record<string, unknown>>;

export interface CategoryConfigItem {
  label: string;
  icon: IconName;
  order: number;
}

export interface SidebarGroup {
  category: Category;
  label: string;
  icon: IconName;
  items: AnyComponentDefinition[];
}
