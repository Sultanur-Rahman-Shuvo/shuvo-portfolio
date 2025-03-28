import About from "@/components/About";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Web_Projects from "@/components/Web_Projects";
import D_A_Projects from "@/components/D_A_Projects";
import D_M_Projects from "@/components/D_M_Projects";
import Skills from "@/components/Skills";
import WorkHistory from "@/components/WorkHistory";

export default function Home() {
  return (
    <>
      <main className="max-w-screen-xl w-full mx-auto px-4">
        <div className="mt-20">
          <Header />
          <Contacts />
          <About />
          <Skills />
          <WorkHistory />
          <Web_Projects />
          <D_A_Projects />
          <D_M_Projects />
        </div>
      </main>
      <Footer />
    </>
  );
}
