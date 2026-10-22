import { Link } from "react-router-dom";
import { SpotlightCard } from "./ui/SpotlightCard";
import { AnimatedSection, FadeItem } from "./ui/AnimatedSection";
import { projectList } from "../data/projectsData";

export function Projects() {
  return (
    <AnimatedSection id="projects" className="py-20 px-6 bg-[#faf9f6] dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        <FadeItem className="mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3">
            What I've Built
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg">
            A collection of web and mobile applications I've engineered during my journey.
          </p>
        </FadeItem>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectList.map((project) => (
            <FadeItem key={project.id}>
              <Link to={`/project/${project.id}`} className="block h-full group">
                <SpotlightCard 
                  spotlightColor="rgba(34, 197, 94, 0.15)"
                  className="border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-0 flex flex-col overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 text-rose-600 dark:text-rose-400 shadow-sm backdrop-blur-sm z-10">
                      {project.type}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-rose-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                      {project.tech.map((t, i) => (
                        <span key={i} className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              </Link>
            </FadeItem>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}