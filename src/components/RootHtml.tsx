import { fontVars } from '@/app/fonts';
import { organizationSchema } from '@/app/metadata';
import type { Locale } from '@/content/types';
import type { ReactNode } from 'react';
import { draftMode } from 'next/headers';
import { VisualEditing } from 'next-sanity/visual-editing';
import { SanityLive } from '@/sanity/lib/live';
import { getPageMetadata } from '@/sanity/lib/content';
import DisableDraftMode from '@/components/DisableDraftMode';

/** Shared <html>/<body> shell so both root layouts stay identical apart from lang. */
export default async function RootHtml({ locale, children }: { locale: Locale; children: ReactNode }) {
  const [{ isEnabled }, meta] = await Promise.all([draftMode(), getPageMetadata(locale)]);

  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={`${fontVars} antialiased selection:bg-[#FC9301] selection:text-[#0A1020]`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema(meta.description)) }}
        />
        {children}
        <SanityLive />
        {isEnabled && (
          <>
            <VisualEditing />
            <DisableDraftMode />
          </>
        )}
      </body>
    </html>
  );
}
