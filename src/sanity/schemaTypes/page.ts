import { defineArrayMember, defineField, defineType } from 'sanity'

const requiredString = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: 'string',
    validation: (rule) => rule.required(),
  })

const requiredText = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: 'text',
    rows: 4,
    validation: (rule) => rule.required(),
  })

const requiredImage = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: 'image',
    options: { hotspot: true },
    validation: (rule) => rule.required(),
  })

const stringList = (name: string, title: string, length: number) =>
  defineField({
    name,
    title,
    type: 'array',
    options: { sortable: false },
    of: [defineArrayMember({ type: 'string' })],
    validation: (rule) =>
      rule.required().length(length).error(`Seznam musí mít přesně ${length} položek.`),
  })

const titledItemFields = [
  requiredString('title', 'Nadpis'),
  requiredText('desc', 'Text'),
]

const titledList = (name: string, title: string, length: number) =>
  defineField({
    name,
    title,
    type: 'array',
    options: { sortable: false },
    of: [
      defineArrayMember({
        type: 'object',
        fields: titledItemFields,
        preview: { select: { title: 'title', subtitle: 'desc' } },
      }),
    ],
    validation: (rule) =>
      rule.required().length(length).error(`Sekce musí mít přesně ${length} položek.`),
  })

const titleLines = (length: number) => stringList('titleLines', 'Nadpis – jednotlivé řádky', length)

const section = (name: string, title: string, fields: ReturnType<typeof defineField>[]) =>
  defineField({ name, title, type: 'object', fields })

export const pageType = defineType({
  name: 'page',
  title: 'Stránka',
  type: 'document',
  fields: [
    defineField({
      name: 'locale',
      title: 'Jazyk',
      type: 'string',
      readOnly: true,
      hidden: true,
      validation: (rule) =>
        rule.required().custom((value) =>
          value === 'cs' || value === 'de' ? true : 'Povolený jazyk je pouze cs nebo de.',
        ),
    }),
    defineField({
      name: 'htmlLang',
      title: 'HTML jazyk',
      type: 'string',
      readOnly: true,
      hidden: true,
      validation: (rule) => rule.required(),
    }),

    section('meta', 'SEO metadata', [
      requiredString('title', 'Titulek stránky v prohlížeči'),
      requiredText('description', 'Meta popis'),
      defineField({
        name: 'keywords',
        title: 'Klíčová slova',
        type: 'array',
        of: [defineArrayMember({ type: 'string' })],
      }),
    ]),

    section('nav', 'Horní menu', [
      defineField({
        name: 'items',
        title: 'Položky menu',
        type: 'array',
        options: { sortable: false },
        of: [
          defineArrayMember({
            type: 'object',
            fields: [
              requiredString('label', 'Text odkazu'),
              requiredString('href', 'Odkaz nebo #kotva'),
            ],
            preview: { select: { title: 'label', subtitle: 'href' } },
          }),
        ],
        validation: (rule) => rule.required().length(7).error('Menu musí mít přesně 7 položek.'),
      }),
      requiredString('cta', 'Tlačítko Poptávka'),
      requiredString('open', 'Popisek Otevřít menu'),
      requiredString('close', 'Popisek Zavřít menu'),
      requiredString('home', 'Popisek Odkaz domů'),
    ]),

    section('langSwitch', 'Přepínač jazyka', [
      requiredString('label', 'Zkratka druhého jazyka'),
      requiredString('href', 'Odkaz na druhou jazykovou verzi'),
      requiredString('aria', 'Přístupný popisek'),
    ]),

    section('hero', 'Hero – úvodní sekce', [
      requiredString('eyebrow', 'Malý text nad nadpisem'),
      titleLines(3),
      requiredText('lead', 'Úvodní text'),
      requiredString('ctaPrimary', 'Hlavní tlačítko'),
      requiredString('ctaSecondary', 'Vedlejší tlačítko'),
      requiredString('corner', 'Text vpravo dole'),
      requiredImage('image', 'Fotka na pozadí'),
      requiredString('imgAlt', 'Popis fotky pro přístupnost'),
    ]),

    section('industries', 'Odvětví – lišta pod hero', [
      requiredString('eyebrow', 'Nadpis lišty'),
      stringList('items', 'Odvětví', 5),
    ]),

    section('about', 'O společnosti', [
      requiredString('eyebrow', 'Malý text nad nadpisem'),
      titleLines(2),
      requiredText('lead', 'Úvodní text'),
      titledList('points', 'Body pod textem', 4),
      defineField({
        name: 'tabs',
        title: 'Fotky s přepínačem',
        type: 'array',
        options: { sortable: false },
        of: [
          defineArrayMember({
            type: 'object',
            fields: [
              requiredString('tab', 'Název záložky'),
              requiredString('caption', 'Popisek pod fotkou'),
              requiredImage('image', 'Fotka'),
            ],
            preview: { select: { title: 'tab', subtitle: 'caption', media: 'image' } },
          }),
        ],
        validation: (rule) => rule.required().length(3).error('Musí zůstat přesně 3 záložky.'),
      }),
      requiredString('badge', 'Štítek na fotce'),
    ]),

    section('services', 'Oblast působení – karty', [
      requiredString('eyebrow', 'Malý text nad nadpisem'),
      titleLines(2),
      requiredText('note', 'Poznámka vpravo'),
      defineField({
        name: 'items',
        title: 'Karty služeb',
        type: 'array',
        options: { sortable: false },
        of: [
          defineArrayMember({
            type: 'object',
            fields: [...titledItemFields, requiredImage('image', 'Fotka karty')],
            preview: { select: { title: 'title', subtitle: 'desc', media: 'image' } },
          }),
        ],
        validation: (rule) => rule.required().length(4).error('Musí zůstat přesně 4 karty.'),
      }),
    ]),

    section('pretreat', 'Chemická předúprava', [
      requiredString('eyebrow', 'Malý text nad nadpisem'),
      titleLines(2),
      requiredText('lead', 'Úvodní text'),
      requiredImage('image', 'Fotka'),
      requiredString('imgAlt', 'Popis fotky pro přístupnost'),
      titledList('steps', 'Kroky předúpravy', 5),
      requiredString('tableHeading', 'Nadpis tabulky'),
      section('columns', 'Hlavičky sloupců tabulky', [
        requiredString('stage', 'Stupeň'),
        requiredString('agent', 'Typ lázně'),
        requiredString('monitored', 'Sledované parametry'),
      ]),
      defineField({
        name: 'rows',
        title: 'Řádky tabulky',
        type: 'array',
        options: { sortable: false },
        of: [
          defineArrayMember({
            type: 'object',
            fields: [
              requiredString('stage', 'Stupeň'),
              requiredString('agent', 'Typ lázně'),
              requiredString('monitored', 'Sledované parametry'),
            ],
            preview: { select: { title: 'stage', subtitle: 'agent' } },
          }),
        ],
        validation: (rule) => rule.required().length(4).error('Tabulka musí mít přesně 4 řádky.'),
      }),
      requiredText('note', 'Poznámka v tmavém boxu'),
    ]),

    section('capabilities', 'Technologie a materiály', [
      requiredString('eyebrow', 'Malý text nad nadpisem'),
      titleLines(2),
      requiredText('body', 'Text'),
      requiredImage('imageMain', 'Velká fotka'),
      requiredString('imgAltMain', 'Popis velké fotky'),
      requiredImage('imageInset', 'Malá fotka'),
      requiredString('imgAltInset', 'Popis malé fotky'),
      requiredString('materialsHeading', 'Nadpis seznamu materiálů'),
      stringList('materials', 'Materiály', 4),
      defineField({
        name: 'stats',
        title: 'Čísla ve spodní liště',
        type: 'array',
        options: { sortable: false },
        of: [
          defineArrayMember({
            type: 'object',
            fields: [requiredString('value', 'Hodnota'), requiredString('label', 'Popisek')],
            preview: { select: { title: 'value', subtitle: 'label' } },
          }),
        ],
        validation: (rule) => rule.required().length(4).error('Musí zůstat přesně 4 hodnoty.'),
      }),
    ]),

    section('showcase', 'Provoz – velký pruh s fotkou', [
      requiredString('eyebrow', 'Malý text nad nadpisem'),
      titleLines(2),
      requiredText('body', 'Text'),
      requiredImage('image', 'Fotka na pozadí'),
      requiredString('imgAlt', 'Popis fotky pro přístupnost'),
    ]),

    section('process', 'Průběh zakázky', [
      requiredString('eyebrow', 'Malý text nad nadpisem'),
      requiredString('title', 'Nadpis'),
      titledList('steps', 'Kroky zakázky', 4),
    ]),

    section('consult', 'Konzultace', [
      requiredString('eyebrow', 'Malý text nad nadpisem'),
      titleLines(2),
      requiredText('lead', 'Úvodní text'),
      section('diagram', 'Diagram', [
        requiredString('center', 'Text uprostřed'),
        stringList('nodes', 'Uzly okolo', 6),
      ]),
      requiredString('topicsHeading', 'Nadpis – co probereme'),
      titledList('topics', 'Témata konzultace', 9),
      requiredString('formatHeading', 'Nadpis – jak konzultace probíhá'),
      titledList('format', 'Jak konzultace probíhá', 4),
      requiredString('prepareHeading', 'Nadpis – co si připravit'),
      stringList('prepare', 'Co si připravit', 6),
      requiredString('ctaTitle', 'Výzva – nadpis'),
      requiredText('ctaBody', 'Výzva – text'),
      requiredString('cta', 'Výzva – tlačítko'),
      requiredString('ctaNote', 'Výzva – poznámka'),
    ]),

    section('faq', 'Časté otázky', [
      requiredString('eyebrow', 'Malý text nad nadpisem'),
      titleLines(2),
      defineField({
        name: 'items',
        title: 'Otázky a odpovědi',
        type: 'array',
        options: { sortable: false },
        of: [
          defineArrayMember({
            type: 'object',
            fields: [requiredString('q', 'Otázka'), requiredText('a', 'Odpověď')],
            preview: { select: { title: 'q', subtitle: 'a' } },
          }),
        ],
        validation: (rule) => rule.required().length(6).error('Musí zůstat přesně 6 otázek.'),
      }),
    ]),

    section('contact', 'Kontakt', [
      requiredString('eyebrow', 'Malý text nad nadpisem'),
      requiredString('title', 'Nadpis'),
      requiredText('lead', 'Úvodní text'),
      requiredString('responseNote', 'Poznámka k době odpovědi'),
      section('labels', 'Popisky firemních údajů', [
        requiredString('seat', 'Sídlo'),
        requiredString('ico', 'IČO'),
        requiredString('dataBox', 'Datová schránka'),
        requiredString('email', 'E-mail'),
        requiredString('phone', 'Telefon'),
        requiredString('director', 'Jednatel'),
        requiredString('fileRef', 'Spisová značka'),
        requiredString('capital', 'Základní kapitál'),
        requiredString('hours', 'Provozní doba'),
      ]),
      requiredString('hours', 'Provozní doba'),
      section('form', 'Kontaktní formulář', [
        requiredString('name', 'Jméno'),
        requiredString('namePlaceholder', 'Jméno – příklad'),
        requiredString('company', 'Firma'),
        requiredString('companyPlaceholder', 'Firma – příklad'),
        requiredString('email', 'E-mail'),
        requiredString('emailPlaceholder', 'E-mail – příklad'),
        requiredString('phone', 'Telefon'),
        requiredString('phonePlaceholder', 'Telefon – příklad'),
        requiredString('message', 'Zpráva'),
        requiredString('messagePlaceholder', 'Zpráva – příklad'),
        requiredString('submit', 'Odesílací tlačítko'),
        requiredText('privacy', 'Text o ochraně údajů'),
        requiredText('success', 'Potvrzení odeslání'),
        requiredString('required', 'Povinné pole'),
      ]),
      requiredString('mapTitle', 'Popis mapy'),
    ]),

    section('footer', 'Patička', [
      requiredString('ctaTitle', 'Výzva v patičce'),
      requiredString('ctaFormLabel', 'Text odkazu na formulář'),
      requiredText('blurb', 'Krátký popis firmy'),
      defineField({
        name: 'columns',
        title: 'Sloupce odkazů',
        type: 'array',
        options: { sortable: false },
        of: [
          defineArrayMember({
            type: 'object',
            fields: [
              requiredString('heading', 'Nadpis sloupce'),
              defineField({
                name: 'links',
                title: 'Odkazy',
                type: 'array',
                options: { sortable: false },
                of: [
                  defineArrayMember({
                    type: 'object',
                    fields: [
                      requiredString('label', 'Text odkazu'),
                      requiredString('href', 'Odkaz nebo #kotva'),
                    ],
                    preview: { select: { title: 'label', subtitle: 'href' } },
                  }),
                ],
                validation: (rule) => rule.required().min(4).max(5),
              }),
            ],
            preview: { select: { title: 'heading' } },
          }),
        ],
        validation: (rule) => rule.required().length(2).error('Patička musí mít přesně 2 sloupce.'),
      }),
      requiredString('legalHeading', 'Nadpis firemních údajů'),
      requiredString('registryLink', 'Text odkazu do rejstříku'),
      requiredString('sitemapLink', 'Text odkazu na sitemapu'),
      requiredString('rights', 'Copyright'),
    ]),
  ],
  preview: {
    select: { title: 'meta.title', subtitle: 'locale' },
    prepare: ({ title, subtitle }) => ({
      title,
      subtitle: subtitle === 'de' ? 'Německá verze' : 'Česká verze',
    }),
  },
})
