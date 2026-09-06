import './Shell.css';
import React, { useState } from 'react';
import { Icon } from '../../icons';
import { classNames } from '../../utils/classNames';
import { Drawer } from '../Drawer/Drawer';
import { IconButton } from '../IconButton/IconButton';
import { Sidebar } from '../Sidebar/Sidebar';
import { TopBar } from '../TopBar/TopBar';
import type { ShellProps } from './types';

export type { ShellConfig, ShellNavigationItem, ShellProps } from './types';

export const Shell: React.FC<ShellProps> = ({
    config,
    defaultItemId,
    activeItemId,
    onActiveItemChange,
    className,
    ...props
}) => {
    const firstItemId = config.navigation[0]?.id;
    const initialItemId = config.navigation.some((item) => item.id === defaultItemId)
        ? defaultItemId
        : firstItemId;
    const [internalActiveItemId, setInternalActiveItemId] = useState(initialItemId);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const selectedItemId = activeItemId ?? internalActiveItemId;
    const activeItem = config.navigation.find((item) => item.id === selectedItemId) ?? config.navigation[0];

    const selectItem = (itemId: string) => {
        if (activeItemId === undefined) {
            setInternalActiveItemId(itemId);
        }

        onActiveItemChange?.(itemId);
        setDrawerOpen(false);
    };

    const navigation = config.navigation.map((item) => (
        <Sidebar.Item
            key={item.id}
            icon={item.icon}
            active={activeItem?.id === item.id}
            aria-current={activeItem?.id === item.id ? 'page' : undefined}
            onClick={() => selectItem(item.id)}
        >
            {item.label}
            {item.badge ? <span className="shell__navigation-badge">{item.badge}</span> : null}
        </Sidebar.Item>
    ));

    return (
        <div className={classNames('shell', className)} {...props}>
            <Sidebar className="shell__sidebar">
                {config.brand ? (
                    <Sidebar.Header icon={config.brand.logo} logo={config.brand.label} collapsible={false} />
                ) : null}
                <div className="shell__navigation">{navigation}</div>
            </Sidebar>

            <div className="shell__frame">
                <TopBar
                    className="shell__topbar"
                    logo={
                        <>
                            <IconButton
                                className="shell__menu-button"
                                icon={<Icon name="menu" size={18} />}
                                label="Abrir navegação"
                                variant="ghost"
                                size="small"
                                onClick={() => setDrawerOpen(true)}
                            />
                            <span>{activeItem?.label ?? config.brand?.label}</span>
                        </>
                    }
                    extraContent={config.topbar?.actions}
                    themeToggle={config.topbar?.themeToggle}
                />

                <main className="shell__outlet">{activeItem?.content}</main>
            </div>

            <Drawer
                className="shell__drawer"
                isOpen={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                placement="left"
                size="small"
                title="Navegação"
            >
                <Sidebar className="shell__drawer-sidebar">{navigation}</Sidebar>
            </Drawer>
        </div>
    );
};

Shell.displayName = 'Shell';
