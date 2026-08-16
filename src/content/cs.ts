import type { Content } from './types';

export const cs: Content = {
  locale: 'cs',
  htmlLang: 'cs',

  meta: {
    title: 'Omibro s.r.o. | Dodavatelské služby pro strojírenství',
    description:
      'Omílání, odjehlování, chemická předúprava povrchu a zakázkové polyuretanové nástřiky (PUR) pro strojírenskou výrobu. Omibro s.r.o., Plzeň.',
    keywords: [
      'Omibro',
      'Omibro s.r.o.',
      'strojírenství',
      'vibrační omílání',
      'odjehlování',
      'chemická předúprava',
      'alkalické odmaštění',
      'moření',
      'pasivace',
      'povrchové úpravy',
      'polyuretanové nástřiky',
      'PUR nástřik',
      'renovace výstelek',
      'Plzeň',
    ],
  },

  nav: {
    items: [
      { label: 'O společnosti', href: '#about' },
      { label: 'Oblast působení', href: '#services' },
      { label: 'Předúprava', href: '#preduprava' },
      { label: 'Technologie', href: '#technologie' },
      { label: 'Průběh zakázky', href: '#proces' },
      { label: 'Kontakt', href: '#contact' },
    ],
    cta: 'Poptávka',
    open: 'Otevřít menu',
    close: 'Zavřít menu',
    home: 'Omibro s.r.o. — úvod',
  },

  langSwitch: { label: 'DE', href: '/de', aria: 'Deutsche Version' },

  hero: {
    eyebrow: 'Dodavatelské služby pro strojírenství',
    titleLines: ['Omílání, předúprava', 'povrchu a polyuretanové', 'nástřiky'],
    lead: 'Zpracováváme kovové i plastové díly pro strojírenskou výrobu — od odjehlování a chemické předúpravy povrchu po zakázkovou aplikaci polyuretanu.',
    ctaPrimary: 'Kontaktovat',
    ctaSecondary: 'Oblast působení',
    corner: 'Plzeň · Česká republika',
    imgAlt: 'Přesně opracované strojírenské díly',
  },

  industries: {
    eyebrow: 'Odvětví, pro která pracujeme',
    items: ['Strojírenství', 'Automotive', 'Aerospace', 'Gastroprůmysl', 'Stavební mechanizace'],
  },

  about: {
    eyebrow: 'O společnosti',
    titleLines: ['Zpracování povrchů', 'pro strojírenskou výrobu'],
    lead: 'Omibro s.r.o. je česká společnost se sídlem v Plzni. Zajišťujeme omílání, odjehlování, chemickou předúpravu povrchu a aplikaci polyuretanových nástřiků pro strojírenské provozy v České republice a ve Spolkové republice Německo.',
    points: [
      {
        title: 'Vlastní provoz v Plzni',
        desc: 'Zpracování probíhá na vlastním zařízení, ne přes zprostředkovatele.',
      },
      {
        title: 'Kusová i sériová výroba',
        desc: 'Bez tvarového nebo rozměrového omezení dílů.',
      },
      {
        title: 'Kovy i technické plasty',
        desc: 'Ocel, nerezová ocel, hliník a plastové komponenty.',
      },
      {
        title: 'Výstupní kontrola',
        desc: 'Každá zakázka se kontroluje před předáním.',
      },
    ],
    tabs: [
      { tab: 'Dílna', caption: 'Omílací zařízení v provozu' },
      { tab: 'Zpracování', caption: 'Linka pro povrchové zpracování' },
      { tab: 'Díly', caption: 'Obrobený díl po výstupní kontrole' },
    ],
    badge: 'Plzeň',
  },

  services: {
    eyebrow: 'Oblast působení',
    titleLines: ['Čtyři technologie', 'pro zpracování dílů'],
    note: 'Technologii volíme podle materiálu dílu, požadované drsnosti povrchu a rozsahu zakázky.',
    items: [
      {
        title: 'Vibrační omílání a odjehlování',
        desc: 'Srážení otřepů, vyhlazení hran a sjednocení drsnosti povrchu obrobených kovových i plastových dílů.',
      },
      {
        title: 'Chemická předúprava povrchu',
        desc: 'Alkalické odmaštění, moření a pasivace — příprava chemicky čistého povrchu před nanesením vrstvy.',
      },
      {
        title: 'Polyuretanové nástřiky (PUR)',
        desc: 'Nanášení pružné otěruvzdorné elastomerní vrstvy na díly z kusové i sériové výroby.',
      },
      {
        title: 'Renovace výstelek strojů',
        desc: 'Obnova opotřebené polyuretanové vrstvy na vnitřních stěnách omílacích bubnů a vibrátorů.',
      },
    ],
  },

  pretreat: {
    eyebrow: 'Chemická předúprava povrchu',
    titleLines: ['Přilnavost vrstvy určuje', 'čistota povrchu'],
    lead: 'Polyuretanová vrstva drží pouze na chemicky čistém povrchu. Zbytky řezných olejů, chladicích emulzí a oxidů z obrábění je nutné odstranit dřív, než se díl dostane do nástřikové kabiny. Předúprava proto probíhá jako samostatný, řízený technologický krok.',
    steps: [
      {
        title: 'Alkalické odmaštění',
        desc: 'Ponorem nebo postřikem v alkalické lázni na bázi hydroxidů. Odstraňuje řezné oleje, chladicí emulze a mastnoty z obrábění.',
      },
      {
        title: 'Oplach',
        desc: 'Kaskádový oplach demineralizovanou vodou. Zabraňuje přenosu lázně do dalšího stupně.',
      },
      {
        title: 'Moření a dekapování',
        desc: 'Odstranění oxidů, okují a korozních produktů. U nerezové oceli současně narušení pasivní vrstvy pro lepší kotvení.',
      },
      {
        title: 'Neutralizace a pasivace',
        desc: 'Vyrovnání pH povrchu a nanesení konverzní vrstvy, která brání korozi v mezioperační době.',
      },
      {
        title: 'Sušení',
        desc: 'Řízené vysušení v ohřevu. Zbytková vlhkost by při vytvrzování polyuretanu vytvořila póry.',
      },
    ],
    tableHeading: 'Sledované parametry lázní',
    columns: {
      stage: 'Stupeň',
      agent: 'Typ lázně',
      monitored: 'Sledované parametry',
    },
    rows: [
      {
        stage: 'Odmaštění',
        agent: 'Alkalická, na bázi hydroxidů',
        monitored: 'Koncentrace, teplota, doba expozice',
      },
      {
        stage: 'Oplach',
        agent: 'Demineralizovaná voda',
        monitored: 'Vodivost, četnost výměny',
      },
      {
        stage: 'Moření',
        agent: 'Kyselá',
        monitored: 'Koncentrace, pH, teplota',
      },
      {
        stage: 'Pasivace',
        agent: 'Konverzní',
        monitored: 'pH, doba expozice',
      },
    ],
    note: 'Procesní chemikálie jsou spotřební materiál. Lázně se v průběhu zpracování vyčerpávají a jejich koncentrace se kontroluje a doplňuje podle rozpracovaného množství dílů.',
    imgAlt: 'Kovové díly připravené k chemické předúpravě povrchu',
  },

  capabilities: {
    eyebrow: 'Technologie a materiály',
    titleLines: ['Postup se řídí', 'materiálem a dílem'],
    body: 'Omílací média volíme podle materiálu a požadované výsledné drsnosti — od keramických a plastových tělísek po abrazivní směsi. U polyuretanu určuje tvrdost vrstvy způsob zatížení dílu v provozu.',
    materialsHeading: 'Zpracovávané materiály',
    materials: ['Ocel', 'Nerezová ocel', 'Hliník', 'Technické plasty'],
    stats: [
      { value: '60–95', label: 'ShA — rozsah tvrdosti PUR' },
      { value: '5', label: 'Stupňů chemické předúpravy' },
      { value: '2', label: 'Země realizace (ČR, SRN)' },
      { value: '4', label: 'Skupiny zpracovávaných materiálů' },
    ],
    imgAltMain: 'Obrábění a příprava dílu před povrchovým zpracováním',
    imgAltInset: 'Drobné kovové komponenty připravené k omílání',
  },

  showcase: {
    eyebrow: 'Provoz',
    titleLines: ['Zpracování na vlastním', 'zařízení, ne přes prostředníka'],
    body: 'Zakázky realizujeme v České republice nebo ve Spolkové republice Německo — podle technické náročnosti a dohodnutých parametrů.',
    imgAlt: 'Průmyslová linka pro povrchové zpracování dílů',
  },

  process: {
    eyebrow: 'Průběh zakázky',
    title: 'Od poptávky po předání',
    steps: [
      { title: 'Poptávka', desc: 'Zašlete popis dílu, materiál a požadovaný výsledek.' },
      { title: 'Specifikace', desc: 'Upřesníme technologii, rozsah předúpravy a tvrdost vrstvy.' },
      { title: 'Realizace', desc: 'Zpracování probíhá v ČR nebo v SRN dle náročnosti zakázky.' },
      { title: 'Kontrola a předání', desc: 'Kontrola rozměrů, povrchu a přilnavosti, následně předání.' },
    ],
  },

  faq: {
    eyebrow: 'Časté dotazy',
    titleLines: ['Technické', 'otázky'],
    items: [
      {
        q: 'Jaké díly zpracováváte?',
        a: 'Obráběné, lité i tvářené díly bez tvarového nebo rozměrového omezení — v kusovém i sériovém množství.',
      },
      {
        q: 'S jakými materiály pracujete?',
        a: 'Ocel, nerezovou ocel, hliník a technické plasty. Postup volíme podle materiálu a použití konkrétního dílu.',
      },
      {
        q: 'Proč je nutná chemická předúprava před nástřikem?',
        a: 'Polyuretan se spolehlivě spojí pouze s chemicky čistým povrchem. Zbytky řezných olejů, emulzí a oxidů snižují přilnavost vrstvy a vedou k jejímu odlupování v provozu. Předúprava proto probíhá v pěti stupních — od alkalického odmaštění po sušení.',
      },
      {
        q: 'Kde realizace probíhá?',
        a: 'V České republice nebo ve Spolkové republice Německo, podle technické náročnosti a dohodnutých parametrů zakázky.',
      },
      {
        q: 'Jakou tvrdost polyuretanu nanášíte?',
        a: 'Standardně v rozsahu 60–95 ShA. Konkrétní tvrdost určuje způsob zatížení dílu v provozu.',
      },
      {
        q: 'Jak probíhá kalkulace?',
        a: 'Cena vychází z technické náročnosti, materiálu a rozsahu zakázky. Kalkulaci připravíme na základě zaslané specifikace.',
      },
    ],
  },

  contact: {
    eyebrow: 'Kontakt',
    title: 'Napište nám',
    lead: 'Pro poptávku nám zašlete specifikaci dílu a požadovaný výsledek. Ozveme se s upřesněním nebo kalkulací.',
    responseNote: 'Na e-maily odpovídáme do dvou pracovních dnů.',
    labels: {
      seat: 'Sídlo',
      ico: 'IČO',
      dataBox: 'Datová schránka',
      email: 'E-mail',
      phone: 'Telefon',
      director: 'Jednatel',
      fileRef: 'Spisová značka',
      capital: 'Základní kapitál',
      hours: 'Provozní doba',
    },
    hours: 'Po–Pá, 8:00–16:00',
    form: {
      name: 'Jméno',
      namePlaceholder: 'Jan Novák',
      company: 'Společnost',
      companyPlaceholder: 'Název společnosti',
      email: 'E-mail',
      emailPlaceholder: 'jan.novak@spolecnost.cz',
      phone: 'Telefon',
      phonePlaceholder: '+420 000 000 000',
      message: 'Zpráva',
      messagePlaceholder: 'Popis dílu, materiál, množství a požadovaný výsledek.',
      submit: 'Odeslat zprávu',
      privacy: 'Údaje z formuláře používáme výhradně k zodpovězení vaší poptávky.',
      success: 'Zpráva byla odeslána. Odpovíme na uvedený e-mail.',
      required: 'povinné',
    },
    mapTitle: 'Mapa sídla Omibro s.r.o., Bolzanova 2659/15, Plzeň',
  },

  footer: {
    ctaTitle: 'Máte díl ke zpracování?',
    ctaFormLabel: 'Kontaktní formulář',
    blurb:
      'Omílání, odjehlování, chemická předúprava povrchu a polyuretanové nástřiky pro strojírenskou výrobu.',
    columns: [
      {
        heading: 'Oblast působení',
        links: [
          { label: 'Vibrační omílání a odjehlování', href: '#services' },
          { label: 'Chemická předúprava povrchu', href: '#preduprava' },
          { label: 'Polyuretanové nástřiky', href: '#services' },
          { label: 'Renovace výstelek strojů', href: '#services' },
        ],
      },
      {
        heading: 'Společnost',
        links: [
          { label: 'O společnosti', href: '#about' },
          { label: 'Technologie a materiály', href: '#technologie' },
          { label: 'Průběh zakázky', href: '#proces' },
          { label: 'Časté dotazy', href: '#faq' },
        ],
      },
    ],
    legalHeading: 'Sídlo a údaje',
    registryLink: 'Obchodní rejstřík',
    sitemapLink: 'Mapa webu',
    rights: '© Omibro s.r.o.',
  },
};
