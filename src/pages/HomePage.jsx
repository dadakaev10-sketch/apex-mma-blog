import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage, UI_TEXT } from '../hooks/useLanguage';
import ArticleCard from '../components/shared/ArticleCard';
import RankingsList from '../components/shared/RankingsList';
import EventCard from '../components/shared/EventCard';
import articles from '../data/articles';
import rankings from '../data/rankings';
import fighters from '../data/fighters';

export default function HomePage() {
  const { t, language } = useLanguage();
  const [showAll, setShowAll] = useState(false);

  const sortedArticles = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date));
  const featuredFighter = fighters.find(f => f.name === 'Ilia Topuria') || fighters[0];
  const displayArticles = showAll ? sortedArticles : sortedArticles.slice(0, 8);

  return (
    <div>
      {/* Hero Section - Featured Fighter */}
      <section style={{
        position: 'relative',
        height: '70vh',
        minHeight: '500px',
        maxHeight: '700px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-end',
        background: 'linear-gradient(135deg, #0a0f0d 0%, #1a2f20 50%, #0a0f0d 100%)',
      }}>
        {/* Background text effect */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: 'var(--font-mono)',
          fontSize: 'clamp(8rem, 20vw, 16rem)',
          fontWeight: 900,
          textTransform: 'uppercase',
          color: 'transparent',
          WebkitTextStroke: '2px rgba(45, 90, 61, 0.3)',
          letterSpacing: '-0.05em',
          whiteSpace: 'nowrap',
          userSelect: 'none',
          pointerEvents: 'none',
        }}>
          CHAMPION
        </div>

        {/* Gradient overlay */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '60%',
          background: 'linear-gradient(to top, var(--bg-primary), transparent)',
          zIndex: 1,
        }} />

        {/* Fighter Info */}
        <div className="container" style={{
          position: 'relative',
          zIndex: 2,
          paddingBottom: '40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          width: '100%',
        }}>
          <div>
            <h1 style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              marginBottom: '8px',
            }}>
              {featuredFighter.name}
            </h1>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              <span className="red-dot" />
              Featherweight Title Defense / Q3
            </div>
          </div>

          <div style={{
            textAlign: 'right',
            fontFamily: 'var(--font-mono)',
          }}>
            <div style={{ marginBottom: '12px' }}>
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block' }}>
                {t(UI_TEXT.home.record)}
              </span>
              <span style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--accent-gold)' }}>
                {featuredFighter.record}
              </span>
            </div>
            <div style={{ marginBottom: '12px' }}>
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block' }}>
                {t(UI_TEXT.home.reach)}
              </span>
              <span style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--accent-gold)' }}>
                {featuredFighter.reach}
              </span>
            </div>
            <div>
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block' }}>
                {t(UI_TEXT.home.stance)}
              </span>
              <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-gold)', fontStyle: 'italic' }}>
                {featuredFighter.stance}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container" style={{ paddingTop: '60px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 360px',
          gap: '60px',
        }}>
          {/* Articles */}
          <div>
            <h2 className="section-title">{t(UI_TEXT.home.latestIntel)}</h2>
            <div>
              {displayArticles.map((article) => (
                <ArticleCard key={article.id} article={article} variant="featured" />
              ))}
            </div>
            {!showAll && sortedArticles.length > 8 && (
              <button
                onClick={() => setShowAll(true)}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-gold)',
                  background: 'transparent',
                  border: '1px solid var(--accent-gold)',
                  padding: '12px 24px',
                  borderRadius: 'var(--radius-sm)',
                  cursor: 'pointer',
                  width: '100%',
                  marginTop: '24px',
                  transition: 'var(--transition)',
                }}
              >
                {t(UI_TEXT.home.allArticles)} →
              </button>
            )}
          </div>

          {/* Sidebar */}
          <aside>
            <RankingsList rankings={rankings.p4p} limit={5} />

            <div style={{ marginTop: '40px' }}>
              <h3 className="section-title">{t(UI_TEXT.home.upcomingFixtures)}</h3>
              {rankings.upcomingEvents.map((event) => (
                <EventCard key={event.id || event.name} event={event} />
              ))}
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
