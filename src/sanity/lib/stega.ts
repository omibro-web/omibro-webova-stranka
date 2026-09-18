import { stegaClean } from 'next-sanity'

/** Remove Visual Editing markers before a CMS value is used in an HTML attribute or comparison. */
export function cleanAttribute(value: string): string {
  return stegaClean(value)
}
