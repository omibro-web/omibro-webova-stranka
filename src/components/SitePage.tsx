import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PartnersSection from '@/components/PartnersSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import PretreatmentSection from '@/components/PretreatmentSection';
import CapabilitiesSection from '@/components/CapabilitiesSection';
import ShowcaseBand from '@/components/ShowcaseBand';
import ProcessSection from '@/components/ProcessSection';
import ConsultationSection from '@/components/ConsultationSection';
import FAQSection from '@/components/FAQSection';
import ContactFormSection from '@/components/ContactFormSection';
import Footer from '@/components/Footer';
import LoadingScreen from '@/components/LoadingScreen';
import type { Content } from '@/content/types';

/** Single page composition, rendered once per locale. */
export default function SitePage({ t }: { t: Content }) {
  return (
    <>
      <LoadingScreen />
      <Header t={t} />
      <main>
        <HeroSection t={t.hero} />
        <PartnersSection t={t.industries} />
        <AboutSection t={t.about} />
        <ServicesSection t={t.services} />
        <PretreatmentSection t={t.pretreat} />
        <CapabilitiesSection t={t.capabilities} />
        <ShowcaseBand t={t.showcase} />
        <ProcessSection t={t.process} />
        <ConsultationSection t={t.consult} />
        <FAQSection t={t.faq} />
        <ContactFormSection t={t.contact} />
      </main>
      <Footer t={t} />
    </>
  );
}
