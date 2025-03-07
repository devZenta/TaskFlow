import { Navbar } from "@/components/LandingPage/Navbar";
import { Header } from "@/components/LandingPage/Header";
import { Features } from "@/components/LandingPage/Features";
import { Partners } from "@/components/LandingPage/Partners";
import { Pricing } from "@/components/LandingPage/Pricing";
import { Footer } from "@/components/LandingPage/Footer";

export default function HomePage() {
  return (
    <>
    <Navbar />
    <Header />
    <section id="features-section">
    <Features />
    </section>
    <section id="pricing-section">
    <Pricing />
    </section>
    <Partners />
    <Footer />
    </>
  );
}