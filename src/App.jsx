import Hero from "./pages/Hero";
import Nav from "./components/NAV";
import StatementSection from "./pages/AboutSection";
import BlendeCursor from "./components/RoundCursor";

function App() {
  return (
    <div className="font-unbounded w-screen h-screen cursor-none">
      <BlendeCursor></BlendeCursor>
      <Nav></Nav>
      <Hero></Hero>
      <StatementSection />
    </div>
  );
}

export default App;
