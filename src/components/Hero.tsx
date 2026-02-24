import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { resumeData } from '../data/resume';
import { FadeIn } from './Animations';
import { ArrowDown } from 'lucide-react';
import { EmailButton } from './EmailButton';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_50%,_var(--tw-gradient-stops))] from-zinc-800/20 via-black to-black" />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24 md:py-0">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16">

          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <FadeIn>
              <p className="text-zinc-500 text-sm uppercase tracking-widest font-medium mb-4">
                {resumeData.personalInfo.location}
              </p>
              <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                {resumeData.personalInfo.name}
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg md:text-2xl text-zinc-400 font-light tracking-tight mb-10 max-w-xl">
                {resumeData.personalInfo.tagline}
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="flex justify-center md:justify-start gap-4">
                {resumeData.personalInfo.social.map((item) => {
                  if (item.name === 'Email') {
                    return (
                      <EmailButton key={item.name} variant="icon" icon={item.icon} align="left" />
                    );
                  }
                  return (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-md border border-white/5"
                      aria-label={item.name}
                    >
                      <item.icon size={20} />
                    </a>
                  );
                })}
              </div>
            </FadeIn>
          </div>

          {/* Profile Image */}
          <FadeIn delay={0.15} className="shrink-0">
            <div className="relative w-64 md:w-80">
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-zinc-600/40 to-transparent blur-2xl scale-105" />
              <img
                src="/profile.png"
                alt={resumeData.personalInfo.name}
                className="relative w-full h-auto rounded-2xl border border-white/10 shadow-2xl"
              />
            </div>
          </FadeIn>

        </div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500"
      >
        <ArrowDown className="animate-bounce" />
      </motion.div>
    </section>
  );
};
