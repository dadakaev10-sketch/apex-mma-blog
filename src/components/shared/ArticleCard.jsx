import { Link } from 'react-router-dom';
import { useLanguage, UI_TEXT } from '../../hooks/useLanguage';
import Badge from '../ui/Badge';

const categoryColors = {
  EVENT_RECAP: 'green',
  BREAKING: 'red',
  DEEP_DIVE: 'yellow',
  PREVIEW: 'gray',
  SYS_UPDATE: 'gray',
};

function timeAgo(dateStr, lang) {
  const now = new Date('2026-03-28');
  const date = new Date(dateStr);
  const diff = Math.floor((now - date) / (1000 * 60 * 60));

  if (diff < 24) {
    if (lang === 'de') return `vor ${diff} Stunden`;
    if (lang === 'ru') return `${diff} часов назад`;
    return `${diff} hours ago`;
  }
  const days = Math.floor(diff / 24);
  if (days === 1) {
    if (lang === 'de') return 'vor 1 Tag';
    if (lang === 'ru') return '1 день назад';
    return '1 day ago';
  }
  if (days < 30) {
    if (lang === 'de') return `vor ${days} Tagen`;
    if (lang === 'ru') return `${days} дней назад`;
    return `${days} days ago`;
  }
  const months = Math.floor(days / 30);
  if (lang === 'de') return `vor ${months} Monat${months > 1 ? 'en' : ''}`;
  if (lang === 'ru') return `${months} мес. назад`;
  return `${months} month${months > 1 ? 's' : ''} ago`;
}

export default function ArticleCard({ article, variant = 'default' }) {
  const { t, language } = useLanguage();

  if (variant === 'featured') {
    return (
      <Link to={`/article/${article.slug}`} style={{ textDecoration: 'none' }}>
        <article style={{
          display: 'grid',
          gridTemplateColumns: '240px 1fr',
          gap: '24px',
          padding: '24px 0',
          borderBottom: '1px solid var(--border)',
          transition: 'var(--transition)',
        }}>
          <div style={{
            width: '240px',
            height: '160px',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            background: 'var(--bg-card)',
          }}>
            <img
              src={article.image}
              alt={t(article.title)}
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '8px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}>
              <span>{timeAgo(article.date, language)}</span>
              <Badge color={categoryColors[article.category] || 'gray'}>
                {t(UI_TEXT.categories[article.category]) || article.category}
              </Badge>
            </div>

            <h3 style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '1.1rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              lineHeight: 1.3,
              marginBottom: '8px',
              color: 'var(--text-primary)',
            }}>
              {t(article.title)}
            </h3>

            <p style={{
              fontSize: '0.85rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.5,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}>
              {t(article.excerpt)}
            </p>
          </div>
        </article>
      </Link>
    );
  }

  // Compact variant for sidebar
  return (
    <Link to={`/article/${article.slug}`} style={{ textDecoration: 'none' }}>
      <article style={{
        padding: '12px 0',
        borderBottom: '1px solid var(--border)',
        transition: 'var(--transition)',
      }}>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.65rem',
          color: 'var(--text-muted)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: '4px',
        }}>
          {timeAgo(article.date, language)}
        </div>
        <h4 style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.8rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          lineHeight: 1.3,
          color: 'var(--text-primary)',
        }}>
          {t(article.title)}
        </h4>
      </article>
    </Link>
  );
}
