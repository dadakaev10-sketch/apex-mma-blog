import { Link, useLocation } from 'react-router-dom';
import { useLanguage, UI_TEXT } from '../../hooks/useLanguage';

export default function NavBar() {
  const { language, setLanguage, t, LANGUAGES, LANGUAGE_LABELS } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { to: '/', label: UI_TEXT.nav.news },
    { to: '/fighters', label: UI_TEXT.nav.fighters },
    { to: '/events', label: UI_TEXT.nav.events },
    { to: '/rankings', label: UI_TEXT.nav.rankings },
  ];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(10, 15, 13, 0.95)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '64px',
      }}>
        {/* Logo */}
        <Link to="/" style={{
          fontFamily: 'var(--font-mono)',
          fontWeight: 700,
          fontSize: '0.85rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          border: '1.5px solid var(--text-primary)',
          padding: '6px 14px',
          borderRadius: 'var(--radius-sm)',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          transition: 'var(--transition)',
        }}>
          <span style={{ color: 'var(--accent-gold)', fontSize: '0.9rem' }}>⚡</span>
          Apex Editorial
        </Link>

        {/* Navigation */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px',
        }}>
          {/* Language Selector */}
          <div className="lang-selector">
            {LANGUAGES.map((lang, i) => (
              <span key={lang}>
                {i > 0 && <span className="lang-separator"> / </span>}
                <button
                  className={language === lang ? 'active' : ''}
                  onClick={() => setLanguage(lang)}
                >
                  {LANGUAGE_LABELS[lang]}
                </button>
              </span>
            ))}
          </div>

          {/* Nav Links */}
          <div style={{ display: 'flex', gap: '24px' }}>
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: location.pathname === to ? 'var(--text-primary)' : 'var(--text-muted)',
                  transition: 'var(--transition)',
                }}
              >
                {t(label)}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
