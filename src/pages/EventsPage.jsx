import { Helmet } from 'react-helmet-async';
import { useLanguage, UI_TEXT } from '../hooks/useLanguage';
import EventCard from '../components/shared/EventCard';
import rankings from '../data/rankings';

export default function EventsPage() {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{t(UI_TEXT.nav.events)} | Apex Editorial</title>
        <meta name="description" content="Upcoming UFC and MMA events schedule with dates and locations." />
      </Helmet>

      <div className="container" style={{ paddingTop: '40px' }}>
        <h1 style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '2rem',
          fontWeight: 900,
          textTransform: 'uppercase',
          marginBottom: '40px',
        }}>
          {t(UI_TEXT.nav.events)}
        </h1>

        <div style={{ maxWidth: '600px' }}>
          {rankings.upcomingEvents.map((event) => (
            <EventCard key={event.id || event.name} event={event} />
          ))}
        </div>
      </div>
    </>
  );
}
