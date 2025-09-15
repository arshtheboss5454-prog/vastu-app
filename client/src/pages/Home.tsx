import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ProcessSection from '@/components/ProcessSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;