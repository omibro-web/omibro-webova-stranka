import SitePage from '@/components/SitePage';
import { getPageContent } from '@/sanity/lib/content';

export default async function HomeDe() {
  const content = await getPageContent('de');
  return <SitePage t={content} />;
}
