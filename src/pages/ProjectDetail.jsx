import { useParams, Link } from "react-router-dom";
import { projectList } from "../data/projectsData";
import { FadeIn } from "../components/ui/fade-in";

export function ProjectDetail() {
  const { id } = useParams();
  const project = projectList.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#faf9f6] dark:bg-slate-950 text-slate-900 dark:text-white px-6">
        <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
        <Link to="/" className="px-6 py-2 rounded-full bg-rose-600 text-white font-semibold">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf9f6] dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-20 px-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* Tombol Kembali */}
        <FadeIn>
          <Link 
            to="/#projects" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-rose-600 dark:text-rose-400 mb-8 hover:underline"
          >
            &larr; Back to Portfolio
          </Link>
        </FadeIn>

        {/* Judul & Kategori */}
        <FadeIn delay={0.1}>
          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 mb-4">
            {project.type}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            {project.title}
          </h1>
        </FadeIn>

        {/* Gambar Utama */}
        <FadeIn delay={0.2} className="mb-10">
          <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg h-72 md:h-[450px]">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>
        </FadeIn>

        {/* Deskripsi & Tech Stack */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FadeIn delay={0.3} className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Overview</h3>
            <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed mb-6">
              {project.fullDescription}
            </p>
          </FadeIn>

          <FadeIn delay={0.4} className="bg-white dark:bg-slate-900/50 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 h-fit">
            <h4 className="text-lg font-bold mb-3">Technologies</h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t, i) => (
                <span key={i} className="text-xs font-medium bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-md text-slate-700 dark:text-slate-300">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="w-full text-center py-2.5 rounded-xl bg-rose-600 text-white font-semibold text-sm hover:bg-rose-700 transition-colors">
                Live Demo
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="w-full text-center py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 font-semibold text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                GitHub Repository
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}