import CTASection from "@/components/landing/CTASection";
import Hero from "@/components/landing/Hero";
import Footer from "@/components/landing/layout/Footer";
import ProjectsSection from "@/components/landing/ProjectSection";
import ServicesSection from "@/components/landing/ServicesSection";
import WhyChooseUs from "@/components/landing/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <ProjectsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
