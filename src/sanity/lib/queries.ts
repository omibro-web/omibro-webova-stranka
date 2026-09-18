import { defineQuery } from 'next-sanity'

export const PAGE_QUERY = defineQuery(`
  *[_type == "page" && locale == $locale][0]{
    locale,
    htmlLang,
    meta,
    nav,
    langSwitch,
    hero{..., "image": image.asset->url},
    industries,
    about{
      ...,
      tabs[]{..., "image": image.asset->url}
    },
    services{
      ...,
      items[]{..., "image": image.asset->url}
    },
    pretreat{..., "image": image.asset->url},
    capabilities{
      ...,
      "imageMain": imageMain.asset->url,
      "imageInset": imageInset.asset->url
    },
    showcase{..., "image": image.asset->url},
    process,
    consult,
    faq,
    contact,
    footer
  }
`)
