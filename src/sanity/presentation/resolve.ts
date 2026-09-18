import { defineLocations, type PresentationPluginOptions } from 'sanity/presentation'

export const resolve: PresentationPluginOptions['resolve'] = {
  locations: {
    page: defineLocations({
      select: { title: 'meta.title', locale: 'locale' },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || (doc?.locale === 'de' ? 'Německá stránka' : 'Česká stránka'),
            href: doc?.locale === 'de' ? '/de' : '/',
          },
        ],
      }),
    }),
  },
}
