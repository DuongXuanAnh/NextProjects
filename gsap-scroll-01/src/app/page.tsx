import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navBar/NavBar";
import SectionCard from "@/components/sectionCard/SectionCard";
import SectionOne from "@/components/sectionOne/SectionOne";
import SectionThree from "@/components/sectionThree/SectionThree";
import SectionTwo from "@/components/sectionTwo/SectionTwo";

export default function Home() {
  return (
    <div className="bg-img inset-0 bg-cover bg-fixed bg-center">
      <NavBar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionCard />
      <Footer />
    </div>
  );
}
