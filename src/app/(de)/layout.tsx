import type { Metadata } from 'next';
import '../globals.css';
import RootHtml from '@/components/RootHtml';
import { buildMetadata } from '@/app/metadata';

export async function generateMetadata(): Promise<Metadata> {
  return buildMetadata('de');
}

export default function DeLayout({ children }: { children: React.ReactNode }) {
  return <RootHtml locale="de">{children}</RootHtml>;
}
