import Navbar from "./components/Navbar"
import SidebarNav from "./components/SidebarNav"
import ContactBar from "./components/ContactBar"
import ProfessionalSummary from "./components/ProfessionalSummary"
import Skills from "./components/Skills"

export default function Home() {
  return (
    <>
      <Navbar />
      <SidebarNav />
      <ContactBar />
<main className="pt-6 
                 max-w-[1500px] 
                 px-4 
                 mx-auto
                 md:px-0
                 md:ml-[calc(15vw+1rem)] 
                 md:mr-[calc(15vw+1rem)]">
  <ProfessionalSummary />
  <Skills />
</main>

    </>
  );
}
