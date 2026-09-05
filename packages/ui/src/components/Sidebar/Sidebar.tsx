import './Sidebar.css';
import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { classNames } from '../../utils/classNames';
import { Icon } from '../../icons';
import { Input } from '../Input/Input';
import type { SidebarFooterProps, SidebarGroupProps, SidebarHeaderProps, SidebarItemProps, SidebarProps } from './types';

export type { SidebarFooterProps, SidebarGroupProps, SidebarHeaderProps, SidebarItemOwnProps, SidebarItemProps, SidebarProps } from './types';

type SidebarContextValue = {
    collapsed: boolean;
    toggleCollapsed: () => void;
    searchTerm: string;
    setSearchTerm: (value: string) => void;
    enableSearch: boolean;
    searchPlaceholder: string;
};

const SidebarContext = createContext<SidebarContextValue>({
    collapsed: false,
    toggleCollapsed: () => {},
    searchTerm: '',
    setSearchTerm: () => {},
    enableSearch: false,
    searchPlaceholder: 'Buscar item',
});

function useSidebarContext() {
    return useContext(SidebarContext);
}

function getNodeText(node: React.ReactNode): string {
    if (typeof node === 'string' || typeof node === 'number') {
        return String(node);
    }

    if (Array.isArray(node)) {
        return node.map(getNodeText).join(' ');
    }

    if (React.isValidElement(node)) {
        return getNodeText(node.props.children);
    }

    return '';
}

function countSidebarItems(children: React.ReactNode): number {
    let count = 0;

    React.Children.forEach(children, (child) => {
        if (!React.isValidElement(child)) {
            return;
        }

        if (child.type === SidebarItem) {
            count += 1;
            return;
        }

        count += countSidebarItems(child.props.children);
    });

    return count;
}

function findFirstSidebarItem(children: React.ReactNode): React.ReactElement | null {
    for (const child of React.Children.toArray(children)) {
        if (!React.isValidElement(child)) {
            continue;
        }

        if (child.type === SidebarItem) {
            return child;
        }

        const nestedItem = findFirstSidebarItem(child.props.children);
        if (nestedItem) {
            return nestedItem;
        }
    }

    return null;
}

function SidebarRoot({
    collapsed: controlledCollapsed,
    defaultCollapsed = false,
    onToggle,
    className,
    children,
    searchThreshold = 12,
    searchPlaceholder = 'Buscar item',
    ...props
}: SidebarProps) {
    const [internalCollapsed, setInternalCollapsed] = useState(defaultCollapsed);
    const [searchTerm, setSearchTerm] = useState('');

    const isControlled = controlledCollapsed !== undefined;
    const collapsed = isControlled ? controlledCollapsed : internalCollapsed;
    const itemCount = useMemo(() => countSidebarItems(children), [children]);
    const enableSearch = itemCount > searchThreshold && !collapsed;
    const childArray = React.Children.toArray(children);
    const footerIndex = childArray.findIndex(
        (child) => React.isValidElement(child) && child.type === SidebarFooter
    );

    const toggleCollapsed = useCallback(() => {
        const nextValue = !collapsed;

        if (!isControlled) {
            setInternalCollapsed(nextValue);
        }

        onToggle?.(nextValue);
    }, [collapsed, isControlled, onToggle]);

    const contextValue = useMemo(
        () => ({
            collapsed,
            toggleCollapsed,
            searchTerm,
            setSearchTerm,
            enableSearch,
            searchPlaceholder,
        }),
        [collapsed, toggleCollapsed, searchTerm, enableSearch, searchPlaceholder]
    );

    return (
        <SidebarContext.Provider value={contextValue}>
            <aside
                className={classNames('sidebar', collapsed && 'sidebar--collapsed', className)}
                {...props}
            >
                {footerIndex === -1 ? children : childArray.slice(0, footerIndex)}
                {footerIndex === -1 ? null : childArray.slice(footerIndex)}
            </aside>
        </SidebarContext.Provider>
    );
}

function SidebarHeader({
    icon,
    logo,
    collapsible = true,
    className,
    children,
    onClick,
    ...props
}: SidebarHeaderProps) {
    const { collapsed, toggleCollapsed, enableSearch, searchTerm, setSearchTerm, searchPlaceholder } = useSidebarContext();

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (collapsible) {
            toggleCollapsed();
        }

        onClick?.(e);
    };

    return (
        <>
            <div
                className={classNames('sidebar__header', className)}
                onClick={handleClick}
                {...props}
            >
                <div className="sidebar__header-icon">
                    {icon ?? <Icon name="menu" />}
                </div>

                {!collapsed && (
                    <div className="sidebar__header-content">
                        {logo ?? children}
                    </div>
                )}
            </div>

            {enableSearch ? (
                <div className="sidebar__search sidebar__search--header">
                    <Input
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)}
                        placeholder={searchPlaceholder}
                        prefix={<Icon name="search" size={16} />}
                        size="small"
                        full
                    />
                </div>
            ) : null}
        </>
    );
}

function SidebarItem<TElement extends React.ElementType = 'button'>({
    icon,
    active = false,
    as,
    className,
    children,
    searchText,
    ...props
}: SidebarItemProps<TElement>) {
    const { collapsed, searchTerm } = useSidebarContext();
    const Component = (as || 'button') as React.ElementType;
    const itemText = (searchText ?? getNodeText(children)).trim().toLocaleLowerCase();
    const normalizedSearchTerm = searchTerm.trim().toLocaleLowerCase();
    const isVisible = !normalizedSearchTerm || itemText.includes(normalizedSearchTerm);

    if (!isVisible) {
        return null;
    }

    return (
        <Component
            className={classNames(
                'sidebar__item',
                active && 'sidebar__item--active',
                className
            )}
            {...props}
        >
            {icon ? <span className="sidebar__item-icon">{icon}</span> : null}
            {!collapsed && <span className="sidebar__item-label">{children}</span>}
        </Component>
    );
}

function SidebarGroup({
    title,
    leftIcon,
    defaultOpen = true,
    open: controlledOpen,
    onOpenChange,
    collapsible = true,
    className,
    children,
    ...props
}: SidebarGroupProps) {
    const { collapsed, searchTerm } = useSidebarContext();
    const [internalOpen, setInternalOpen] = useState(defaultOpen);

    const isControlled = controlledOpen !== undefined;
    const open = isControlled ? controlledOpen : internalOpen;
    const normalizedSearchTerm = searchTerm.trim().toLocaleLowerCase();
    const childText = getNodeText(children).toLocaleLowerCase();
    const hasMatch = !normalizedSearchTerm || childText.includes(normalizedSearchTerm);
    const shouldForceOpen = Boolean(normalizedSearchTerm && hasMatch);
    const isOpen = collapsed ? false : shouldForceOpen || open;
    const firstItem = findFirstSidebarItem(children);

    if (!hasMatch) {
        return null;
    }

    const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (collapsed) {
            const onClick = firstItem?.props?.onClick;
            if (typeof onClick === 'function') {
                onClick(event);
            }

            return;
        }

        if (!collapsible || shouldForceOpen) {
            return;
        }

        const nextValue = !open;

        if (!isControlled) {
            setInternalOpen(nextValue);
        }

        onOpenChange?.(nextValue);
    };

    return (
        <div
            className={classNames('sidebar__group', isOpen && 'sidebar__group--open', className)}
            {...props}
        >
            <button
                type="button"
                className="sidebar__group-trigger"
                onClick={handleToggle}
                aria-expanded={isOpen}
                disabled={!collapsible || shouldForceOpen}
            >
                {leftIcon ? <span className="sidebar__group-left-icon">{leftIcon}</span> : null}
                {!collapsed ? <span className="sidebar__group-title">{title}</span> : null}
                <span className="sidebar__group-icon">
                    <Icon name="chevron-down" size={16} />
                </span>
            </button>

            {isOpen ? <div className="sidebar__group-content">{children}</div> : null}
        </div>
    );
}

function SidebarFooter({
    className,
    children,
    ...props
}: SidebarFooterProps) {
    return (
        <div className={classNames('sidebar__footer', className)} {...props}>
            {children}
        </div>
    );
}

export const Sidebar = Object.assign(SidebarRoot, {
    Header: SidebarHeader,
    Item: SidebarItem,
    Group: SidebarGroup,
    Footer: SidebarFooter,
});

(Sidebar as typeof Sidebar & { displayName?: string }).displayName = 'Sidebar';
