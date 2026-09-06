import type * as React from 'react';

export interface ShellNavigationItem {
    id: string;
    label: React.ReactNode;
    icon?: React.ReactNode;
    badge?: React.ReactNode;
    content: React.ReactNode;
}

export interface ShellConfig {
    brand?: {
        logo?: React.ReactNode;
        label?: React.ReactNode;
    };
    navigation: ShellNavigationItem[];
    topbar?: {
        actions?: React.ReactNode;
        themeToggle?: boolean;
    };
}

export interface ShellProps extends React.HTMLAttributes<HTMLDivElement> {
    config: ShellConfig;
    defaultItemId?: string;
    activeItemId?: string;
    onActiveItemChange?: (itemId: string) => void;
}
