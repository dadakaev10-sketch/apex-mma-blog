import { Link } from 'react-router-dom';

const variants = {
  primary: {
    background: 'var(--accent-gold)',
    color: '#0a0f0d',
    border: 'none',
  },
  secondary: {
    background: 'transparent',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-light)',
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-secondary)',
    border: 'none',
  },
  danger: {
    background: 'var(--accent-red)',
    color: '#fff',
    border: 'none',
  },
};

const sizes = {
  sm: { padding: '6px 12px', fontSize: '0.75rem' },
  md: { padding: '10px 20px', fontSize: '0.85rem' },
  lg: { padding: '14px 28px', fontSize: '1rem' },
};

export default function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  onClick,
  to,
  children,
  className = '',
  style: customStyle = {},
}) {
  const baseStyle = {
    fontFamily: 'var(--font-mono)',
    fontWeight: 600,
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    borderRadius: 'var(--radius-sm)',
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    transition: 'var(--transition)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    opacity: disabled ? 0.5 : 1,
    textDecoration: 'none',
    ...variants[variant],
    ...sizes[size],
    ...customStyle,
  };

  if (to) {
    return (
      <Link to={to} style={baseStyle} className={className}>
        {loading && <span className="spinner" />}
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      style={baseStyle}
      className={className}
    >
      {loading && <span className="spinner" />}
      {children}
    </button>
  );
}