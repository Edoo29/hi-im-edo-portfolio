import Navbar from "./components/navbar/navbar";
import Home from "./home/page";
import About from "./about/page";
import Skills from "./skills/page";
import Projects from "./projects/page";

export default function Page() {
  return (
    <main>
      <Navbar />
      <div>
        <Home />
        <About />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}
