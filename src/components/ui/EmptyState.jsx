export default function EmptyState({ icon, title, description, action }) {
  return (
    <div style={{
      textAlign: 'center',
      padding: '60px 20px',
      color: 'var(--text-muted)',
    }}>
      {icon && <div style={{ fontSize: '2rem', marginBottom: '16px' }}>{icon}</div>}
      <h3 style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '1rem',
        color: 'var(--text-secondary)',
        marginBottom: '8px',
      }}>{title}</h3>
      {description && <p style={{ fontSize: '0.9rem', marginBottom: '20px' }}>{description}</p>}
      {action}
    </div>
  );
}