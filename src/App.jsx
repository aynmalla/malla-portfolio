import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from './components/ui/navbar';
import Hero from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { ProjectDetail } from './pages/ProjectDetail';
import { ProgressiveBlur } from './components/ui/progressive-blur';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none h-32">
        <ProgressiveBlur position="bottom" height="100%" className="w-full h-full" />
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <main className="relative min-h-screen bg-[#faf9f6] dark:bg-slate-950 text-slate-900 dark:text-slate-50 selection:bg-rose-500 selection:text-white pb-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;