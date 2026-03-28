import { useLanguage, UI_TEXT } from '../../hooks/useLanguage';

export default function RankingsList({ rankings, limit = 5 }) {
  const { t } = useLanguage();
  const items = rankings.slice(0, limit);

  return (
    <div>
      <h3 className="section-title">{t(UI_TEXT.home.p4pTop)} {limit}</h3>
      <div style={{ borderTop: '1px solid var(--border)' }}>
        {items.map((item) => (
          <div key={item.rank} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '14px 0',
            borderBottom: '1px solid var(--border)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: 'var(--text-muted)',
                width: '24px',
              }}>
                {String(item.rank).padStart(2, '0')}
              </span>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.03em',
              }}>
                {item.fighter}
              </span>
            </div>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: item.change > 0 ? 'var(--accent-green-light)' : item.change < 0 ? 'var(--accent-red-light)' : 'var(--text-muted)',
            }}>
              {item.change > 0 ? `▲ ${item.change}` : item.change < 0 ? `▼ ${Math.abs(item.change)}` : '–'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
