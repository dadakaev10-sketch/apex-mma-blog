import { Link } from 'react-router-dom';

export default function PageLayout({ children, backLink = '/', backLabel = '← Back' }) {
  return (
    <div className="container" style={{ maxWidth: '800px', padding: '40px 24px' }}>
      <Link to={backLink} style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.75rem',
        color: 'var(--text-muted)',
        letterSpacing: '0.05em',
        marginBottom: '32px',
        display: 'inline-block',
        transition: 'var(--transition)',
      }}>
        {backLabel}
      </Link>
      {children}
    </div>
  );
}
