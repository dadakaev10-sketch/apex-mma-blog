export default function Spinner({ size = 24 }) {
  return (
    <div style={{
      width: size,
      height: size,
      border: '2px solid var(--border)',
      borderTopColor: 'var(--accent-gold)',
      borderRadius: '50%',
      animation: 'spin 0.6s linear infinite',
      margin: '0 auto',
    }}>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}