import Footer from "./sections/footer";
import Header from "./sections/header";
import Hero from "./sections/hero";
import Services from "./sections/services";
import TrustSection from "./sections/trustSection";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <TrustSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
