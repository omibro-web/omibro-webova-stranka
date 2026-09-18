import SitePage from '@/components/SitePage';
import { getPageContent } from '@/sanity/lib/content';

export default async function Home() {
  const content = await getPageContent('cs');
  return <SitePage t={content} />;
}
