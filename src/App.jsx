import Hero from "./pages/Hero";
import Nav from "./components/NAV";
import StatementSection from "./pages/AboutSection";
import BlendeCursor from "./components/RoundCursor";
import ProjectSection from "./pages/ProjectsSection";

function App() {
  return (
    <div className="font-unbounded w-screen h-screen cursor-none">
      <BlendeCursor></BlendeCursor>
      <Nav></Nav>
      <Hero></Hero>
      <StatementSection />
      <ProjectSection />
    </div>
  );
}

export default App;
