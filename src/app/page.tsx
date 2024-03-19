import LogoCarousel from "./components/carousel";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll overflow-hidden">
      <Hero />
      <LogoCarousel />
      <Footer />
    </div>
  );
}
