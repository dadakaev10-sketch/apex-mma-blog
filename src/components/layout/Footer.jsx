import { Link } from 'react-router-dom';
import { useLanguage, UI_TEXT } from '../../hooks/useLanguage';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '40px 0',
      marginTop: '80px',
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '24px',
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              fontSize: '0.85rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '8px',
            }}>
              <span style={{ color: 'var(--accent-gold)' }}>⚡</span> Apex Editorial
            </div>
            <p style={{
              fontSize: '0.8rem',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-mono)',
            }}>
              {t(UI_TEXT.footer.tagline)}
            </p>
          </div>

          <div style={{
            display: 'flex',
            gap: '24px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
          }}>
            <Link to="/datenschutz" style={{ transition: 'var(--transition)' }}>
              {t(UI_TEXT.footer.privacy)}
            </Link>
            <span>|</span>
            <Link to="/impressum" style={{ transition: 'var(--transition)' }}>
              {t(UI_TEXT.footer.imprint)}
            </Link>
            <span>|</span>
            <Link to="/agb" style={{ transition: 'var(--transition)' }}>
              {t(UI_TEXT.footer.terms)}
            </Link>
          </div>
        </div>

        <div style={{
          marginTop: '24px',
          paddingTop: '24px',
          borderTop: '1px solid var(--border)',
          fontSize: '0.7rem',
          color: 'var(--text-muted)',
          fontFamily: 'var(--font-mono)',
          textAlign: 'center',
        }}>
          © {year} Apex Editorial. All rights reserved. Not affiliated with the UFC or any MMA organization.
        </div>
      </div>
    </footer>
  );
}
