import Hero from "./pages/Hero";
import Nav from "./components/Nav";
import StatementSection from "./pages/AboutSection";
import BlendeCursor from "./components/RoundCursor";
import ProjectSection from "./pages/ProjectsSection";
import ProjectSection2 from "./pages/ProjectsSection2";
import ContactSection from "./pages/ContactSection";
import ProjectPage from "./pages/ProjectPage";
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";

function Home() {
  return (
    <div className="font-unbounded flex-col w-screen h-screen cursor-none">
      <BlendeCursor />
      <Hero />
      <StatementSection />
      <ProjectSection />
      <ProjectSection2 />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
    </>
  );
}
