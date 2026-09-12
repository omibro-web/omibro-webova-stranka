import { defineConfig } from 'tinacms';

/**
 * Field helpers. The site has exactly two pages (cs, de) with a fixed
 * shape — every list below mirrors an array that already exists in
 * src/content/types.ts, so editors resize sections at their own risk,
 * but nothing here lets them invent new top-level sections.
 */
const titledItem = (titleLabel = 'Nadpis', descLabel = 'Text') => [
  { type: 'string', name: 'title', label: titleLabel },
  { type: 'string', name: 'desc', label: descLabel, ui: { component: 'textarea' } },
] as const;

const navItem = [
  { type: 'string', name: 'label', label: 'Text odkazu' },
  { type: 'string', name: 'href', label: 'Odkaz (URL nebo #kotva)' },
] as const;

export default defineConfig({
  branch:
    process.env.NEXT_PUBLIC_TINA_BRANCH ??
    process.env.BRANCH ?? // Netlify
    process.env.VERCEL_GIT_COMMIT_REF ?? // Vercel
    'main',
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID ?? null,
  token: process.env.TINA_TOKEN ?? null,

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'assets/uploads',
      publicFolder: 'public',
    },
  },

  schema: {
    collections: [
      {
        name: 'page',
        label: 'Stránky webu',
        path: 'content/page',
        format: 'json',
        ui: {
          allowedActions: { create: false, delete: false },
        },
        fields: [
          {
            type: 'string',
            name: 'locale',
            label: 'Jazyk (needit)',
            ui: { component: 'hidden' },
          },
          {
            type: 'string',
            name: 'htmlLang',
            label: 'HTML jazyk (needit)',
            ui: { component: 'hidden' },
          },

          {
            type: 'object',
            name: 'meta',
            label: 'SEO metadata',
            fields: [
              { type: 'string', name: 'title', label: 'Titulek stránky (tab v prohlížeči)' },
              { type: 'string', name: 'description', label: 'Meta popis', ui: { component: 'textarea' } },
              { type: 'string', name: 'keywords', label: 'Klíčová slova', list: true },
            ],
          },

          {
            type: 'object',
            name: 'nav',
            label: 'Horní menu',
            fields: [
              { type: 'object', name: 'items', label: 'Položky menu', list: true, fields: [...navItem] },
              { type: 'string', name: 'cta', label: 'Tlačítko (Poptávka)' },
              { type: 'string', name: 'open', label: 'Popisek — otevřít menu (accessibility)' },
              { type: 'string', name: 'close', label: 'Popisek — zavřít menu (accessibility)' },
              { type: 'string', name: 'home', label: 'Popisek — odkaz na domů (accessibility)' },
            ],
          },

          {
            type: 'object',
            name: 'langSwitch',
            label: 'Přepínač jazyka',
            fields: [
              { type: 'string', name: 'label', label: 'Zkratka druhého jazyka (DE / CS)' },
              { type: 'string', name: 'href', label: 'Odkaz na druhou jazykovou verzi' },
              { type: 'string', name: 'aria', label: 'Popisek (accessibility)' },
            ],
          },

          {
            type: 'object',
            name: 'hero',
            label: 'Hero (úvodní sekce)',
            fields: [
              { type: 'string', name: 'eyebrow', label: 'Malý text nad nadpisem' },
              { type: 'string', name: 'titleLines', label: 'Nadpis (řádky)', list: true },
              { type: 'string', name: 'lead', label: 'Podnadpis / popisek', ui: { component: 'textarea' } },
              { type: 'string', name: 'ctaPrimary', label: 'Tlačítko 1' },
              { type: 'string', name: 'ctaSecondary', label: 'Tlačítko 2' },
              { type: 'string', name: 'corner', label: 'Text vpravo dole' },
              { type: 'image', name: 'image', label: 'Fotka na pozadí' },
              { type: 'string', name: 'imgAlt', label: 'Popis fotky (accessibility)' },
            ],
          },

          {
            type: 'object',
            name: 'industries',
            label: 'Odvětví (lišta pod hero)',
            fields: [
              { type: 'string', name: 'eyebrow', label: 'Nadpis lišty' },
              { type: 'string', name: 'items', label: 'Odvětví', list: true },
            ],
          },

          {
            type: 'object',
            name: 'about',
            label: 'O společnosti',
            fields: [
              { type: 'string', name: 'eyebrow', label: 'Malý text nad nadpisem' },
              { type: 'string', name: 'titleLines', label: 'Nadpis (řádky)', list: true },
              { type: 'string', name: 'lead', label: 'Úvodní text', ui: { component: 'textarea' } },
              {
                type: 'object',
                name: 'points',
                label: 'Body (4 řádky pod textem)',
                list: true,
                fields: [...titledItem()],
              },
              {
                type: 'object',
                name: 'tabs',
                label: 'Fotky s přepínačem (3 záložky)',
                list: true,
                fields: [
                  { type: 'string', name: 'tab', label: 'Název záložky' },
                  { type: 'string', name: 'caption', label: 'Popisek pod fotkou' },
                  { type: 'image', name: 'image', label: 'Fotka' },
                ],
              },
              { type: 'string', name: 'badge', label: 'Štítek na fotce (např. Plzeň)' },
            ],
          },

          {
            type: 'object',
            name: 'services',
            label: 'Oblast působení (4 karty)',
            fields: [
              { type: 'string', name: 'eyebrow', label: 'Malý text nad nadpisem' },
              { type: 'string', name: 'titleLines', label: 'Nadpis (řádky)', list: true },
              { type: 'string', name: 'note', label: 'Poznámka vpravo', ui: { component: 'textarea' } },
              {
                type: 'object',
                name: 'items',
                label: 'Karty služeb',
                list: true,
                fields: [
                  ...titledItem(),
                  { type: 'image', name: 'image', label: 'Fotka karty' },
                ],
              },
            ],
          },

          {
            type: 'object',
            name: 'pretreat',
            label: 'Chemická předúprava',
            fields: [
              { type: 'string', name: 'eyebrow', label: 'Malý text nad nadpisem' },
              { type: 'string', name: 'titleLines', label: 'Nadpis (řádky)', list: true },
              { type: 'string', name: 'lead', label: 'Úvodní text', ui: { component: 'textarea' } },
              { type: 'image', name: 'image', label: 'Fotka' },
              { type: 'string', name: 'imgAlt', label: 'Popis fotky (accessibility)' },
              {
                type: 'object',
                name: 'steps',
                label: 'Kroky předúpravy',
                list: true,
                fields: [...titledItem()],
              },
              { type: 'string', name: 'tableHeading', label: 'Nadpis tabulky' },
              {
                type: 'object',
                name: 'columns',
                label: 'Hlavičky sloupců tabulky',
                fields: [
                  { type: 'string', name: 'stage', label: 'Sloupec: Stupeň' },
                  { type: 'string', name: 'agent', label: 'Sloupec: Typ lázně' },
                  { type: 'string', name: 'monitored', label: 'Sloupec: Sledované parametry' },
                ],
              },
              {
                type: 'object',
                name: 'rows',
                label: 'Řádky tabulky',
                list: true,
                fields: [
                  { type: 'string', name: 'stage', label: 'Stupeň' },
                  { type: 'string', name: 'agent', label: 'Typ lázně' },
                  { type: 'string', name: 'monitored', label: 'Sledované parametry' },
                ],
              },
              { type: 'string', name: 'note', label: 'Poznámka v tmavém boxu', ui: { component: 'textarea' } },
            ],
          },

          {
            type: 'object',
            name: 'capabilities',
            label: 'Technologie a materiály',
            fields: [
              { type: 'string', name: 'eyebrow', label: 'Malý text nad nadpisem' },
              { type: 'string', name: 'titleLines', label: 'Nadpis (řádky)', list: true },
              { type: 'string', name: 'body', label: 'Text', ui: { component: 'textarea' } },
              { type: 'image', name: 'imageMain', label: 'Velká fotka' },
              { type: 'string', name: 'imgAltMain', label: 'Popis velké fotky (accessibility)' },
              { type: 'image', name: 'imageInset', label: 'Malá fotka (vpravo nahoře)' },
              { type: 'string', name: 'imgAltInset', label: 'Popis malé fotky (accessibility)' },
              { type: 'string', name: 'materialsHeading', label: 'Nadpis nad seznamem materiálů' },
              { type: 'string', name: 'materials', label: 'Materiály', list: true },
              {
                type: 'object',
                name: 'stats',
                label: 'Čísla ve spodní liště',
                list: true,
                fields: [
                  { type: 'string', name: 'value', label: 'Číslo / hodnota' },
                  { type: 'string', name: 'label', label: 'Popisek pod číslem' },
                ],
              },
            ],
          },

          {
            type: 'object',
            name: 'showcase',
            label: 'Provoz (velký pruh s fotkou)',
            fields: [
              { type: 'string', name: 'eyebrow', label: 'Malý text nad nadpisem' },
              { type: 'string', name: 'titleLines', label: 'Nadpis (řádky)', list: true },
              { type: 'string', name: 'body', label: 'Text', ui: { component: 'textarea' } },
              { type: 'image', name: 'image', label: 'Fotka na pozadí' },
              { type: 'string', name: 'imgAlt', label: 'Popis fotky (accessibility)' },
            ],
          },

          {
            type: 'object',
            name: 'process',
            label: 'Průběh zakázky',
            fields: [
              { type: 'string', name: 'eyebrow', label: 'Malý text nad nadpisem' },
              { type: 'string', name: 'title', label: 'Nadpis' },
              {
                type: 'object',
                name: 'steps',
                label: 'Kroky (4)',
                list: true,
                fields: [...titledItem()],
              },
            ],
          },

          {
            type: 'object',
            name: 'consult',
            label: 'Konzultace',
            fields: [
              { type: 'string', name: 'eyebrow', label: 'Malý text nad nadpisem' },
              { type: 'string', name: 'titleLines', label: 'Nadpis (řádky)', list: true },
              { type: 'string', name: 'lead', label: 'Úvodní text', ui: { component: 'textarea' } },
              {
                type: 'object',
                name: 'diagram',
                label: 'Diagram (střed + 6 uzlů)',
                fields: [
                  { type: 'string', name: 'center', label: 'Text uprostřed' },
                  { type: 'string', name: 'nodes', label: 'Uzly okolo', list: true },
                ],
              },
              { type: 'string', name: 'topicsHeading', label: 'Nadpis: Co probereme' },
              {
                type: 'object',
                name: 'topics',
                label: 'Témata konzultace',
                list: true,
                fields: [...titledItem()],
              },
              { type: 'string', name: 'formatHeading', label: 'Nadpis: Jak konzultace probíhá' },
              {
                type: 'object',
                name: 'format',
                label: 'Body — jak probíhá',
                list: true,
                fields: [...titledItem()],
              },
              { type: 'string', name: 'prepareHeading', label: 'Nadpis: Co si připravit' },
              { type: 'string', name: 'prepare', label: 'Co si připravit (seznam)', list: true },
              { type: 'string', name: 'ctaTitle', label: 'Nadpis výzvy na konci' },
              { type: 'string', name: 'ctaBody', label: 'Text výzvy', ui: { component: 'textarea' } },
              { type: 'string', name: 'cta', label: 'Text tlačítka' },
              { type: 'string', name: 'ctaNote', label: 'Poznámka pod tlačítkem' },
            ],
          },

          {
            type: 'object',
            name: 'faq',
            label: 'Časté dotazy',
            fields: [
              { type: 'string', name: 'eyebrow', label: 'Malý text nad nadpisem' },
              { type: 'string', name: 'titleLines', label: 'Nadpis (řádky)', list: true },
              {
                type: 'object',
                name: 'items',
                label: 'Otázky a odpovědi',
                list: true,
                fields: [
                  { type: 'string', name: 'q', label: 'Otázka' },
                  { type: 'string', name: 'a', label: 'Odpověď', ui: { component: 'textarea' } },
                ],
              },
            ],
          },

          {
            type: 'object',
            name: 'contact',
            label: 'Kontakt',
            fields: [
              { type: 'string', name: 'eyebrow', label: 'Malý text nad nadpisem' },
              { type: 'string', name: 'title', label: 'Nadpis' },
              { type: 'string', name: 'lead', label: 'Úvodní text', ui: { component: 'textarea' } },
              { type: 'string', name: 'responseNote', label: 'Poznámka o reakční době' },
              {
                type: 'object',
                name: 'labels',
                label: 'Popisky u firemních údajů',
                fields: [
                  { type: 'string', name: 'seat', label: 'Sídlo' },
                  { type: 'string', name: 'ico', label: 'IČO' },
                  { type: 'string', name: 'dataBox', label: 'Datová schránka' },
                  { type: 'string', name: 'email', label: 'E-mail' },
                  { type: 'string', name: 'phone', label: 'Telefon' },
                  { type: 'string', name: 'director', label: 'Jednatel' },
                  { type: 'string', name: 'fileRef', label: 'Spisová značka' },
                  { type: 'string', name: 'capital', label: 'Základní kapitál' },
                  { type: 'string', name: 'hours', label: 'Provozní doba' },
                ],
              },
              { type: 'string', name: 'hours', label: 'Provozní doba — hodnota' },
              {
                type: 'object',
                name: 'form',
                label: 'Kontaktní formulář — texty',
                fields: [
                  { type: 'string', name: 'name', label: 'Popisek: Jméno' },
                  { type: 'string', name: 'namePlaceholder', label: 'Placeholder: Jméno' },
                  { type: 'string', name: 'company', label: 'Popisek: Společnost' },
                  { type: 'string', name: 'companyPlaceholder', label: 'Placeholder: Společnost' },
                  { type: 'string', name: 'email', label: 'Popisek: E-mail' },
                  { type: 'string', name: 'emailPlaceholder', label: 'Placeholder: E-mail' },
                  { type: 'string', name: 'phone', label: 'Popisek: Telefon' },
                  { type: 'string', name: 'phonePlaceholder', label: 'Placeholder: Telefon' },
                  { type: 'string', name: 'message', label: 'Popisek: Zpráva' },
                  { type: 'string', name: 'messagePlaceholder', label: 'Placeholder: Zpráva' },
                  { type: 'string', name: 'submit', label: 'Text tlačítka Odeslat' },
                  { type: 'string', name: 'privacy', label: 'Text o zpracování údajů', ui: { component: 'textarea' } },
                  { type: 'string', name: 'success', label: 'Text po úspěšném odeslání' },
                  { type: 'string', name: 'required', label: 'Text „povinné"' },
                ],
              },
              { type: 'string', name: 'mapTitle', label: 'Popis mapy (accessibility)' },
            ],
          },

          {
            type: 'object',
            name: 'footer',
            label: 'Patička',
            fields: [
              { type: 'string', name: 'ctaTitle', label: 'Nadpis výzvy nahoře v patičce' },
              { type: 'string', name: 'ctaFormLabel', label: 'Text tlačítka na kontaktní formulář' },
              { type: 'string', name: 'blurb', label: 'Krátký popis firmy', ui: { component: 'textarea' } },
              {
                type: 'object',
                name: 'columns',
                label: 'Sloupce odkazů',
                list: true,
                fields: [
                  { type: 'string', name: 'heading', label: 'Nadpis sloupce' },
                  { type: 'object', name: 'links', label: 'Odkazy', list: true, fields: [...navItem] },
                ],
              },
              { type: 'string', name: 'legalHeading', label: 'Nadpis: Sídlo a údaje' },
              { type: 'string', name: 'registryLink', label: 'Text odkazu na rejstřík' },
              { type: 'string', name: 'sitemapLink', label: 'Text odkazu na mapu webu' },
              { type: 'string', name: 'rights', label: 'Copyright text' },
            ],
          },
        ],
      },
    ],
  },
});
