import { createReadStream, existsSync, readFileSync } from 'node:fs'
import { basename, resolve } from 'node:path'
import { getCliClient } from 'sanity/cli'

const client = getCliClient({ apiVersion: '2026-09-01' })
const assetCache = new Map()

function readPage(locale) {
  return JSON.parse(readFileSync(resolve(`content/page/${locale}.json`), 'utf8'))
}

function isLocalImage(value) {
  return typeof value === 'string' && value.startsWith('/assets/')
}

async function uploadImage(publicPath) {
  if (assetCache.has(publicPath)) return assetCache.get(publicPath)

  const normalizedPath = publicPath.replace(/^\/assets\/uploads(?=\/assets\/)/, '')
  const filePath = resolve('public', normalizedPath.slice(1))
  if (!existsSync(filePath)) throw new Error(`Missing local image: ${filePath}`)

  process.stdout.write(`Uploading ${publicPath} ... `)
  const asset = await client.assets.upload('image', createReadStream(filePath), {
    filename: basename(filePath),
  })
  console.log(asset._id)

  const image = {
    _type: 'image',
    asset: { _type: 'reference', _ref: asset._id },
  }
  assetCache.set(publicPath, image)
  return image
}

async function convert(value) {
  if (isLocalImage(value)) return uploadImage(value)

  if (Array.isArray(value)) {
    const converted = []
    for (let index = 0; index < value.length; index += 1) {
      const item = await convert(value[index])
      converted.push(
        item && typeof item === 'object' && !Array.isArray(item) && item._type !== 'image'
          ? { _key: `item-${index + 1}`, ...item }
          : item,
      )
    }
    return converted
  }

  if (value && typeof value === 'object') {
    const converted = {}
    for (const [key, child] of Object.entries(value)) {
      converted[key] = await convert(child)
    }
    return converted
  }

  return value
}

for (const locale of ['cs', 'de']) {
  const content = await convert(readPage(locale))
  await client.createOrReplace({
    _id: `page-${locale}`,
    _type: 'page',
    ...content,
  })
  console.log(`Published source document page-${locale}`)
}

console.log('Sanity migration complete.')
