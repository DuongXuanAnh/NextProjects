import Bio from "@/components/bio/Bio";
import ContactForm from "@/components/contactForm/ContactForm";
import Education from "@/components/education/Education";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import WorkExperience from "@/components/workExperience/WorkExperience";

export default function Home() {
  return (
    <div className="relative h-full overflow-y-hidden antialiased">
      <div className="bg-img fixed inset-0 bg-cover bg-fixed bg-center"></div>
      <div className="container relative z-10 mx-auto flex flex-col items-center space-y-8 p-4">
        <Hero />
        <Navbar />
        <Projects />
        <Bio />
        <Skills />
        <WorkExperience />
        <Education />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}
