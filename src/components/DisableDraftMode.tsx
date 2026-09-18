'use client'

import { useIsPresentationTool } from 'next-sanity/hooks'

export default function DisableDraftMode() {
  const isPresentationTool = useIsPresentationTool()

  if (isPresentationTool) return null

  return (
    <a
      href="/api/draft-mode/disable"
      className="fixed bottom-4 right-4 z-[10000] rounded-full bg-[#0A1020] px-4 py-2 text-sm font-semibold text-white shadow-lg"
    >
      Ukončit náhled Sanity
    </a>
  )
}
