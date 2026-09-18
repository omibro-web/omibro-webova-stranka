'use client'

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { presentationTool } from 'sanity/presentation'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './src/sanity/schemaTypes'
import { resolve } from './src/sanity/presentation/resolve'

// These identifiers are public and must also be available in the standalone
// Studio build, where Next.js environment variables are not injected.
const projectId = 'biwnavan'
const dataset = 'production'

const previewOrigin =
  typeof window !== 'undefined' && !window.location.hostname.endsWith('sanity.studio')
    ? window.location.origin
    : 'https://omibro.cz'

export default defineConfig({
  name: 'default',
  title: 'Omibro – správa webu',
  basePath: '/studio',
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Obsah webu')
          .items([
            S.listItem()
              .id('page-cs')
              .title('Česká stránka')
              .child(S.document().schemaType('page').documentId('page-cs')),
            S.listItem()
              .id('page-de')
              .title('Německá stránka')
              .child(S.document().schemaType('page').documentId('page-de')),
          ]),
    }),
    presentationTool({
      resolve,
      previewUrl: {
        origin: previewOrigin,
        previewMode: { enable: '/api/draft-mode/enable' },
      },
    }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
  document: {
    newDocumentOptions: (previous) =>
      previous.filter((item) => item.templateId !== 'page'),
    actions: (previous, context) =>
      context.schemaType === 'page'
        ? previous.filter(({ action }) =>
            action ? ['publish', 'discardChanges', 'restore'].includes(action) : false,
          )
        : previous,
  },
})
