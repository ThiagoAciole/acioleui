import { Box, Flex, Icon, Sidebar, TopBar, useTheme } from 'acioleui';
import type { ReactNode } from 'react';
import icon from '../assets/icon.svg';
import logoDark from '../assets/logo-dark.svg';
import logoLight from '../assets/logo-light.svg';
import { sidebarGroups } from '../registry';
import { homeRoutes } from './router';
import './app-shell.css';

interface AppShellProps {
  currentRouteId: string;
  sidebarCollapsed: boolean;
  onSidebarToggle: (collapsed: boolean) => void;
  onNavigate: (routeId: string) => void;
  children: ReactNode;
}

export function AppShell({
  currentRouteId,
  sidebarCollapsed,
  onSidebarToggle,
  onNavigate,
  children,
}: AppShellProps) {
  const { theme } = useTheme();

  return (
    <Flex className="playground-shell">
      <Sidebar className="playground-shell__sidebar" collapsed={sidebarCollapsed} onToggle={onSidebarToggle}>
        <Sidebar.Header
          icon={<img src={icon} alt="LabsUI Icon" style={{ height: '24px', }} />}
          logo={<img src={theme === 'light' ? logoLight : logoDark} alt="LabsUI Logo" style={{ height: '18px' }} />}
        />

        <Box style={{ padding: 'var(--space-2)', overflowY: 'auto', flex: 1 }}>
          {homeRoutes.map((route) => (
            <Sidebar.Item
              key={route.id}
              icon={<Icon name={route.icon} size={16} />}
              active={currentRouteId === route.id}
              onClick={() => onNavigate(route.id)}
            >
              {route.name}
            </Sidebar.Item>
          ))}

          {sidebarGroups.map((group) => (
            <Sidebar.Group
              key={group.category}
              title={group.label}
              leftIcon={<Icon name={group.icon} size={16} />}
              defaultOpen
            >
              {group.items.map((item) => (
                <Sidebar.Item
                  key={item.id}
                  icon={<Icon name={item.icon} size={16} />}
                  active={currentRouteId === item.id}
                  onClick={() => onNavigate(item.id)}
                >
                  {item.name}
                </Sidebar.Item>
              ))}
            </Sidebar.Group>
          ))}
        </Box>
      </Sidebar>

      <Flex direction="column" className="playground-shell__content">
        <TopBar className="playground-shell__topbar" sticky themeToggle={true} />
        <Box className="playground-shell__body">
          {children}
        </Box>
      </Flex>
    </Flex>
  );
}
