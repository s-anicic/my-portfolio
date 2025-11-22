import Navbar from "./components/Navbar"
import TitleHead from "./components/TitleHead"
import SidebarNav from "./components/SidebarNav"
import ContactBar from "./components/ContactBar"
import ProfessionalSummary from "./components/ProfessionalSummary"
import Skills from "./components/Skills"

export default function Home() {
  return (
    <>
    <TitleHead />
      <Navbar />
      <SidebarNav />
      <ContactBar />
      <main className="ml-[15vw] mr-[15vw] pt-6">
        <ProfessionalSummary />
        <Skills />
      </main>
    </>
  );
}
