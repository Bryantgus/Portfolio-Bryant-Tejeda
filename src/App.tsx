import { useEffect, useState } from "react";
import Inicio from "./components/Tabs/1.Inicio";
import NavBar from "./components/NavBar";
import SobreMi from "./components/Tabs/2.SobreMi";
import Proyectos from "./components/Tabs/3.Proyectos";
// import Experiencia from "./components/Tabs/5.Experiencia";
import Contacto from "./components/Tabs/6.Contacto";
import Habilidades from "./components/Tabs/4.Habilidades";
import LanguageSwitcher from "./components/LanguageSwitcher";

export default function App() {
  const [navSelected, setNavSelect] = useState<string>('inicio');

  const setTitle = (title: string) => {
    setNavSelect(title);
    document.getElementById(title)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setNavSelect(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    document.querySelectorAll("section[id]").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-main-dark selection:bg-green1 selection:text-black">
      <nav className="fixed top-0 left-0 w-full flex justify-center pt-4 md:pt-8 lg:pt-13 z-50 pointer-events-none">
        <NavBar title={navSelected} setTitle={setTitle}/>
      </nav>

      <main className="flex flex-col items-center">
        <section id="inicio" className="w-full min-h-screen"><Inicio /></section>
        <section id="sobreMi" className="w-full min-h-screen"><SobreMi /></section>
        <section id="proyectos" className="w-full min-h-screen"><Proyectos /></section>
        <section id="habilidades" className="w-full min-h-screen"><Habilidades /></section>
        {/* <section id="Experiencia" className="w-full h-screen"><Experiencia /></section> */}
        <section id="contacto" className="w-full min-h-screen"><Contacto /></section>
      </main>

      <LanguageSwitcher />
    </div>
  );
}