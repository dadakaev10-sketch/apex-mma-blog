import { Helmet } from 'react-helmet-async';
import { useLanguage, UI_TEXT } from '../hooks/useLanguage';
import PageLayout from '../components/layout/PageLayout';

export default function AGBPage() {
  const { t, language } = useLanguage();

  const content = {
    en: (
      <>
        <h1 style={{ fontFamily: 'var(--font-mono)', fontSize: '1.8rem', marginBottom: '32px', textTransform: 'uppercase' }}>
          Terms and Conditions (AGB)
        </h1>
        <p style={{ background: 'rgba(212, 168, 51, 0.1)', border: '1px solid var(--accent-gold)', borderRadius: 'var(--radius-md)', padding: '16px', marginBottom: '24px', fontSize: '0.9rem', color: 'var(--accent-gold)' }}>
          Last updated: March 2026. These Terms and Conditions are governed by Austrian law.
        </p>

        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.95rem' }}>
          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>1. Service Description</h2>
          <p>Apex Editorial is a private, non-commercial website providing informational content about MMA, UFC, fighters, and related topics. The service is provided free of charge and is maintained on a best-effort basis. No service level agreement (SLA) is provided.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>2. Access and Registration</h2>
          <p>Access to this website is available to all users. No registration is required to view the content. If future registration features are added, users must be at least 16 years old to create an account. By accessing this website, you confirm that you meet this age requirement.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>3. Nature of the Service</h2>
          <p>This is a free, informational service. The operator retains the right to:</p>
          <ul style={{ marginLeft: '20px', marginTop: '12px', marginBottom: '12px' }}>
            <li>Modify or update content at any time without prior notice</li>
            <li>Suspend or discontinue the service with 30 days' written notice to users who have provided contact information</li>
            <li>Change these Terms and Conditions at any time by updating this page</li>
          </ul>
          <p>Continued use of the website constitutes acceptance of any changes to these terms.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>4. Availability and No SLA</h2>
          <p>This website is provided on an "as is" basis. We make no guarantees regarding availability, uptime, or accessibility. The service may be interrupted for maintenance, updates, or other reasons without notice. No service level agreement (SLA) is provided, and we assume no liability for service interruptions.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>5. User Obligations</h2>
          <p>When using this website, you agree to:</p>
          <ul style={{ marginLeft: '20px', marginTop: '12px', marginBottom: '12px' }}>
            <li>Not attempt to gain unauthorized access to the website or its systems</li>
            <li>Not upload, post, or transmit viruses, malware, or other harmful code</li>
            <li>Not engage in harassment, abuse, or disruptive behavior</li>
            <li>Not spam or post repetitive content</li>
            <li>Not attempt to reverse-engineer, decompile, or extract source code</li>
            <li>Respect intellectual property rights and not reproduce content without permission</li>
          </ul>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>6. No Professional Advice</h2>
          <p>All content on this website is provided for informational and entertainment purposes only. Nothing on this website constitutes professional advice, including but not limited to:</p>
          <ul style={{ marginLeft: '20px', marginTop: '12px', marginBottom: '12px' }}>
            <li>Medical, health, or fitness advice</li>
            <li>Legal or financial advice</li>
            <li>Professional athletic or training guidance</li>
            <li>Any form of professional consultation or recommendation</li>
          </ul>
          <p>Do not rely on website content for professional decision-making. Always consult qualified professionals before taking action based on information found here.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>7. Intellectual Property</h2>
          <p>All content on this website, including text, graphics, logos, images, and software, is the property of Apex Editorial or its content providers and is protected by Austrian copyright law. You may view and print content for personal, non-commercial use only. Reproduction, distribution, or modification of content without explicit written permission is prohibited.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>8. Third-Party Content and Links</h2>
          <p>This website may contain links to external websites. We are not responsible for the content, accuracy, or policies of external websites. Your use of external websites is governed by their own terms and conditions. We do not endorse any external websites or their content.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>9. Limitation of Liability</h2>
          <p>To the fullest extent permitted by Austrian law, Apex Editorial and its operator assume no liability for:</p>
          <ul style={{ marginLeft: '20px', marginTop: '12px', marginBottom: '12px' }}>
            <li>Any direct, indirect, incidental, special, or consequential damages arising from website use</li>
            <li>Loss of data, profits, or business interruption</li>
            <li>Inaccuracies or errors in website content</li>
            <li>Unauthorized access or alteration of transmissions or data</li>
            <li>Third-party conduct or content</li>
          </ul>
          <p>This limitation applies even if we have been advised of the possibility of such damages.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>10. Accuracy of Information</h2>
          <p>While we strive to provide accurate information, we make no warranty regarding the accuracy, completeness, or timeliness of website content. Information may be outdated or contain errors. You use all information at your own risk.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>11. Termination and Suspension</h2>
          <p>We reserve the right to refuse service to or terminate accounts of users who violate these Terms and Conditions, engage in illegal activity, or violate the rights of others. Termination may occur without notice or liability.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>12. Modifications to Terms</h2>
          <p>We may modify these Terms and Conditions at any time by updating this page. Modifications are effective immediately upon posting. Your continued use of the website constitutes acceptance of any changes.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>13. Indemnification</h2>
          <p>You agree to indemnify and hold harmless Apex Editorial, its operator, and its service providers from any claims, damages, or costs (including legal fees) arising from your violation of these Terms and Conditions, your use of the website, or your violation of third-party rights.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>14. Jurisdiction and Governing Law</h2>
          <p>These Terms and Conditions are governed by and construed in accordance with the laws of Austria, without regard to its conflict of law provisions. You agree to the exclusive jurisdiction of the courts of Vienna (Wien), Austria. However, this does not prevent either party from seeking equitable relief in any competent jurisdiction.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>15. Entire Agreement</h2>
          <p>These Terms and Conditions, together with the Privacy Policy and other policies posted on this website, constitute the entire agreement between you and Apex Editorial regarding your use of the website and supersede all prior agreements and understandings.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>16. Severability</h2>
          <p>If any provision of these Terms and Conditions is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>17. Contact Information</h2>
          <p>For questions about these Terms and Conditions:</p>
          <p>Email: dadakaev10@gmail.com</p>
        </div>
      </>
    ),
    de: (
      <>
        <h1 style={{ fontFamily: 'var(--font-mono)', fontSize: '1.8rem', marginBottom: '32px', textTransform: 'uppercase' }}>
          Allgemeine Geschäftsbedingungen (AGB)
        </h1>
        <p style={{ background: 'rgba(212, 168, 51, 0.1)', border: '1px solid var(--accent-gold)', borderRadius: 'var(--radius-md)', padding: '16px', marginBottom: '24px', fontSize: '0.9rem', color: 'var(--accent-gold)' }}>
          Zuletzt aktualisiert: März 2026. Diese Allgemeinen Geschäftsbedingungen unterliegen österreichischem Recht.
        </p>

        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.95rem' }}>
          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>1. Leistungsbeschreibung</h2>
          <p>Apex Editorial ist eine private, nicht-kommerzielle Website, die Informationsinhalte über MMA, UFC, Kämpfer und verwandte Themen bereitstellt. Der Service wird kostenlos bereitgestellt und wird nach besten Kräften gepflegt. Es wird keine Vereinbarung zum Leistungsniveau (SLA) bereitgestellt.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>2. Zugang und Registrierung</h2>
          <p>Der Zugriff auf diese Website ist für alle Benutzer verfügbar. Zur Anzeige des Inhalts ist keine Registrierung erforderlich. Wenn zukünftig Registrierungsfunktionen hinzugefügt werden, müssen Benutzer mindestens 16 Jahre alt sein, um ein Konto zu erstellen. Durch den Zugriff auf diese Website bestätigen Sie, dass Sie diese Altersvoraussetzung erfüllen.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>3. Art des Services</h2>
          <p>Dies ist ein kostenloser, informativer Service. Der Betreiber behält sich das Recht vor:</p>
          <ul style={{ marginLeft: '20px', marginTop: '12px', marginBottom: '12px' }}>
            <li>Inhalte jederzeit ohne Vorankündigung zu ändern oder zu aktualisieren</li>
            <li>Den Service mit 30 Tagen schriftlicher Ankündigung an Benutzer, die Kontaktinformationen bereitgestellt haben, auszusetzen oder einzustellen</li>
            <li>Diese Allgemeinen Geschäftsbedingungen jederzeit durch Aktualisierung dieser Seite zu ändern</li>
          </ul>
          <p>Die weitere Nutzung der Website gilt als Akzeptanz aller Änderungen dieser Bedingungen.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>4. Verfügbarkeit und keine SLA</h2>
          <p>Diese Website wird "wie besehen" bereitgestellt. Wir machen keine Garantien bezüglich Verfügbarkeit, Betriebszeit oder Erreichbarkeit. Der Service kann ohne Vorankündigung für Wartung, Updates oder andere Gründe unterbrochen werden. Es wird keine Vereinbarung zum Leistungsniveau (SLA) bereitgestellt, und wir übernehmen keine Haftung für Service-Unterbrechungen.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>5. Benutzerobliegenheiten</h2>
          <p>Bei der Nutzung dieser Website stimmen Sie zu:</p>
          <ul style={{ marginLeft: '20px', marginTop: '12px', marginBottom: '12px' }}>
            <li>Nicht zu versuchen, unbefugten Zugang zur Website oder ihren Systemen zu erhalten</li>
            <li>Keine Viren, Malware oder anderen schädlichen Code hochzuladen, zu posten oder zu übertragen</li>
            <li>Sich nicht an Belästigung, Missbrauch oder störendem Verhalten zu beteiligen</li>
            <li>Nicht zu spammen oder wiederkehrende Inhalte zu posten</li>
            <li>Nicht zu versuchen, das Produkt umzugestalten, zu dekompilieren oder Quellcode zu extrahieren</li>
            <li>Urheberrechte zu respektieren und keine Inhalte ohne Genehmigung zu reproduzieren</li>
          </ul>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>6. Keine professionelle Beratung</h2>
          <p>Alle Inhalte auf dieser Website werden nur zu Informations- und Unterhaltungszwecken bereitgestellt. Nichts auf dieser Website stellt professionelle Beratung dar, einschließlich:</p>
          <ul style={{ marginLeft: '20px', marginTop: '12px', marginBottom: '12px' }}>
            <li>Medizinische, gesundheitliche oder Fitness-Ratschläge</li>
            <li>Rechtliche oder finanzielle Beratung</li>
            <li>Professionelle Athletik- oder Trainingsanleitung</li>
            <li>Jede Form von professioneller Konsultation oder Empfehlung</li>
          </ul>
          <p>Verlassen Sie sich nicht auf Website-Inhalte für professionelle Entscheidungsfindung. Wenden Sie sich immer an qualifizierte Fachleute, bevor Sie auf Grundlage von Informationen auf dieser Website tätig werden.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>7. Geistiges Eigentum</h2>
          <p>Alle Inhalte auf dieser Website, einschließlich Text, Grafiken, Logos, Bilder und Software, sind Eigentum von Apex Editorial oder seinen Inhaltsanbietern und werden durch österreichisches Urheberrecht geschützt. Sie dürfen Inhalte nur zu persönlichem, nicht-kommerziellem Gebrauch anzeigen und drucken. Vervielfältigung, Verbreitung oder Änderung von Inhalten ohne ausdrückliche schriftliche Genehmigung ist verboten.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>8. Inhalte und Links von Drittanbietern</h2>
          <p>Diese Website kann Links zu externen Websites enthalten. Wir sind nicht verantwortlich für die Inhalte, Genauigkeit oder Richtlinien externer Websites. Ihre Nutzung externer Websites unterliegt deren eigenen Bedingungen und Richtlinien. Wir unterstützen keine externen Websites oder deren Inhalte.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>9. Haftungsbeschränkung</h2>
          <p>Im größtmöglichen Umfang, der durch österreichisches Recht zulässig ist, übernimmt Apex Editorial und sein Betreiber keine Haftung für:</p>
          <ul style={{ marginLeft: '20px', marginTop: '12px', marginBottom: '12px' }}>
            <li>Alle direkten, indirekten, zufälligen, besonderen oder Folgeschäden, die sich aus der Nutzung der Website ergeben</li>
            <li>Datenverlust, Gewinnverlust oder Geschäftsunterbrechung</li>
            <li>Ungenauigkeiten oder Fehler in Website-Inhalten</li>
            <li>Unbefugter Zugriff oder Änderung von Übertragungen oder Daten</li>
            <li>Handlungen oder Inhalte von Drittanbietern</li>
          </ul>
          <p>Diese Einschränkung gilt auch wenn wir über die Möglichkeit solcher Schäden informiert wurden.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>10. Genauigkeit von Informationen</h2>
          <p>Während wir uns bemühen, genaue Informationen bereitzustellen, geben wir keine Garantie für die Genauigkeit, Vollständigkeit oder Aktualität von Website-Inhalten. Informationen können veraltet sein oder Fehler enthalten. Sie nutzen alle Informationen auf Ihre eigene Verantwortung.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>11. Beendigung und Aussetzung</h2>
          <p>Wir behalten uns das Recht vor, Benutzer, die gegen diese Allgemeinen Geschäftsbedingungen verstoßen, sich illegaler Aktivitäten beteiligen oder die Rechte anderer verletzen, von der Nutzung auszuschließen oder deren Konten zu beenden. Die Beendigung kann ohne Ankündigung oder Haftung erfolgen.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>12. Änderungen der Bedingungen</h2>
          <p>Wir können diese Allgemeinen Geschäftsbedingungen jederzeit durch Aktualisierung dieser Seite ändern. Änderungen sind sofort nach dem Posten wirksam. Ihre weitere Nutzung der Website gilt als Akzeptanz aller Änderungen.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>13. Entschädigung</h2>
          <p>Sie stimmen zu, Apex Editorial, seinen Betreiber und seine Dienstanbieter von allen Ansprüchen, Schäden oder Kosten (einschließlich Anwaltsgebühren) freizustellen, die sich aus Ihrem Verstoß gegen diese Allgemeinen Geschäftsbedingungen, Ihrer Nutzung der Website oder Ihrem Verstoß gegen Rechte Dritter ergeben.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>14. Gerichtsbarkeit und anwendbares Recht</h2>
          <p>Diese Allgemeinen Geschäftsbedingungen unterliegen und werden nach österreichischem Recht ausgelegt, ohne Rücksicht auf seine Konfliktbestimmungen. Sie stimmen der ausschließlichen Zuständigkeit der Gerichte von Wien (Wien), Österreich zu. Dies verhindert jedoch nicht, dass eine Partei in jeder zuständigen Gerichtsbarkeit angemessene Abhilfe sucht.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>15. Gesamte Vereinbarung</h2>
          <p>Diese Allgemeinen Geschäftsbedingungen zusammen mit der Datenschutzerklärung und anderen auf dieser Website veröffentlichten Richtlinien bilden die gesamte Vereinbarung zwischen Ihnen und Apex Editorial bezüglich Ihrer Nutzung der Website und ersetzen alle vorherigen Vereinbarungen und Verständigungen.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>16. Salvatorische Klausel</h2>
          <p>Sollte eine Bestimmung dieser Allgemeinen Geschäftsbedingungen für ungültig oder nicht durchsetzbar befunden werden, bleiben die übrigen Bestimmungen in vollem Umfang gültig und wirksam.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>17. Kontaktinformationen</h2>
          <p>Für Fragen zu diesen Allgemeinen Geschäftsbedingungen:</p>
          <p>E-Mail: dadakaev10@gmail.com</p>
        </div>
      </>
    ),
    ru: (
      <>
        <h1 style={{ fontFamily: 'var(--font-mono)', fontSize: '1.8rem', marginBottom: '32px', textTransform: 'uppercase' }}>
          Условия использования (AGB)
        </h1>
        <p style={{ background: 'rgba(212, 168, 51, 0.1)', border: '1px solid var(--accent-gold)', borderRadius: 'var(--radius-md)', padding: '16px', marginBottom: '24px', fontSize: '0.9rem', color: 'var(--accent-gold)' }}>
          Последнее обновление: март 2026 г. Эти Условия использования регулируются австрийским законодательством.
        </p>

        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.95rem' }}>
          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>1. Описание услуги</h2>
          <p>Apex Editorial - это частный некоммерческий веб-сайт, предоставляющий информационное содержание об ММА, UFC, бойцах и связанных темах. Услуга предоставляется бесплатно и поддерживается на основе лучших усилий. Никакое соглашение об уровне обслуживания (SLA) не предоставляется.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>2. Доступ и регистрация</h2>
          <p>Доступ к этому веб-сайту доступен для всех пользователей. Регистрация не требуется для просмотра содержимого. Если в будущем будут добавлены функции регистрации, пользователи должны быть в возрасте не менее 16 лет, чтобы создать аккаунт. Получая доступ к этому веб-сайту, вы подтверждаете, что соответствуете этому возрастному требованию.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>3. Характер услуги</h2>
          <p>Это бесплатная информационная услуга. Оператор сохраняет право:</p>
          <ul style={{ marginLeft: '20px', marginTop: '12px', marginBottom: '12px' }}>
            <li>Изменять или обновлять содержимое в любое время без предварительного уведомления</li>
            <li>Приостанавливать или прекращать услугу с 30-дневным письменным уведомлением пользователям, которые предоставили контактную информацию</li>
            <li>Изменять эти Условия использования в любое время, обновляя эту страницу</li>
          </ul>
          <p>Продолжение использования веб-сайта считается принятием любых изменений в эти условия.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>4. Доступность и отсутствие SLA</h2>
          <p>Этот веб-сайт предоставляется "как есть". Мы не даём гарантий в отношении доступности, времени работы или доступности. Услуга может быть прервана без уведомления для обслуживания, обновлений или других причин. Никакое соглашение об уровне обслуживания (SLA) не предоставляется, и мы не несём ответственности за перерывы в обслуживании.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>5. Обязательства пользователя</h2>
          <p>При использовании этого веб-сайта вы согласны:</p>
          <ul style={{ marginLeft: '20px', marginTop: '12px', marginBottom: '12px' }}>
            <li>Не пытаться получить несанкционированный доступ к веб-сайту или его системам</li>
            <li>Не загружать, не размещать и не передавать вирусы, вредоносное программное обеспечение или другой вредный код</li>
            <li>Не участвовать в преследовании, оскорблениях или деструктивном поведении</li>
            <li>Не спамить и не размещать повторяющееся содержимое</li>
            <li>Не пытаться реверс-инженировать, декомпилировать или извлекать исходный код</li>
            <li>Уважать права интеллектуальной собственности и не воспроизводить содержимое без разрешения</li>
          </ul>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>6. Никакого профессионального совета</h2>
          <p>Все содержимое на этом веб-сайте предоставляется только в информационных и развлекательных целях. Ничто на этом веб-сайте не является профессиональным советом, включая:</p>
          <ul style={{ marginLeft: '20px', marginTop: '12px', marginBottom: '12px' }}>
            <li>Медицинские, медицинские или фитнес-советы</li>
            <li>Правовой или финансовый совет</li>
            <li>Профессиональное руководство по спорту или тренировкам</li>
            <li>Любая форма профессиональной консультации или рекомендации</li>
          </ul>
          <p>Не полагайтесь на содержимое веб-сайта для принятия профессиональных решений. Всегда консультируйтесь с квалифицированными специалистами перед тем, как предпринимать действия на основе информации, найденной здесь.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>7. Интеллектуальная собственность</h2>
          <p>Все содержимое на этом веб-сайте, включая текст, графику, логотипы, изображения и программное обеспечение, является собственностью Apex Editorial или его поставщиков содержимого и защищено австрийским законом об авторском праве. Вы можете просматривать и распечатывать содержимое только для личного некоммерческого использования. Воспроизведение, распространение или изменение содержимого без явного письменного разрешения запрещено.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>8. Содержимое и ссылки третьих сторон</h2>
          <p>Этот веб-сайт может содержать ссылки на внешние веб-сайты. Мы не несём ответственности за содержимое, точность или политику внешних веб-сайтов. Ваше использование внешних веб-сайтов регулируется их собственными условиями и положениями. Мы не одобряем внешние веб-сайты или их содержимое.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>9. Ограничение ответственности</h2>
          <p>В полной мере, разрешённой австрийским законом, Apex Editorial и его оператор не несут ответственности за:</p>
          <ul style={{ marginLeft: '20px', marginTop: '12px', marginBottom: '12px' }}>
            <li>Любые прямые, косвенные, случайные, специальные или косвенные убытки, возникающие в результате использования веб-сайта</li>
            <li>Потерю данных, прибыли или перерывов в деятельности</li>
            <li>Неточности или ошибки в содержимом веб-сайта</li>
            <li>Несанкционированный доступ или изменение передачи или данных</li>
            <li>Поведение или содержимое третьих сторон</li>
          </ul>
          <p>Это ограничение применяется даже если мы были уведомлены о возможности таких убытков.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>10. Точность информации</h2>
          <p>Хотя мы стремимся предоставить точную информацию, мы не даём никаких гарантий в отношении точности, полноты или своевременности содержимого веб-сайта. Информация может быть устаревшей или содержать ошибки. Вы используете всю информацию на свой собственный риск.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>11. Прекращение и приостановка</h2>
          <p>Мы сохраняем право отказать в обслуживании или прекратить аккаунты пользователей, которые нарушают эти Условия использования, занимаются незаконной деятельностью или нарушают права других. Прекращение может произойти без уведомления или ответственности.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>12. Изменения условий</h2>
          <p>Мы можем изменить эти Условия использования в любое время, обновив эту страницу. Изменения вступают в силу немедленно после размещения. Ваше продолжение использования веб-сайта считается принятием любых изменений.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>13. Возмещение убытков</h2>
          <p>Вы соглашаетесь возмещать и оберегать Apex Editorial, его оператора и его поставщиков услуг от любых претензий, убытков или затрат (включая судебные издержки), возникающих в результате вашего нарушения этих Условий использования, вашего использования веб-сайта или вашего нарушения прав третьих сторон.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>14. Юрисдикция и применимое право</h2>
          <p>Эти Условия использования регулируются и толкуются в соответствии с законодательством Австрии, без учёта его положений о коллизии законов. Вы согласны с исключительной юрисдикцией судов Вены (Wien), Австрия. Однако это не препятствует ни одной стороне добиваться справедливого судебного решения в любой компетентной юрисдикции.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>15. Полное соглашение</h2>
          <p>Эти Условия использования вместе с Политикой конфиденциальности и другими политиками, размещённые на этом веб-сайте, составляют полное соглашение между вами и Apex Editorial в отношении вашего использования веб-сайта и заменяют все предыдущие соглашения и договорённости.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>16. Спасительная оговорка</h2>
          <p>Если какое-либо положение этих Условий использования признано недействительным или неприменимым, остальные положения остаются в полной силе и действии.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>17. Контактная информация</h2>
          <p>По вопросам, касающимся этих Условий использования:</p>
          <p>Электронная почта: dadakaev10@gmail.com</p>
        </div>
      </>
    ),
  };

  return (
    <>
      <Helmet>
        <title>{t(UI_TEXT.legal.agbTitle)} | Apex Editorial</title>
      </Helmet>
      <PageLayout backLink="/" backLabel={t(UI_TEXT.article.backToNews)}>
        {content[language] || content.en}
      </PageLayout>
    </>
  );
}
