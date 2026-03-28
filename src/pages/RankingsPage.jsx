import { Helmet } from 'react-helmet-async';
import { useLanguage, UI_TEXT } from '../hooks/useLanguage';
import RankingsList from '../components/shared/RankingsList';
import EventCard from '../components/shared/EventCard';
import rankings from '../data/rankings';

export default function RankingsPage() {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{t(UI_TEXT.nav.rankings)} | Apex Editorial</title>
        <meta name="description" content="UFC Pound-for-Pound Rankings and upcoming MMA events schedule." />
      </Helmet>

      <div className="container" style={{ paddingTop: '40px' }}>
        <h1 style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '2rem',
          fontWeight: 900,
          textTransform: 'uppercase',
          marginBottom: '40px',
        }}>
          {t(UI_TEXT.nav.rankings)}
        </h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
        }}>
          <div>
            <RankingsList rankings={rankings.p4p} limit={15} />
          </div>
          <div>
            <h3 className="section-title">{t(UI_TEXT.home.upcomingFixtures)}</h3>
            {rankings.upcomingEvents.map((event) => (
              <EventCard key={event.id || event.name} event={event} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
