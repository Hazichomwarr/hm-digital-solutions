import CTASection from "@/components/landing/CTASection";
import Hero from "@/components/landing/Hero";
import Footer from "@/components/landing/layout/Footer";
import Navbar from "@/components/landing/layout/Navbar";
import ProjectsSection from "@/components/landing/ProjectSection";
import ServicesSection from "@/components/landing/ServicesSection";
import WhyChooseUs from "@/components/landing/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      <ProjectsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
