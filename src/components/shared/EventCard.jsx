export default function EventCard({ event }) {
  return (
    <div style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)',
      padding: '20px',
      marginBottom: '12px',
    }}>
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.7rem',
        color: 'var(--accent-gold)',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        marginBottom: '8px',
      }}>
        {event.date} • 10:00 PM EST
      </div>
      <h4 style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '1rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        marginBottom: '4px',
      }}>
        {event.name}: {event.mainEvent}
      </h4>
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.7rem',
        color: 'var(--text-muted)',
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
      }}>
        {event.location}
      </div>
    </div>
  );
}
