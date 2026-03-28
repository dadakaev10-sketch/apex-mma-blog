export default function Card({ children, padding = 'md', className = '', hover = false, style: customStyle = {} }) {
  const paddings = { sm: '12px', md: '20px', lg: '32px' };

  const style = {
    background: 'var(--bg-card)',
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--border)',
    padding: paddings[padding],
    transition: 'var(--transition)',
    ...(hover && { cursor: 'pointer' }),
    ...customStyle,
  };

  return (
    <div
      className={className}
      style={style}
      onMouseEnter={hover ? (e) => {
        e.currentTarget.style.background = 'var(--bg-card-hover)';
        e.currentTarget.style.borderColor = 'var(--border-light)';
      } : undefined}
      onMouseLeave={hover ? (e) => {
        e.currentTarget.style.background = 'var(--bg-card)';
        e.currentTarget.style.borderColor = 'var(--border)';
      } : undefined}
    >
      {children}
    </div>
  );
}