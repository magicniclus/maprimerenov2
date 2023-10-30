import CTA from "../components/CTA/CTA";
import FAQ from "../components/FAQ/FAQ";
import BlogContainer from "../components/blogs/BlogContainer";
import Feature from "../components/features/Feature";
import Hero from "../components/heros/Hero";
import Basic from "../layout/Basic";

export default function Home() {
  return (
    <Basic
      title="Accompagnement pour l'aide MaPrimeRenov | MaPrimeRenov-info" // 72 caractères
      ogUrl="https://maprimerenov-info.org/" // URL de la page d'accueil
      description="MaPrimeRenov-info vous guide pas à pas dans votre démarche pour obtenir l'aide MaPrimeRenov. Bénéficiez d'un accompagnement personnalisé pour vos projets de rénovation." // 159 caractères
      keywords={[
        "MaPrimeRenov",
        "accompagnement",
        "obtenir aide",
        "guide MaPrimeRenov",
        "soutien projet rénovation",
        "aide rénovation énergétique",
      ]}
      ogImage="/images/logos/favicon.png"
    >
      <Hero />
      <Feature />
      <CTA />
      <FAQ />
      <BlogContainer />
    </Basic>
  );
}
