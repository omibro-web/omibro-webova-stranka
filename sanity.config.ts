'use client'

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { presentationTool } from 'sanity/presentation'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './src/sanity/schemaTypes'
import { resolve } from './src/sanity/presentation/resolve'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

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
