import { resumeData } from '../data/resume';
import { FadeIn, ScaleIn } from './Animations';

export const BentoGrid = () => {
  return (
    <section className="py-32 bg-zinc-950 text-white px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-16 text-center">
            About Me
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[300px]">
          {/* Large Bio Card */}
          <ScaleIn className="md:col-span-2 bg-zinc-900/50 border border-white/5 rounded-3xl p-8 flex flex-col justify-center backdrop-blur-sm hover:bg-zinc-900/80 transition-colors min-h-[200px]">
            <h3 className="text-2xl font-medium mb-4 text-zinc-200">Who I Am</h3>
            <p className="text-base md:text-lg text-zinc-400 leading-relaxed">
              {resumeData.about.summary}
            </p>
          </ScaleIn>

          {/* Stats Card — 2×2 grid */}
          <ScaleIn delay={0.1} className="bg-zinc-900/50 border border-white/5 rounded-3xl p-6 backdrop-blur-sm hover:bg-zinc-900/80 transition-colors min-h-[160px]">
            <div className="grid grid-cols-2 gap-4 h-full content-center">
              {resumeData.about.stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider font-medium leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScaleIn>

          {/* Skills Cards */}
          {resumeData.skills.map((skill, i) => (
            <ScaleIn key={skill.name} delay={0.2 + (i * 0.05)} className="bg-zinc-900/50 border border-white/5 rounded-3xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-zinc-800 transition-colors group cursor-default min-h-[120px] md:min-h-0">
              <div className="p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors text-white">
                <skill.icon size={28} strokeWidth={1.5} />
              </div>
              <div className="text-center">
                <div className="font-medium text-base">{skill.name}</div>
                <div className="text-xs text-zinc-500 leading-snug mt-0.5">{skill.level}</div>
              </div>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  );
};
