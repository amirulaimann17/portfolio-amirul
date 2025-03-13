import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <main className="px-5 md:px-5 lg:px-10 xl:px-32">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
