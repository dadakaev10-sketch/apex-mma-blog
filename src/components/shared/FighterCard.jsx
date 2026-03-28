import { useLanguage, UI_TEXT } from '../../hooks/useLanguage';
import Badge from '../ui/Badge';

export default function FighterCard({ fighter }) {
  const { t } = useLanguage();

  return (
    <div style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      transition: 'var(--transition)',
      cursor: 'pointer',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = 'var(--border-light)';
      e.currentTarget.style.transform = 'translateY(-2px)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = 'var(--border)';
      e.currentTarget.style.transform = 'translateY(0)';
    }}
    >
      <div style={{
        height: '200px',
        background: 'linear-gradient(135deg, var(--bg-secondary), var(--accent-green))',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <img
          src={fighter.image}
          alt={fighter.name}
          loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }}
        />
        <div style={{
          position: 'absolute',
          bottom: '12px',
          right: '12px',
        }}>
          <Badge color={fighter.rank === 'C' ? 'yellow' : fighter.rank === 'Retired' ? 'red' : 'green'}>
            {fighter.rank === 'C' ? 'Champion' : fighter.rank}
          </Badge>
        </div>
      </div>

      <div style={{ padding: '16px' }}>
        <h3 style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.95rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          marginBottom: '4px',
        }}>
          {fighter.name}
        </h3>
        {fighter.nickname && (
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: 'var(--accent-gold)',
            marginBottom: '12px',
            letterSpacing: '0.05em',
          }}>
            "{fighter.nickname}"
          </div>
        )}

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '8px',
          fontSize: '0.7rem',
          fontFamily: 'var(--font-mono)',
          color: 'var(--text-muted)',
        }}>
          <div>
            <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '2px' }}>
              {t(UI_TEXT.home.record)}
            </span>
            <span style={{ color: 'var(--accent-gold)', fontWeight: 700, fontSize: '1rem' }}>
              {fighter.record}
            </span>
          </div>
          <div>
            <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '2px' }}>
              {t(UI_TEXT.fighters.division)}
            </span>
            <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
              {fighter.division}
            </span>
          </div>
          <div>
            <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '2px' }}>
              {t(UI_TEXT.home.reach)}
            </span>
            <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
              {fighter.reach}
            </span>
          </div>
          <div>
            <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '2px' }}>
              {t(UI_TEXT.home.stance)}
            </span>
            <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
              {fighter.stance}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
