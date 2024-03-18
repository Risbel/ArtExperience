import LogoCarousel from "./components/carousel";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div className="h-screen overflow-y-scroll overflow-hidden">
      <Hero />
      <LogoCarousel />
    </div>
  );
}
