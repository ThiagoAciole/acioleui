import { Box, Heading, Text } from 'acioleui';
import type { HomeRouteId } from '../../app/router';
import './home-page.css';
import { IconsSection } from './sections/icons-section';
import { InstallationSection } from './sections/installation-section';
import { OverviewSection } from './sections/overview-section';
import { UsageSection } from './sections/usage-section';

interface HomePageProps {
  route: HomeRouteId;
}

export function HomePage({ route }: HomePageProps) {
  const isOverview = route === 'home-overview';

  return (
    <Box className="home-page">
      {isOverview ? (
        <Box className="home-overview">
          <Box className="home-hero__copy">
            <Heading>Home</Heading>
            <Text color="neutral">O que precisa de atenção no seu estoque hoje?</Text>
          </Box>
        </Box>
      ) : null}

      {route === 'home-installation' ? <InstallationSection /> : null}
      {route === 'home-usage' ? <UsageSection /> : null}
      {route === 'home-overview' ? <OverviewSection /> : null}
      {route === 'home-icons' ? <IconsSection /> : null}
    </Box>
  );
}
