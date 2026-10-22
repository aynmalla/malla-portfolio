import { AnimatedSection, FadeItem } from "./ui/AnimatedSection";
import { SpotlightCard } from "./ui/SpotlightCard";

export function Experience() {
  const experiences = [
    {
      role: "Frontend Web Developer Intern",
      company: "Tech Company / Startup",
      period: "2025 - Present",
      description: "Contributed to building responsive web interfaces using React, Vue.js, and Tailwind CSS. Collaborated with UI/UX designers to translate wireframes into clean, interactive components.",
      tech: ["React", "Vue.js", "Tailwind CSS", "Git"],
      type: "Internship"
    },
    {
      role: "Mobile App Developer",
      company: "Independent / Academic Project",
      period: "2024 - 2025",
      description: "Handled and developed mobile applications using Kotlin and Flutter. Focused on native device integration, cross-platform compatibility, and smooth user navigation.",
      tech: ["Kotlin", "Flutter", "Android Studio", "Dart"],
      type: "Project"
    }
  ];

  return (
    <AnimatedSection id="experience" className="py-20 px-6 bg-[#faf9f6] dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        <FadeItem className="mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3">
            Experience & Journey
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg">
            My hands-on background in frontend development and mobile application building.
          </p>
        </FadeItem>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((item, index) => (
            <FadeItem key={index}>
              <SpotlightCard 
                spotlightColor="rgba(34, 197, 94, 0.15)"
                className="border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-8 flex flex-col justify-between shadow-sm h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400">
                      {item.type}
                    </span>
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {item.role}
                  </h3>
                  <h4 className="text-sm font-medium text-rose-600 dark:text-rose-400 mb-4">
                    {item.company}
                  </h4>

                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                  {item.tech.map((t, i) => (
                    <span key={i} className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </FadeItem>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}