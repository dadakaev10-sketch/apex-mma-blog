import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useLanguage, UI_TEXT } from '../hooks/useLanguage';
import ArticleCard from '../components/shared/ArticleCard';
import Badge from '../components/ui/Badge';
import articles from '../data/articles';

const categoryColors = {
  EVENT_RECAP: 'green',
  BREAKING: 'red',
  DEEP_DIVE: 'yellow',
  PREVIEW: 'gray',
  SYS_UPDATE: 'gray',
};

export default function ArticlePage() {
  const { slug } = useParams();
  const { t, language } = useLanguage();

  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return (
      <div className="container" style={{ padding: '80px 24px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-mono)', fontSize: '2rem', marginBottom: '16px' }}>
          404
        </h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>Article not found</p>
        <Link to="/" style={{ color: 'var(--accent-gold)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
          {t(UI_TEXT.article.backToNews)}
        </Link>
      </div>
    );
  }

  const relatedArticles = articles
    .filter(a => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  const contentText = t(article.content) || '';
  const paragraphs = contentText.split('\n').filter(p => p.trim());

  return (
    <>
      <Helmet>
        <title>{t(article.title)} | Apex Editorial</title>
        <meta name="description" content={t(article.excerpt)} />
        <meta property="og:title" content={t(article.title)} />
        <meta property="og:description" content={t(article.excerpt)} />
        <meta property="og:image" content={article.image} />
        <meta property="og:type" content="article" />
        <meta name="article:published_time" content={article.date} />
        <meta name="article:author" content={article.author} />
        <link rel="canonical" href={`https://apex-editorial.vercel.app/article/${article.slug}`} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          "headline": t(article.title),
          "description": t(article.excerpt),
          "image": article.image,
          "datePublished": article.date,
          "author": { "@type": "Person", "name": article.author },
          "publisher": {
            "@type": "Organization",
            "name": "Apex Editorial",
            "logo": { "@type": "ImageObject", "url": "https://apex-editorial.vercel.app/logo.svg" }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://apex-editorial.vercel.app/article/${article.slug}`
          }
        })}</script>
      </Helmet>

      <article>
        {/* Hero Image */}
        <div style={{
          width: '100%',
          height: '400px',
          overflow: 'hidden',
          position: 'relative',
        }}>
          <img
            src={article.image}
            alt={t(article.title)}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '50%',
            background: 'linear-gradient(to top, var(--bg-primary), transparent)',
          }} />
        </div>

        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ marginTop: '-60px', position: 'relative', zIndex: 1 }}>
            {/* Meta */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '16px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}>
              <Badge color={categoryColors[article.category] || 'gray'}>
                {t(UI_TEXT.categories[article.category]) || article.category}
              </Badge>
              <span>{new Date(article.date).toLocaleDateString(language === 'de' ? 'de-AT' : language === 'ru' ? 'ru-RU' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span>•</span>
              <span>{article.readTime} {t(UI_TEXT.article.minRead)}</span>
              <span>•</span>
              <span>{article.author}</span>
            </div>

            {/* Title */}
            <h1 style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
              fontWeight: 900,
              textTransform: 'uppercase',
              lineHeight: 1.2,
              marginBottom: '24px',
              letterSpacing: '-0.02em',
            }}>
              {t(article.title)}
            </h1>

            {/* Excerpt */}
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '40px',
              borderLeft: '3px solid var(--accent-gold)',
              paddingLeft: '20px',
            }}>
              {t(article.excerpt)}
            </p>

            {/* Content */}
            <div className="article-body">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Back Link */}
            <div style={{ marginTop: '60px', paddingTop: '24px', borderTop: '1px solid var(--border)' }}>
              <Link to="/" style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: 'var(--accent-gold)',
                letterSpacing: '0.05em',
              }}>
                {t(UI_TEXT.article.backToNews)}
              </Link>
            </div>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div style={{ marginTop: '60px' }}>
              <h2 className="section-title">{t(UI_TEXT.article.relatedArticles)}</h2>
              {relatedArticles.map(a => (
                <ArticleCard key={a.id} article={a} variant="featured" />
              ))}
            </div>
          )}
        </div>
      </article>
    </>
  );
}
