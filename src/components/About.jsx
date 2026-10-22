import { AnimatedSection, FadeItem } from "./ui/AnimatedSection";
import { SpotlightCard } from "./ui/SpotlightCard";
import { DraggablePhotoStack } from "./ui/DraggablePhotoStack"; // Sesuaikan path jika berbeda

export function About() {
  return (
    <AnimatedSection id="about" className="py-20 px-6 bg-[#faf9f6] dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Judul & Subjudul */}
        <FadeItem className="mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3">
            About Me
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg">
            A quick glimpse into who I am and what I love building.
          </p>
        </FadeItem>

        {/* Layout 2 Kolom */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Sisi Kiri: Kinetic Photo Stack (Mengambil 5 kolom) */}
          <FadeItem className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm">
              <DraggablePhotoStack />
            </div>
          </FadeItem>

          {/* Sisi Kanan: Teks Perkenalan / Background (Mengambil 7 kolom) */}
          <FadeItem className="lg:col-span-7">
            <SpotlightCard 
              spotlightColor="rgba(34, 197, 94, 0.15)"
              className="border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-8 shadow-sm h-full flex flex-col justify-center"
            >
              <div>
                <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 mb-4">
                  Background
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                  Turning design concepts into responsive, clean code.
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-4">
                  I am an IT graduate with hands-on experience as a frontend web developer intern, along with practical background in handling and building mobile applications. I love crafting interfaces that feel smooth, intuitive, and visually pleasing.
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                  Currently, I'm actively looking for internship or junior opportunities where I can grow, collaborate with teams, and contribute to impactful digital products.
                </p>
              </div>
            </SpotlightCard>
          </FadeItem>

        </div>

      </div>
    </AnimatedSection>
  );
}