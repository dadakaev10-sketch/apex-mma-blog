const colors = {
  green: { bg: 'rgba(45, 90, 61, 0.3)', color: 'var(--accent-green-light)' },
  yellow: { bg: 'rgba(212, 168, 51, 0.2)', color: 'var(--accent-gold)' },
  red: { bg: 'rgba(192, 57, 43, 0.3)', color: 'var(--accent-red-light)' },
  gray: { bg: 'rgba(138, 155, 144, 0.2)', color: 'var(--text-secondary)' },
};

export default function Badge({ color = 'gray', children }) {
  const { bg, color: textColor } = colors[color] || colors.gray;

  return (
    <span style={{
      fontFamily: 'var(--font-mono)',
      fontSize: '0.65rem',
      fontWeight: 500,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      padding: '3px 8px',
      borderRadius: 'var(--radius-sm)',
      background: bg,
      color: textColor,
      display: 'inline-block',
    }}>
      {children}
    </span>
  );
}