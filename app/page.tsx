import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { Journey } from "@/components/Journey";
import { Projects } from "@/components/Projects";
import { BlogPreview } from "@/components/BlogPreview";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Certifications />
      <Journey />
      <Projects />
      <BlogPreview />
      <Contact />
    </>
  );
}
