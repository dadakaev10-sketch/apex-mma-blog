import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage, UI_TEXT } from '../hooks/useLanguage';
import FighterCard from '../components/shared/FighterCard';
import fighters from '../data/fighters';

export default function FightersPage() {
  const { t } = useLanguage();
  const [selectedDivision, setSelectedDivision] = useState('all');

  const divisions = ['all', ...new Set(fighters.map(f => f.division))];
  const filtered = selectedDivision === 'all'
    ? fighters
    : fighters.filter(f => f.division === selectedDivision);

  return (
    <>
      <Helmet>
        <title>{t(UI_TEXT.fighters.title)} | Apex Editorial</title>
        <meta name="description" content="Complete UFC fighter profiles with records, stats, and division information." />
      </Helmet>

      <div className="container" style={{ paddingTop: '40px' }}>
        <h1 style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '2rem',
          fontWeight: 900,
          textTransform: 'uppercase',
          marginBottom: '32px',
        }}>
          {t(UI_TEXT.fighters.title)}
        </h1>

        {/* Division Filter */}
        <div style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '32px',
          flexWrap: 'wrap',
        }}>
          {divisions.map(div => (
            <button
              key={div}
              onClick={() => setSelectedDivision(div)}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '8px 16px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid',
                borderColor: selectedDivision === div ? 'var(--accent-gold)' : 'var(--border)',
                background: selectedDivision === div ? 'rgba(212, 168, 51, 0.1)' : 'transparent',
                color: selectedDivision === div ? 'var(--accent-gold)' : 'var(--text-muted)',
                cursor: 'pointer',
                transition: 'var(--transition)',
              }}
            >
              {div === 'all' ? t(UI_TEXT.fighters.allDivisions) : div}
            </button>
          ))}
        </div>

        {/* Fighter Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '20px',
        }}>
          {filtered.map(fighter => (
            <FighterCard key={fighter.id} fighter={fighter} />
          ))}
        </div>
      </div>
    </>
  );
}
