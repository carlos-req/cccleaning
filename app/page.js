import AboutSnip from "@components/Home/AboutSnip";
import Hero from "@components/Home/Hero";
import Services from "@components/Home/Services";

export default function Home() {
  return (
    <main className="w-full h-full p-0 m-0">
      <div className="mx-auto gradient"></div>
      <Hero />
      <AboutSnip />
      <Services />
    </main>
  );
}
