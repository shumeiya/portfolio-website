import Hero from "./pages/Hero";
import Nav from "./components/NAV";
import StatementSection from "./pages/AboutSection";
import BlendeCursor from "./components/RoundCursor";
import ProjectSection from "./pages/ProjectsSection";
import ProjectSection2 from "./pages/ProjectsSection2";
import ContactSection from "./pages/ContactSection";

function App() {
  return (
    <div className="font-unbounded w-screen h-screen cursor-none">
      <BlendeCursor></BlendeCursor>
      <Nav></Nav>
      <Hero></Hero>
      <StatementSection />
      <ProjectSection />
      <ProjectSection2 />
      <ContactSection />
    </div>
  );
}

export default App;
