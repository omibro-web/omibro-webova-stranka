import type { Content, Locale } from '@/content/types'
import { sanityFetch } from '@/sanity/lib/live'
import { metadataClient } from '@/sanity/lib/client'
import { PAGE_QUERY } from '@/sanity/lib/queries'

export async function getPageContent(locale: Locale): Promise<Content> {
  const { data } = await sanityFetch({ query: PAGE_QUERY, params: { locale } })

  if (!data) {
    throw new Error(`Sanity document for locale "${locale}" was not found`)
  }

  return data as Content
}

export async function getPageMetadata(locale: Locale): Promise<Content['meta']> {
  const data = await metadataClient.fetch<Content['meta'] | null>(
    `*[_type == "page" && locale == $locale][0].meta`,
    { locale },
  )

  if (!data) {
    throw new Error(`Sanity metadata for locale "${locale}" was not found`)
  }

  return data
}
