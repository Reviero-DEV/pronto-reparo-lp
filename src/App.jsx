import Footer from "./sections/footer";
import Header from "./sections/header";
import Hero from "./sections/hero";
import Services from "./sections/services";
import TrustSection from "./sections/trustSection";
import TestimonialsSection from "./sections/testimonials";
import FaqSection from "./sections/faqSection";
import { useReveal } from "./hooks/useReveal";

function App() {
  useReveal();
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <TrustSection />
        <TestimonialsSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
