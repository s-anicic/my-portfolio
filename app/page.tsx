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
  <ProfessionalSummary />
  <Skills />
  </>
  );
}