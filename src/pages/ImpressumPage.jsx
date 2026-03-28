import { Helmet } from 'react-helmet-async';
import { useLanguage, UI_TEXT } from '../hooks/useLanguage';
import PageLayout from '../components/layout/PageLayout';

export default function ImpressumPage() {
  const { t, language } = useLanguage();

  const content = {
    en: (
      <>
        <h1 style={{ fontFamily: 'var(--font-mono)', fontSize: '1.8rem', marginBottom: '32px', textTransform: 'uppercase' }}>
          Legal Notice (Impressum)
        </h1>
        <p style={{ background: 'rgba(212, 168, 51, 0.1)', border: '1px solid var(--accent-gold)', borderRadius: 'var(--radius-md)', padding: '16px', marginBottom: '24px', fontSize: '0.9rem', color: 'var(--accent-gold)' }}>
          This is a private, non-commercial project. No commercial activity is conducted.
        </p>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.95rem' }}>
          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>Information pursuant to Section 5 ECG (Austrian E-Commerce Act)</h2>
          <p>Operator: Achmed Dadakaev<br/>Email: dadakaev10@gmail.com<br/>Country: Austria</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>Hosting Provider</h2>
          <p>Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>Disclaimer</h2>
          <p>Despite careful content control, we assume no liability for the content of external links. The operators of the linked pages are solely responsible for their content. All content on this website is for informational purposes only and does not constitute professional advice.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>Copyright</h2>
          <p>The content and works created on these pages are subject to Austrian copyright law. The reproduction, processing, distribution, and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>Online Dispute Resolution</h2>
          <p>The European Commission provides a platform for online dispute resolution (ODR): <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-gold)' }}>https://ec.europa.eu/consumers/odr</a></p>
        </div>
      </>
    ),
    de: (
      <>
        <h1 style={{ fontFamily: 'var(--font-mono)', fontSize: '1.8rem', marginBottom: '32px', textTransform: 'uppercase' }}>
          Impressum
        </h1>
        <p style={{ background: 'rgba(212, 168, 51, 0.1)', border: '1px solid var(--accent-gold)', borderRadius: 'var(--radius-md)', padding: '16px', marginBottom: '24px', fontSize: '0.9rem', color: 'var(--accent-gold)' }}>
          Dies ist ein privates, nicht-kommerzielles Projekt. Es wird keine gewerbliche Tätigkeit ausgeübt.
        </p>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.95rem' }}>
          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>Angaben gemäß Section 5 ECG (E-Commerce-Gesetz)</h2>
          <p>Betreiber: Achmed Dadakaev<br/>E-Mail: dadakaev10@gmail.com<br/>Land: Österreich</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>Hosting-Anbieter</h2>
          <p>Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>Haftungsausschluss</h2>
          <p>Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich. Alle Inhalte dieser Website dienen ausschließlich der Information und stellen keine professionelle Beratung dar.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>Urheberrecht</h2>
          <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>Online-Streitbeilegung</h2>
          <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-gold)' }}>https://ec.europa.eu/consumers/odr</a></p>
        </div>
      </>
    ),
    ru: (
      <>
        <h1 style={{ fontFamily: 'var(--font-mono)', fontSize: '1.8rem', marginBottom: '32px', textTransform: 'uppercase' }}>
          Юридическое уведомление (Impressum)
        </h1>
        <p style={{ background: 'rgba(212, 168, 51, 0.1)', border: '1px solid var(--accent-gold)', borderRadius: 'var(--radius-md)', padding: '16px', marginBottom: '24px', fontSize: '0.9rem', color: 'var(--accent-gold)' }}>
          Это частный некоммерческий проект. Коммерческая деятельность не осуществляется.
        </p>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.95rem' }}>
          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>Информация согласно Section 5 ECG (Закон об электронной коммерции Австрии)</h2>
          <p>Оператор: Ахмед Дадакаев<br/>Эл. почта: dadakaev10@gmail.com<br/>Страна: Австрия</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>Хостинг-провайдер</h2>
          <p>Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>Отказ от ответственности</h2>
          <p>Несмотря на тщательный контроль содержания, мы не несём ответственности за содержание внешних ссылок. За содержание связанных страниц несут ответственность исключительно их операторы. Всё содержание данного сайта носит исключительно информационный характер и не является профессиональной консультацией.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>Авторское право</h2>
          <p>Содержание и произведения, созданные на этих страницах, защищены австрийским законом об авторском праве. Воспроизведение, обработка, распространение и любая форма использования за пределами авторского права требуют письменного согласия соответствующего автора или создателя.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>Онлайн-разрешение споров</h2>
          <p>Европейская комиссия предоставляет платформу для онлайн-разрешения споров: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-gold)' }}>https://ec.europa.eu/consumers/odr</a></p>
        </div>
      </>
    ),
  };

  return (
    <>
      <Helmet>
        <title>{t(UI_TEXT.legal.impressumTitle)} | Apex Editorial</title>
      </Helmet>
      <PageLayout backLink="/" backLabel={t(UI_TEXT.article.backToNews)}>
        {content[language] || content.en}
      </PageLayout>
    </>
  );
}
