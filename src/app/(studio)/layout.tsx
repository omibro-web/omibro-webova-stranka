import type { ReactNode } from 'react'

export default function StudioRootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  )
}
