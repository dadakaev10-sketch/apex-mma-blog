import { Helmet } from 'react-helmet-async';
import { useLanguage, UI_TEXT } from '../hooks/useLanguage';
import PageLayout from '../components/layout/PageLayout';

export default function DatenschutzPage() {
  const { t, language } = useLanguage();

  const content = {
    en: (
      <>
        <h1 style={{ fontFamily: 'var(--font-mono)', fontSize: '1.8rem', marginBottom: '32px', textTransform: 'uppercase' }}>
          Privacy Policy
        </h1>
        <p style={{ background: 'rgba(212, 168, 51, 0.1)', border: '1px solid var(--accent-gold)', borderRadius: 'var(--radius-md)', padding: '16px', marginBottom: '24px', fontSize: '0.9rem', color: 'var(--accent-gold)' }}>
          Last updated: March 2026. This privacy policy complies with GDPR and Austrian data protection law.
        </p>

        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.95rem' }}>
          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>1. Responsible Party (Datenschutzverantwortlicher)</h2>
          <p>Achmed Dadakaev<br/>Email: dadakaev10@gmail.com<br/>Austria</p>
          <p>For inquiries regarding data protection, please contact the responsible party at the email address provided above.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>2. Data Protection Officer</h2>
          <p>This website does not require a data protection officer under Article 37 GDPR due to its non-commercial, informational nature. For data protection inquiries, you may contact the Austrian Data Protection Authority (Österreichische Datenschutzbehörde) at <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-gold)' }}>https://www.dsb.gv.at</a>.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>3. Scope of Data Processing</h2>
          <p>This website is a private, non-commercial project operated for informational purposes. We process the following personal data:</p>
          <ul style={{ marginLeft: '20px', marginTop: '12px', marginBottom: '12px' }}>
            <li>IP addresses (automatically collected via web server logs)</li>
            <li>Access logs (date, time, page visited)</li>
            <li>Browser information (user agent)</li>
          </ul>
          <p>We do NOT intentionally collect or store any additional personal data such as names, email addresses, or other identifying information unless you voluntarily provide it through contact forms.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>4. Legal Basis for Data Processing (Article 6 GDPR)</h2>
          <p>The processing of technical data (IP addresses, access logs) is based on:</p>
          <ul style={{ marginLeft: '20px', marginTop: '12px', marginBottom: '12px' }}>
            <li><strong>Article 6 (1) f) GDPR:</strong> Legitimate interest in maintaining website security, analyzing website functionality, and detecting misuse</li>
            <li><strong>Article 21 GDPR:</strong> You have the right to object to this processing at any time</li>
          </ul>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>5. Hosting and Third-Party Services</h2>
          <p><strong>Vercel Inc.</strong> (340 S Lemon Ave #4133, Walnut, CA 91789, USA) provides hosting infrastructure for this website. Vercel processes access logs and technical data as a data processor under a data processing agreement. Vercel complies with GDPR requirements including appropriate safeguards for data transfers.</p>
          <p>We do not use cookies or tracking technologies. Only technically necessary server logs are maintained for website functionality and security.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>6. Data Retention</h2>
          <p>Technical access logs (IP addresses, timestamps) are retained for up to 30 days for security and website maintenance purposes, then automatically deleted. No other personal data is stored beyond this period unless you contact us directly.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>7. Your Rights (Articles 15-22 GDPR)</h2>
          <p>You have the following rights regarding your personal data:</p>
          <ul style={{ marginLeft: '20px', marginTop: '12px', marginBottom: '12px' }}>
            <li><strong>Right of Access (Article 15):</strong> You can request information about what personal data we hold about you</li>
            <li><strong>Right to Rectification (Article 16):</strong> You can request correction of inaccurate personal data</li>
            <li><strong>Right to Erasure (Article 17):</strong> You can request deletion of your personal data under certain conditions</li>
            <li><strong>Right to Restrict Processing (Article 18):</strong> You can request limitation of data processing</li>
            <li><strong>Right to Data Portability (Article 20):</strong> You can request your data in a structured, portable format</li>
            <li><strong>Right to Object (Article 21):</strong> You can object to processing of your data on grounds relating to your particular situation</li>
          </ul>
          <p>To exercise any of these rights, contact us at dadakaev10@gmail.com with details of your request.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>8. No Cookies</h2>
          <p>This website does not use cookies, tracking pixels, or similar technologies. No consent is required for browsing this site. Only standard web server logs are generated automatically by the hosting infrastructure.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>9. External Links</h2>
          <p>This website may contain links to external websites. We are not responsible for the privacy practices of external websites. We recommend reviewing their privacy policies before providing personal data to third-party sites.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>10. Security Measures</h2>
          <p>We implement appropriate technical and organizational measures to protect personal data from unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>11. Changes to This Privacy Policy</h2>
          <p>We may update this privacy policy periodically to reflect changes in our practices or legal requirements. The date at the top of this document indicates when it was last updated. Continued use of this website constitutes acceptance of any changes.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>12. Right to Lodge a Complaint</h2>
          <p>If you believe that our processing of your personal data violates GDPR or Austrian data protection law, you have the right to lodge a complaint with the Austrian Data Protection Authority:</p>
          <p><strong>Österreichische Datenschutzbehörde (Austrian Data Protection Authority)</strong><br/>Website: <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-gold)' }}>https://www.dsb.gv.at</a><br/>This is the independent authority responsible for data protection supervision in Austria.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>13. Contact Information</h2>
          <p>For any questions or concerns about this privacy policy or our data processing practices:</p>
          <p>Email: dadakaev10@gmail.com</p>
        </div>
      </>
    ),
    de: (
      <>
        <h1 style={{ fontFamily: 'var(--font-mono)', fontSize: '1.8rem', marginBottom: '32px', textTransform: 'uppercase' }}>
          Datenschutzerklärung
        </h1>
        <p style={{ background: 'rgba(212, 168, 51, 0.1)', border: '1px solid var(--accent-gold)', borderRadius: 'var(--radius-md)', padding: '16px', marginBottom: '24px', fontSize: '0.9rem', color: 'var(--accent-gold)' }}>
          Zuletzt aktualisiert: März 2026. Diese Datenschutzerklärung entspricht der DSGVO und dem österreichischen Datenschutzgesetz.
        </p>

        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.95rem' }}>
          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>1. Verantwortlicher (Datenschutzverantwortlicher)</h2>
          <p>Achmed Dadakaev<br/>E-Mail: dadakaev10@gmail.com<br/>Österreich</p>
          <p>Für Anfragen zum Datenschutz kontaktieren Sie bitte den Verantwortlichen unter der oben angegebenen E-Mail-Adresse.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>2. Datenschutzbeauftragter</h2>
          <p>Diese Website benötigt keinen Datenschutzbeauftragten nach Artikel 37 DSGVO aufgrund ihrer privaten, nicht-kommerziellen Natur. Für Datenschutzfragen können Sie sich an die österreichische Datenschutzbehörde (dsb.gv.at) unter <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-gold)' }}>https://www.dsb.gv.at</a> wenden.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>3. Umfang der Datenverarbeitung</h2>
          <p>Diese Website ist ein privates, nicht-kommerzielles Projekt, das zu Informationszwecken betrieben wird. Wir verarbeiten die folgenden personenbezogenen Daten:</p>
          <ul style={{ marginLeft: '20px', marginTop: '12px', marginBottom: '12px' }}>
            <li>IP-Adressen (automatisch über Webserver-Logs erfasst)</li>
            <li>Zugriffslogs (Datum, Uhrzeit, besuchte Seite)</li>
            <li>Browser-Informationen (User Agent)</li>
          </ul>
          <p>Wir erfassen und speichern nicht absichtlich weitere personenbezogene Daten wie Namen, E-Mail-Adressen oder andere identifizierende Informationen, es sei denn, Sie stellen diese freiwillig über Kontaktformulare bereit.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>4. Rechtsgrundlagen der Datenverarbeitung (Artikel 6 DSGVO)</h2>
          <p>Die Verarbeitung technischer Daten (IP-Adressen, Zugriffslogs) basiert auf:</p>
          <ul style={{ marginLeft: '20px', marginTop: '12px', marginBottom: '12px' }}>
            <li><strong>Artikel 6 Absatz 1 Buchstabe f) DSGVO:</strong> Berechtigtes Interesse an der Aufrechterhaltung der Website-Sicherheit, Analyse der Website-Funktionalität und Erkennung von Missbrauch</li>
            <li><strong>Artikel 21 DSGVO:</strong> Sie haben jederzeit das Recht, dieser Verarbeitung Widerspruch einzulegen</li>
          </ul>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>5. Hosting und Drittanbieter-Services</h2>
          <p><strong>Vercel Inc.</strong> (340 S Lemon Ave #4133, Walnut, CA 91789, USA) stellt die Hosting-Infrastruktur für diese Website bereit. Vercel verarbeitet Zugriffslogs und technische Daten als Auftragsverarbeiter gemäß einer Datenverarbeitungsvereinbarung. Vercel erfüllt die DSGVO-Anforderungen einschließlich angemessener Schutzmaßnahmen für Datentransfers.</p>
          <p>Wir verwenden keine Cookies oder Tracking-Technologien. Nur technisch notwendige Server-Logs werden zur Funktionalität und Sicherheit der Website gespeichert.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>6. Datenspeicherung</h2>
          <p>Technische Zugriffslogs (IP-Adressen, Zeitstempel) werden für bis zu 30 Tage für Sicherheits- und Website-Wartungszwecke aufbewahrt und dann automatisch gelöscht. Keine anderen personenbezogenen Daten werden über diesen Zeitraum hinaus gespeichert, es sei denn, Sie kontaktieren uns direkt.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>7. Ihre Rechte (Artikel 15-22 DSGVO)</h2>
          <p>Sie haben die folgenden Rechte bezüglich Ihrer personenbezogenen Daten:</p>
          <ul style={{ marginLeft: '20px', marginTop: '12px', marginBottom: '12px' }}>
            <li><strong>Auskunftsrecht (Artikel 15):</strong> Sie können anfragen, welche personenbezogenen Daten wir über Sie speichern</li>
            <li><strong>Recht auf Berichtigung (Artikel 16):</strong> Sie können die Korrektur ungültiger personenbezogener Daten anfordern</li>
            <li><strong>Recht auf Löschung (Artikel 17):</strong> Sie können unter bestimmten Bedingungen die Löschung Ihrer personenbezogenen Daten anfordern</li>
            <li><strong>Recht auf Einschränkung der Verarbeitung (Artikel 18):</strong> Sie können eine Einschränkung der Datenverarbeitung anfordern</li>
            <li><strong>Recht auf Datenportabilität (Artikel 20):</strong> Sie können Ihre Daten in strukturierter, transportabler Form anfordern</li>
            <li><strong>Widerspruchsrecht (Artikel 21):</strong> Sie können der Verarbeitung Ihrer Daten aus Gründen, die sich aus Ihrer besonderen Situation ergeben, Widerspruch einlegen</li>
          </ul>
          <p>Um eines dieser Rechte auszuüben, kontaktieren Sie uns unter dadakaev10@gmail.com mit Details Ihres Antrags.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>8. Keine Cookies</h2>
          <p>Diese Website verwendet keine Cookies, Tracking-Pixel oder ähnliche Technologien. Zur Nutzung dieser Website ist keine Zustimmung erforderlich. Nur Standard-Webserver-Logs werden automatisch von der Hosting-Infrastruktur generiert.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>9. Externe Links</h2>
          <p>Diese Website kann Links zu externen Websites enthalten. Wir sind nicht verantwortlich für die Datenschutzpraktiken externer Websites. Wir empfehlen Ihnen, deren Datenschutzrichtlinien zu überprüfen, bevor Sie personenbezogene Daten an Drittanbieter-Websites weitergeben.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>10. Sicherheitsmaßnahmen</h2>
          <p>Wir implementieren angemessene technische und organisatorische Maßnahmen, um personenbezogene Daten vor unbefugtem Zugriff, Änderungen, Offenlegung oder Zerstörung zu schützen. Allerdings ist keine Internet-Übertragung vollständig sicher, und wir können absolute Sicherheit nicht garantieren.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>11. Änderungen dieser Datenschutzerklärung</h2>
          <p>Wir können diese Datenschutzerklärung regelmäßig aktualisieren, um Änderungen unserer Praktiken oder rechtlichen Anforderungen widerzuspiegeln. Das Datum oben in diesem Dokument zeigt, wann es zuletzt aktualisiert wurde. Die weitere Nutzung dieser Website gilt als Akzeptanz etwaiger Änderungen.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>12. Recht auf Beschwerde</h2>
          <p>Wenn Sie glauben, dass unsere Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO oder das österreichische Datenschutzgesetz verstößt, haben Sie das Recht, bei der österreichischen Datenschutzbehörde Beschwerde einzureichen:</p>
          <p><strong>Österreichische Datenschutzbehörde</strong><br/>Website: <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-gold)' }}>https://www.dsb.gv.at</a><br/>Dies ist die unabhängige Behörde, die für die Datenschutzaufsicht in Österreich zuständig ist.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>13. Kontaktinformationen</h2>
          <p>Bei Fragen oder Bedenken zu dieser Datenschutzerklärung oder unseren Datenverarbeitungspraktiken:</p>
          <p>E-Mail: dadakaev10@gmail.com</p>
        </div>
      </>
    ),
    ru: (
      <>
        <h1 style={{ fontFamily: 'var(--font-mono)', fontSize: '1.8rem', marginBottom: '32px', textTransform: 'uppercase' }}>
          Политика конфиденциальности
        </h1>
        <p style={{ background: 'rgba(212, 168, 51, 0.1)', border: '1px solid var(--accent-gold)', borderRadius: 'var(--radius-md)', padding: '16px', marginBottom: '24px', fontSize: '0.9rem', color: 'var(--accent-gold)' }}>
          Последнее обновление: март 2026 г. Эта политика конфиденциальности соответствует GDPR и австрийскому законодательству о защите данных.
        </p>

        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.95rem' }}>
          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>1. Ответственное лицо (Datenschutzverantwortlicher)</h2>
          <p>Ахмед Дадакаев<br/>Электронная почта: dadakaev10@gmail.com<br/>Австрия</p>
          <p>Для вопросов, связанных с защитой данных, обращайтесь к ответственному лицу по приведенному выше адресу электронной почты.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>2. Уполномоченный по защите данных</h2>
          <p>Этот веб-сайт не требует уполномоченного по защите данных согласно статье 37 GDPR из-за его частного, некоммерческого характера. По вопросам защиты данных вы можете обратиться в австрийский орган по защите данных (Österreichische Datenschutzbehörde) на <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-gold)' }}>https://www.dsb.gv.at</a>.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>3. Объем обработки данных</h2>
          <p>Этот веб-сайт является частным, некоммерческим проектом, работающим в информационных целях. Мы обрабатываем следующие личные данные:</p>
          <ul style={{ marginLeft: '20px', marginTop: '12px', marginBottom: '12px' }}>
            <li>IP-адреса (автоматически собираются через журналы веб-сервера)</li>
            <li>Журналы доступа (дата, время, посещённая страница)</li>
            <li>Информация браузера (User Agent)</li>
          </ul>
          <p>Мы не преднамеренно не собираем и не сохраняем никаких дополнительных личных данных, таких как имена, адреса электронной почты или другую идентифицирующую информацию, если вы не предоставляете её добровольно через формы обратной связи.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>4. Правовые основания обработки данных (Статья 6 GDPR)</h2>
          <p>Обработка технических данных (IP-адреса, журналы доступа) основана на:</p>
          <ul style={{ marginLeft: '20px', marginTop: '12px', marginBottom: '12px' }}>
            <li><strong>Статья 6 (1) f) GDPR:</strong> Законный интерес в обеспечении безопасности веб-сайта, анализе функциональности веб-сайта и обнаружении злоупотреблений</li>
            <li><strong>Статья 21 GDPR:</strong> Вы имеете право возражать против этой обработки в любое время</li>
          </ul>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>5. Хостинг и услуги третьих сторон</h2>
          <p><strong>Vercel Inc.</strong> (340 S Lemon Ave #4133, Walnut, CA 91789, USA) предоставляет инфраструктуру хостинга для этого веб-сайта. Vercel обрабатывает журналы доступа и технические данные в качестве обработчика данных в соответствии с соглашением об обработке данных. Vercel соответствует требованиям GDPR, включая надлежащие гарантии для передачи данных.</p>
          <p>Мы не используем cookies или технологии отслеживания. Сохраняются только технически необходимые журналы сервера для функциональности и безопасности веб-сайта.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>6. Сохранение данных</h2>
          <p>Технические журналы доступа (IP-адреса, временные метки) сохраняются на срок до 30 дней в целях безопасности и обслуживания веб-сайта, затем автоматически удаляются. Никакие другие личные данные не сохраняются за пределами этого периода, если вы не свяжитесь с нами напрямую.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>7. Ваши права (Статьи 15-22 GDPR)</h2>
          <p>У вас есть следующие права в отношении ваших личных данных:</p>
          <ul style={{ marginLeft: '20px', marginTop: '12px', marginBottom: '12px' }}>
            <li><strong>Право доступа (Статья 15):</strong> Вы можете запросить информацию о личных данных, которые мы держим о вас</li>
            <li><strong>Право на исправление (Статья 16):</strong> Вы можете запросить исправление неточных личных данных</li>
            <li><strong>Право на стирание (Статья 17):</strong> Вы можете запросить удаление ваших личных данных при определённых условиях</li>
            <li><strong>Право на ограничение обработки (Статья 18):</strong> Вы можете запросить ограничение обработки данных</li>
            <li><strong>Право на переносимость данных (Статья 20):</strong> Вы можете запросить свои данные в структурированном, портативном формате</li>
            <li><strong>Право на возражение (Статья 21):</strong> Вы можете возражать против обработки ваших данных по причинам, связанным с вашей конкретной ситуацией</li>
          </ul>
          <p>Для реализации любого из этих прав свяжитесь с нами по адресу dadakaev10@gmail.com с подробностями вашего запроса.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>8. Отсутствие cookies</h2>
          <p>Этот веб-сайт не использует cookies, пиксели отслеживания или подобные технологии. Согласие не требуется для просмотра этого сайта. Автоматически создаются только стандартные журналы веб-сервера хостинг-инфраструктурой.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>9. Внешние ссылки</h2>
          <p>Этот веб-сайт может содержать ссылки на внешние веб-сайты. Мы не несём ответственность за политику конфиденциальности внешних веб-сайтов. Рекомендуем вам ознакомиться с их политикой конфиденциальности перед предоставлением личных данных сторонним сайтам.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>10. Меры безопасности</h2>
          <p>Мы применяем надлежащие технические и организационные меры для защиты личных данных от несанкционированного доступа, изменения, раскрытия или уничтожения. Однако ни одна передача через Интернет не является полностью безопасной, и мы не можем гарантировать абсолютную безопасность.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>11. Изменения этой политики конфиденциальности</h2>
          <p>Мы можем периодически обновлять эту политику конфиденциальности, чтобы отразить изменения в наших практиках или правовых требованиях. Дата в верхней части этого документа указывает, когда она была последний раз обновлена. Продолжение использования этого веб-сайта считается принятием любых изменений.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>12. Право подать жалобу</h2>
          <p>Если вы считаете, что наша обработка ваших личных данных нарушает GDPR или австрийское законодательство о защите данных, у вас есть право подать жалобу в австрийский орган по защите данных:</p>
          <p><strong>Österreichische Datenschutzbehörde (Австрийский орган по защите данных)</strong><br/>Веб-сайт: <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-gold)' }}>https://www.dsb.gv.at</a><br/>Это независимый орган, ответственный за надзор за защитой данных в Австрии.</p>

          <h2 style={{ fontSize: '1rem', marginTop: '24px', marginBottom: '12px', color: 'var(--text-primary)' }}>13. Контактная информация</h2>
          <p>Если у вас есть вопросы или проблемы, связанные с этой политикой конфиденциальности или нашими практиками обработки данных:</p>
          <p>Электронная почта: dadakaev10@gmail.com</p>
        </div>
      </>
    ),
  };

  return (
    <>
      <Helmet>
        <title>{t(UI_TEXT.legal.datenschutzTitle)} | Apex Editorial</title>
      </Helmet>
      <PageLayout backLink="/" backLabel={t(UI_TEXT.article.backToNews)}>
        {content[language] || content.en}
      </PageLayout>
    </>
  );
}
