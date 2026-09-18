# Omibro web

Next.js 16 web s obsahem spravovaným v Sanity.

## Lokální vývoj

V `.env.local` musí být:

```dotenv
NEXT_PUBLIC_SANITY_PROJECT_ID="..."
NEXT_PUBLIC_SANITY_DATASET="production"
NEXT_PUBLIC_SANITY_API_VERSION="2026-09-01"
NEXT_PUBLIC_SANITY_STUDIO_URL="/studio"
SANITY_API_READ_TOKEN="..."
```

Pak spusťte:

```bash
npm install
npm run dev
```

- Web: [http://localhost:3000](http://localhost:3000)
- Sanity Studio: [http://localhost:3000/studio](http://localhost:3000/studio)
- Vizuální editace: v Sanity Studiu otevřete nástroj **Prezentace** a klikněte přímo na text nebo obrázek v náhledu.

## Obsahový model

Studio obsahuje jen dva pevné dokumenty: `page-cs` a `page-de`. Horní strukturu stránky nelze přes Studio měnit. Pole s pevným počtem položek mají validační pravidla, která zabrání publikování změněné struktury.

## Kontrola před nasazením

```bash
npm run lint
npx tsc --noEmit
npm run build
```

V hostingu nastavte stejné proměnné prostředí jako v `.env.local`. Produkční URL webu musí být přidaná v Sanity CORS origins s povolenými credentials, aby fungoval náhled a vizuální editace.

## MCP

Oficiální Sanity MCP server je `https://mcp.sanity.io`. V Codexu je možné ověřit připojení příkazem:

```bash
codex mcp list
```
