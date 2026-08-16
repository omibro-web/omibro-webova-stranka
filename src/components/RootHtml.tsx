import { fontVars } from '@/app/fonts';
import { organizationSchema } from '@/app/metadata';
import type { Locale } from '@/content/types';
import type { ReactNode } from 'react';

/** Shared <html>/<body> shell so both root layouts stay identical apart from lang. */
export default function RootHtml({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={`${fontVars} antialiased selection:bg-[#FC9301] selection:text-[#0A1020]`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema(locale)) }}
        />
        {children}
      </body>
    </html>
  );
}
