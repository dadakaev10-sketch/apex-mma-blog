import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './hooks/useLanguage';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import FightersPage from './pages/FightersPage';
import RankingsPage from './pages/RankingsPage';
import EventsPage from './pages/EventsPage';
import ImpressumPage from './pages/ImpressumPage';
import DatenschutzPage from './pages/DatenschutzPage';
import AGBPage from './pages/AGBPage';

export default function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <BrowserRouter>
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <NavBar />
            <main style={{ flex: 1 }}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/article/:slug" element={<ArticlePage />} />
                <Route path="/fighters" element={<FightersPage />} />
                <Route path="/rankings" element={<RankingsPage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/impressum" element={<ImpressumPage />} />
                <Route path="/datenschutz" element={<DatenschutzPage />} />
                <Route path="/agb" element={<AGBPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </LanguageProvider>
    </HelmetProvider>
  );
}
