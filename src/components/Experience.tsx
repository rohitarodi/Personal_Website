import { resumeData } from '../data/resume';
import { FadeIn } from './Animations';

export const Experience = () => {
  return (
    <section className="py-32 bg-black text-white px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-20 text-center">
            Experience
          </h2>
        </FadeIn>

        <div className="space-y-16">
          {resumeData.experience.map((job, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="group relative pl-8 md:pl-0">
                {/* Timeline Line (Desktop) */}
                <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-zinc-800 -translate-x-1/2 group-last:bottom-auto group-last:h-full" />
                
                <div className={`md:flex items-center justify-between gap-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Content */}
                  <div className="md:w-1/2 mb-8 md:mb-0">
                    <div className="bg-zinc-900/30 border border-white/5 p-8 rounded-3xl hover:bg-zinc-900/50 transition-colors">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden shrink-0">
                          {/* Fallback for logo if image fails or is generic */}
                          <span className="text-black font-bold text-xs">{job.company[0]}</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">{job.company}</h3>
                          <p className="text-zinc-400">{job.role}</p>
                        </div>
                      </div>
                      <p className="text-zinc-400 leading-relaxed text-sm">
                        {job.description}
                      </p>
                    </div>
                  </div>

                  {/* Date Marker */}
                  <div className="md:w-1/2 flex md:justify-center relative">
                    <div className="hidden md:flex absolute left-0 right-0 top-1/2 -translate-y-1/2 items-center justify-center z-10">
                      <div className="w-3 h-3 rounded-full bg-white ring-4 ring-black" />
                    </div>
                    <div className={`text-zinc-500 font-mono text-sm ${index % 2 === 0 ? 'md:text-left md:mr-auto' : 'md:text-right md:ml-auto'}`}>
                      {job.period}
                    </div>
                  </div>

                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
