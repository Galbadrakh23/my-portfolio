// import About from "@/components/about/about";
// import About from "@/components/about";
import Contact from "@/components/contact/contact";
import Experience from "@/components/experience/experience";
import HeroSection from "@/components/hero/herosection";
import Skills from "@/components/skills/skills";
import Works from "@/components/works/works";

export default function Home() {
  return (
    <main>
      <HeroSection />
      {/* <About /> */}
      <Skills />
      <Experience />
      <Works />
      <Contact />
    </main>
  );
}
