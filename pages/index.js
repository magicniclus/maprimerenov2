import CTA from "../components/CTA/CTA";
import FAQ from "../components/FAQ/FAQ";
import Feature from "../components/features/Feature";
import Hero from "../components/heros/Hero";
import Basic from "../layout/Basic";

export default function Home() {
  return (
    <Basic>
      <Hero />
      <Feature />
      <CTA />
      <FAQ />
    </Basic>
  );
}
