export type Locale = 'cs' | 'de';

export interface NavItem {
  label: string;
  href: string;
}

export interface TitledItem {
  title: string;
  desc: string;
}

export interface Content {
  locale: Locale;
  htmlLang: string;

  meta: {
    title: string;
    description: string;
    keywords: string[];
  };

  nav: {
    items: NavItem[];
    cta: string;
    open: string;
    close: string;
    home: string;
  };

  langSwitch: {
    /** Label of the *other* language, e.g. "DE" shown on the Czech page. */
    label: string;
    href: string;
    aria: string;
  };

  hero: {
    eyebrow: string;
    titleLines: string[];
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    corner: string;
    imgAlt: string;
  };

  industries: {
    eyebrow: string;
    items: string[];
  };

  about: {
    eyebrow: string;
    titleLines: string[];
    lead: string;
    points: TitledItem[];
    tabs: { tab: string; caption: string }[];
    badge: string;
  };

  services: {
    eyebrow: string;
    titleLines: string[];
    note: string;
    items: TitledItem[];
  };

  pretreat: {
    eyebrow: string;
    titleLines: string[];
    lead: string;
    steps: TitledItem[];
    tableHeading: string;
    columns: { stage: string; agent: string; monitored: string };
    rows: { stage: string; agent: string; monitored: string }[];
    note: string;
    imgAlt: string;
  };

  capabilities: {
    eyebrow: string;
    titleLines: string[];
    body: string;
    materialsHeading: string;
    materials: string[];
    stats: { value: string; label: string }[];
    imgAltMain: string;
    imgAltInset: string;
  };

  showcase: {
    eyebrow: string;
    titleLines: string[];
    body: string;
    imgAlt: string;
  };

  process: {
    eyebrow: string;
    title: string;
    steps: TitledItem[];
  };

  faq: {
    eyebrow: string;
    titleLines: string[];
    items: { q: string; a: string }[];
  };

  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    responseNote: string;
    labels: {
      seat: string;
      ico: string;
      dataBox: string;
      email: string;
      phone: string;
      director: string;
      fileRef: string;
      capital: string;
      hours: string;
    };
    hours: string;
    form: {
      name: string;
      namePlaceholder: string;
      company: string;
      companyPlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      privacy: string;
      success: string;
      required: string;
    };
    mapTitle: string;
  };

  footer: {
    ctaTitle: string;
    ctaFormLabel: string;
    blurb: string;
    columns: { heading: string; links: NavItem[] }[];
    legalHeading: string;
    registryLink: string;
    sitemapLink: string;
    rights: string;
  };
}
