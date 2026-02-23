import { resumeData } from '../data/resume';
import { FadeIn } from './Animations';
import { GraduationCap } from 'lucide-react';

export const Education = () => {
  return (
    <section className="py-32 bg-black text-white px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-20 text-center">
            Education
          </h2>
        </FadeIn>

        <div className="space-y-8">
          {resumeData.education.map((edu, index) => (
            <FadeIn key={index} delay={index * 0.15}>
              <div className="bg-zinc-900/30 border border-white/5 rounded-3xl p-8 hover:bg-zinc-900/50 transition-colors">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-1">
                    <GraduationCap size={18} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-semibold">{edu.school}</h3>
                        <p className="text-zinc-400 mt-1">{edu.degree}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-zinc-500 font-mono text-sm">{edu.period}</p>
                        <p className="text-zinc-300 text-sm font-medium mt-1">GPA: {edu.gpa}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ml-14">
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3 font-medium">
                    Key Coursework
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map(course => (
                      <span
                        key={course}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-400"
                      >
                        {course}
                      </span>
                    ))}
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
