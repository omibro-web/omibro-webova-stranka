import type { Content } from './types';

export const de: Content = {
  locale: 'de',
  htmlLang: 'de',

  meta: {
    title: 'Omibro s.r.o. | Zulieferdienstleistungen für den Maschinenbau',
    description:
      'Gleitschleifen, Entgraten, chemische Oberflächenvorbehandlung und Polyurethan-Beschichtung (PUR) für den Maschinenbau. Omibro s.r.o., Pilsen, Tschechien.',
    keywords: [
      'Omibro',
      'Omibro s.r.o.',
      'Maschinenbau',
      'Gleitschleifen',
      'Trowalisieren',
      'Entgraten',
      'chemische Vorbehandlung',
      'alkalische Entfettung',
      'Beizen',
      'Passivierung',
      'Oberflächenbehandlung',
      'Polyurethan-Beschichtung',
      'PUR-Beschichtung',
      'Trommelauskleidung',
      'Pilsen',
      'Tschechien',
    ],
  },

  nav: {
    items: [
      { label: 'Unternehmen', href: '#about' },
      { label: 'Leistungen', href: '#services' },
      { label: 'Vorbehandlung', href: '#preduprava' },
      { label: 'Technologie', href: '#technologie' },
      { label: 'Ablauf', href: '#proces' },
      { label: 'Beratung', href: '#konzultace' },
      { label: 'Kontakt', href: '#contact' },
    ],
    cta: 'Anfrage',
    open: 'Menü öffnen',
    close: 'Menü schließen',
    home: 'Omibro s.r.o. — Startseite',
  },

  langSwitch: { label: 'CS', href: '/', aria: 'Česká verze' },

  hero: {
    eyebrow: 'Zulieferdienstleistungen für den Maschinenbau',
    titleLines: ['Gleitschleifen, Vorbehandlung', 'und Polyurethan-', 'Beschichtung'],
    lead: 'Wir bearbeiten Metall- und Kunststoffteile für die maschinenbauliche Fertigung — vom Entgraten über die chemische Oberflächenvorbehandlung bis zur Polyurethan-Beschichtung nach Kundenvorgabe.',
    ctaPrimary: 'Kontakt aufnehmen',
    ctaSecondary: 'Leistungen',
    corner: 'Pilsen · Tschechische Republik',
    imgAlt: 'Präzisionsbearbeitete Bauteile aus dem Maschinenbau',
  },

  industries: {
    eyebrow: 'Branchen, für die wir arbeiten',
    items: ['Maschinenbau', 'Automotive', 'Luft- und Raumfahrt', 'Lebensmittelindustrie', 'Baumaschinen'],
  },

  about: {
    eyebrow: 'Unternehmen',
    titleLines: ['Oberflächenbearbeitung', 'für den Maschinenbau'],
    lead: 'Die Omibro s.r.o. ist ein tschechisches Unternehmen mit Sitz in Pilsen. Wir übernehmen Gleitschleifen, Entgraten, chemische Oberflächenvorbehandlung und Polyurethan-Beschichtungen für Betriebe in der Tschechischen Republik und in der Bundesrepublik Deutschland.',
    points: [
      {
        title: 'Eigener Betrieb in Pilsen',
        desc: 'Die Bearbeitung erfolgt auf eigenen Anlagen, nicht über Zwischenhändler.',
      },
      {
        title: 'Einzel- und Serienfertigung',
        desc: 'Ohne Form- oder Maßbeschränkung der Bauteile.',
      },
      {
        title: 'Metalle und technische Kunststoffe',
        desc: 'Stahl, Edelstahl, Aluminium und Kunststoffkomponenten.',
      },
      {
        title: 'Endkontrolle',
        desc: 'Jeder Auftrag wird vor der Übergabe geprüft.',
      },
    ],
    tabs: [
      { tab: 'Werkstatt', caption: 'Gleitschleifanlage im Betrieb' },
      { tab: 'Bearbeitung', caption: 'Linie für die Oberflächenbearbeitung' },
      { tab: 'Bauteile', caption: 'Bearbeitetes Bauteil nach der Endkontrolle' },
    ],
    badge: 'Pilsen',
  },

  services: {
    eyebrow: 'Leistungen',
    titleLines: ['Vier Verfahren', 'für die Bauteilbearbeitung'],
    note: 'Das Verfahren richtet sich nach Werkstoff, geforderter Oberflächenrauheit und Auftragsumfang.',
    items: [
      {
        title: 'Gleitschleifen und Entgraten',
        desc: 'Entfernen von Graten, Verrunden von Kanten und Vereinheitlichen der Oberflächenrauheit an bearbeiteten Metall- und Kunststoffteilen.',
      },
      {
        title: 'Chemische Oberflächenvorbehandlung',
        desc: 'Alkalische Entfettung, Beizen und Passivierung — Herstellung einer chemisch reinen Oberfläche vor dem Beschichten.',
      },
      {
        title: 'Polyurethan-Beschichtung (PUR)',
        desc: 'Auftrag einer elastischen, verschleißfesten Elastomerschicht auf Bauteile aus Einzel- und Serienfertigung.',
      },
      {
        title: 'Sanierung von Trommelauskleidungen',
        desc: 'Erneuerung verschlissener Polyurethanschichten an den Innenwänden von Gleitschleiftrommeln und Vibratoren.',
      },
    ],
  },

  pretreat: {
    eyebrow: 'Chemische Oberflächenvorbehandlung',
    titleLines: ['Die Haftung bestimmt', 'die Sauberkeit der Oberfläche'],
    lead: 'Eine Polyurethanschicht haftet nur auf einer chemisch reinen Oberfläche. Rückstände von Schneidölen, Kühlemulsionen und Bearbeitungsoxiden müssen entfernt werden, bevor das Bauteil in die Beschichtungskabine gelangt. Die Vorbehandlung erfolgt deshalb als eigenständiger, kontrollierter Verfahrensschritt.',
    steps: [
      {
        title: 'Alkalische Entfettung',
        desc: 'Im Tauch- oder Spritzverfahren in einem alkalischen Bad auf Hydroxidbasis. Entfernt Schneidöle, Kühlemulsionen und Bearbeitungsfette.',
      },
      {
        title: 'Spülen',
        desc: 'Kaskadenspülung mit vollentsalztem Wasser. Verhindert die Verschleppung des Bades in die nächste Stufe.',
      },
      {
        title: 'Beizen und Dekapieren',
        desc: 'Entfernen von Oxiden, Zunder und Korrosionsprodukten. Bei Edelstahl zugleich Anlösen der Passivschicht für bessere Verankerung.',
      },
      {
        title: 'Neutralisation und Passivierung',
        desc: 'Ausgleich des Oberflächen-pH und Aufbringen einer Konversionsschicht als Korrosionsschutz in der Zwischenoperationszeit.',
      },
      {
        title: 'Trocknung',
        desc: 'Kontrollierte Warmlufttrocknung. Restfeuchte würde beim Aushärten des Polyurethans zu Porenbildung führen.',
      },
    ],
    tableHeading: 'Überwachte Badparameter',
    columns: {
      stage: 'Stufe',
      agent: 'Badtyp',
      monitored: 'Überwachte Parameter',
    },
    rows: [
      {
        stage: 'Entfettung',
        agent: 'Alkalisch, auf Hydroxidbasis',
        monitored: 'Konzentration, Temperatur, Einwirkzeit',
      },
      {
        stage: 'Spülen',
        agent: 'Vollentsalztes Wasser',
        monitored: 'Leitfähigkeit, Wechselintervall',
      },
      {
        stage: 'Beizen',
        agent: 'Sauer',
        monitored: 'Konzentration, pH-Wert, Temperatur',
      },
      {
        stage: 'Passivierung',
        agent: 'Konversionsbad',
        monitored: 'pH-Wert, Einwirkzeit',
      },
    ],
    note: 'Prozesschemikalien sind Verbrauchsmaterial. Die Bäder erschöpfen sich im Verlauf der Bearbeitung; Konzentration wird geprüft und entsprechend der bearbeiteten Teilemenge nachdosiert.',
    imgAlt: 'Metallteile vorbereitet für die chemische Oberflächenvorbehandlung',
  },

  capabilities: {
    eyebrow: 'Technologie und Werkstoffe',
    titleLines: ['Das Verfahren richtet sich', 'nach Werkstoff und Bauteil'],
    body: 'Die Schleifkörper werden nach Werkstoff und geforderter Endrauheit gewählt — von keramischen und Kunststoffkörpern bis zu abrasiven Mischungen. Beim Polyurethan bestimmt die Belastung des Bauteils im Betrieb die Härte der Schicht.',
    materialsHeading: 'Bearbeitete Werkstoffe',
    materials: ['Stahl', 'Edelstahl', 'Aluminium', 'Technische Kunststoffe'],
    stats: [
      { value: '60–95', label: 'Shore A — Härtebereich PUR' },
      { value: '5', label: 'Stufen der chemischen Vorbehandlung' },
      { value: '2', label: 'Länder der Ausführung (CZ, DE)' },
      { value: '4', label: 'Werkstoffgruppen' },
    ],
    imgAltMain: 'Bearbeitung und Vorbereitung eines Bauteils vor der Oberflächenbehandlung',
    imgAltInset: 'Kleine Metallkomponenten vorbereitet zum Gleitschleifen',
  },

  showcase: {
    eyebrow: 'Betrieb',
    titleLines: ['Bearbeitung auf eigenen', 'Anlagen, nicht über Dritte'],
    body: 'Aufträge führen wir in der Tschechischen Republik oder in der Bundesrepublik Deutschland aus — je nach technischem Anspruch und vereinbarten Parametern.',
    imgAlt: 'Industrielle Linie für die Oberflächenbearbeitung von Bauteilen',
  },

  process: {
    eyebrow: 'Auftragsablauf',
    title: 'Von der Anfrage bis zur Übergabe',
    steps: [
      { title: 'Anfrage', desc: 'Sie senden uns Bauteilbeschreibung, Werkstoff und gewünschtes Ergebnis.' },
      { title: 'Spezifikation', desc: 'Wir konkretisieren Verfahren, Umfang der Vorbehandlung und Schichthärte.' },
      { title: 'Ausführung', desc: 'Die Bearbeitung erfolgt in CZ oder DE je nach Anspruch des Auftrags.' },
      { title: 'Kontrolle und Übergabe', desc: 'Prüfung von Maßen, Oberfläche und Haftung, anschließend Übergabe.' },
    ],
  },

  consult: {
    eyebrow: 'Wir bieten Beratung',
    titleLines: ['Technische Beratung', 'vor der Auftragsvergabe'],
    lead: 'Bevor ein Bauteil in die Bearbeitung geht, ist zu entscheiden, mit welchem Verfahren es behandelt wird, wie die Oberfläche vorbereitet und welche Schicht aufgetragen wird. Diese Entscheidungen besprechen wir vorab mit Ihnen — unverbindlich und kostenfrei. Die Beratung umfasst alles, was wir tun: Gleitschleifen und Entgraten, chemische Oberflächenvorbehandlung, Polyurethan-Beschichtungen sowie die Sanierung von Trommelauskleidungen.',
    diagram: {
      center: 'Beratung',
      nodes: [
        'Gleitschleifen',
        'Entgraten',
        'Vorbehandlung',
        'PUR-Schicht',
        'Sanierung',
        'Kalkulation',
      ],
    },
    topicsHeading: 'Was wir in der Beratung mit Ihnen klären',
    topics: [
      {
        title: 'Wahl des Verfahrens',
        desc: 'Nach Werkstoff, Bauteilgeometrie und gewünschtem Ergebnis empfehlen wir, ob das Bauteil durch Gleitschleifen, chemische Vorbehandlung, Polyurethan-Beschichtung oder eine Kombination daraus bearbeitet wird.',
      },
      {
        title: 'Entgraten und Oberflächenrauheit',
        desc: 'Wahl des Schleifmediums — Keramik- und Kunststoffkörper oder abrasive Mischungen — der Zykluszeit und der Rauheit, die nach der Bearbeitung realistisch erreichbar ist.',
      },
      {
        title: 'Chemische Vorbehandlung',
        desc: 'Abfolge der Bäder von der alkalischen Entfettung über Spülung, Beizen und Passivierung bis zur Trocknung. Wir besprechen die überwachten Parameter und die Unterschiede bei Stahl, Edelstahl und Aluminium.',
      },
      {
        title: 'Härte des Polyurethans',
        desc: 'Wahl im Bereich 60–95 Shore A je nach Belastung des Bauteils im Betrieb — Abrieb, Schlag, Druck oder chemische Einwirkung. Die Härte bestimmt die Lebensdauer der Schicht.',
      },
      {
        title: 'Sanierung von Auskleidungen',
        desc: 'Beurteilung der verschlissenen Polyurethanschicht in Gleitschleiftrommeln und Vibratoren: wann eine örtliche Reparatur genügt und wann sich die vollständige Erneuerung lohnt.',
      },
      {
        title: 'Werkstoffe und ihre Grenzen',
        desc: 'Stahl, Edelstahl, Aluminium und technische Kunststoffe. Jeder Werkstoff stellt bei Vorbehandlung und Beschichtung eigene Anforderungen — wir sagen Ihnen, womit bei Ihrem Bauteil zu rechnen ist.',
      },
      {
        title: 'Bauteilkonstruktion',
        desc: 'Rückmeldung zur Bauteilform — Kanten, Radien, Gewinde, Sacklöcher und Funktionsflächen, die vor der Bearbeitung abgeklebt oder konstruktiv angepasst werden sollten.',
      },
      {
        title: 'Umfang und Auftragsablauf',
        desc: 'Einzel- und Serienfertigung, Zwischenschutz gegen Korrosion, Verpackung, Transport und ob der Auftrag in Tschechien oder in der Bundesrepublik Deutschland ausgeführt wird.',
      },
      {
        title: 'Kalkulation und Termin',
        desc: 'Woraus sich der Preis ergibt: technischer Anspruch, Werkstoff, Stückzahl und Umfang der Vorbehandlung. Auf Basis der Beratung erstellen wir die Grundlage für Angebot und Termin.',
      },
    ],
    formatHeading: 'Wie die Beratung abläuft',
    format: [
      {
        title: 'Unverbindlich und kostenfrei',
        desc: 'Wir berechnen die Beratung nicht, und sie verpflichtet Sie zu nichts.',
      },
      {
        title: 'Telefonisch, online oder im Betrieb',
        desc: 'In der Regel 30–45 Minuten per Telefon oder Videocall, alternativ persönlich im Betrieb in Pilsen.',
      },
      {
        title: 'Deutsch und Tschechisch',
        desc: 'Wir arbeiten in beiden Sprachen — für Aufträge in Tschechien und in Deutschland.',
      },
      {
        title: 'Geführt von einem Techniker',
        desc: 'Sie sprechen direkt mit der Person, die den Auftrag bearbeitet, nicht mit einem Vermittler.',
      },
    ],
    prepareHeading: 'Was Sie zur Beratung bereithalten sollten',
    prepare: [
      'Zeichnung oder Foto des Bauteils',
      'Werkstoff und Oberflächenzustand nach der Bearbeitung',
      'Stückzahl und voraussichtliche Wiederholhäufigkeit',
      'Gewünschtes Ergebnis — Rauheit, Schichthärte, Korrosionsschutz',
      'Umgebung, in der das Bauteil im Betrieb arbeitet',
      'Termin, bis zu dem die Bearbeitung benötigt wird',
    ],
    ctaTitle: 'Unklar, welches Verfahren für Ihr Bauteil richtig ist?',
    ctaBody: 'Beschreiben Sie uns das Bauteil und wir vereinbaren einen Beratungstermin mit einem Techniker.',
    cta: 'Beratung anfragen',
    ctaNote: 'Unverbindlich · Kostenfrei · Antwort innerhalb von zwei Werktagen',
  },

  faq: {
    eyebrow: 'Häufige Fragen',
    titleLines: ['Technische', 'Fragen'],
    items: [
      {
        q: 'Welche Bauteile bearbeiten Sie?',
        a: 'Spanend bearbeitete, gegossene und umgeformte Teile ohne Form- oder Maßbeschränkung — in Einzel- und Serienmengen.',
      },
      {
        q: 'Mit welchen Werkstoffen arbeiten Sie?',
        a: 'Stahl, Edelstahl, Aluminium und technische Kunststoffe. Das Verfahren richtet sich nach Werkstoff und Einsatz des jeweiligen Bauteils.',
      },
      {
        q: 'Warum ist eine chemische Vorbehandlung vor dem Beschichten notwendig?',
        a: 'Polyurethan verbindet sich zuverlässig nur mit einer chemisch reinen Oberfläche. Rückstände von Schneidölen, Emulsionen und Oxiden mindern die Haftung und führen im Betrieb zum Ablösen der Schicht. Die Vorbehandlung erfolgt daher in fünf Stufen — von der alkalischen Entfettung bis zur Trocknung.',
      },
      {
        q: 'Wo erfolgt die Ausführung?',
        a: 'In der Tschechischen Republik oder in der Bundesrepublik Deutschland, je nach technischem Anspruch und vereinbarten Auftragsparametern.',
      },
      {
        q: 'Welche Polyurethan-Härte tragen Sie auf?',
        a: 'Standardmäßig im Bereich 60–95 Shore A. Die konkrete Härte bestimmt die Belastung des Bauteils im Betrieb.',
      },
      {
        q: 'Wie erfolgt die Kalkulation?',
        a: 'Der Preis ergibt sich aus technischem Anspruch, Werkstoff und Auftragsumfang. Die Kalkulation erstellen wir auf Grundlage der übermittelten Spezifikation.',
      },
    ],
  },

  contact: {
    eyebrow: 'Kontakt',
    title: 'Schreiben Sie uns',
    lead: 'Senden Sie uns für eine Anfrage die Bauteilspezifikation und das gewünschte Ergebnis. Wir melden uns mit Rückfragen oder einer Kalkulation.',
    responseNote: 'E-Mails beantworten wir innerhalb von zwei Werktagen.',
    labels: {
      seat: 'Sitz',
      ico: 'Ident.-Nr. (IČO)',
      dataBox: 'Datenbox-ID',
      email: 'E-Mail',
      phone: 'Telefon',
      director: 'Geschäftsführer',
      fileRef: 'Aktenzeichen',
      capital: 'Stammkapital',
      hours: 'Geschäftszeiten',
    },
    hours: 'Mo–Fr, 8:00–16:00',
    form: {
      name: 'Name',
      namePlaceholder: 'Max Mustermann',
      company: 'Unternehmen',
      companyPlaceholder: 'Name des Unternehmens',
      email: 'E-Mail',
      emailPlaceholder: 'max.mustermann@unternehmen.de',
      phone: 'Telefon',
      phonePlaceholder: '+49 000 0000000',
      message: 'Nachricht',
      messagePlaceholder: 'Bauteilbeschreibung, Werkstoff, Menge und gewünschtes Ergebnis.',
      submit: 'Nachricht senden',
      privacy: 'Die Formulardaten verwenden wir ausschließlich zur Beantwortung Ihrer Anfrage.',
      success: 'Die Nachricht wurde gesendet. Wir antworten an die angegebene E-Mail-Adresse.',
      required: 'Pflichtfeld',
    },
    mapTitle: 'Karte des Firmensitzes Omibro s.r.o., Bolzanova 2659/15, Pilsen',
  },

  footer: {
    ctaTitle: 'Haben Sie ein Bauteil zu bearbeiten?',
    ctaFormLabel: 'Kontaktformular',
    blurb:
      'Gleitschleifen, Entgraten, chemische Oberflächenvorbehandlung und Polyurethan-Beschichtungen für den Maschinenbau.',
    columns: [
      {
        heading: 'Leistungen',
        links: [
          { label: 'Gleitschleifen und Entgraten', href: '#services' },
          { label: 'Chemische Vorbehandlung', href: '#preduprava' },
          { label: 'Polyurethan-Beschichtung', href: '#services' },
          { label: 'Sanierung von Trommelauskleidungen', href: '#services' },
        ],
      },
      {
        heading: 'Unternehmen',
        links: [
          { label: 'Über uns', href: '#about' },
          { label: 'Technologie und Werkstoffe', href: '#technologie' },
          { label: 'Auftragsablauf', href: '#proces' },
          { label: 'Technische Beratung', href: '#konzultace' },
          { label: 'Häufige Fragen', href: '#faq' },
        ],
      },
    ],
    legalHeading: 'Sitz und Firmendaten',
    registryLink: 'Handelsregister',
    sitemapLink: 'Sitemap',
    rights: '© Omibro s.r.o.',
  },
};
