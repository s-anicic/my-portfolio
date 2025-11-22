import Navbar from "./components/Navbar"
import SidebarNav from "./components/SidebarNav"
import ContactBar from "./components/ContactBar"
import ProfessionalSummary from "./components/ProfessionalSummary"

export default function Home() {
  return (
    <>
  <Navbar />
  <SidebarNav />
  <ContactBar />
  <ProfessionalSummary />
  </>
  );
}