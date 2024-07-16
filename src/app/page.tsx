import Navbar from "./components/navbar/navbar";
import Home from "./home/page";
import About from "./about/page";

export default function Page() {
  return (
    <main>
      <Navbar />
      <div>
        <Home />
        <About />
      </div>
    </main>
  );
}
