import { resumeData } from '../data/resume';
import { FadeIn } from './Animations';
import { ArrowUpRight } from 'lucide-react';

export const Projects = () => {
  return (
    <section className="py-32 bg-zinc-950 text-white px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-20 text-center">
            Selected Work
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resumeData.projects.map((project, index) => (
            <FadeIn key={index} delay={index * 0.1} className={project.featured ? "md:col-span-2" : ""}>
              <a 
                href={project.link}
                className="group block relative overflow-hidden rounded-3xl bg-zinc-900 border border-white/5 aspect-[4/3] md:aspect-[16/9]"
              >
                <div className="absolute inset-0">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="text-3xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-zinc-300 max-w-md text-lg mb-6">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-medium border border-white/10">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowUpRight size={24} />
                    </div>
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
