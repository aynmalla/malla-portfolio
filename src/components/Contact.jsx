import { AnimatedSection, FadeItem } from "./ui/AnimatedSection";
import { SpotlightCard } from "./ui/SpotlightCard";

export function Contact() {
  return (
    <AnimatedSection id="contact" className="py-20 px-6 bg-[#faf9f6] dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <FadeItem>
          <SpotlightCard 
            spotlightColor="rgba(34, 197, 94, 0.15)"
            className="border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-10 md:p-14 shadow-sm"
          >
            <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
              Let's Build Something Together
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-xl mx-auto mb-8">
              I'm currently looking for new opportunities as a frontend or mobile developer. Whether you have a question or just want to say hi, my inbox is always open!
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="mailto:emailkamu@example.com" 
                className="px-6 py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-semibold text-sm transition-colors shadow-md shadow-rose-600/20"
              >
                Say Hello via Email
              </a>
              <a 
                href="https://linkedin.com/in/username" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 font-semibold text-sm transition-colors"
              >
                LinkedIn Profile
              </a>
              <a 
                href="https://github.com/username" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 font-semibold text-sm transition-colors"
              >
                GitHub Portfolio
              </a>
            </div>
          </SpotlightCard>
        </FadeItem>
      </div>
    </AnimatedSection>
  );
}