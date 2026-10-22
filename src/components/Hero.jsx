import myProfilePic from '../assets/profile-pic.jpeg';
import { AnimatedSection, FadeItem } from './ui/AnimatedSection';

export default function Hero() {
  return (
    <AnimatedSection id="home" className="min-h-screen flex flex-col justify-center px-6 bg-[#faf9f6] text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">
      <div className="max-w-6xl w-full mx-auto">
        <div className="max-w-4xl">
          
          <FadeItem>
            {/* Avatar & Sapaan */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={myProfilePic}
                alt="Profile Malla"
                className="w-24 h-24 rounded-full object-cover border-2 border-slate-300 dark:border-slate-700 shadow-sm"
              />
              <span className="text-xl font-medium italic text-slate-500 dark:text-slate-400 tracking-wide font-bricolage">
                ( hello, i'm )
              </span>
            </div>
          </FadeItem>

          <FadeItem>
            <h1 className="text-6xl md:text-8xl tracking-tight mb-6 text-slate-900 dark:text-white">
              <span className="font-playfair italic font-bold">Ayu </span>
              <span className="font-bricolage font-bold text-rose-700 dark:text-rose-400">Nurmala</span>
            </h1>
          </FadeItem>

          <FadeItem>
            <p className="text-2xl md:text-3xl leading-relaxed font-medium text-slate-700 dark:text-slate-300 mb-10 max-w-3xl font-bricolage">
              a software engineer crafting web and mobile apps. I love building things from scratch, solving real problems, and making sure the user experience feels just right.
            </p>
          </FadeItem>

        </div>
      </div>
    </AnimatedSection>
  );
}